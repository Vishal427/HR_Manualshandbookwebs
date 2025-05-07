# HR Manuals Handbook Web Application

A modern, interactive web application for managing and displaying HR manuals and handbooks. Built with React.js, Node.js, and MongoDB.

## Features

- 📱 Responsive design for all devices
- 🔄 Smooth page transitions and animations
- 👆 Swipeable navigation between sections
- 📚 Comprehensive content management system
- 🎨 Modern and clean user interface
- 🔍 Easy navigation with sidebar menu

## Tech Stack

- Frontend:
  - React.js
  - Material-UI
  - Framer Motion (animations)
  - React Router
  - React Swipeable

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hr-manuals-handbook
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
```

4. Create a `.env` file in the server directory:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
# In a new terminal
cd frontend
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
hr-manuals-handbook/
├── src/                    # Frontend source files
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── theme.js          # Material-UI theme configuration
│   └── App.js            # Main application component
├── server/                # Backend source files
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── server.js         # Express server setup
└── package.json          # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 