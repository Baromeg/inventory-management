start: 
	docker-compose --env-file backend/.env up -d --build

dev: 
	docker-compose --env-file backend/.env up

stop: 
	docker-compose down

logs:
	docker-compose logs -f backend

db-logs:
	docker-compose logs -f postgres

ps:
	docker-compose ps
