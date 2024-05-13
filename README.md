# Apollo

Дизайн-система для разработки пользовательского интерфейса,
обеспечивающая единообразие, доступность и повышение производительности в процессе создания веб-приложения.

## Основные компоненты

### Компоненты

Apollo предоставляет библиотеку готовых компонентов, обеспечивая их стилизацию и поведение для использования в проектах.

+ **Divider** - простой разделительный элемент;
+ **SanitizedHtml** - компонент для безопасного отображения HTML контента.

--- 

### Иконки

В дизайн-системе представлен разнообразный набор иконок, упрощающий визуальное оформление интерфейса.

--- 

## Дополнительные инструменты

### Хуки

Apollo предоставляет коллекцию пользовательских хуков, облегчающих управление состоянием, эффектами и другими аспектами
взаимодействия с компонентами и данными.

+ **useAdaptive** - позволяет определить тип адаптивности устройства;
+ **useBase64ImageUrlByFile** - позволяет преобразовать файл изображения в строку Base64 и получить его URL;
+ **useClickOutside** - позволяет обрабатывать события клика вне определенного DOM-элемента;
+ **useDisableScroll** - позволяет управлять возможностью прокрутки страницы;
+ **useInterval** - позволяет создавать интервальные вызовы функции-колбэка с указанным интервалом;
+ **useLocalStorage** - позволяет синхронизировать состояние компонента с данными из localStorage;
+ **usePrevious** - позволяет получить предыдущее значение переменной или состояния.

--- 

### Утилиты

В дизайн-системе доступен набор утилитарных функций, которые помогают в решении типичных задач.

+ **generateClassNames** - генерирует строку с классами в стиле BEM для использования в компонентах;
+ **getGuid** - генерирует и возвращает уникальный идентификатор (GUID);
+ **lStorage** - предоставляет методы для работы с локальным хранилищем браузера (localStorage);
+ **sStorage** - предоставляет методы для работы с сеансовым хранилищем браузера (sessionStorage).

--- 

### Типы и перечисления

Apollo предоставляет набор типов данных и перечислений для обеспечения строгой типизации и удобства работы с данными в
проекте.

*Types*

+ **CFC** - Функциональный компонент с дочерними элементами;
+ **TStatus** - Статус- информация, успех, предупреждение или ошибка;
+ **TFunc** - Функция с определенными аргументами и возвращаемым значением;
+ **TRef** - Ссылка на DOM-элемент;
+ **TSetAction** - Функция обновления состояния;
+ **TSetTimeout** - Возвращаемое значение функции setTimeout;
+ **TIcon** - Компонент React, представляющий иконку SVG;
+ **TNullable** - Значение, которое может быть либо заданным типом, либо null;
+ **TUnkObject** - Объект с неопределенными свойствами;
+ **TOption** - Опция в списке опций;
+ **TOptions** - Массив опций;
+ **TSearchOptions** - Функция для поиска опций.

*Enums*

+ **RuntimeStatuses** - перечисление, определяющее различные статусы выполнения приложения или компонента.

--- 

### Стили

Дизайн-система включает в себя гибкую систему стилей, позволяющую легко настраивать внешний вид компонентов и
обеспечивать их соответствие дизайну проекта.

*Themes*

+ **Light theme** - светлая тема;
+ **Dark theme** - тёмная тема.

*Brands*

+ **Orange** - оранжевый (по-умолчанию);
+ **Green** - зеленый;
+ **Magenta** - маджента;
+ **Purple** - фиолетовый.

*Fonts*

+ **Comfortaa** - главный шрифт;
+ **Inter** - вспомогательный шрифт;
+ **Pacifico** - курсивный шрифт;
+ **Helvetica Neue** - шрифт по умолчанию.

--- 

## Использование

Дизайн-систему Apollo можно интегрировать в любой React проект, используя ее компоненты, инструменты и стили для
улучшения
процесса разработки и качества пользовательского интерфейса.
