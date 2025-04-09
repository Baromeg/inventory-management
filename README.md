# 🧾 Inventory Management System

A full-stack inventory management application built with **NestJS**, **Sequelize**, **PostgreSQL**, and a **React + Apollo Client** frontend.

Designed to simulate a real-world engineering environment with:

- Type-safe GraphQL API
- Dataloader for N+1 mitigation
- Docker-based development workflow
- Feature-first architecture and hot reload support
- Production-style seed data and resolver structure

---

## 🏗️ Stack Overview

### Backend

- **NestJS** (TypeScript)
- **GraphQL** with `@nestjs/graphql` + Apollo Server
- **Sequelize ORM** with PostgreSQL
- **Passport.js** + JWT (for future auth)
- **Dockerised dev environment**
- **Makefile** for command consistency

### Frontend

- **React (Vite)** + TypeScript
- **Apollo Client**
- **Tailwind CSS v4**
- **Docker-ready** with hot reload via `pnpm dev`

---

## 📦 Getting Started

### 🐳 Prerequisites

- Docker + Docker Compose
- `pnpm` (uses Corepack with Node >= 20)

---

### 🚀 Start Dev Environment

From the root of the project:

```bash
make dev
```

This will:

- Build and run the backend (`localhost:3000`)
- Start the frontend with Vite (`localhost:5173`)
- Connect to PostgreSQL (`localhost:5432`)
- Seed the database with sample `products`, `warehouses`, `users`, and `stockAdjustments`

---

## 🧠 Data Models

### `Product`

- `id: UUID`
- `name: string`
- `description: string`
- `stock: number`

### `Warehouse`

- `id: UUID`
- `name: string`
- `location: string`

### `User`

- `id: UUID`
- `email: string`
- `password: string` (hashed)
- `role: string`

### `StockAdjustment`

- `id: UUID`
- `productId → Product`
- `warehouseId → Warehouse`
- `userId → User`
- `quantity: number`
- `createdAt`

### `StockLevel` _(in progress)_

- Tracks product quantity per warehouse

---

## 🧪 Queries to Try

### `Get Products with Stock Adjustments`

```graphql
query {
  products {
    id
    name
    stockAdjustments {
      quantity
      warehouse {
        name
      }
    }
  }
}
```

### `Create Stock Adjustment`

```graphql
mutation {
  createStockAdjustment(
    input: {
      productId: "UUID"
      warehouseId: "UUID"
      userId: "UUID"
      quantity: 25
    }
  ) {
    id
    quantity
  }
}
```

---

## 📁 Project Structure

```
backend/
  src/
    products/
    warehouses/
    users/
    stock-adjustments/
    stock-levels/
    database/seed.service.ts

frontend/
  src/
    components/
    lib/apollo.ts
    App.tsx

docker-compose.yml
Makefile
```

---

## 🛠 Useful Commands

```bash
make dev               # Run full stack with hot reload
make dev-backend       # Backend only
make dev-frontend      # Frontend only
docker compose down -v # Stop and wipe volumes
```

---

## 📌 Features in Progress

- ✅ Dataloader-based batching for relational queries
- ✅ CORS setup for cross-origin GraphQL
- 🔄 GraphQL codegen for typed hooks
- 🔐 Passport JWT auth
- 📊 StockLevel management and historical tracking
- 📦 Real-time adjustments via Subscriptions (future)

---

## 📄 License

MIT
