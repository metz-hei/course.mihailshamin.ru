# С первого раза

> И ещё один банальный софтскилл, которого не хватает 80% программистов, которых я встречал — сдавать работу с первого раза.
> 
> Серьезно, любой менеджер или дизайнер легко вспомнит десяток случаев за последний год, когда программист написал, что пофиксил, а на самом деле ничего не работает.
> 
> Я говорю не про сложные случаи, когда действительно нужен сторонний взгляд — вроде форм заказа, которые принимают номера телефонов только в одном, программисту известном формате.
> 
> Я говорю о простых случаях, которые может заметить кто угодно, банальном «нажимаю на кнопку — получаю ошибку». Непосредственных причин такой хуйни может быть много — CI упал, код не прошёл валидацию\тесты, программист забыл сделать git push.
> 
> А вот фундаментальная причина одна, и ее легко исправить — это непонимание definition of done. В случае бага все просто — баг не воспроизводится на продакшене. В сложных фичах приходится задавать вопросы — что постановщик ожидает получить от фичи? Какие самые частые сценарии использования? В каком виде лучше показывать результат?
> 
> Самое лучшее средство от непонимания definition of done — всегда подкреплять свои слова доказательством. Пофиксил баг — приложи скриншот. Выкатил фичу — запиши видосик.
> 
> Если не понимаешь, что скриншотить/записывать — иди за пониманием задачи к тимлиду или менеджеру.
> 
> Автор [Фёдор Борщёв](https://t.me/pmdaily)