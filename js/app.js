// all the html code
const linkContainer = document.querySelector(".link-container")
const links = document.querySelector(".links")
const deckContainer = document.querySelector(".container")
const potMoney = document.querySelector("#pot_money")
const userMoney = document.querySelector("#user-money")
const btn = document.querySelector(".btn-container")
const user_hand = document.querySelector(".userHand")
const comp_hand = document.querySelector(".compHand")

// make card box div,p 
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
        this.deck = []
        this.rank =  ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]
        this.suit = ["♥︎","♠","♣︎","♦︎"]
        for (let i in this.rank) {
            for (let j in this.suit) {
                this.deck.push(this.rank[i] + this.suit[j])
            }
        }
        this.shuffle()
    }

    shuffle() {
        for (let i in this.deck) {
            let j = Math.floor(Math.random() * 52);
            let tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
    }

    start() {
        this.shuffle()
        // put a name
        if (this.name === "") {
            this.name = prompt("choose user name")
        }
        if (this.money <= 0) {
            alert("You don't have money, want to use cash shop?")
        }else {
            this.money -= 5
            this.pot += 10
        }
        const user = document.querySelectorAll(".user");
        user.forEach((element) => element.innerHTML = this.name)
        // your money start
        userMoney.innerHTML = `$${this.money}`
        user_hand.innerHTML = ""
        comp_hand.innerHTML = ""
        startBtn.remove()

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
        if (this.money <= 0) {
            alert(`${this.name} don't have enought money, want to use cash shop?`)
        }else {
            this.money -= 5;
            this.pot += 10;
            userMoney.innerHTML = `$${this.money}`
            potMoney.innerHTML = `$${this.pot}`
        }
        if(deckContainer.children[8] !== shareDeck4){
            deckContainer.appendChild(shareDeck4)
            shareDeck4.innerHTML = `${this.deck[7]}`

        }else if (deckContainer.children[9] !== shareDeck5){
            deckContainer.appendChild(shareDeck5)
            shareDeck5.innerHTML = `${this.deck[8]}`
        }
        if (deckContainer.children[9] === shareDeck5) {
            compDeck1.innerHTML = `${this.deck[2]}`
            compDeck2.innerHTML = `${this.deck[3]}`
            compDeck1.classList.add("deck_bg")
            compDeck2.classList.add("deck_bg")
            this.open()
        }
    }

    raise() {
        if(this.money <= 0) {
            alert(`${this.name} don't have enought money, want to use cash shop?`)
        }else {
            this.money -= 10;
            this.pot += 20;
            userMoney.innerHTML = `$${this.money}`
            potMoney.innerHTML = `$${this.pot}`
        }
        if(deckContainer.children[8] !== shareDeck4){
            deckContainer.appendChild(shareDeck4)
            shareDeck4.innerHTML = `${this.deck[7]}`
        }else if (deckContainer.children[9] !== shareDeck5){
            deckContainer.appendChild(shareDeck5)
            shareDeck5.innerHTML = `${this.deck[8]}`
        }
        if (deckContainer.children[9] === shareDeck5) {
            compDeck1.innerHTML = `${this.deck[2]}`
            compDeck2.innerHTML = `${this.deck[3]}`
            compDeck1.classList.add("deck_bg")
            compDeck2.classList.add("deck_bg")
            this.open()
        }
    }

    check() {
        if(deckContainer.children[8] !== shareDeck4){
            deckContainer.appendChild(shareDeck4)
            shareDeck4.innerHTML = `${this.deck[7]}`
        }else if (deckContainer.children[9] !== shareDeck5){
            deckContainer.appendChild(shareDeck5)
            shareDeck5.innerHTML = `${this.deck[8]}`
        }
        if (deckContainer.children[9] === shareDeck5) {
            compDeck1.innerHTML = `${this.deck[2]}`
            compDeck2.innerHTML = `${this.deck[3]}`
            compDeck1.classList.add("deck_bg")
            compDeck2.classList.add("deck_bg")
            this.open()
        }
        
    }

    fold() {
        this.pot = 0
        potMoney.innerHTML = `${this.pot}`
        playerDeck1.remove()
        playerDeck2.remove()
        shareDeck1.remove()
        shareDeck2.remove()
        shareDeck3.remove()
        shareDeck4.remove()
        shareDeck5.remove()
        compDeck1.remove()
        compDeck2.remove()
        callBtn.remove()
        raiseBtn.remove()
        checkBtn.remove()
        foldBtn.remove()
        btn.appendChild(startBtn)
    }

    open() {
            btn.appendChild(openBtn)
    }


    deal() {
        setTimeout(() => {
            deckContainer.appendChild(playerDeck1)
            playerDeck1.innerHTML = `${this.deck[0]}`
        },300)

        setTimeout(() => {
            deckContainer.appendChild(playerDeck2)
            playerDeck2.innerHTML = `${this.deck[1]}`
        },600)

        setTimeout(() => {
            deckContainer.appendChild(compDeck1)

        },900)

        setTimeout(() => {
            deckContainer.appendChild(compDeck2)
            
        },1200)

        setTimeout(() => {
            deckContainer.appendChild(shareDeck1)
            shareDeck1.innerHTML = `${this.deck[4]}`
        },1500)

        setTimeout(() => {
            deckContainer.appendChild(shareDeck2)
            shareDeck2.innerHTML = `${this.deck[5]}`
        },1800)

        setTimeout(() => {
            deckContainer.appendChild(shareDeck3)
            shareDeck3.innerHTML = `${this.deck[6]}`
        },2100)
    }

    newGame() {
        if (deckContainer.children[9] === shareDeck5) {
            playerDeck1.remove()
            playerDeck2.remove()
            shareDeck1.remove()
            shareDeck2.remove()
            shareDeck3.remove()
            shareDeck4.remove()
            shareDeck5.remove()
            compDeck1.remove()
            compDeck2.remove()
            compDeck1.classList.remove("deck_bg")
            compDeck2.classList.remove("deck_bg")
            callBtn.remove()
            raiseBtn.remove()
            checkBtn.remove()
            foldBtn.remove()
            openBtn.remove()
            btn.appendChild(startBtn)
        }
    }

    cash() {
        if(this.money <=0 ) {
            this.money += 100
            userMoney.innerHTML = `$${this.money}`
        }
    }
}

const poker = new Poker
poker.pot = 0



// poker hand I didn't totally make it. I google it ("https://stackoverflow.com/questions/53628131/ranking-poker-hand")
// and fix it, try to understand how it works. 

const ranks = poker.rank
let userRankArray = []
let userSuitArray = []
let compRankArray = []
let compSuitArray = []

function sorted(arr) {
    const arrayHand = arr
    let sortedHand = []
    for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < arrayHand.length; j++) {
            if (ranks[i] === arrayHand[j].charAt(0)) {
                sortedHand.push(arrayHand[j])
            }
        }
    }
    return sortedHand
}
let userSortedHand = sorted([poker.deck[0],poker.deck[1],poker.deck[4],poker.deck[5],poker.deck[6],poker.deck[7],poker.deck[8]])
let compSortedHand = sorted([poker.deck[2],poker.deck[3],poker.deck[4],poker.deck[5],poker.deck[6],poker.deck[7],poker.deck[8]])


function suitAndRank(sortedHand,rankArray,suitArray) {
    for (let i = 0; i < sortedHand.length; i++) {
        let sort = sortedHand;
        rankArray.push(sort[i].charAt(0))
        suitArray.push(sort[i].charAt(1))
    }
}

suitAndRank(userSortedHand,userRankArray,userSuitArray)
suitAndRank(compSortedHand,compRankArray,compSuitArray)

function countSuites(suitArray) {
    let suitCount = {}
    suitArray.forEach(x => {
        suitCount[x] = (suitCount[x] || 0) + 1
    })
    return suitCount
}

countSuites(userSuitArray)
// console.log(countSuites(userSuitArray))
countSuites(compSuitArray)
// console.log(countSuites(compSuitArray))

function countRanks(rankArray) {
    let rankCount = {}
    rankArray.forEach(x => {
        rankCount[x] = (rankCount[x] || 0) + 1
    })
    return rankCount
}
countRanks(userRankArray)
console.log(countRanks(userRankArray))
countRanks(compRankArray)
console.log(countRanks(compRankArray))

function isFlush(suitArray) {
    let cS = countSuites(suitArray)
    if (Object.keys(cS).find(key => cS[key] === 5)) {
        // console.log(Object.keys(cS).find(key => cS[key] === 5))
        return true
    } else {
        return false
    }
}
isFlush(userSuitArray)
// console.log(isFlush(userSuitArray))
isFlush(compSuitArray)
// console.log(isFlush(compSuitArray))

function isStraight(rankArray) {
    let index = ranks.indexOf(rankArray[0])
    let ref = ranks.slice(index, index + 5).join("")
    let section = rankArray.slice(0).join("")
    if (section === "TJQKA" && section === ref) {
        return "ROYALSTRAIGHT"
    } else if (section === "A2345" || section === ref) {
        return "STRAIGHT"
    } else {
        return "FALSE"
    }
}
isStraight(userRankArray)
// console.log(isStraight(userRankArray))
isStraight(compRankArray)
// console.log(isStraight(compRankArray))


function pairs(rankArray) {
    let rS = countRanks(rankArray)
    return Object.keys(rS).filter(key => rS[key] === 2).length
}
pairs(userRankArray)
// console.log(pairs(userRankArray))
pairs(compRankArray)
// console.log(pairs(compRankArray))

function triple(rankArray) {
    let rS = countRanks(rankArray)
    return Object.keys(rS).filter(key => rS[key] === 3).length 
}

function whichHand(rankArray,suitArray,hand) {
    let rS = countRanks(rankArray);
    let cS = countSuites(suitArray)
    if (isFlush(suitArray) === true && isStraight(rankArray) === "ROYALSTRAIGHT") {
        hand.innerHTML = `: Royal Flush`
    } else if (isFlush(suitArray) === true && isStraight(rankArray) === "STRAIGHT") {
        hand.innerHTML = `: Straight Flush`
    } else if (Object.keys(rS).find(key => rS[key] === 4)) {
        hand.innerHTML = `: ${Object.keys(rS).find(key => rS[key] === 4)} Four Of a Kind `
    } else if (triple(rankArray) && pairs(rankArray) === 1) {
        hand.innerHTML = `: ${Object.keys(rS).find(key => rS[key] === 3)} Full House`
    } else if (isFlush(suitArray) /*First issue*/ === true) {
        hand.innerHTML = `: ${Object.keys(cS).find(key => cS[key] === 5)} Flush`
    } else if (isStraight(rankArray) /*Second issue*/ === "STRAIGHT") {
        hand.innerHTML = `: ${rankArray.slice(0).join("")} Straight `
    } else if (triple(rankArray)) {
        hand.innerHTML = `: ${Object.keys(rS).filter(key => rS[key] === 3)} Three Of a Kind`
    } else if (pairs(rankArray) === 2) {
        hand.innerHTML = `: ${Object.keys(rS).filter(key => rS[key] === 2)} Two Pairs `
    } else if (pairs(rankArray) === 1) {
        hand.innerHTML = `: ${Object.keys(rS).filter(key => rS[key] === 2)} Pairs `
    } else {
        hand.innerHTML = `: ${rankArray[rankArray.length - 1]} High Card `
    }
}



// all the button
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
    const containerHeight = linkContainer.getBoundingClientRect().height; 
    // I found getBoundingClientRect() on Youtube (https://www.youtube.com/watch?v=3PHXvlpOkf4)4:00:00
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
    poker.shuffle
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

const cashBtn = document.querySelector(".cash-shop")
cashBtn.addEventListener("click",e => {
    e.preventDefault()
    poker.cash()
})

const openBtn = document.querySelector(".open")
openBtn.addEventListener("click", e => {
    e.preventDefault()
    setTimeout(() => {poker.newGame()},8000)
    whichHand(userRankArray,userSuitArray,user_hand)
    whichHand(compRankArray,compSuitArray,comp_hand)
})

callBtn.remove()
raiseBtn.remove()
checkBtn.remove()
foldBtn.remove()
openBtn.remove()



