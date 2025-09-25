# 🎫 Event Signup App (Work in progress...)

A serverless event signup application built with Cloudflare Workers, featuring user registration, admin approval workflow, and automated email notifications with QR codes.

## ✨ Features

- **User Registration**: Simple signup with email and name
- **Bulk Admin Actions**: Approve/reject multiple users at once  
- **Email Notifications**: Automated emails with QR codes for approved users
- **Smart Placement**: Optimized global performance
- **Queue Processing**: Reliable background email processing

## 🛠️ Tech Stack

- **Runtime**: Cloudflare Workers
- **Framework**: Hono + Chanfana (OpenAPI)
- **Database**: Cloudflare D1 (SQLite)
- **ORM**: Prisma with D1 adapter
- **Queues**: Cloudflare Worker Queues
- **Email**: Cloudflare Email Workers

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <repo-url>
cd event-signup-app
npm install
```

### 2. Setup Database
```bash
npx prisma generate
npm run migrate
```

### 3. Configure Environment
```bash
cp .env.example .env
# Update DATABASE_URL and other variables
```

### 4. Deploy or Run Local
```bash
npm run deploy  # Deploy to Cloudflare
npm run dev     # Start local development
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/signup` | User registration |
| `GET` | `/api/admin/requests` | List pending requests |
| `POST` | `/api/admin/approve` | Bulk approve users |
| `POST` | `/api/admin/reject` | Bulk reject users |

### Bulk Actions Request Body
```json
{
  "emails": [
    "user1@example.com",
    "user2@example.com", 
    "user3@example.com"
  ]
}
```

## 💾 Database Schema

### User Table
| Field | Type | Description |
|-------|------|-------------|
| `id` | Integer | Primary key |
| `email` | String | User email address |
| `firstname` | String | User first name |
| `lastname` | String | User last name |
| `status` | String | Registration status |
| `created_at` | DateTime | Timestamp |

### Admin Table
| Field | Type | Description |
|-------|------|-------------|
| `id` | Integer | Primary key |
| `email` | String | Admin email |
| `password` | String | Hashed password |
| `created_at` | DateTime | Timestamp |

## 🔧 Development

```bash
npm run dev          # Start local development server
npm run deploy       # Deploy to Cloudflare Workers
```

Visit [http://localhost:8787/](http://localhost:8787/) for the OpenAPI documentation.

## 📝 License

[Add your license here]

## 🤝 Contributing

[Add contribution guidelines here]