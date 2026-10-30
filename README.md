# CoTaskio — Full-Stack SaaS Project Management Platform

CoTaskio is a full-stack project management platform built with HTML, CSS, JavaScript, TypeScript, Node.js, Express.js, and MongoDB. It provides project and task management through a responsive web interface and a backend API.

## Features

### Project Management
- Create, view, update, and delete projects
- Track project status
- Store project data in MongoDB

### Task Management
- Create, view, update, and delete tasks
- Organize tasks by project
- Manage task priorities, statuses, and due dates

### Dashboard and User Interface
- Dashboard for project and task information
- Timeline view for tasks
- Responsive interface
- Light and dark themes
- Loading and empty states

### Authentication and Security
- JWT authentication
- Refresh token rotation
- Password hashing with bcrypt
- HTTP-only refresh-token cookies
- CORS configuration
- Helmet security headers
- Rate limiting
- Centralized error handling
- Environment-variable validation

## Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API

**Backend**
- Node.js
- Express.js
- TypeScript

**Database**
- MongoDB
- Mongoose

**Authentication**
- JSON Web Tokens (JWT)
- Refresh tokens
- HTTP-only cookies

## Project Structure

```text
SaaSProject/
├── frontend/
│   ├── assets/
│   ├── api-client.js
│   ├── app-store.js
│   ├── app.js
│   ├── auth-state.js
│   ├── auth.css
│   ├── auth.js
│   ├── contact-sales.js
│   ├── dashboard.css
│   ├── dashboard.html
│   ├── dashboard.js
│   ├── forgot-password.html
│   ├── index.html
│   ├── navbar-auth.css
│   ├── profile.css
│   ├── profile.html
│   ├── profile.js
│   ├── settings.html
│   ├── settings.js
│   ├── signin.html
│   ├── signup.html
│   ├── styles.css
│   ├── theme.css
│   └── theme.js
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── index.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── .env.example
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js 18 or later
- npm
- MongoDB, either a local instance or MongoDB Atlas

### 1. Clone the Repository

```bash
git clone https://github.com/ShreyaBaidya/Flowsync-SaaS.git
cd Flowsync-SaaS
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `server/` directory by copying the example file.

**Windows PowerShell:**

```powershell
Copy-Item .env.example .env
```

**Linux/macOS:**

```bash
cp .env.example .env
```

Update `server/.env` with the appropriate values for your environment.

The backend expects these variables:

| Variable | Purpose |
|---|---|
| `NODE_ENV` | Runtime environment |
| `PORT` | Backend listening port |
| `API_PREFIX` | API route prefix |
| `MONGODB_URI` | MongoDB connection string |
| `CORS_ORIGINS` | Comma-separated list of permitted frontend origins |
| `JWT_ACCESS_SECRET` | Secret used for access tokens |
| `JWT_REFRESH_SECRET` | Secret used for refresh tokens |
| `JWT_ACCESS_EXPIRES_IN` | Access-token lifetime |
| `JWT_REFRESH_EXPIRES_IN` | Refresh-token lifetime |
| `COOKIE_MAX_AGE` | Refresh-cookie lifetime in milliseconds |
| `BCRYPT_ROUNDS` | Password-hashing cost |
| `LOG_LEVEL` | Logging level |

Generate strong JWT secrets using:

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Run the command twice to generate separate access-token and refresh-token secrets.

**Security:** Never commit `server/.env` or publish your actual secrets.

### 4. Build and Start the Backend

For development:

```bash
npm run dev
```

For a production build:

```bash
npm run build
npm start
```

The default backend port is `5000`, and the default API prefix is `/api/v1`.

### 5. Run the Frontend

Serve the contents of the `frontend/` directory using a static web server, such as the VS Code Live Server extension.

The frontend API base URL is currently configured in `frontend/api-client.js`. Update it to match the backend endpoint when deploying the application.

## API Endpoints

The backend API uses the `/api/v1` prefix by default.

### Health Checks

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/v1/health` | Server liveness |
| GET | `/api/v1/health/ready` | Server and database readiness |

### Authentication

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/v1/auth/signup` | Register a user |
| POST | `/api/v1/auth/signin` | Sign in |
| POST | `/api/v1/auth/signout` | Sign out |
| POST | `/api/v1/auth/refresh` | Refresh authentication tokens |
| GET | `/api/v1/auth/me` | Get the authenticated user |

### Dashboard

| Method | Endpoint |
|---|---|
| GET | `/api/v1/dashboard` |

### Projects

| Method | Endpoint |
|---|---|
| GET | `/api/v1/projects` |
| POST | `/api/v1/projects` |
| PUT | `/api/v1/projects/:projectId` |
| DELETE | `/api/v1/projects/:projectId` |

### Tasks

| Method | Endpoint |
|---|---|
| GET | `/api/v1/projects/:projectId/tasks` |
| POST | `/api/v1/projects/:projectId/tasks` |
| PUT | `/api/v1/projects/:projectId/tasks/:taskId` |
| DELETE | `/api/v1/projects/:projectId/tasks/:taskId` |

## Deployment Notes

- Keep environment-specific values and secrets in `server/.env`.
- Configure `CORS_ORIGINS` to include the exact origin serving the frontend.
- Configure the frontend API base URL to point to the deployed backend.
- Use HTTPS for production deployments, particularly when authentication cookies are involved.
- Keep local database backups and generated build files out of version control.

## Future Enhancements

Potential future enhancements include:
- Backend team-management APIs
- Workspace invitations
- Role-based access control
- Email verification and password recovery
- Notifications
- Calendar integration
- File attachments
- Automated testing and CI/CD

## Author

**Shreya Baidya**

B.Tech, Electronics and Communication Engineering  
Indian Institute of Technology (ISM) Dhanbad

GitHub: https://github.com/ShreyaBaidya