require('dotenv').config();
const express = require('express');
const { auth } = require('express-openid-connect');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Validate required environment variables
const requiredEnvVars = [
  'SESSION_SECRET',
  'BASE_URL',
  'AUTH0_CLIENT_ID',
  'AUTH0_ISSUER_BASE_URL',
  'AUTH0_CLIENT_SECRET'
];

const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('Error: Missing required environment variables:', missingVars.join(', '));
  process.exit(1);
}

// Print config info for debugging
console.log('Configuration check:');
console.log(`- AUTH0_ISSUER_BASE_URL: ${process.env.AUTH0_ISSUER_BASE_URL}`);
console.log(`- AUTH0_CLIENT_ID: ${process.env.AUTH0_CLIENT_ID.substring(0, 8)}...`);
console.log(`- BASE_URL: ${process.env.BASE_URL}`);
console.log(`- SESSION_SECRET: ${process.env.SESSION_SECRET ? 'Set' : 'Not set'}`);

const manualConfig = {
  issuer: process.env.AUTH0_ISSUER_BASE_URL,
  authorization_endpoint: `${process.env.AUTH0_ISSUER_BASE_URL}/authorize`,
  token_endpoint: `${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
  userinfo_endpoint: `${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`,
  jwks_uri: `${process.env.AUTH0_ISSUER_BASE_URL}/.well-known/jwks.json`,
  end_session_endpoint: `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout`
};

// Auth0 config
const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  authorizationParams: {
    response_type: 'code',
    scope: 'openid profile email'
  },
  routes: {
    callback: '/callback'
  },
  identityClaimFilter: ['aud', 'iat', 'iss', 'nonce', 'exp', 'azp', 'auth_time'],
  idpLogout: true
};

// Middleware
app.use(auth(authConfig));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('error:', err);
  res.status(500).render('error', {
    message: 'Authentication service is temporarily unavailable',
    error: err.message
  });
});

// Home route
app.get('/', (req, res) => {
  res.render('index', {
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user
  });
});

// Profile route
app.get('/profile', (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect('/login');
  }
  res.render('profile', { 
    user: req.oidc.user,
    tokens: {
      id_token: req.oidc.idToken
    }
  });
});

// Login route
app.get('/login', (req, res) => res.oidc.login({ returnTo: '/' }));

// Logout route
app.get('/logout', (req, res) => res.oidc.logout({ returnTo: '/' }));

// Config check route
app.get('/config-check', (req, res) => {
  const envVars = {
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    BASE_URL: process.env.BASE_URL,
    SESSION_SECRET: process.env.SESSION_SECRET ? 'Set' : 'Not set'
  };
  
  res.json({
    status: 'Configuration Check',
    env: envVars,
    discoveryUrl: `${process.env.AUTH0_ISSUER_BASE_URL}/.well-known/openid-configuration`
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at ${process.env.BASE_URL}`);
  console.log(`Login: ${process.env.BASE_URL}/login`);
  console.log(`Logout: ${process.env.BASE_URL}/logout`);
  console.log(`Config Check: ${process.env.BASE_URL}/config-check`);
});
