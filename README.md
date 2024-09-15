# shell-emulator-nodejs
1. Создать проект и установить библиотеки npm install
2. Установить нужные пакеты: npm install yargs adm-zip fs-extra path jest
3. Создать config.json для доступа к виртуальной файловой системе и наименования компьютера
4. Скачать проект на рабочий стол, должна получится такая иерархия:
/shell-emulator
  /src
    emulator.js
    fsUtils.js
  /test
    emulator.test.js
  config.json
  package-lock.json
  package.json
5. Для запуска проекта запускаем командную строку, переходим в папку с эмулятором и используем команду node src/emulator.js --config=./config.json
6. Вуаля можем пользоваться командами cd ls exit clear chmod find
7. Для запуска тестов прописываем команду npm test
