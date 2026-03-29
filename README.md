# От идеи до продакшена

Одностраничный кейс-лендинг на `Next.js + TypeScript + Tailwind CSS`.

Проект показывает полный цикл: от разработки интерфейса до деплоя на сервер и запуска по доменному имени.

## Технологии

- Next.js 15 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 3
- GitHub Actions (сборка и деплой)

## Быстрый старт

### Требования

- Node.js 20+
- npm 10+

### Установка зависимостей

```bash
npm ci
```

### Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:3000`.

### Production-сборка локально

```bash
npm run build
npm run start
```

## Скрипты

- `npm run dev` - запуск development-сервера Next.js
- `npm run build` - production-сборка
- `npm run start` - запуск production-сборки
- `npm run lint` - линтинг проекта

## Архитектура проекта

```text
.
|- app/
|  |- layout.tsx        # корневой layout, метаданные, шрифты
|  |- page.tsx          # композиция всех секций лендинга
|  '- globals.css       # глобальные стили
|- components/
|  |- sections/         # бизнес-секции страницы (Hero, Timeline, Deployment и т.д.)
|  '- ui/               # переиспользуемые UI-компоненты
|- data/
|  '- content.ts        # централизованный контент для секций
|- hooks/
|  '- useReveal.ts      # анимация появления через Intersection Observer
|- .github/workflows/
|  '- deploy.yml        # CI/CD workflow деплоя
'- next.config.ts       # output: standalone для деплоя на сервер
```

## Как устроена страница

`app/page.tsx` собирает главную страницу из секций в следующем порядке:

1. Hero
2. Brief
3. Approach
4. Tools
5. Timeline
6. Deployment
7. Features
8. Result
9. Footer

Содержимое многих секций не захардкожено в JSX, а приходит из `data/content.ts`. Это упрощает редактирование текста и списков без изменений логики компонентов.

## CI/CD и деплой

Автодеплой настроен в `.github/workflows/deploy.yml`.

Workflow запускается в двух случаях:

- при merge Pull Request в ветку `main`
- вручную из GitHub Actions кнопкой `Run workflow` (`workflow_dispatch`)

### Что делает pipeline

1. Checkout репозитория
2. Установка Node.js 20
3. `npm ci`
4. `npm run build`
5. Подготовка артефакта из standalone-сборки
6. Копирование архива на сервер по SSH
7. Распаковка на сервере и перезапуск `landing.service`

### Обязательные GitHub Secrets

- `SERVER_HOST` - адрес сервера
- `SERVER_USER` - пользователь SSH
- `SSH_PRIVATE_KEY` - приватный SSH-ключ для деплоя
- `SERVER_PORT` - SSH-порт (опционально, по умолчанию `22`)
- `APP_DIR` - директория приложения на сервере (опционально, по умолчанию `/opt/landing`)

## Минимальная настройка сервера (Ubuntu)

### 1) Systemd-сервис приложения

Пример `/etc/systemd/system/landing.service`:

```ini
[Unit]
Description=Landing Next.js app
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/opt/landing
Environment=NODE_ENV=production
ExecStart=/usr/bin/node /opt/landing/server.js
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Применение:

```bash
sudo systemctl daemon-reload
sudo systemctl enable landing.service
sudo systemctl start landing.service
```

### 2) Nginx reverse proxy

Nginx проксирует HTTP-трафик на приложение (обычно `127.0.0.1:3000` или порт, заданный в сервисе).

### 3) HTTPS (Let's Encrypt)

Рекомендуемый путь:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
sudo certbot --nginx -d yulia-test-task.ru -d www.yulia-test-task.ru --redirect
```

Проверка автообновления сертификатов:

```bash
sudo certbot renew --dry-run
```

## Типовой процесс разработки

1. Создать ветку от `main`
2. Внести изменения
3. Локально проверить `npm run build`
4. Открыть Pull Request
5. Смёржить в `main` для автодеплоя или запустить ручной деплой из Actions

## Полезные команды на сервере

```bash
sudo systemctl status landing.service
sudo journalctl -u landing.service -n 100 --no-pager
sudo nginx -t
sudo systemctl reload nginx
```