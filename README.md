# Приложение для учета личных финансов.

[![Build Status](https://travis-ci.com/Kyzyl-ool/1c-test-project.svg?branch=master)](https://travis-ci.com/Kyzyl-ool/1c-test-project)

Ссылка на приложение: https://kyzyl-ool.github.io/1c-test-project/

Предполагается, что приложение будет полностью клиентским.

Данные сохраняются в localStorage.

Пользователь может внести запись со следующими полями:
 - Дата и время
 - Название записи
 - Сумма
 - Доход / расход
 - Категория

Каждая категория характеризуется:
 - Названием
 - Цветом
 
По ходу внесения записей на главном экране будет видно, откуда приходят и куда уходят деньги.
Для визуализации используется [вот такая](https://www.amcharts.com/demos/sunburst-chart/) круговая диаграмма.