# Smart Renewable Dashboard

A full-stack web application designed to track, analyze, and predict renewable energy data. This project integrates a frontend Angular application with a backend Node.js/Express API and a MongoDB database. It includes features for monitoring energy sources (solar, wind, grid), an AI prediction module for energy forecasting, and tracking carbon emissions.

## Technology Stack

### Frontend (Client)
- **Framework**: Angular (v20)
- **UI Libraries**: Angular Material, Bootstrap
- **Languages**: TypeScript, HTML, CSS/SCSS

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens) & bcryptjs

## Project Structure

```
smart-renewable-dashboard/
├── client/                 # Angular frontend application
│   ├── src/
│   │   ├── app/            # Main application code (features, routing, etc.)
│   │   ├── assets/         # Static assets like images
│   │   └── index.html      # Main HTML file
│   └── package.json        # Frontend dependencies
├── server/                 # Node.js Express backend
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose database models
│   │   ├── routes/         # Express API routes
│   │   └── server.js       # Main server entry point
│   └── package.json        # Backend dependencies
└── README.md               # Project documentation
```

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)

### 1. Clone the Repository
```bash
git clone https://github.com/Mannan0007/smart-renewable-dashboard.git
cd smart-renewable-dashboard
```

### 2. Backend Setup
1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the `server` directory and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Angular development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`.

## Features
- **User Authentication**: Secure login and registration system using JWT.
- **Energy Analytics**: Interactive charts and data visualizations for various energy sources.
- **AI Prediction**: Forecast future energy availability and grid demand.
- **City Search**: Lookup energy and weather data for specific locations.
- **Carbon Tracking**: Monitor carbon footprint and savings from using renewable sources.

## License
This project is open-source and available under the ISC License.
