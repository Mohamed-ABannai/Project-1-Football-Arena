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


/*------------------------ Cached Element References ------------------------*/

const categoryElements = document.querySelectorAll(".Categories")

const levelElements = document.querySelectorAll(".Level")

const cards = document.querySelectorAll(".card-front")


/*-------------------------------- Functions --------------------------------*/

function selectCategory(event) {

    if (event.target.id === "PlayernName") {

        console.log("Player With Name")

        localStorage.setItem("category", "playerWithName")

    }

    else if (event.target.id === "Clubs-Logo") {

        console.log("Clubs Logo")

        localStorage.setItem("category", "oldVsNewClubLogo")

    }

    else if (event.target.id === "Saudi-League") {

        console.log("Saudi League")

        localStorage.setItem("category", "saudiLeague")

    }

    else if (event.target.id === "GA-Instructor") {

        console.log("GA Instructor")

        localStorage.setItem("category", "gaInstructor")

    }

}


function selectLevel(event) {

    if (event.target.id === "Easy") {

        console.log("Easy")

        localStorage.setItem("level", "Easy")

    }

    else if (event.target.id === "Medium") {

        console.log("Medium")

        localStorage.setItem("level", "Medium")

    }

    else if (event.target.id === "Hard") {

        console.log("Hard")

        localStorage.setItem("level", "Hard")

    }

}


/*----------------------------- Event Listeners -----------------------------*/

for (let oneCategory of categoryElements) {

    oneCategory.addEventListener("click", selectCategory)

}


for (let oneLevel of levelElements) {

    oneLevel.addEventListener("click", selectLevel)

}


console.log(selectedCategory)

console.log(selectedLevel)

console.log(selectedCards)