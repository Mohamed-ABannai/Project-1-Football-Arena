/*-------------------------------- Constants --------------------------------*/

const categories = {

    gaInstructor: [
        { image: "./assets/Ga-Instructor/Duaa.jpeg", matchId: "duaa" },
        { image: "./assets/Ga-Instructor/Jameela.png", matchId: "jameela" },
        { image: "./assets/Ga-Instructor/Nahid.jpeg", matchId: "nahid" },
        { image: "./assets/Ga-Instructor/Omer.png", matchId: "omer" },
        { image: "./assets/Ga-Instructor/Reem.jpeg", matchId: "reem" },
        { image: "./assets/Ga-Instructor/Sara.png", matchId: "sara" },
        { image: "./assets/Ga-Instructor/SayedHamid.png", matchId: "sayedhamid" },
        { image: "./assets/Ga-Instructor/Zahra.png", matchId: "zahra" }
    ],

    oldVsNewClubLogo: [
        { image: "./assets/OldvNewClubLogo/AlnasserNewLogo.png", matchId: "alnasser" },
        { image: "./assets/OldvNewClubLogo/AlnasserOldLogo.png", matchId: "alnasser" },

        { image: "./assets/OldvNewClubLogo/AtleticoNewLogo.png", matchId: "atletico" },
        { image: "./assets/OldvNewClubLogo/AtleticoOldLogo.png", matchId: "atletico" },

        { image: "./assets/OldvNewClubLogo/BarcelonaNewLogo.png", matchId: "barcelona" },
        { image: "./assets/OldvNewClubLogo/BarcelonaOldLogo.png", matchId: "barcelona" },

        { image: "./assets/OldvNewClubLogo/BournemouthNewLogo.png", matchId: "bournemouth" },
        { image: "./assets/OldvNewClubLogo/BournemouthOldLogo.png", matchId: "bournemouth" },

        { image: "./assets/OldvNewClubLogo/LeicesterCityNewLogo.png", matchId: "leicester" },
        { image: "./assets/OldvNewClubLogo/LeicesterCityOldLogo.png", matchId: "leicester" },

        { image: "./assets/OldvNewClubLogo/MCNewLogo.png", matchId: "mc" },
        { image: "./assets/OldvNewClubLogo/MCOldLogo.png", matchId: "mc" },

        { image: "./assets/OldvNewClubLogo/RomaNewLogo.png", matchId: "roma" },
        { image: "./assets/OldvNewClubLogo/RomaOldLogo.png", matchId: "roma" },

        { image: "./assets/OldvNewClubLogo/villarrealNewLogo.png", matchId: "villarreal" },
        { image: "./assets/OldvNewClubLogo/villarrealOldLogo.png", matchId: "villarreal" }
    ],

    playerWithName: [
        { image: "./assets/PlayerWithName/HaalandPlayer.png", matchId: "haaland" },
        { image: "./assets/PlayerWithName/HaalandName.png", matchId: "haaland" },

        { image: "./assets/PlayerWithName/JudePlayer.png", matchId: "jude" },
        { image: "./assets/PlayerWithName/JudeName.png", matchId: "jude" },

        { image: "./assets/PlayerWithName/LaminePlayer.png", matchId: "lamine" },
        { image: "./assets/PlayerWithName/LamineName.png", matchId: "lamine" },

        { image: "./assets/PlayerWithName/LukakuPlayer.png", matchId: "lukaku" },
        { image: "./assets/PlayerWithName/LukakuName.png", matchId: "lukaku" },

        { image: "./assets/PlayerWithName/MbappePlayer.png", matchId: "mbappe" },
        { image: "./assets/PlayerWithName/MbappeName.png", matchId: "mbappe" },

        { image: "./assets/PlayerWithName/RonaldoImages.png", matchId: "ronaldo" },
        { image: "./assets/PlayerWithName/RonaldoName.png", matchId: "ronaldo" },

        { image: "./assets/PlayerWithName/ViniPlayer.png", matchId: "vini" },
        { image: "./assets/PlayerWithName/ViniName.png", matchId: "vini" },

        { image: "./assets/PlayerWithName/ZidanePlayer.png", matchId: "zidane" },
        { image: "./assets/PlayerWithName/ZidanName.png", matchId: "zidane" }
    ],

    saudiLeague: [
        { image: "./assets/SaudiLeague/AbdullaPlayer.png", matchId: "abdulla" },
        { image: "./assets/SaudiLeague/AlkassarPlayer.png", matchId: "alkassar" },
        { image: "./assets/SaudiLeague/JangPlayer.jpeg", matchId: "jang" },
        { image: "./assets/SaudiLeague/MajedPlayer.jpeg", matchId: "majed" },
        { image: "./assets/SaudiLeague/MuradPlayer.png", matchId: "murad" },
        { image: "./assets/SaudiLeague/NawafPlayer.jpg", matchId: "nawaf" },
        { image: "./assets/SaudiLeague/QouninosPlayer.png", matchId: "qouninos" },
        { image: "./assets/SaudiLeague/SalemPlayer.png", matchId: "salem" }
    ]

}


/*---------------------------- Variables (state) ----------------------------*/

const selectedCategory = localStorage.getItem("category")

const selectedLevel = localStorage.getItem("level")

const selectedCards = categories[selectedCategory]

let gameCards = []

let defaultImage

let firstCard = null

let matchedCards = []

let lockCards = false

let closeCardsTimer


/*------------------------ Cached Element References ------------------------*/

const categoryElements = document.querySelectorAll(".Categories")

const levelElements = document.querySelectorAll(".Level")

const cards = document.querySelectorAll(".card-front")


/*-------------------------------- Functions --------------------------------*/

function prepareCards() {

    if (selectedCards) {

        if (selectedCards.length === 8) {

            for (let i = 0; i < selectedCards.length; i++) {

                gameCards.push(selectedCards[i])

            }

            for (let i = 0; i < selectedCards.length; i++) {

                gameCards.push(selectedCards[i])

            }

        }

        else {

            for (let i = 0; i < selectedCards.length; i++) {

                gameCards.push(selectedCards[i])

            }

        }

    }

}


function selectCategory(event) {

    if (event.target.id === "PlayernName") {

        localStorage.setItem("category", "playerWithName")

    }

    else if (event.target.id === "Clubs-Logo") {

        localStorage.setItem("category", "oldVsNewClubLogo")

    }

    else if (event.target.id === "Saudi-League") {

        localStorage.setItem("category", "saudiLeague")

    }

    else if (event.target.id === "GA-Instructor") {

        localStorage.setItem("category", "gaInstructor")

    }

}


function selectLevel(event) {

    if (event.target.id === "Easy") {

        localStorage.setItem("level", "Easy")

    }

    else if (event.target.id === "Medium") {

        localStorage.setItem("level", "Medium")

    }

    else if (event.target.id === "Hard") {

        localStorage.setItem("level", "Hard")

    }

}


function setDefaultImage() {

    if (selectedCategory === "playerWithName") {

        defaultImage = "./assets/PlayerWithName.png"

    }

    else if (selectedCategory === "oldVsNewClubLogo") {

        defaultImage = "./assets/OldWithNew.png"

    }

    else if (selectedCategory === "saudiLeague") {

        defaultImage = "./assets/SaudiLeague.png"

    }

    else if (selectedCategory === "gaInstructor") {

        defaultImage = "./assets/General-Assembley.png"

    }

}


function showDefaultImage() {

    for (let i = 0; i < cards.length; i++) {

        cards[i].style.backgroundImage = `url("${defaultImage}")`

    }

}


function shuffleCards() {

    gameCards.sort(function () {

        return Math.random() - 0.5

    })

}


function showCard(index) {

    if (lockCards === true) {

        return

    }

    if (index === firstCard) {

        return

    }

    if (matchedCards.includes(index)) {

        return

    }

    cards[index].style.backgroundImage = `url("${gameCards[index].image}")`

    if (firstCard === null) {

        firstCard = index

    }

    else {

        checkCards(index)

    }

}


function checkCards(index) {

    if (gameCards[firstCard].matchId === gameCards[index].matchId) {

        correctMatch(index)

    }

    else {

        wrongMatch(index)

    }

}


function correctMatch(index) {

    matchedCards.push(firstCard)

    matchedCards.push(index)

    firstCard = null

}


function wrongMatch(index) {

    lockCards = true

    let wrongCard = firstCard

    closeCardsTimer = setTimeout(function () {

        cards[wrongCard].style.backgroundImage = `url("${defaultImage}")`

        cards[index].style.backgroundImage = `url("${defaultImage}")`

        firstCard = null

        lockCards = false

    }, 700)

}


prepareCards()

setDefaultImage()

shuffleCards()

showDefaultImage()


/*----------------------------- Event Listeners -----------------------------*/

for (let oneCategory of categoryElements) {

    oneCategory.addEventListener("click", selectCategory)

}


for (let oneLevel of levelElements) {

    oneLevel.addEventListener("click", selectLevel)

}


for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener("click", function () {

        showCard(i)

    })

}