---
sidebar_position: 14
---

# Есть ли практика выпиливания фич?

## Советы
:::note Совет: TCO, или полная стоимость фичи

Каждая фича, которую вы впиливаете в продукт, стоит денег. Причем бóльшую часть этих денег вы отдаете не за производство фичи, а за поддержку ее на плаву. И чем больше времени фича живет (пусть и заброшенная), тем больше она стóит.

Помните, ту выгрузку в эксель, которую вы сделали год назад за вечер, потому что конец квартала? За год она 5 раз сломалась в процессе разработки, один раз в релизе, не дала команде перейти на новый HTTP-фреймворк и повлияла на тимлида, склонив выбрать неудачный подход к функциональному тестированию (правда он этого не понял).

И неважно, что выгрузкой за год воспользовались два раза — ни один из инженеров, который ее касался, об этом не знал, а значит тратил на нее столько же времени, сколько и на любой другой код в приложении.

Для большинства программистов ваша выгрузка в эксель ничем не отличается от, скажем, авторизации по СМС, которой пользуются 1000 раз в день. Так уж устроен мозг программиста.

На своих проектах я даже поддерживаю процесс выпиливания фич — прям каждый спринт мы ищем и удаляем куски кода от фич, которые не заработали. Иначе бы нам пришлось тянуть в будущее код, который не выполняется, но требует поддержки и денег.

Удаляя функцию вы можете скрыть ее от новых пользователей, а существующим — отправить сообщение, объяснив свое решение и давая время, чтобы они могли подготовиться. Или вы просто можете убрать ее из интерфейса и никогда больше не упоминать о ней.

Сохранение функции, которую мало используют, требует общения. Вам необходимо выделить пользователей, которые пользуются ею и выяснить почему. Найти пользователей, которые не пользуются и, также, выяснить почему.

[Фёдор Борщёв](https://t.me/pmdaily/201)
:::