# 🧾 Inventory Management System

A backend-focused learning project designed to **master data handling and server-side development** with **Sequelize (first-time use)**, **NestJS**, **GraphQL**, and **Dataloader**.

This project reflects my commitment to deepening my understanding of **real-world data flows**, **relational data modelling**, and **performance optimisation techniques** such as **N+1 mitigation** using **Dataloader**.

Key aspects of this project include:

- Learning and applying **Sequelize ORM** with **PostgreSQL** for relational data management
- Building a **GraphQL API** with **NestJS**, designed to reflect production practices
- Mitigating **N+1 performance issues** with **Dataloader**, improving query efficiency
- Structuring a **Dockerised full-stack environment** to simulate professional dev workflows
- Adding **seed data** and **relational queries** to reflect complex, production-like scenarios

This project demonstrates my ability to **quickly adopt unfamiliar technologies**, **apply them in a realistic context**, and **iterate toward production-quality solutions**.

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
