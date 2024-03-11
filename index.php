<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mod</title>
</head>

<body class="relative">
    <style>
        .mod {
            display: none;
            position: fixed !important;
            bottom: 50px;
            z-index: 99999999999999;
            right: 84px;
            max-width: 380px;
            height: 508px;
            padding: 25px 25px 59px 25px;
            border-radius: 50px;
            position: relative;
            transition: transform 1s;
            /* Изменено на transform */
            transform: translate(700px);
            background: #fff;
            box-shadow: 0 0 20px 0px #00000017;
        }

        @media screen and (max-width: 767px) {

            .mod {
                display: none;
                position: fixed !important;
                bottom: 0px;
                z-index: 99999999999999;
                right: 0PX;
                max-width: 100%;
                height: 508px;
                padding: 25px 25px 59px 25px;
                border-radius: 50px 50px 0px 0px;
                position: relative;
                transition: transform 1s;
                /* Изменено на transform */
                transform: translateY(700px);
                background: #fff;
                box-shadow: 0 0 20px 0px #00000017;
            }
        }

        .even_mod {
            text-align: left;
            margin: 0px 0;
            background: #EEEEEE;
            /* height: 100%; */
            /* margin-top: 20px; */
            /* margin-bottom: 20px; */
            border-radius: 20px;
            padding: 10px;
        }

        .even_mod p:hover {
            color: #9e9e9e;
            margin: 0 0 5px 0;
            font-weight: 600;
        }

        li.pd10.flex-between.even_mod p {
            color: #9e9e9e;
            margin: 0 0 5px 0;
            font-weight: 600;
        }

        li.pd10.flex-between.odd_mod p {
            color: #9e9e9e;
            margin: 0 0 5px 0;
            font-weight: 600;
        }

        .odd_mod {
            text-align: right;
            margin: 0px 0;
            background: #01ACFF;
            border-radius: 20px;
            padding: 10px;
            color: #fff;
        }

        ul#list {
            height: 100%;
            display: flex;
            width: 100%;
            flex-direction: row-reverse;
            flex-wrap: wrap;
        }

        .flexCenter {
            overflow: scroll;
            /* overflow: hidden; */
            max-height: 400px;
        }

        .flexCenter::-webkit-scrollbar {
            display: none;
        }

        .input_chat_mr {
            /* margin-top: 20px; */
            /* position: absolute; */
            bottom: 14px;
        }

        .mod_logo {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            justify-content: flex-start;
            align-content: center;
        }

        .mod_body {
            position: relative;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        .div_logo_modes {
            margin-right: 7px;
        }

        .block_name_logo_mod p {
            margin: 0;
            padding: 0;
            font-weight: 700;
        }

        .block_name_logo_mod span {
            margin: 0;
            padding: 0;
        }

        .MDR {
            MARGIN-TOP: 20PX;
            margin-bottom: 20px;
        }

        .close_mod {
            border: none;
            background: none;
            position: absolute;
            top: 16px;
            right: 13px;
            padding: 0;
        }

        .relative {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            align-content: center;
        }

        .wd100 {
            width: 100%;
        }

        .input_mod {
            border-radius: 25px;
            padding: 17px 20px;
            border: 1px solid #01ACFF;
        }

        .close_modes_none {
            position: absolute;
            top: 32px;
            right: 37px;
        }

        .close_modes_none button {
            border: none;
            background: none;
            position: relative;
            z-index: 2000;
        }

        .button_modals {
            margin-top: 15PX;
            margin-bottom: 50px;
            display: flex;
            flex-wrap: wrap;
        }

        .button_modals a {
            width: 100%;
            color: #000;
            text-decoration: none;
            padding: 6px 13px;
            display: block;
        }

        .button_modals li {
            border-radius: 9px;
            border: 1px solid #01ACFF;
            margin: 4px;

        }

        .animate-fade-in {
            opacity: 0;
            transform: translateY(50px);
            transition: transform 1s, opacity 3s;
        }

        .animate-fade-in.show {
            opacity: 1;
            transform: translateY(0);
        }

        .nohover {
            font-weight: 500;
        }

        .nohover:hover {
            font-weight: 500;

        }

        .mod_margin-bottom {
            margin-bottom: 20px;
        }

        .button_mod {
            WIDTH: 50PX;
            HEIGHT: 50PX;
            display: flex;
        }

        button#button_id_mod {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 50px;
            justify-content: center;
            align-content: center;
        }

        button#button_id_mod img {
            width: 100%;
        }

        .bot_mod {
            bottom: 14px;
            right: 70px;
        }

        button#close_models {
            display: flex;
            justify-content: flex-end;
            flex-direction: row-reverse;
        }

        .div_ol_big {
            content: "";
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            background: #01ACFF;
            height: 45px;
            border-radius: 50px;
        }

        .div_ol_smail {
            background: #fff;
            width: 27px;
            height: 27px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 1s;
            border-radius: 50px;
            animation: changeSize 1s infinite alternate;
            /* Применяем анимацию с цикличным повторением */
        }

        @keyframes changeSize {
            0% {
                width: 27px;
                /* Начальный размер */
                height: 27px;
            }

            30% {
                width: 30px;
                /* Увеличение размера */
                height: 30px;
            }

            50% {
                width: 32px;
                /* Увеличение размера */
                height: 32px;
            }

            70% {
                width: 30px;
                /* Увеличение размера */
                height: 30px;
            }

            100% {
                width: 27px;
                /* Возвращение к начальному размеру */
                height: 27px;
            }
        }
        
    </style>
<?php include($_SERVER['DOCUMENT_ROOT'] . '/api.php'); ?>
<input type="text" id="userMessage">
<button id="sendMessage">Отправить</button>
<div id="response"></div>

<script>
document.getElementById('sendMessage').addEventListener('click', function() {
    var message = document.getElementById('userMessage').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'api.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var response = JSON.parse(xhr.responseText);
                    console.log('Полученный ответ:', response);
                    if (response && response.hasOwnProperty('assistant_response')) {
                        document.getElementById('response').innerText = response.assistant_response;
                    } else {
                        console.error('Ответ от сервера не содержит ожидаемого поля assistant_response');
                    }
                } catch (error) {
                    console.error('Ошибка при парсинге JSON:', error);
                }
            } else {
                console.error('Ошибка:', xhr.status);
            }
        }
    };
    xhr.send('user_message=' + encodeURIComponent(message));
});
</script>


    <div class="button_mod">
        <button id="button_id_mod"><img src="robot_mod.gif" alt="123"></button>
    </div>
    <span id="buttonFixed"></span>
    <div class="mod" style="position:fixed; font-family: Gilroy !important;">
        <div class="close_modes_none">
            <button id="close_models"> <img src="close_modeks.svg" alt="">1222222</button>
        </div>
        <div class="mod_body">
            <div class="mod_logo">
                <div class="div_logo_modes">
                    <img src="logo_modes.svg" alt="123">
                </div>
                <div class="block_name_logo_mod">
                    <p>Экспресс Дизайн</p>
                    <span>На связи 24/7</span>
                </div>
            </div>

            <div class="flex pd flexCenter wd50 mod_margin-bottom">
                <ul id="list" class=" wd100">

                </ul>

                <span id="script"></span>

            </div>
            <!-- <ul class="button_modals">
            <li ><a href="kwol.ru">Скачать презентацию</a></li>
            <li><a href="kwol.ru">Получить PDF</a></li>
            <li><a href="kwol.ru">Расскажи мне про услуги</a></li>
        </ul> -->
        </div>

        <div class="flex pd  input_chat_mr relative">
            <input id="name" type="text" class="wd100  input_mod" placeholder="Напиши мне.. ">
            <button id="addBtn" class="pd  close_mod"><img src="close_mod.svg" alt=""></button>
            <button onclick="">Запустить Python скрипт</button>
        </div>
    </div>

    <!-- <script>
        const names = document.getElementById('name');
        const addBtn = document.getElementById('addBtn');
        const list = document.getElementById('list');
        const close_models = document.getElementById('close_models');
        const button_id_mod = document.getElementById('button_id_mod');
        const button_mod = document.querySelector('.button_mod');
        const modElement = document.querySelector('.mod');
        const buttonFixed = document.getElementById('buttonFixed');




        button_id_mod.onclick = function (event) {
            runPythonScript();
            button_mod.style.display = 'none';
            buttonFixed.style.display = 'none';
            event.stopPropagation(); // Остановить распространение события
            var w = window.innerWidth;
            if (w < 767) {
                modElement.style.display = 'block';
                modElement.style.transition = 'transform 0.8s';
                modElement.style.transform = 'translateY(100%)'; // Сбросить transform
                setTimeout(() => {
                    modElement.style.transform = 'translateY(0)';
                }, 100);
            } else {

                modElement.style.display = 'block';
                modElement.style.transition = 'transform 0.5s';
                modElement.style.transform = 'translate(100%)'; // Сбросить transform
                setTimeout(() => {
                    modElement.style.transform = 'translate(0)';
                }, 100);
            }

        };

        document.addEventListener('click', function (event) {
            if (modElement.style.display === 'block' && !event.target.closest('.mod') && event.target.id !== 'button_id_mod') {
                close_modelsCL();
            }
        });
        close_models.onclick = function () {
            close_modelsCL();
        };

        function close_modelsCL() {
            event.stopPropagation(); // Остановить распространение события
            var w = window.innerWidth;
            if (w < 767) {
                modElement.style.transform = 'translateY(700px)';
            } else {
                modElement.style.transform = 'translate(700px)';
            }

            setTimeout(() => {
                modElement.style.display = 'none';
                button_mod.style.display = 'block';
                buttonFixed.style.display = 'flex';
            }, 1000)

        }

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                document.getElementById('addBtn').click();
            }
        });

        addBtn.onclick = function () {

            if (names.value === "") {
                return
            }
            addBtn.disabled = true;
            const newNOTES = {
                bot: false,
                title: names.value,
            }

            notes.push(newNOTES);
            render();
            names.value = "";
            const technicalMessage = {
                bot: true,
                title: "Добрый день, сейчас ведутся технические работы, я постараюсь ответить Вам как можно быстрее"
            };
            setTimeout(() => {
                notes.push(technicalMessage);
                render();
                addBtn.disabled = false;
            }, 1200);
        }
        list.onclick = function (event) {
            if (event.target.dataset.index) {
                const index = parseInt(event.target.dataset.index)
                const type = event.target.dataset.type
            }
        }

        function getNOTE(notes, index) {
            let newElement;
            const allElements = list.querySelectorAll('.animate-fade-in');


            allElements.forEach(element => {
                if (element !== list.lastElementChild) {
                    element.classList.remove('show');
                }
            });

            if (notes.bot === true) {
                list.insertAdjacentHTML('beforeend', `
      <li id="amin-${index}" class="pd10 flex-between ${index % 2 === 0 ? 'even_mod' : 'odd_mod MDR'} animate-fade-in">
          <p class="${index % 2 === 0 ? '' : ''}">Экспресс Дизайн</p>
          <div class="${notes.completed ? 'yes' : 'nohover'}">${notes.title}</div> 
      </li>
      `);
            } else if (notes.bot === false) {
                list.insertAdjacentHTML('beforeend', `
      <li id="amin-${index}" class="pd10 flex-between ${index % 2 === 0 ? 'even_mod' : 'odd_mod MDR'} animate-fade-in">
          <div class="${notes.completed ? 'yes' : 'nohover'}">${notes.title}</div> 
      </li>
      `);
            }


            requestAnimationFrame(() => {
                newElement = list.lastElementChild;
                newElement.classList.add('show');

                newElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                    inline: 'end',
                    smooth: 'true'
                });

            });


            allElements.forEach(element => {
                if (element !== newElement) {
                    element.classList.remove('animate-fade-in');
                }
            });

        }
        const notes = [{
            bot: true,
            title: 'Добрый день я бот студии Экспресс Дизайна, подскажу и отвечу на все ваши вопросы. Чем я могу Вам помочь? ',
        }];

        function render() {
            list.innerHTML = '';
            for (let i = 0; i < notes.length; i++) {
                getNOTE(notes[i], i);
            }
        }
        render();
    </script> -->
</body>

</html>