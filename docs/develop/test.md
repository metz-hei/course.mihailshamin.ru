---
sidebar_position: 7
---
# Как устроено тестирование?

1. [Какие тесты](https://bureau.ru/soviet/20191024/) пишутся? Когда пишутся?

2. Пишутся ли юнит-тесты?
   - Каким принципам соответствуют тесты?
     - Быть достоверными
     - Не зависеть от окружения, на котором они выполняются
     - Легко поддерживаться
     - Легко читаться и быть простыми для понимания
     - Соблюдать единую конвенцию именования
     - Запускаться регулярно в автоматическом режиме
   - Есть ли какой-то регламент по написанию тестов?
     - «Говорящие» названия методов: [Тестируемый метод]_[Сценарий]_[Ожидаемое поведение]
       ```
       сlass CalculatorTests
       {
               public void Sum_2Plus5_7Returned()
               {
             // …
               }
       }
       ```
   - Когда пишутся тесты? Как это встроено в процесс разработки?
   - Как мы понимаем, что надо покрыть тестами, а что нет?
   - Внедрена ли техника разработки TDD?
   - Какой фреймворк используется?
   - Покрываются ли негативные сценарии?
   - Как проверять качество тестов? Мутационный фреймворк?
3. Тестируется ли API? 
   - Какой софт используется?
   - Какой процент покрытия? 
   - Интегрированы ли в CI/CD?
   - Настроен ли мониторинг состояния API? Куда летят нотификации?
4. Как проводите визуальное тестирование фронта?
   - Используете ли storybook в связке с chromatic?
   - Интегрированы ли тесты в CI/CD?
5. Каков [процент покрытия тестами](https://bureau.ru/soviet/20191017/) на бэке и фронте?
6. Какие виды тестирования проводятся?
   - Нагрузочное тестирование
       - Объемное тестирование — оценка производительности при увеличении объемов данных в БД.
       - Тестирование стабильности — работа под нагрузкой длительное время. Проводят перед крупными релизами.
   - Тестирование безопасности
     - Как часто?
     - Как проводится?
       - Чек-лист Open Web Application Security Project (OWASP)
       - Тесты на проникновение (пентесты). Часто заказывают на аутсорсе: Лаборатория Касперского, GroupIB, BiZone
       - Сканирование: Burp Suite, acunetix, nessus
       - Файрволы (сканируют трафик): Imperva, F5, Nginx plus, Wallarm, Cloudflare
   - Тесты под разные устройства. Каков парк устройств?
   - Тесты под разные браузеры. Какой браузер целевой?
   - Тестирование локализации
   - Имитация плохих сетевых условий
7. Используется ли ручное тестирование?
   - Пишутся ли [тест-планы](./docs/test-plan.md) по задаче?
   - Где хранятся [тест-кейсы](./docs/test-case.md)?
   - Каков процент покрытие кейсами?
   - Как и когда проходит регрессионное тестирование? Какие кейсы входят в регресс? Сколько времени занимают прогоны?
   - Когда тестировщики пишут тест-кейсы?

## Инструменты

Фронтовые тесты (UI or E2E):
- Puppeteer
- [Jest](https://jestjs.io/ru/)
- [Hermione](https://yandex.ru/dev/hermione/)
- [Enzyme](https://airbnb.io/enzyme/index.html)

Нагрузочное тестирование:
- JMeter
- Яндекс.Танк

Ручное тестирование под разные устройства:
- [iloveadaptive.com/ru](http://iloveadaptive.com/ru/)
- [responsively.app](https://responsively.app/)
- Плагин для Google Chrome: [Responsive Viewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?fbclid=IwAR14zjRPQ0O_28xb482xFeCkOAw7LhNc6Y4Yi7KWRTLkF1lWuNcRwMoXEKU)