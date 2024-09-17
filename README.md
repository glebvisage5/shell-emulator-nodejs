# Привет! Я Глеб. 
### Предоставляю домашнюю работу №1 по конфигурационному управлению. ![](https://user-images.githubusercontent.com/74038190/213844263-a8897a51-32f4-4b3b-b5c2-e1528b89f6f3.png)  
**Задание**  
Разработать эмулятор для языка оболочки ОС. Необходимо сделать работу  
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
**Выполнение** ![](https://user-images.githubusercontent.com/74038190/212257460-738ff738-247f-4445-a718-cdd0ca76e2db.gif)  
*1. Создать проект и установить библиотеки npm install*  
![image](https://github.com/user-attachments/assets/3d19ea5f-7fed-4d1c-92ae-dfed42d16d6f)  
*2. Установить нужные пакеты:* ```html
<h2>Example of code</h2>

<pre>
    <div class="container">
        <div class="block two first">
            <h2>Your title</h2>
            <div class="wrap">
            //Your content
            </div>
        </div>
    </div>
</pre>
```
![image](https://github.com/user-attachments/assets/7993ea3d-0cab-4bf8-bbc6-f35505882870)  
*3. Скачать проект на рабочий стол, должна получится такая иерархия:*  
![image](https://github.com/user-attachments/assets/adf75e43-dc7b-46ed-802f-74077a43b9f6)  
*4. Для запуска проекта запускаем командную строку, переходим в папку с эмулятором и используем команду node src/emulator.js --config=./config.json*  
![image](https://github.com/user-attachments/assets/fea97cb9-a224-4eef-8ca2-7ba33a234ee9)  
*5. Вуаля можем пользоваться командами cd ls exit clear chmod find*  
![image](https://github.com/user-attachments/assets/6397abfb-65f4-485d-a7b6-ea402d0b0926)  
*6. Для запуска тестов прописываем команду npm test*  
![image](https://github.com/user-attachments/assets/81acc940-e06b-4a14-8497-2a5de7a736cb)  
