---
sidebar_position: 13
---
# Как боретесь с техническим долгом?

## Почему это важно? 
Техдолг можно сравнить с бомбой замедленного действия. Вроде бы все ничего-ничего, а потом как [бабахнет](https://doka.guide/tools/technical-debt/#k-chemu-privodit-neoplachennyy-teh.-dolg).

## О чем нужно поговорить? 
- Что вы считаете техдолгом?
- Каков объем техдолга?
- Как боретесь с техдолгом?

## Что делать?
### Шаг 1. Договоритесь с определениями
Определите внутри команды, что вы считаете техдолгом. Например:
- Старые версии библиотек
- Проблемы в архитектуре
- Костыли и плохой код
- Лишние или неиспользуемые зависимости
- Недостаточное покрытие тестами или их отсутствие
- Пробелы в документации или ее отсутствие

### Шаг 2. Определите масштаб проблемы
1. Соберите в бэклоге все задачи по этой теме с пометкой `Техдолг`. Каждая карточка должна описывать пользу для бизнеса. 
2. Проведите refactoring meetup, где разберите накопившийся бэклог. Определите приоритет задач и оцените их. Чтобы не утонуть в оценке, оцените первые 10–20 задач, а хвост умножьте на среднюю оценку. Оценка нужна не только для того, чтобы понимать объем проблемы, но и чтобы отслеживать прирост: Если в первом квартале было 700 часов, а стало 800, то все в порядке. А если стало 1400:
   - значит надо увеличивать квоту на рефакторинг — договориться с бизнесом, что мы сейчас будем рефакторить целый месяц или 40% всего времени.
   - разбираться, почему так резко растут долги.
1. Повторяйте встречу раз в месяц или квартал.

### Шаг 3. Договоритесь о принципах инженерной культуры и подумайте, как не усугубить проблему
[Как устроена инженерная культура в компании?](culture.md)

Изолируйте плохой код от основного потока разработки. Прям физически — отдельной виртуалкой и правилом в репозитории «сюда больше не коммитим». Весь новый код должен быть написан вне унаследованных репозиториев.

Начните бороться с Bus-factor. Выпишите список областей релевантных для каждой команды, например, для платформенной команды это: видеосвязь, синхронизация упражнений, инструменты. Каждый разработчик ставит оценку от 1 до 3:
- 1: «Я вообще не понимаю, что это такое, слышал пару раз».
- 2: «Могу делать задачи из этой области».
- 3: «Я суперэксперт в этой области».

Посчитайте медианное значение для каждой области, и проведите серию докладов для своих коллег.

### Шаг 4. Выделите время на погашение техдолга
1. Внедрите технические спринты и/или выделяйте несколько дней между спринтами на погашение.
2. Review code review. В конце каждого месяца выбирайте случайный pull requests и еще раз проводите ревью. Когда ты знаешь, что кто-то за тобой перепроверит, ты более ответственно относишься к ревью.


## Советы 

:::note Когда бороться с тех. долгом

«Если пилишь фичу — сначала сделай так, чтобы ее удобно было добавлять, а только затем — добавляй».

Как бы ужасно (для менеджеров) это ни звучало — в управлении техническим долгом работает отлично. Если техдолг заметно замедляет выполнение задачи — нужно сначала с ним расплатиться, а потом уже браться за задачу.

Пример — у меня в проекте все очень плохо с пермишенами: используется адская мешанина из булевых полей и встроенного во фреймворк говна. Когда бизнес придет с требованием, которое нельзя реализовать без нормального RBAC, я (конечно испробовав все способы этого не делать) сначала сделаю нормальный RBAC, а затем уже решу задачу.

Так мы тратим когнтивиную энергию программиста (то есть деньги заказчика) не на то, чтобы ухудшить кодовую базу ещё одним куском кода, а на то, чтобы улучшить. Если вся команда исповедует такой подход — в долгосрочной перспективе техдолга будет гораздо меньше.

[Фёдор Борщёв](https://t.me/pmdaily/820) 

:::