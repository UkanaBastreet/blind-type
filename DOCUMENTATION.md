# Blind-Type - Документация для разработчиков

## Обзор проекта

**Blind-Type** — это веб-приложение для тренировки слепой печати. Приложение позволяет пользователям улучшать скорость и точность печати через различные режимы игры (по времени или по количеству слов).

### Основные возможности:
- **Два режима игры**: 
  - По времени (5, 15, 30, 60 секунд)
  - По количеству слов (10, 25, 50, 100 слов)
- **Отслеживание статистики**: WPM (слов в минуту), точность (%), количество ошибок
- **Анимации**: Плавные переходы с использованием Framer Motion
- **Темная/светлая тема**: Переключение тем оформления
- **Аутентификация**: Регистрация и вход пользователей (готово для интеграции с бэкендом)
- **Локальное хранение**: Сохранение состояния игры в localStorage

---

## Технологический стек

### Frontend:
- **React 19.1.1** — UI библиотека
- **TypeScript 5.8.3** — Типизация
- **Vite 7.1.0** — Сборщик и dev-сервер
- **Redux Toolkit 2.8.2** — Управление состоянием
- **React Router 7.8.0** — Роутинг
- **Framer Motion 12.23.12** — Анимации
- **Sass 1.90.0** — Препроцессор CSS
- **Axios 1.11.0** — HTTP-клиент (для будущих API запросов)

### Инструменты разработки:
- **ESLint 9.32.0** — Линтинг кода
- **@vitejs/plugin-react-swc** — Быстрый React HMR через SWC
- **vite-plugin-svgr** — Импорт SVG как React компонентов

---

## Установка и запуск

### Требования:
- Node.js (рекомендуется версия 18+)
- Yarn 1.22.19+ или npm

### Установка зависимостей:
```bash
yarn install
# или
npm install
```

### Запуск dev-сервера:
```bash
yarn dev
# или
npm run dev
```
Сервер запустится на `http://localhost:3000`

### Сборка для продакшена:
```bash
yarn build
# или
npm run build
```

### Запуск preview версии:
```bash
yarn preview
# или
npm run preview
```
Preview запустится на `http://localhost:5000`

### Линтинг:
```bash
yarn lint
# или
npm run lint
```

---

## Архитектура проекта

Проект следует архитектуре **Feature-Sliced Design (FSD)** с адаптацией:

```
src/
├── app/              # Приложение и глобальная конфигурация
│   ├── App.tsx       # Корневой компонент приложения
│   ├── store.ts      # Redux store конфигурация
│   ├── slices/       # Глобальные slices (ThemeSlice)
│   └── styles/       # Глобальные стили
├── features/         # Бизнес-фичи
│   ├── auth/         # Аутентификация
│   │   └── Auth.slice.ts
│   └── game/         # Логика игры
│       ├── GameSlice.ts
│       ├── types/
│       └── utils/
├── pages/            # Страницы приложения
│   ├── auth/         # Страница авторизации
│   └── game/         # Страница игры
├── widgets/          # Составные UI компоненты
│   ├── Header/
│   ├── Footer/
│   ├── Layout/
│   └── Graph/
├── shared/           # Переиспользуемые компоненты
│   ├── ui/           # Базовые UI компоненты (Button, Input, etc.)
│   └── assets/       # SVG иконки
└── main.tsx          # Точка входа
```

---

## Redux Store и State Management

### Store Configuration
Store настраивается в <ref_file file="C:\Users\NickC\Documents\blind-type\src\app\store.ts" />:

```typescript
{
  game: gameReducer,    // Состояние игры
  theme: themeReducer,  // Тема оформления
  auth: authReducer,    // Аутентификация
}
```

### Game Slice (`src/features/game/GameSlice.ts`)
Управляет состоянием игры:

**State:**
- `index` — текущая позиция в тексте
- `text` — текст для печати
- `errors` — массив ошибок ввода
- `results` — результаты текущей игры
- `lastGameResults` — результаты последней игры
- `mode` — режим игры ("time" | "words")
- `wordsCount` — количество слов (10 | 25 | 50 | 100)
- `timeLimit` — лимит времени (5 | 15 | 30 | 60)
- `status` — статус игры ("pending" | "running" | "finished")
- `startTime` — время начала игры
- `input` — массив введенных символов с временными метками

**Actions:**
- `keyPressed(key)` — обработка нажатия клавиши
- `restart()` — полный перезапуск игры (новый текст)
- `repeat()` — повторение того же текста
- `next()` — следующий текст
- `changeMode(mode)` — смена режима игры
- `changeWordsCount(count)` — смена количества слов
- `changeTimeLimit(limit)` — смена лимита времени

### Auth Slice (`src/features/auth/Auth.slice.ts`)
Управляет аутентификацией:

**State:**
- `isAuthenticated` — флаг авторизации
- `user` — данные пользователя
- `token` — токен авторизации

**Actions:**
- `loginSuccess({ user, token })` — успешный вход
- `logout()` — выход

### Theme Slice (`src/app/slices/ThemeSlice.ts`)
Управляет темой оформления:

**State:**
- `theme` — текущая тема ("light" | "dark")

---

## Роутинг

Роутинг настраивается в <ref_file file="C:\Users\NickC\Documents\blind-type\src\main.tsx" /> с использованием React Router v7:

```typescript
createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: GamePage },  // Главная страница - игра
      { path: "/auth", Component: AuthPage }, // Страница авторизации
    ],
  },
])
```

---

## Основные компоненты

### Pages

#### GamePage (`src/pages/game/GamePage.tsx`)
Главная страница приложения. Отображает:
- `GameField` — игровое поле (когда status !== "finished")
- `ResultField` — результаты игры (когда status === "finished")

Использует `AnimatePresence` для плавных переходов между состояниями.

#### AuthPage (`src/pages/auth/AuthPage.tsx`)
Страница авторизации. Содержит:
- `RegisterForm` — форма регистрации
- `LoginForm` — форма входа

### Widgets

#### Layout (`src/widgets/Layout/Layout.tsx`)
Обертка для всех страниц с Header и Footer.

#### Header (`src/widgets/Header/Header.tsx`)
Шапка приложения с навигацией.

#### Footer (`src/widgets/Footer/Footer.tsx`)
Подвал приложения.

#### Graph (`src/widgets/Graph/Graph.tsx`)
Компонент для отображения графиков статистики.

### Features

#### GameField (`src/pages/game/GameField/GameField.tsx`)
Основное игровое поле, включающее:
- `TextField` — поле с текстом для печати
- `Timer` — таймер (для режима по времени)
- `ModePanel` — панель выбора режима и настроек
- `GamePanel` — панель управления игрой

#### ResultField (`src/pages/game/ResultField.tsx`)
Поле с результатами игры, включая:
- `GameResultPanel` — панель с результатами
- `GameResultStatistic` — детальная статистика

### Shared UI Components

Переиспользуемые компоненты в `src/shared/ui/`:
- `Button` — кнопка
- `Input` — поле ввода
- `Title` — заголовок
- `Icon` — иконка (SVG)

---

## Стили

Проект использует модульные CSS и Sass:

- **Module CSS** (`.module.css`) — для компонентов с изоляцией стилей
- **Sass** (`.scss`) — для более сложных стилей с переменными и миксинами
- **Глобальные стили** — в `src/app/styles/`

### Переменные CSS
Глобальные переменные определены в `src/app/styles/vars.css`.

---

## Типы

Основные типы определены в `src/features/game/types/game.type.ts`:

```typescript
type GameStatusType = "pending" | "running" | "finished"
type GameModeType = "time" | "words"
type WordCountType = 10 | 25 | 50 | 100
type TimeLimitType = 5 | 15 | 30 | 60

interface GameResultType {
  date: number
  errors: inputError[]
  text: string
  time: number
  totalErrors: number
  wpm: number  // words per minute
  acc: number  // accuracy percentage
  mode: GameModeType
  input: InputChar[]
  length: number
}
```

---

## Path Aliases

Vite настроен с path aliases для удобного импорта:

```typescript
"@app"      → src/app
"@features" → src/features
"@shared"   → src/shared
"@widgets"  → src/widgets
"@pages"    → src/pages
```

Пример использования:
```typescript
import { GameSlice } from "@features/game/GameSlice"
import { Button } from "@shared/ui/Button/Button"
```

---

## Логика игры

### Поток игры:

1. **Pending (Ожидание)**: Игра не началась, текст отображен
2. **Running (В процессе)**: Пользователь печатает, таймер запущен
3. **Finished (Завершено)**: Текст завершен или время истекло, показаны результаты

### Обработка ввода:
- При первом нажатии клавиши статус меняется на "running"
- Правильный символ: индекс увеличивается, символ добавляется в `input`
- Неправильный символ: ошибка добавляется в `errors`
- По завершении текста: рассчитываются результаты (WPM, точность)

### Расчет результатов:
```typescript
duration = (endTime - startTime) / 1000  // в секундах
correctChars = index - errors.length
accuracy = (correctChars / index) * 100
wpm = (words.length / duration) * 60
```

---

## Локальное хранение

Состояние игры сохраняется в localStorage под ключом `"gameState"`. Это позволяет сохранять прогресс между сессиями.

Результаты игр могут быть сохранены в localStorage под ключом `"games"` (функция `addToLocalStorage` в `src/features/game/utils/getText.ts`).

---

## Конфигурация Vite

Конфигурация в <ref_file file="C:\Users\NickC\Documents\blind-type\vite.config.ts" />:

- **Dev server**: порт 3000, автооткрытие браузера
- **Preview**: порт 5000
- **Build output**: директория `build`
- **Plugins**: React SWC, SVGR (для SVG как компонентов)
- **Path aliases**: настроены для удобного импорта

---

## Будущие улучшения

### Потенциальные задачи:
1. **Интеграция с бэкендом**:
   - Реальная аутентификация через API
   - Сохранение результатов на сервере
   - Глобальные рейтинги

2. **Улучшение игры**:
   - Добавление уровней сложности
   - Разные языки текстов
   - Тренажер для отдельных символов

3. **UI/UX**:
   - Аудиофидбек при ошибках
   - Настройки горячих клавиш
   - Темы оформления

4. **Аналитика**:
   - Графики прогресса
   - Статистика по дням/неделям
   - Сравнение с прошлыми результатами

---

## Как внести вклад

### Рекомендации по разработке:

1. **Следуйте архитектуре FSD**:
   - Новые фичи в `src/features/`
   - Новые страницы в `src/pages/`
   - Переиспользуемые компоненты в `src/shared/ui/`

2. **Используйте TypeScript**:
   - Определяйте типы для всех компонентов и функций
   - Избегайте `any`

3. **Redux Toolkit**:
   - Используйте `createSlice` для новых slices
   - Следуйте паттернам существующих slices

4. **Стили**:
   - Используйте module CSS для компонентов
   - Sass для сложных стилей
   - Следуйте существующим соглашениям по именованию

5. **Коммиты**:
   - Пишите понятные сообщения коммитов
   - Делайте атомарные коммиты

### Линтинг и типизация:
Перед коммитом запускайте:
```bash
yarn lint
```

Убедитесь, что TypeScript не показывает ошибок.

---

## Контакты и поддержка

Для вопросов по проекту обращайтесь к команде разработки или создавайте issues в репозитории.

---

## Дополнительные ресурсы

- [React Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Framer Motion Documentation](https://www.framer.com/motion)
