export type ApproachItem = {
  title: string;
  text: string;
};

export type ToolItem = {
  name: string;
  text: string;
};

export type TimelineItem = {
  step: string;
  title: string;
  text: string;
};

export const repositoryUrl = "https://github.com/yuliakobyakova/the-best-website";

export const taskPoints = [
  "разработка с нуля",
  "работа с git",
  "деплой на VM",
  "подключение домена",
  "настройка HTTPS",
] as const;

export const approachItems: ApproachItem[] = [
  {
    title: "Простая идея",
    text: "Сфокусировалась на понятной концепции, которую можно реализовать быстро и качественно.",
  },
  {
    title: "Чистая реализация",
    text: "Минималистичный интерфейс и аккуратная структура кода.",
  },
  {
    title: "Полный цикл",
    text: "Довела проект до продакшена: от разработки до доступности по домену.",
  },
];

export const tools: ToolItem[] = [
  { name: "Codex", text: "Помог ускорить разработку и генерацию кода" },
  { name: "Git", text: "Для контроля версий и структуры работы" },
  { name: "GitHub", text: "Хранение репозитория" },
  { name: "Next.js / React", text: "Основа приложения" },
  { name: "TypeScript", text: "Более предсказуемый и аккуратный код" },
  { name: "Tailwind CSS", text: "Быстрая и чистая стилизация интерфейса" },
  { name: "VM", text: "Сервер, на котором работает приложение" },
  { name: "Nginx", text: "Отдача сайта и маршрутизация запросов" },
  { name: "HTTPS", text: "Безопасный доступ к сайту" },
];

export const timeline: TimelineItem[] = [
  { step: "01", title: "Идея", text: "Выбрала формат лендинга-кейса" },
  { step: "02", title: "Разработка", text: "Собрала интерфейс с помощью Codex" },
  { step: "03", title: "Структура проекта", text: "Организовала код, секции и компоненты" },
  { step: "04", title: "Git workflow", text: "Сохраняла изменения и вела проект через репозиторий" },
  { step: "05", title: "Деплой", text: "Развернула проект на виртуальной машине" },
  { step: "06", title: "Домен и HTTPS", text: "Подключила домен и настроила безопасное соединение" },
];

export const deployChain = [
  "Локальная разработка",
  "GitHub",
  "Сервер",
  "Домен",
  "HTTPS",
] as const;

export const deploySteps = [
  "git pull",
  "npm install",
  "npm run build",
  "sudo systemctl restart landing.service",
  "done",
] as const;

export const featureList = [
  "адаптивная верстка",
  "чистая структура компонентов",
  "минималистичный UI",
  "воспроизводимый деплой",
  "подключённый домен",
  "HTTPS",
] as const;
