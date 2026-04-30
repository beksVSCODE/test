# Tunduk - Цифровой кошелёк

Мобильное PWA приложение для просмотра идентификационной карты с поддержкой установки как виджет на телефон.

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Разработка
npm run dev

# Сборка
npm run build

# Предпросмотр
npm run preview
```

## 📱 Функции

- ✅ **PWA приложение** — работает оффлайн
- ✅ **ID-карта** — просмотр документа с двумя сторонами
- ✅ **Анимированный слайдер** — эффект стопки карточек
- ✅ **QR-код** — отображение QR с данными
- ✅ **Редактирование данных** — встроенная форма
- ✅ **Адаптивный дизайн** — мобильный-первый подход

## 🏗️ Архитектура

- **Frontend**: React + TanStack Router + TypeScript
- **Стили**: Tailwind CSS + shadcn/ui
- **Build**: Vite + TanStack Start
- **PWA**: Service Worker + Web App Manifest
- **Хостинг**: Vercel

## 📦 Развертывание

### На Vercel

1. Подключите репозиторий к Vercel
2. Vercel автоматически обнаружит конфиг `vercel.json`
3. Приложение будет задеплоено на https://your-domain.vercel.app

### На других платформах

**Cloudflare Pages** (рекомендуется для максимальной производительности):
```bash
npm run build
# Загрузить папку dist на Cloudflare Pages
```

**GitHub Pages**:
```bash
npm run build
# Загрузить содержимое dist/client на GitHub Pages
```

## 🔧 Переменные окружения

Создайте `.env.local`:
```env
VITE_API_URL=https://api.example.com
```

## 📂 Структура проекта

```
src/
├── routes/           # TanStack Router страницы
├── components/       # React компоненты
├── hooks/           # Custom React hooks
├── lib/             # Утилиты и функции
├── public/          # Статические файлы
│   ├── manifest.json # PWA конфиг
│   ├── sw.js        # Service Worker
│   └── logo.jpg     # Иконка приложения
└── styles.css       # Глобальные стили
```

## 🎨 Кастомизация

### Изменение названия приложения

Отредактируйте в `src/routes/__root.tsx`:
```tsx
{ title: "Название вашего приложения" }
```

И в `src/public/manifest.json`:
```json
{
  "name": "Ваше название",
  "short_name": "Сокращение"
}
```

### Изменение иконки

Замените `src/public/logo.jpg` на вашу иконку.

### Изменение цветов

В `src/routes/__root.tsx`:
```tsx
{ name: "theme-color", content: "#ВАШ_ЦВЕТ" }
```

## 🧪 Тестирование

```bash
# Локальный просмотр
npm run preview

# PWA тестирование в Chrome DevTools
# F12 → Application → Service Workers
```

## 📱 Установка как приложение

**Android:**
1. Откройте в браузере Chrome
2. Меню (⋮) → Установить приложение
3. Приложение появится на домашнем экране

**iOS:**
1. Нажмите кнопку Поделиться
2. На главный экран
3. Выберите браузер Safari
4. Готово!

## 🐛 Отладка

### Service Worker не регистрируется

Откройте DevTools → Application → Service Workers и проверьте логи в Console.

### PWA не работает оффлайн

Убедитесь что `sw.js` загружается без ошибок (вкладка Network).

## 📝 Лицензия

MIT

## 🤝 Поддержка

Для вопросов и багов откройте Issue на GitHub.

---

**Развернуто на:** [Ваша ссылка на Vercel будет здесь]
