# MERN Stack Project

This is a full-stack application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Structure

```
.
├── client/             # React frontend
├── server/             # Node.js/Express backend
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

## Setup Instructions

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file and add your environment variables
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the server directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
``` 