const cardArray = [
    {
        name: 'c++',
        img: 'images/c++.png'

    },
    {
        name: 'html',
        img: 'images/html.png'

    },
    {
        name: 'javaScript',
        img: 'images/javaScript.png'

    },
    {
        name: 'java',
        img: 'images/java.png'

    },
    {
        name: 'css',
        img: 'images/css.png'

    },
    {
        name: 'ptyhon',
        img: 'images/python.png'

    },
    {
        name: 'c++',
        img: 'images/c++.png'

    },
    {
        name: 'html',
        img: 'images/html.png'

    },
    {
        name: 'javaScript',
        img: 'images/javaScript.png'

    },
    {
        name: 'java',
        img: 'images/java.png'

    },
    {
        name: 'css',
        img: 'images/css.png'

    },
    {
        name: 'ptyhon',
        img: 'images/python.png'

    },

]

cardArray.sort(() => 0.5 - Math.random())
const displayResult = document.querySelector('#result')
const gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

const createBoard = () => {
    cardArray.forEach((item, index) => {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/Cover.png')
        card.setAttribute('data-id', index)
        card.setAttribute('class', "card" )
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    })
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/Cover.png')
        cards[optionTwoId].setAttribute('src', 'images/Cover.png')
        alert('you got it')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'images/happy.jpg')
        cards[optionTwoId].setAttribute('src', 'images/happy.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else{
        cards[optionOneId].setAttribute('src', 'images/Cover.png')
        cards[optionTwoId].setAttribute('src', 'images/Cover.png')
    }
    displayResult.textContent = cardsWon.length
    cardsChosen =[]
    cardsChosenIds = []

    if(cardsWon.length == cardArray.length/2){
        displayResult.textContent = "Finshed"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2){
        setTimeout(checkMatch , 500);
    }
}



