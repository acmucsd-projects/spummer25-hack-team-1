const express = require('express');

// Import routes
const authRoutes = require('./routes/auth');
// const eventRoutes = require('./routes/events');
// const userRoutes = require('./routes/users');
// const recommendationRoutes = require('./routes/recommendations');
// const flyerRoutes = require('./routes/flyer');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
// app.use('/api/events', eventRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/recommendations', recommendationRoutes);
// app.use('/api/flyer', flyerRoutes);

// database connection
// TODO: add database connection

app.get('/', (req, res) => {
  res.send('Server is working!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'GET request successful', data: { id: 1, name: 'Test Item' } });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});