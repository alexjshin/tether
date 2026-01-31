# Tether Backend

Node.js + Express + PostgreSQL API for the Tether personal finance application.

## Setup

```bash
# Install dependencies (from root)
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials

# Run development server
npm run dev
```

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Database

Uses PostgreSQL for data storage. Make sure PostgreSQL is installed and running locally.
