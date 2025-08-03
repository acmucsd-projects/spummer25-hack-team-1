# Authentication API

Simple JWT-based authentication with user registration and login.

## Endpoints

### 1. Register User
**POST** `/api/auth/register`

Creates a new user account with hashed password and JWT token.

**Request:**
```json
{
  "username": "johndoe",
  "email": "john@example.com", 
  "password": "password123"
}
```

**Response (201):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "username": "johndoe",
    "email": "john@example.com",
    "profileImage": "https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

**Validation:**
- Username: min 3 characters, unique
- Email: valid format, unique  
- Password: min 6 characters

---

### 2. Login User
**POST** `/api/auth/login`

Authenticates existing user and returns JWT token.

**Request:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011", 
    "username": "johndoe",
    "email": "john@example.com",
    "profileImage": "https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}
```

---

## Error Responses

Both endpoints return error messages in this format:
```json
{
  "message": "Error description"
}
```

**Common Errors:**
- 400: "All fields are required"
- 400: "Invalid credentials" (login)
- 400: "Email already exists" (register)
- 400: "Username already exists" (register)
- 500: "Internal server error"

---

## Usage

1. **Register** a new user to get a JWT token
2. **Login** with existing credentials to get a JWT token  
3. Use the token in Authorization header: `Bearer <token>`
4. Token expires in 15 days 