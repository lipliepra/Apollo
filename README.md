# Apollo

Самостоятельная UI-библиотека для React. Сейчас перенесён общий слой SCSS
из Daily.Story: темы, цветовые и типографические токены, миксины, utility-классы
и анимации. В пакет включены Gilroy и Inter из Daily.Story.
Компоненты, иконки, хуки и утилиты будут переноситься следующими этапами.

## Разработка в Docker

Нужен Docker Desktop с Docker Compose. Node.js на хосте не требуется.

```sh
./dude.sh dev     # playground: http://localhost:6006
./dude.sh check   # типы, сборка, архив, изолированный потребитель
./dude.sh build   # npm-архив в artifacts/
./dude.sh publish --dry-run # проверки и репетиция публикации без отправки
./dude.sh down    # остановить playground
```

Исходники подключены к контейнеру для hot reload. `node_modules` находится
только в образе: Linux-зависимости не записываются на macOS и зависимости
хоста не используются. После изменения зависимостей или конфигурации
перезапустите `./dude.sh dev`.

Версии зависимостей и lock-файлы зафиксированы; образ Node.js закреплён
по digest. После намеренного изменения `package.json` выполните
`./dude.sh lock`. Обычная установка в образе всегда использует `npm ci`.

## Структура

- `src/index.ts` — пустая точка входа публичного API.
- `src/styles.scss` — общие стили, собираемые в `dist/styles.css`.
- `src/fonts.scss` — объявления шрифтов; входят в `styles.css` и отдельный `fonts.css`.
- `src/assets/fonts/` — файлы шрифтов и сведения об их происхождении.
- `src/reset.scss` — отдельный reset, собираемый в `dist/reset.css`.
- `src/scss/` — исходники стилей и публичные SCSS-модули.
- `playground/` — витрина стилей с переключением темы и акцента.
- `checks/consumer/` — отдельный React 19 проект для проверки собранного архива.
- `scripts/` — сборка CSS и проверки пакета.

Сборка создаёт ESM, декларации TypeScript и отдельный CSS. React и React DOM
остаются peer dependencies и исключены из библиотечного бандла. Основа
настроена на React 19; совместимость будущих компонентов нужно проверять
при их добавлении.

## Подключение стилей

```tsx
// Необязательно: reset меняет стили стандартных HTML-элементов во всём документе.
import '@d.story/apollo-ui/reset.css';
import '@d.story/apollo-ui/styles.css';
```

Подключайте стили один раз в точке входа приложения. `styles.css` содержит
шрифты, CSS-переменные, темы, общую типографику `h1`–`h5` и `a`, классы `apollo-*`
и keyframes. Стили body, layout и страниц задаёт приложение. Reset подключается
перед основными стилями и не нужен, если у приложения уже есть свой.
JavaScript-вход пока ничего не экспортирует и не подключает CSS автоматически.

По умолчанию используются тёмная тема и оранжевый акцент. Переключение —
через атрибуты корневого `html`:

```ts
document.documentElement.dataset.theme = 'light'; // light | dark
document.documentElement.dataset.brand = 'teal'; // orange | magenta | teal
```

## Единые шрифты проектов

`styles.css` уже содержит `@font-face`: отдельный импорт шрифтов при обычном
подключении не нужен. Все ресурсы локальные, без CDN; относительные URL
обрабатывает сборщик приложения. Используется `font-display: swap`.

- `--apollo-font-family-primary` — Gilroy → Inter → системный sans-serif.
- `--apollo-font-family-secondary` — Inter → системный sans-serif.
- `--apollo-font-family-default` — Helvetica Neue → sans-serif.

Gilroy Medium объявлен как 400, Bold — 700, Inter —
variable 100–900. Соответствие Medium → 400 сохранено из Daily.Story, чтобы
перенос не менял типографику. Фактический вес файла Medium — 500; изменение
этого соответствия требует отдельной проверки существующих компонентов.
Курсивных файлов нет. WOFF2 и существующие WOFF-fallback сохранены без изменения.

При необходимости приложение переопределяет CSS-переменные после стилей Apollo.
Шрифты загружаются браузером при использовании соответствующего начертания.
Для SCSS-подключения или самостоятельной типографики доступен отдельный вход:

```ts
import '@d.story/apollo-ui/fonts.css';
```

Не подключайте `fonts.css` повторно вместе со `styles.css`. Сам JS-вход
не добавляет шрифты, CSS или теги preload. Ранняя загрузка — задача приложения:
для preload доступны пути `@d.story/apollo-ui/fonts/Gilroy-Medium.woff2`,
`fonts/Gilroy-Bold.woff2` и `fonts/InterVariable.woff2`.
В Vite URL можно получить импортом с `?url`. Предзагружать стоит только начертания,
необходимые на первом экране; подключение CSS не требует preload.

Inter поставляется с SIL OFL в `dist/assets/fonts/Inter/LICENSE.txt`.
У текущих файлов Gilroy есть пометка о сторонней перепаковке.
Лицензия Gilroy в Daily.Story отсутствует;
перед публичным выпуском пакета нужно подтвердить происхождение и условия
распространения файлов. Подробнее — `src/assets/fonts/README.md`.

## SCSS для приложения

Для использования исходников нужен Sass. Пакет проверяется с Sass 1.63.6,
той же версией, что используется в Daily.Story. Пример для Vite:

```scss
@use '@d.story/apollo-ui/scss/mixins/utils';
@use '@d.story/apollo-ui/scss/mixins/typography';

.card {
    @include typography.text(typography.$fs-primary);

    @include utils.mediaMobile() {
        padding: 8px;
    }
}
```

Также доступны `scss/mixins/functions`, `scss/variables/colors` и
`scss/variables/fonts`. Эти модули сами не выводят глобальный CSS.
`@use '@d.story/apollo-ui/scss'` выводит все основные стили и служит альтернативой
импорту основных правил `styles.css`; шрифты в этом варианте подключайте через
`fonts.css`. Не подключайте полный SCSS-вход и `styles.css` одновременно.
SCSS-пути разрешает сборщик; при прямом вызове Sass CLI используйте
`--load-path=node_modules` и физический путь
`@d.story/apollo-ui/dist/scss/mixins/utils` (CLI не читает package.json exports).
Внутренние импорты относительные, alias Daily.Story не требуется.

## Проверка пакета

`./dude.sh check` проверяет содержимое npm-архива, наличие публичных файлов
и локальных ресурсов CSS. Затем сравнивает архивы двух чистых сборок,
устанавливает архив в изолированный проект, проверяет ESM-импорт, типы
в режимах Bundler и NodeNext и production-сборку потребителя с CSS, reset и импортами публичных SCSS-модулей.

В редакторе `checks/consumer/tsconfig.json` разрешает импорт Apollo на локальные
исходники. Для проверки архива используется `tsconfig.package.json` без alias:
во временном проекте Apollo должен разрешаться только из установленного пакета.

`./dude.sh build` сохраняет `artifacts/d.story-apollo-ui-0.2.1.tgz`.

## Публикация

```sh
./dude.sh publish --dry-run # без токена и отправки в registry
./dude.sh publish           # настоящая публикация; NPM_TOKEN должен быть экспортирован
```

Команда собирает release-образ, выполняет все проверки и публикует собранный
архив в `https://registry.npmjs.org/` с доступом `public`. Настройки находятся
в `package.json` → `publishConfig`. Dry run запускает npm в offline-режиме
в контейнере без сети; доступ к scope и наличие версии в registry он не проверяет.

Для настоящей публикации задайте переменную окружения `NPM_TOKEN` с правом
публикации пакета `@d.story/apollo-ui`. Токен передаётся только в запускаемый
контейнер публикации; в сборку образа, Git и архив он не попадает. Не записывайте
токен в проектный `.npmrc`. Если npm требует одноразовый код, передайте его через
`NPM_CONFIG_OTP`. Необязательная переменная `NPM_TAG` задаёт dist-tag (по умолчанию
`latest`), например `NPM_TAG=next ./dude.sh publish`.

Версия берётся из `package.json` и автоматически не повышается. Перед выпуском
обновите её и выполните `./dude.sh lock`; проверьте доступ к scope `@d.story`.
Уже опубликованную комбинацию имени и версии npm повторно не принимает —
см. [документацию npm publish](https://docs.npmjs.com/cli/v11/commands/npm-publish/).
