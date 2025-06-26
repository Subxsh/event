# Event Management System

A comprehensive full-stack Event Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, manage, and discover events with full authentication features.

## 🚀 Features

### Frontend (React)
- **Authentication**: Complete signup/login system with JWT tokens
- **Event Management**: Create, view, update, and delete events
- **User Dashboard**: Manage your created events
- **Search & Filter**: Find events by title, description, or location
- **Responsive Design**: Beautiful, modern UI with Tailwind CSS
- **Form Validation**: Client-side validation with Formik and Yup
- **Toast Notifications**: Real-time feedback for user actions

### Backend (Node.js + Express)
- **RESTful API**: Clean API endpoints for all operations
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Server-side validation with express-validator
- **Security**: CORS enabled, environment variables, secure headers
- **Error Handling**: Comprehensive error handling and logging

### Security Features
- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Input Validation**: Both client and server-side validation
- **Protected Routes**: Middleware to protect sensitive endpoints
- **Environment Variables**: Secure configuration management

## 📁 Project Structure

```
event-management-system/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React context providers
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── server/                # Node.js backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── package.json
│   └── server.js
├── package.json          # Root package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### 1. Clone the Repository
```bash
git clone <repository-url>
cd event-management-system
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
npm run install-client

# Install server dependencies
npm run install-server
```

### 3. Environment Configuration

Create a `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/eventmanagement
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
NODE_ENV=development
```

**Important**: Replace `your_jwt_secret_key_here_make_it_long_and_secure` with a strong, random secret key.

### 4. MongoDB Setup

#### Option A: Local MongoDB
1. Install MongoDB on your local machine
2. Start MongoDB service
3. The app will connect to `mongodb://localhost:27017/eventmanagement`

#### Option B: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in the `.env` file

### 5. Start the Application

#### Development Mode (Recommended)
```bash
# Start both client and server concurrently
npm run dev
```

#### Individual Services
```bash
# Start only the backend server
npm run server

# Start only the frontend client
npm run client
```

## 🌐 Application URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api

## 📱 Usage

### User Authentication
1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Access your account with email and password
3. **Logout**: Securely log out from your session

### Event Management
1. **Browse Events**: View all available events on the Events page
2. **Create Events**: Use the "Create Event" button (requires login)
3. **View Details**: Click on any event to see full details
4. **Edit/Delete**: Manage your own events (only event creators can edit/delete)
5. **Search**: Use the search bar to find specific events

### Navigation
- **Home**: Landing page with features overview
- **Events**: Browse all events
- **Contact**: Contact form and information
- **Create Event**: Form to create new events (protected)
- **User Menu**: Access to user profile and logout

## 🔧 API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Event Routes
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create event (protected)
- `PUT /api/events/:id` - Update event (protected)
- `DELETE /api/events/:id` - Delete event (protected)
- `GET /api/events/user/my-events` - Get user's events (protected)

## 🎨 UI Components

### Design System
- **Colors**: Primary blue theme with semantic colors
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: 8px grid system
- **Components**: Reusable button, input, and card components
- **Icons**: Lucide React icons for consistent iconography

### Responsive Design
- **Mobile**: Optimized for mobile devices
- **Tablet**: Responsive layout for tablets
- **Desktop**: Full-featured desktop experience

## 🔐 Security Best Practices

1. **Password Security**: Passwords are hashed with bcrypt
2. **JWT Tokens**: Secure token generation with expiration
3. **Input Validation**: Both client and server-side validation
4. **CORS**: Properly configured for cross-origin requests
5. **Environment Variables**: Sensitive data stored securely
6. **Error Handling**: No sensitive information exposed in errors

## 🚀 Deployment

### Frontend Deployment (Netlify/Vercel)
```bash
# Build the client
cd client
npm run build

# Deploy the dist folder
```

### Backend Deployment (Heroku/DigitalOcean)
```bash
# Set environment variables
# Deploy the server folder
```

### Environment Variables for Production
```env
PORT=5000
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production
```

## 🛠️ Development

### Code Style
- ES6+ JavaScript
- Functional components with hooks
- Async/await for promises
- Consistent error handling

### Testing
```bash
# Run client tests
cd client && npm test

# Run server tests
cd server && npm test
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in `.env`
   - Verify network connectivity

2. **Port Already in Use**
   - Change port in `.env` file
   - Kill existing processes using the port

3. **JWT Token Issues**
   - Ensure JWT_SECRET is set in `.env`
   - Check token expiration
   - Clear browser local storage

4. **Build Errors**
   - Delete `node_modules` and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies are installed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Happy Event Managing! 🎉**