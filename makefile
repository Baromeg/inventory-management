dev:
	docker-compose up --build

down:
	docker-compose down

logs:
	docker-compose logs -f backend

db-logs:
	docker-compose logs -f postgres

ps:
	docker-compose ps
