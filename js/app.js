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
        this.userDeck
        this.compDeck
        // this.newDeck()
        this.shuffle()
    }

    shuffle() {
        for (let i in this.deck) {
            let j = Math.floor(Math.random() * 52);
            let tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
        this.userDeck = [this.deck[0],this.deck[1],this.deck[4],this.deck[5],this.deck[6],this.deck[7],this.deck[8]]
        this.compDeck = [this.deck[2],this.deck[3],this.deck[4],this.deck[5],this.deck[6],this.deck[7],this.deck[8]]
    }

    start() {
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
        user.forEach((element) => element.innerText = this.name)
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
        openBtn.remove()
        callBtn.remove()
        raiseBtn.remove()
        checkBtn.remove()
        foldBtn.remove()
        btn.appendChild(startBtn)
    }

    open() {
        btn.appendChild(openBtn)
    }

    openCard() {
        compDeck1.classList.add("deck_bg")
        compDeck2.classList.add("deck_bg")

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
function PokerRank() {
    let ranks = poker.rank
    let userRankArray = []
    let userSuitArray = []
    let compRankArray = []
    let compSuitArray = []
    poker.userDeck
    poker.compDeck
    
    function sorted(arr) {
        let arrayHand = arr
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
    
    let userSortedHand = sorted(poker.userDeck)
    let compSortedHand = sorted(poker.compDeck)
    
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
    countSuites(compSuitArray)
    
    function countRanks(rankArray) {
        let rankCount = {}
        rankArray.forEach(x => {
            rankCount[x] = (rankCount[x] || 0) + 1
        })
        return rankCount
    }
    countRanks(userRankArray)
    countRanks(compRankArray)
    
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
    isFlush(compSuitArray)

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
    isStraight(compRankArray)

    function pairs(rankArray) {
        let rS = countRanks(rankArray)
        return Object.keys(rS).filter(key => rS[key] === 2).length
    }
    pairs(userRankArray)
    pairs(compRankArray)

    
    function triple(rankArray) {
        let rS = countRanks(rankArray)
        return Object.keys(rS).filter(key => rS[key] === 3).length 
    }
    triple(userRankArray)
    triple(compRankArray)
    
    function whichHand(rankArray,suitArray,hand) {
        let rS = countRanks(rankArray)
        let cS = countSuites(suitArray)
        if (isFlush(suitArray) === true && isStraight(rankArray) === "ROYALSTRAIGHT") {
            hand.innerHTML = `: Royal Flush`
        } else if (isFlush(suitArray) === true && isStraight(rankArray) === "STRAIGHT") {
            hand.innerHTML = `: Straight Flush`
        } else if (Object.keys(rS).find(key => rS[key] === 4)) {
            hand.innerHTML = `${Object.keys(rS).find(key => rS[key] === 4)} Four Of a Kind `
        } else if (triple(rankArray) && pairs(rankArray) === 1) {
            hand.innerHTML = `${Object.keys(rS).find(key => rS[key] === 3)} Full House`
        } else if (isFlush(suitArray) /*First issue*/ === true) {
            hand.innerHTML = `${Object.keys(cS).find(key => cS[key] === 5)} Flush`
        } else if (isStraight(rankArray) /*Second issue*/ === "STRAIGHT") {
            hand.innerHTML = `${rankArray.slice(0).join("")} Straight `
        } else if (triple(rankArray)) {
            hand.innerHTML = `${Object.keys(rS).filter(key => rS[key] === 3)} Three Of a Kind`
        } else if (pairs(rankArray) === 2) {
            hand.innerHTML = `${Object.keys(rS).filter(key => rS[key] === 2)} Two Pairs `
        } else if (pairs(rankArray) === 1) {
            hand.innerHTML = `${Object.keys(rS).filter(key => rS[key] === 2)} Pairs `
        } else {
            hand.innerHTML = `${rankArray[rankArray.length - 1]} High Card `
        }
    }
    whichHand(compRankArray,compSuitArray,comp_hand)
    whichHand(userRankArray,userSuitArray,user_hand)
}


function result() {
    if (user_hand.innerHTML.slice(2) === "Pairs") {
        if (comp_hand.innerHTML.slice(2) === "Pairs") {
            if (parseInt(user_hand.innerHTML[0]) === NaN) {
                if(parseInt(comp_hand.innerHTML[0]) !== NaN) {
                    poker.money += poker.pot
                    poker.pot = 0
                    userMoney.innerHTML = `$${poker.money}`
                    potMoney.innerHTML = `$${poker.pot}`
                }else if (parseInt(comp_hand.innerHTML[0]) === NaN) {
                    if (user_hand.innerHTML[0] === "J") {
                        if(comp_hand.innerHTML[0] === "Q" || comp_hand.innerHTML[0] === "K" || comp_hand.innerHTML[0] === "A") {
                            poker.pot = 0 
                            potMoney.innerHTML = `$${poker.pot}`
                        }
                    }else if (user_hand.innerHTML[0] === "Q") {
                        if (comp_hand.innerHTML[0] === "K" || comp_hand.innerHTML[0] === "A") {
                            poker.pot = 0 
                            potMoney.innerHTML = `$${poker.pot}`
                        }
                    }else if (user_hand.innerHTML[0] === "K") {
                        if (comp_hand.innerHTML[0] === "A") {
                            poker.pot = 0 
                            potMoney.innerHTML = `$${poker.pot}`
                        }
                    }else {
                        poker.money += poker.pot
                        poker.pot = 0
                        userMoney.innerHTML = `$${poker.money}`
                        potMoney.innerHTML = `$${poker.pot}`
                    }
                }
            }
        }
    }
}

function convertWord(letter) {
    if (letter === "2") return 2
    if (letter === "3") return 3
    if (letter === "4") return 4
    if (letter === "5") return 5
    if (letter === "6") return 6
    if (letter === "7") return 7
    if (letter === "8") return 8
    if (letter === "9") return 9
    if (letter === "T") return 10
    if (letter === "J") return 11
    if (letter === "Q") return 12
    if (letter === "K") return 13
    if (letter ==="A") return 14
}

function result() {
    if (user_hand.innerHTML === comp_hand.innerHTML) {
        alert("It's tie, play next game")
    }
    if (user_hand.innerHTML.slice(2) === "High Card") {
        if (comp_hand.innerHTML.slice(2) === "High Card") {
            if (convertWord(user_hand.innerHTML[0]) > convertWord(comp_hand.innerHTML[0])) {
                poker.money += poker.pot
                poker.pot = 0 
                userMoney.innerHTML = `$${poker.money}`
                potMoney.innerHTML = `$${poker.pot}`
            }else if (convertWord(user_hand.innerHTML[0]) < convertWord(comp_hand.innerHTML[0])) {
                poker.pot = 0
                potMoney.innerHTML = `$${poker.pot}`
            }
        }else if (comp_hand.innerHTML.slice(2) === "Pairs") {
            poker.pot = 0
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(4) === "Two Pairs") {
            poker.pot = 0
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Three Of A Kind") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Straight") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Full House") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Four Of A Kind") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Straight Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Royal Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }
    }
    
    if (user_hand.innerHTML.slice(2) === "Pairs") {
        if (comp_hand.innerHTML.slice(2) === "High Card") {
            poker.money += poker.pot
            poker.pot = 0 
            userMoney.innerHTML = `$${poker.money}`
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Pairs") {
            if (convertWord(user_hand.innerHTML[0]) < convertWord(comp_hand.innerHTML[0])) {
                poker.pot = 0 
                potMoney.innerHTML = `$${poker.pot}`
            }
            }else if (convertWord(user_hand.innerHTML[0]) > convertWord(comp_hand.innerHTML[0])) {
                poker.money += poker.pot
                poker.pot = 0 
                userMoney.innerHTML = `$${poker.money}`
                potMoney.innerHTML = `$${poker.pot}`
            }
        }else if (comp_hand.innerHTML.slice(4) === "Two Pairs") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Three Of A Kind") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Straight") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Full House") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Four Of A Kind") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Straight Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Royal Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }

    if (user_hand.innerHTML.slice(4) === "Two Pairs") {
        if (comp_hand.innerHTML.slice(2) === "High Card") {
            poker.money += poker.pot
            poker.pot = 0 
            userMoney.innerHTML = `$${poker.money}`
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Pairs") {
            poker.money += poker.pot
            poker.pot = 0 
            userMoney.innerHTML = `$${poker.money}`
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(4) === "Two Pairs") {
            if (convertWord(user_hand.innerHTML[2]) > convertWord(comp_hand.innerHTML[2])) {
                poker.money += poker.pot
                poker.pot = 0 
                userMoney.innerHTML = `$${poker.money}`
                potMoney.innerHTML = `$${poker.pot}`
            }else if (convertWord(user_hand.innerHTML[2]) < convertWord(comp_hand.innerHTML[2])) {
                poker.pot = 0 
                potMoney.innerHTML = `$${poker.pot}`
            }
        }else if (comp_hand.innerHTML.slice(2) === "Three Of A Kind") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Straight") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Full House") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Four Of A Kind") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Straight Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }else if (comp_hand.innerHTML.slice(2) === "Royal Flush") {
            poker.pot = 0 
            potMoney.innerHTML = `$${poker.pot}`
        }
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
    poker.openCard()
    foldBtn.remove()
    PokerRank()
    // setTimeout(()=>{result()},1000)
    result()
    console.log(convertWord(user_hand.innerHTML[0]))
    console.log(convertWord(comp_hand.innerHTML[0]))
    poker.shuffle()
    setTimeout(() => {poker.newGame()},4000)
})

callBtn.remove()
raiseBtn.remove()
checkBtn.remove()
foldBtn.remove()
openBtn.remove()
