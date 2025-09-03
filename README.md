# Parcel Delivery System

A full-stack parcel delivery management system built with React (frontend) and Node.js/Express (backend). This project allows users to register, send parcels, track deliveries, and manage parcel logistics with admin and user dashboards.

## Features

- User authentication (register, login, password reset, OTP verification)
- Parcel creation, tracking, and status updates
- Admin dashboard with charts and metrics
- Role-based access control
- RESTful API with validation and error handling
- Responsive UI with modern design

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Redux Toolkit
- **Backend:** Node.js, Express, TypeScript, MongoDB, Redis, Passport.js
- **Other:** EJS templates, Axios, Zod validation, Chart.js

## Project Structure

```
parcel-delivery-system/
├── client/   # Backend (Node.js/Express)
├── server/   # Frontend (React/Vite)
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (local or cloud)
- Redis (optional, for caching/session)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/parcel-delivery-system.git
   cd parcel-delivery-system
   ```

2. **Install dependencies:**

   ```sh
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` in `client/` to `.env` and fill in your values.
   - Copy `.env` in `server/` and configure as needed.

### Running the App

**Start the backend:**

```sh
cd client
npm run dev
```

**Start the frontend:**

```sh
cd server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) for the frontend.

## API Documentation

- See `client/postman_collection.json` for sample requests.
- Main endpoints:
  - `/api/v1/auth`
  - `/api/v1/parcel`
  - `/api/v1/user`
  - `/api/v1/stats`
  - `/api/v1/otp`

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

MIT

## Authors

- [Emdadul Hoque Emon](https://github.com/Emon201038)
