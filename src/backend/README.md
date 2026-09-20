# Backend Architecture (Next.js Enterprise Pattern)

In Next.js App Router, the **Routing Layer** is managed directly by **`src/app/api/`**. 

```
src/
├── app/
│   └── api/                # <── Route Layer (Next.js App Router HTTP endpoints)
│       ├── auth/
│       │   └── route.ts
│       └── contact/
│           └── route.ts
│
└── backend/
    ├── controllers/        # Request parsing, status codes, controller orchestration
    ├── services/           # Core business logic, domain rules, calculations
    ├── models/             # Database models/schemas (Prisma, Drizzle, Mongoose)
    └── middlewares/        # Authentication, Role checks, Rate limiting
```

---

## Clean Architecture Request Flow

```
Client HTTP Request
        │
        ▼
1. Next.js Route (`src/app/api/.../route.ts`)
        │
        ▼
2. Middleware Check (`src/backend/middlewares/`)
        │  (Auth, token validation, rate limit)
        ▼
3. Backend Controller (`src/backend/controllers/`)
        │  (Validates input body with Zod schema)
        ▼
4. Backend Service (`src/backend/services/`)
        │  (Business logic & database manipulation)
        ▼
5. Database Model (`src/backend/models/`)
        │
        ▼
Database (PostgreSQL / MongoDB / MySQL)
```
