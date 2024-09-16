# shell-emulator-nodejs
**Задание**
*Разработать эмулятор для языка оболочки ОС. Необходимо сделать работу*
*эмулятора как можно более похожей на сеанс shell в UNIX-подобной ОС.*
*Эмулятор должен запускаться из реальной командной строки, а файл с*
*виртуальной файловой системой не нужно распаковывать у пользователя.*
*Эмулятор принимает образ виртуальной файловой системы в виде файла формата*
*zip. Эмулятор должен работать в режиме CLI.*
*Конфигурационный файл имеет формат json и содержит:*
*• Имя компьютера для показа в приглашении к вводу.*
*• Путь к архиву виртуальной файловой системы.*
*Необходимо поддержать в эмуляторе команды ls, cd и exit, а также*
*следующие команды:*
*1. clear.*
*2. chmod.*
*3. find.*
*Все функции эмулятора должны быть покрыты тестами, а для каждой из*
*поддерживаемых команд необходимо написать 3 теста.*
**Выполнение**
*1. Создать проект и установить библиотеки npm install*
*2. Установить нужные пакеты: npm install yargs adm-zip fs-extra path jest*
*3. Скачать проект на рабочий стол, должна получится такая иерархия:*
*/shell-emulator*
  */src*
    *emulator.js*
    *fsUtils.js*
  */test*
    *emulator.test.js*
  *config.json*
  *package-lock.json*
  *package.json*
*4. Для запуска проекта запускаем командную строку, переходим в папку с эмулятором и используем команду node src/emulator.js --config=./config.json*
*5. Вуаля можем пользоваться командами cd ls exit clear chmod find*
*6. Для запуска тестов прописываем команду npm test*
