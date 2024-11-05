## Описание:

Это приложение — онлайн-кинотеатр с возможностью просмотра фильмов, интегрированный с TMDB API.

## Стек технологий:

- Webpack
- React
- TypeScript
- React Router DOM
- MUI
- Axios
- Husky
- Jest
- React Testing Library
- ESLint
- Prettier

---

## Запуск проекта

Для запуска необходимо в корне проекта создать файл `.env` и прописать в нем свой ключ API TMDB:

```
TMDB_KEY='{YOUR_API_KEY}'
```

Инструкция по получению ключа [API TMDB](https://developer.themoviedb.org/docs/getting-started).

```
npm install - устанавливаем зависимости
npm run start - запуск frontend проекта в dev режиме
напистаь про апи ключ. добавить где можно посмотреть
```

> **Примечание:** API TMDB не работает на территории РФ.

---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов с помощью eslint
- `npm run prettier:fix` - Исправление с помощью Prettier
- `npm run test` - Запуск unit тестов с jest
- `npm run prepare` - прекоммит хуки
