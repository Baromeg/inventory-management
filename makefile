# 🚀 Development Commands

dev:               ## Run full stack with hot reload (frontend + backend + db)
	docker compose up --build

dev-backend:       ## Start backend service only
	docker compose up --build backend

dev-frontend:      ## Start frontend service only
	docker compose up --build frontend

# 🧼 Cleanup + Monitoring

stop:              ## Stop all services
	docker compose down

clean:             ## Stop and remove volumes, images, orphans
	docker compose down -v --rmi all --remove-orphans

logs:              ## View backend logs
	docker compose logs -f backend

db-logs:           ## View database logs
	docker compose logs -f db

ps:                ## List running containers
	docker compose ps