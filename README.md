# От идеи до продакшена

Одностраничный кейс-лендинг на Next.js + TypeScript + Tailwind CSS.

## Стек

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Локальный запуск

```bash
npm install
npm run dev
```

Открыть: `http://localhost:3000`

## Сборка и запуск

```bash
npm run build
npm run start
```

## Структура

- `app/` — layout, page, глобальные стили
- `components/ui/` — базовые UI-компоненты
- `components/sections/` — секции лендинга
- `data/content.ts` — контент и списки для секций
- `hooks/useReveal.ts` — логика reveal-анимации при скролле

## Что реализовано

- минималистичный clean-tech дизайн
- адаптивная верстка
- scroll reveal через Intersection Observer
- hover-эффекты карточек
- accordion в секции деплоя
- мини-симуляция сценария деплоя
- anchor links и плавный scroll
