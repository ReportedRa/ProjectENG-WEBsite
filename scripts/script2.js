let cardsNode = document.querySelector('#cards');
let cards1Node = document.querySelector('#cards_block_1');
let cards2Node = document.querySelector('#cards_block_2');
let fruitsButton = document.querySelector('#fruits');
let vegetablesButton = document.querySelector('#vegetables');
let label = document.querySelector('#label');
let idCategoryJS;
let idCard;
let qID;

let question0 = document.querySelector('#q0');
let question1 = document.querySelector('#q1');
let question2 = document.querySelector('#q2');
let question3 = document.querySelector('#q3');
let question4 = document.querySelector('#q4');

let container0Node = document.querySelector('#container0');
let container1Node = document.querySelector('#container1');
let container2Node = document.querySelector('#container2');
let container3Node = document.querySelector('#container3');
let container4Node = document.querySelector('#container4');

let Cards = [
    {
        ru: ["Яблоко", "Банан", "Ягода", "Апельсин", "Мандарин"],
        foto: ["img/apple.svg", "img/banana.png", "img/berry.png", "img/orange.png", "img/mandarin.png"],
        eng: ["Apple", "Banana", "Berry", "Orange", "Mandarin"],
        transcription: ["|ˈæp(ə)l|", "|bəˈnɑːnə|", "|ˈberɪ|", "|ˈɔːrɪndʒ|", "|ˈmændərɪn|"],
        content: [
            `<p><b>apple chip</b> — ломтик яблока</p>
            <p><b>apple jelly</b> — яблочное желе</p>
            <p><b>An apple fell from the tree</b> - С дерева упало яблоко</p>`,
            `<p><b>green banana</b> — зеленый банан</p>
            <p><b>ripe banana</b> — спелый банан</p>
            <p><b>She was eating a banana</b> - Она ела банан</p>`,
            `<p><b>coffee berry</b> — плод, костянка кофейного дерева</p>
            <p><b>berry juice</b> — ягодный сок</p>
            <p><b>We went berrying in the summer</b> - Летом мы ходили собирать ягоды</p>`,
            `<p><b>orange juice</b> — апельсиновый сок</p>
            <p><b>orange grove</b> — апельсиновая роща</p>
            <p><b>Cut the orange in half</b> - Разрежьте апельсин пополам</p>`,
            `<p><b>mandarin note</b> — нота мандарина</p>
            <p><b>mandarin ochre</b> — светлая охра</p>
            <p><b>She was sufficiently fluent in Mandarin</b> - Она достаточно бегло говорила по-китайски</p>`],
    },
    {
        ru: ["Картошка", "Морковка", "Свекла"],
        foto: ["img/potato.png", "img/carrot.png", "img/beet.png"],
        eng: ["Potato", "Carrot", "Beet"],
        transcription: ["|pəˈteɪtəʊ|", "|ˈkærət|", "|biːt|"],
        content: [
            `<p><b>potato bug</b> — колорадский жук</p>
            <p><b>potato peelings</b> — картофельные очистки</p>
            <p><b>A potato has about 90 calories</b> - В одной картофелине — около 90 калорий</p>`,
            `<p><b>carrot top</b>  — рыжеволосый человек</p>
            <p><b>diced carrot</b> — морковь кубиками</p>
            <p><b>She chopped some carrots for the soup</b> - Она нарезала морковь для супа</p>`,
            `<p><b>table beet</b> — свёкла столовая</p>
            <p><b>beet tops</b> — свекольная ботва</p>
            <p><b>I've planted carrots, parsnips, and beets in the garden</b> - В огороде я посадил морковь, пастернак и свеклу</p>`],
    }
];

viewCards();

fruitsButton.addEventListener('click', function(event) {
    label.innerHTML = 'Фрукты';
    idCategoryJS = event.currentTarget.getAttribute("id");
});
vegetablesButton.addEventListener('click', function(event) {
    label.innerHTML = 'Овощи';
    idCategoryJS = event.currentTarget.getAttribute("id");
});

fruitsButton.addEventListener('click', function() {
    viewCards(idCategoryJS);
});

vegetablesButton.addEventListener('click', function() {
    viewCards(idCategoryJS);
});



function viewCards(idCategoryJS = 'fruits') {
    if (idCategoryJS == 'fruits') {
        cards1Node.innerHTML = '';
        cards2Node.innerHTML = '';
        let count = 0;
        for (let i = 0; i < Cards[0].ru.length; i++) {
            count++;
            if (count > 4)
                cards2Node.insertAdjacentHTML('beforeend', getCloseTemplate(i, idCategoryJS));
            else 
                cards1Node.insertAdjacentHTML('beforeend', getCloseTemplate(i, idCategoryJS));  
    };
    }
    else if (idCategoryJS == 'vegetables') {
        cards1Node.innerHTML = '';
        cards2Node.innerHTML = '';
        let count = 0;
        for (let i = 0; i < Cards[1].ru.length; i++) {
            count++;
            if (count > 4)
                cards2Node.insertAdjacentHTML('beforeend', getCloseTemplate(i, idCategoryJS));
            else
                cards1Node.insertAdjacentHTML('beforeend', getCloseTemplate(i, idCategoryJS));
    };
    }
};

function openCard (idCard){
    if (idCategoryJS == "fruits"){
        switch (idCard){
            case 0: 
            container0.innerHTML = '';
            container0.insertAdjacentHTML('beforeend', getOpenTemplate(0, idCategoryJS));
            break;
            case 1: 
            container1.innerHTML = '';
            container1.insertAdjacentHTML('beforeend', getOpenTemplate(1, idCategoryJS));
            break;
            case 2: 
            container2.innerHTML = '';
            container2.insertAdjacentHTML('beforeend', getOpenTemplate(2, idCategoryJS));
            break;
            case 3: 
            container3.innerHTML = '';
            container3.insertAdjacentHTML('beforeend', getOpenTemplate(3, idCategoryJS));
            break;
            case 4: 
            container4.innerHTML = '';
            container4.insertAdjacentHTML('beforeend', getOpenTemplate(4, idCategoryJS));
            break;
        }
    }
    if (idCategoryJS == "vegetables") {
        switch (idCard){
            case 0:
                container0.innerHTML = '';
                container0.insertAdjacentHTML('beforeend', getOpenTemplate(0, idCategoryJS));
            break;
            case 1:
                container1.innerHTML = '';
                container1.insertAdjacentHTML('beforeend', getOpenTemplate(1, idCategoryJS));
            break;
            case 2:
                container2.innerHTML = '';
                container2.insertAdjacentHTML('beforeend', getOpenTemplate(2, idCategoryJS));
        }
    }
};

function closeCard (idCard){
    if (idCategoryJS == "fruits"){
        switch (idCard){
            case 0:
                container0.innerHTML = '';
                container0.insertAdjacentHTML('beforeend', getCloseAgainTemplate(0, idCategoryJS));
            break;
            case 1: 
                container1.innerHTML = '';
                container1.insertAdjacentHTML('beforeend', getCloseAgainTemplate(1, idCategoryJS));
            break;
            case 2:
                container2.innerHTML = '';
                container2.insertAdjacentHTML('beforeend', getCloseAgainTemplate(2, idCategoryJS));
            break;
            case 3:
                container3.innerHTML = '';
                container3.insertAdjacentHTML('beforeend', getCloseAgainTemplate(3, idCategoryJS));
            break;
            case 4:
                container4.innerHTML = '';
                container4.insertAdjacentHTML('beforeend', getCloseAgainTemplate(4, idCategoryJS));
            break;
        }
    }
    if (idCategoryJS == "vegetables") {
        switch (idCard){
            case 0: 
                container0.innerHTML = '';
                container0.insertAdjacentHTML('beforeend', getCloseAgainTemplate(0, idCategoryJS));
            break;
            case 1: 
                container1.innerHTML = '';
                container1.insertAdjacentHTML('beforeend', getCloseAgainTemplate(1, idCategoryJS));
            break;
            case 2: 
                container2.innerHTML = '';
                container2.insertAdjacentHTML('beforeend', getCloseAgainTemplate(2, idCategoryJS));
            break;
        }
    }
};

function answer(qID) {
    switch(qID){
        case 0:
            if (question0.classList.contains('answer')){
                question0.classList.toggle('answer');
                question0.innerHTML = `<h4>
            Как использовать карточки для изучения английских слов на вашем
            сайте?
          </h4>
          <img onclick="answer(0)" src="img/charm_plus.svg" alt="" />`;
            }
            else {
                question0.classList.toggle('answer');
                question0.innerHTML = `<h4>
                Как использовать карточки для изучения английских слов на вашем
                сайте?
            </h4>
            <h4>
                Открывать и изучать
            </h4>
            <img onclick="answer(0)" src="img/charm_plus.svg" alt="" />`;
            }
        break;
        case 1:
            if (question1.classList.contains('answer')){
                question1.classList.toggle('answer');
                question1.innerHTML = `<h4>
                Как часто обновляется база слов на вашем сайте?
          </h4>
          <img onclick="answer(1)" src="img/charm_plus.svg" alt="" />`;
            }
            else {
                question1.classList.toggle('answer');
                question1.innerHTML = `<h4>
                Как часто обновляется база слов на вашем сайте?
            </h4>
            <h4>
                Каждый понедельник
            </h4>
            <img onclick="answer(1)" src="img/charm_plus.svg" alt="" />`;
            }
        break;
        case 2:
            if (question2.classList.contains('answer')){
                question2.classList.toggle('answer');
                question2.innerHTML = `<h4>
                Могу ли я добавлять собственные слова на сайт для изучения?
          </h4>
          <img onclick="answer(2)" src="img/charm_plus.svg" alt="" />`;
            }
            else {
                question2.classList.toggle('answer');
                question2.innerHTML = `<h4>
                Могу ли я добавлять собственные слова на сайт для изучения?
            </h4>
            <h4>
                Конечно
            </h4>
            <img onclick="answer(2)" src="img/charm_plus.svg" alt="" />`;
            }
        break;
        case 3:
            if (question3.classList.contains('answer')){
                question3.classList.toggle('answer');
                question3.innerHTML = `<h4>
                Как отслеживать свой прогресс в изучении новых слов?
          </h4>
          <img onclick="answer(3)" src="img/charm_plus.svg" alt="" />`;
            }
            else {
                question3.classList.toggle('answer');
                question3.innerHTML = `<h4>
                Как отслеживать свой прогресс в изучении новых слов?
            </h4>
            <h4>
                В личном кабинете можно отслеживать прогресс в изучении новых слов
            </h4>
            <img onclick="answer(3)" src="img/charm_plus.svg" alt="" />`;
            }
        break;
        case 4:
            if (question4.classList.contains('answer')){
                question4.classList.toggle('answer');
                question4.innerHTML = `<h4>
                Могу ли я изучать слова не только на компьютере, но и на мобильном
            устройстве?
          </h4>
          <img onclick="answer(4)" src="img/charm_plus.svg" alt="" />`;
            }
            else {
                question4.classList.toggle('answer');
                question4.innerHTML = `<h4>
                Могу ли я изучать слова не только на компьютере, но и на мобильном
            устройстве?
            </h4>
            <h4>
                Всегда да
            </h4>
            <img onclick="answer(4)" src="img/charm_plus.svg" alt="" />`;
            }
        break;
    }
};

function getCloseTemplate (id, idCategoryJS) {
    if (idCategoryJS == 'fruits') {
        return `
        <div id="container${id}">
        <div class="main_cards_block_item">
            <div class="main_cards_block_item_content">
            <div class="main_cards_block_item_content_text">
                <div class="main_cards_block_item_content_text_name">
                    <div class="main_cards_block_item_content_text_name_img">
                        <img src="${Cards[0].foto[id]}" alt="" />
                    </div>
                <h4>${Cards[0].ru[id]}</h4>
                </div>
                <p></p>
            </div>
            <p href="#" onclick="openCard(${id})" class="btn_medium">Открыть</p>
            </div>
        </div>
        </div>`;
    }
    else if (idCategoryJS == 'vegetables'){
        return `
        <div id="container${id}">
        <div class="main_cards_block_item">
            <div class="main_cards_block_item_content">
            <div class="main_cards_block_item_content_text">
                <div class="main_cards_block_item_content_text_name">
                    <div class="main_cards_block_item_content_text_name_img">
                        <img src="${Cards[1].foto[id]}" alt="" />
                    </div>
                <h4>${Cards[1].ru[id]}</h4>
                </div>
                <p></p>
            </div>
            <p href="#" onclick="openCard(${id})" class="btn_medium">Открыть</p>
            </div>
        </div>
        </div>`;
    }
};

function getCloseAgainTemplate (id, idCategoryJS) {
    if (idCategoryJS == 'fruits') {
        return `
        <div class="main_cards_block_item">
            <div class="main_cards_block_item_content">
            <div class="main_cards_block_item_content_text">
                <div class="main_cards_block_item_content_text_name">
                    <div class="main_cards_block_item_content_text_name_img">
                        <img src="${Cards[0].foto[id]}" alt="" />
                    </div>
                <h4>${Cards[0].ru[id]}</h4>
                </div>
                <p></p>
            </div>
            <p href="#" onclick="openCard(${id})" class="btn_medium">Открыть</p>
            </div>
        </div>`;
    }
    else if (idCategoryJS == 'vegetables'){
        return `
        <div class="main_cards_block_item">
            <div class="main_cards_block_item_content">
            <div class="main_cards_block_item_content_text">
                <div class="main_cards_block_item_content_text_name">
                    <div class="main_cards_block_item_content_text_name_img">
                        <img src="${Cards[1].foto[id]}" alt="" />
                    </div>
                <h4>${Cards[1].ru[id]}</h4>
                </div>
                <p></p>
            </div>
            <p href="#" onclick="openCard(${id})" class="btn_medium">Открыть</p>
            </div>
        </div>`;
    }
};

function getOpenTemplate (id, idCategoryJS) {
    if (idCategoryJS == 'fruits'){
        return `
        <div class="main_cards_block_item">
        <div class="main_cards_block_item_content">
          <div class="main_cards_block_item_content_text">
            <div class="main_cards_block_item_content_text_name">
              <h4>${Cards[0].eng[id]}</h4>
              <h4>${Cards[0].transcription[id]}</h4>
            </div>
            ${Cards[0].content[id]}
          </div>
          <p href="#" onclick="closeCard(${id})" class="btn_medium">Закрыть</p>
        </div>
        </div>`;
    }
    else if (idCategoryJS == 'vegetables'){
        return `
        <div class="main_cards_block_item">
        <div class="main_cards_block_item_content">
          <div class="main_cards_block_item_content_text">
            <div class="main_cards_block_item_content_text_name">
              <h4>${Cards[1].eng[id]}</h4>
              <h4>${Cards[1].transcription[id]}</h4>
            </div>
            ${Cards[1].content[id]}
          </div>
          <p href="#" onclick="closeCard(${id})" class="btn_medium">Закрыть</p>
        </div>
        </div>`
    }
};
