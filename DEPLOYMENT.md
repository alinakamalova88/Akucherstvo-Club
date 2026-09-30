# Автоматическая публикация на Netlify

Репозиторий: https://github.com/alinakamalova88/Akucherstvo-Club

Исходный проект находится в этой папке. Файл netlify.toml задаёт сборку npm run build, готовую папку dist и Node.js 24. Пароли и токены для этого способа не нужны в проекте.

## Однократное подключение

В существующем проекте Netlify откройте Project configuration → Developer settings → Continuous deployment. Подключите репозиторий GitHub alinakamalova88/Akucherstvo-Club и выберите production branch main. Разрешите Netlify доступ только к нужному репозиторию. Базовая папка — корень репозитория (оставьте поле пустым), команда сборки — npm run build, папка публикации — dist. Включите сборки, если они остановлены.

После подключения первый deploy должен получить статус Published. Адрес сайта указан в обзоре проекта Netlify.

## Последующие обновления

После редактирования файлов отправьте изменения в GitHub:

```sh
git add .
git commit -m "Обновление сайта"
git push origin main
```

Netlify автоматически соберёт и опубликует каждый push в main. Сохранение файла только на компьютере само по себе не отправляет его в GitHub. При ошибке сборки смотрите журнал Deploys в Netlify.

Не загружайте ZIP заново через создание нового проекта: это создаёт отдельные сайты. Папки node_modules, dist, .astro и .netlify, а также локальные .env-файлы исключены из Git.

После выбора постоянного адреса замените https://brilliant-lily-57de5c.netlify.app в astro.config.mjs и public/robots.txt на адрес сайта.
