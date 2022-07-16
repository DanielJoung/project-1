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
        this.deck = []
        this.rank =  ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]
        this.suit = ["♥︎","♠","♣︎","♦︎"]
        for (let i in this.rank) {
            for (let j in this.suit) {
                this.deck.push(this.rank[i] + this.suit[j])
            }
        }
        this.shuffle()
        this.pokerHands = {
            pair: ["22","33","44","55","66","77","88","99","TT","JJ","QQ","KK","AA"],
            triple: ["222","333","444","555","666","777","888","999","TTT","JJJ","QQQ","KKK","AAA"],
            poker: ["2222","3333","4444","5555","6666","7777","8888","9999","TTTT","JJJJ","QQQQ","KKKK","AAAA"],
            flush: ["♥︎♥︎♥︎♥︎♥︎","♠♠♠♠♠","♣︎♣︎♣︎♣︎♣︎","♦︎♦︎♦︎♦︎♦︎"],
            straight: ["23456","34567","45678","56789","6789T","789TJ","89TJQ","9TJQK","TJQKA"]
        }
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
        const user = document.querySelector(".user");
        user.innerHTML = this.name
        // your money start
        userMoney.innerHTML = `$${this.money}`
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
        }
        setTimeout(() => {this.newGame()},5000)
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
        }

        setTimeout(() => {this.newGame()},5000)
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
        }
        setTimeout(() => {this.newGame()},5000)
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

    playerHand() {
        const sortHandArr = []
        const player_Hand = [this.deck[0],this.deck[1],this.deck[4],this.deck[5],this.deck[6],this.deck[7],this.deck[8]]
        for (let i in this.rank) {
            for (let j in player_Hand) {
                if(this.rank[i] === player_Hand[j].charAt(0)) {
                    sortHandArr.push(player_Hand[j])
                }
            }
        }
        return sortHandArr
    }   
    
    rankSuitHand(sortHandArr) {
        const rankArr = []
        const suitArr = []
            for (let i in sortHandArr) {
                rankArr.push(sortHandArr[i].charAt(0))
                suitArr.push(sortHandArr[i].charAt(1))
        }
    }


    computerHand() {
        const sortHandArr = []
        const computer_Hand = [this.deck[2],this.deck[3],this.deck[4],this.deck[5],this.deck[6],this.deck[7],this.deck[8]]
        for (let i in this.rank) {
            for (let j in computer_Hand) {
                if(this.rank[i] === computer_Hand[j].charAt(0)) {
                    sortHandArr.push(computer_Hand[j])
                }
            }
        }
        return sortHandArr
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
poker.playerHand()

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

callBtn.remove()
raiseBtn.remove()
checkBtn.remove()
foldBtn.remove()






function PokerHand() {
    //get ranks of hands
  
    const handOne = "10C JC QC KC AC";
    //const handTwo = ('4S 5S 8C AS AD');
  
    let rankArray = [];
    let suitArray = [];
  
    // let rankArrayTwo = [];
    // let suitArrayTwo = [];
  
    const suits = ["C", "D", "H", "S"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];
  
    let arrayHandOne = handOne.split(" ");
    //let arrayHandTwo = handTwo.split(" ");
  
    function sorted() {
      let sortedHand = [];
      for (let i = 0; i < ranks.length; i++) {
        for (let j = 0; j < arrayHandOne.length; j++) {
          if (ranks[i] === arrayHandOne[j].charAt(0)) {
            sortedHand.push(arrayHandOne[j]);
          }
        }
      }
      return sortedHand;
    }
  
    console.log(sorted());
  
    let sortedHandOne = sorted(arrayHandOne);
    //let sortedHandTwo = sortedHand(arrayHandTwo);
    console.log(sortedHandOne);
    function suitAndRank(sortedHandOne) {
      console.log(sorted);
      for (let i = 0; i < sortedHandOne.length; i++) {
        let sted = sortedHandOne;
        rankArray.push(sted[i].charAt(0));
        suitArray.push(sted[i].charAt(1));
      }
    }
  
    suitAndRank(sortedHandOne);
  
    console.log(rankArray, suitArray);
  
    function countSuites(suitArray) {
      let suitCount = {};
      suitArray.forEach(function(x) {
        suitCount[x] = (suitCount[x] || 0) + 1;
      });
      return suitCount;
    }
  
    function countRanks(rankArray) {
      let rankCount = {};
      rankArray.forEach(function(x) {
        rankCount[x] = (rankCount[x] || 0) + 1;
      });
      return rankCount;
    }
  
    function isFlush() {
      let cS = countSuites(suitArray);
      if (Object.keys(cS).find(key => cS[key] === 5)) {
        return true;
      } else {
        return false;
      }
    }
  
    function isStraight() {
      let index = ranks.indexOf(rankArray[0]);
      let ref = ranks.slice(index, index + 5).join("");
      let section = rankArray.slice(0).join("");
      if (section === "10JQKA" && section === ref) {
        return "ROYALSTRAIGHT";
      } else if (section === "A2345" || section === ref) {
        return "STRAIGHT";
      } else {
        return "FALSE";
      }
    }
  
    function pairs() {
      let rS = countRanks(rankArray);
      return Object.keys(rS).filter(key => rS[key] === 2).length;
    }
  
    function whichHand() {
      let rS = countRanks(rankArray);
      if (isFlush() === true && isStraight() === "ROYALSTRAIGHT") {
        console.log("Royal Flush");
      } else if (isFlush() === true && isStraight() === "STRAIGHT") {
        console.log("Straight Flush");
      } else if (Object.keys(rS).find(key => rS[key] === 4)) {
        console.log("Four of a Kind");
      } else if (Object.keys(rS).find(key => rS[key] === 3) && pairs() === 1) {
        console.log("Full House");
      } else if (isFlush() /*First issue*/ === true) {
        console.log("Flush");
      } else if (isStraight() /*Second issue*/ === "STRAIGHT") {
        console.log("Straight");
      } else if (Object.keys(rS).find(key => rS[key] === 3)) {
        console.log("Three of a Kind");
      } else if (pairs() === 2) {
        console.log("Two Pair");
      } else if (pairs() === 1) {
        console.log("Pair");
      } else {
        console.log("High Card", rankArray[rankArray.length - 1]);
      }
    }
  
    return whichHand();
  }
  
  // const hands = ['Royal flush', 'Straight flush', 'Four of a kind', 'Full house',
  //     'Flush', 'Straight', 'Three of a kind', 'Two pairs', 'Pair', 'High card']
  //     //compare ranks of hands and return results
  
  PokerHand();