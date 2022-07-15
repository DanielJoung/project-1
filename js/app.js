const decks = {
    rank: ["2","3","4","5","6","7","8","9","10","J","Q","K","A"],
    suit: ["♥︎","♠","♣︎","♦︎"],
    deckOfCard: [],
}

for (let i in decks.rank) {
    for (let j in decks.suit) {
        decks.deckOfCard.push(decks.rank[i] + decks.suit[j])
    }
}

decks.deckOfCard.sort(() => Math.random() - 0.5)
console.log(decks.deckOfCard)


// all the html code
const linkContainer = document.querySelector(".link-container")
const links = document.querySelector(".links")
const deckContainer = document.querySelector(".container")
const potMoney = document.querySelector("#pot_money")
const userMoney = document.querySelector("#user-money")
const btn = document.querySelector(".btn-container")
// make card div,p 
const randomCards = Math.floor(Math.random() * 53) 
const playerDeck1 = document.createElement("div")
const playerDeck2 = document.createElement("div")
const shareDeck1 = document.createElement("div")
const shareDeck2 = document.createElement("div")
const shareDeck3 = document.createElement("div")
const shareDeck4 = document.createElement("div")
const shareDeck5 = document.createElement("div")
const compDeck1 = document.createElement("div")
const compDeck2 = document.createElement("div")
playerDeck1.setAttribute("class","playerDeck1")
playerDeck2.setAttribute("class","playerDeck2")
shareDeck1.setAttribute("class","shareDeck1")
shareDeck2.setAttribute("class","shareDeck2")
shareDeck3.setAttribute("class","shareDeck3")
shareDeck4.setAttribute("class","shareDeck4")
shareDeck5.setAttribute("class","shareDeck5")
compDeck1.setAttribute("class","compDeck1")
compDeck2.setAttribute("class","compDeck2")

// game start 
class Poker {
    constructor(name="",pot) {
        this.name = name;
        this.money = 100;
        this.pot = pot
    }

    start() {
        // put a name
        this.name = prompt("choose user name")
        const user = document.querySelectorAll(".user");
        user.innerHTML = this.name
        // your money start
        userMoney.innerHTML = `$${this.money}`
        startBtn.remove()
        this.money -= 5
        this.pot += 10
        userMoney.innerHTML = `$${this.money}`
        potMoney.innerHTML = `$${this.pot}`
        // pot money start
        potMoney.innerHTML = `$${this.pot}`
        this.deal()
        btn.appendChild(callBtn)
        btn.appendChild(raiseBtn)
        btn.appendChild(checkBtn)
        btn.appendChild(foldBtn)
    }

    call() {

        if (this.money === 0) {
            alert(`${this.name} don't have enought money, want to use cash shop?`)
        }else {
            this.money -= 5;
            this.pot += 10;
            userMoney.innerHTML = `$${this.money}`
            potMoney.innerHTML = `$${this.pot}`
        }
        if(deckContainer.children[8] !== shareDeck4){
            deckContainer.appendChild(shareDeck4)
            shareDeck4.innerHTML = `${decks.deckOfCard[7]}`

        }else if (deckContainer.children[9] !== shareDeck5){
            deckContainer.appendChild(shareDeck5)
            shareDeck5.innerHTML = `${decks.deckOfCard[8]}`
        }
        if (deckContainer.children[9] === shareDeck5) {
            compDeck1.innerHTML = `${decks.deckOfCard[2]}`
            compDeck2.innerHTML = `${decks.deckOfCard[3]}`
            compDeck1.classList.add("deck_bg")
            compDeck2.classList.add("deck_bg")
        }
    }

    raise() {
        if(this.money === 0) {
            alert(`${this.name} don't have enought money, want to use cash shop?`)
        }else {
            this.money -= 10;
            this.pot += 20;
            userMoney.innerHTML = `$${this.money}`
            potMoney.innerHTML = `$${this.pot}`
        }
        if(deckContainer.children[8] !== shareDeck4){
            deckContainer.appendChild(shareDeck4)
            shareDeck4.innerHTML = `${decks.deckOfCard[7]}`
        }else if (deckContainer.children[9] !== shareDeck5){
            deckContainer.appendChild(shareDeck5)
            shareDeck5.innerHTML = `${decks.deckOfCard[8]}`
        }
        if (deckContainer.children[9] === shareDeck5) {
            compDeck1.innerHTML = `${decks.deckOfCard[2]}`
            compDeck2.innerHTML = `${decks.deckOfCard[3]}`
            compDeck1.classList.add("deck_bg")
            compDeck2.classList.add("deck_bg")
        }
    }

    check() {
        if(deckContainer.children[8] !== shareDeck4){
            deckContainer.appendChild(shareDeck4)
            shareDeck4.innerHTML = `${decks.deckOfCard[7]}`
        }else if (deckContainer.children[9] !== shareDeck5){
            deckContainer.appendChild(shareDeck5)
            shareDeck5.innerHTML = `${decks.deckOfCard[8]}`
        }
        if (deckContainer.children[9] === shareDeck5) {
            compDeck1.innerHTML = `${decks.deckOfCard[2]}`
            compDeck2.innerHTML = `${decks.deckOfCard[3]}`
            compDeck1.classList.add("deck_bg")
            compDeck2.classList.add("deck_bg")
        }
    }

    fold() {
        this.pot = 0
        potMoney.innerHTML = `${this.pot}`
        deckContainer.remove()
    }

    deal() {
        setTimeout(() => {
            deckContainer.appendChild(playerDeck1)
            playerDeck1.innerHTML = `${decks.deckOfCard[0]}`
        },300)

        setTimeout(() => {
            deckContainer.appendChild(playerDeck2)
            playerDeck2.innerHTML = `${decks.deckOfCard[1]}`
        },600)

        setTimeout(() => {
            deckContainer.appendChild(compDeck1)

        },900)

        setTimeout(() => {
            deckContainer.appendChild(compDeck2)
            
        },1200)

        setTimeout(() => {
            deckContainer.appendChild(shareDeck1)
            shareDeck1.innerHTML = `${decks.deckOfCard[4]}`
        },1500)

        setTimeout(() => {
            deckContainer.appendChild(shareDeck2)
            shareDeck2.innerHTML = `${decks.deckOfCard[5]}`
        },1800)

        setTimeout(() => {
            deckContainer.appendChild(shareDeck3)
            shareDeck3.innerHTML = `${decks.deckOfCard[6]}`
        },2100)
    }

    win() {
        
    }
}



const poker = new Poker
poker.pot = 0

// all the button
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
    const containerHeight = linkContainer.getBoundingClientRect().height; // I found getBoundingClientRect() on Youtube.
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
    }else {
        linkContainer.style.height = 0
    }
})

const startBtn = document.querySelector(".start") 
startBtn.addEventListener("click", e => {
    e.preventDefault();
    poker.start()
}) 

const callBtn = document.querySelector(".call")
callBtn.addEventListener("click",e => {
    e.preventDefault()
    poker.call()
})

const raiseBtn = document.querySelector(".raise")
raiseBtn.addEventListener("click",e => {
    e.preventDefault()
    poker.raise()
})

const foldBtn = document.querySelector(".fold")
foldBtn.addEventListener("click",e => {
    e.preventDefault()
    poker.fold()
})

const checkBtn = document.querySelector(".check")
checkBtn.addEventListener("click",e => {
    e.preventDefault()
    poker.check()
})

callBtn.remove()
raiseBtn.remove()
checkBtn.remove()
foldBtn.remove()