.PHONY: start up down logs shell npm build test share help

start: ## Construye y levanta el contenedor
	docker-compose up -d --build
	@echo '$(YELLOW)App disponible en http://localhost:5173'

up: ## Levanta el contenedor
	docker-compose up -d
	@echo '$(YELLOW)Aplicación disponible en: http://localhost:5173'

down: ## Detiene el contenedor
	docker-compose down

logs: ## Muestra logs
	docker-compose logs -f

shell: ## Accede al shell
	docker-compose exec app sh

npm: ## Ejecuta npm (uso: make npm cmd="install axios")
	docker-compose exec app npm $(cmd)

build: ## Build de producción
	docker-compose exec app npm run build

test: ## Ejecuta tests
	docker-compose exec app npm test

share: ## Comparte localhost con URL pública
	@echo "Iniciando túnel Cloudflare..."
	docker-compose exec app cloudflared tunnel --url http://localhost:5173

help: ## Muestra ayuda
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "%-12s %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
