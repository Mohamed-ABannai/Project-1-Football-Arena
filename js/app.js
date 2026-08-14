
const CategoreElement = document.querySelectorAll('.Categories')

const cards = document.querySelectorAll(".card-front")


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

};


