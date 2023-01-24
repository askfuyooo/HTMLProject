const navs = 5
let indexed = 1


function navClick(page) {
    indexed = page
    for (i = 1; i <= navs; i++) {
        if (i == page) {
            document.getElementById(i).style.backgroundColor = "rgba(32, 32, 32, 0.849)"
            document.getElementById(i).style.color = "#ab8744"
        } else {
            document.getElementById(i).style.backgroundColor = "rgba(0, 0, 5, 0.144)"
            document.getElementById(i).style.color = "black"
        }
    }
    
    let textDesc = document.getElementById("textDesc")
    switch(page) {
        case 1: {
            document.title = "LoL | Kezdőlap"
            textDesc.innerHTML = kezdolap
            break
        }
        case 2: {
            document.title = "LoL | Alap hősök"
            break
        }
        case 3: {
            document.title = "LoL | Történet"
            textDesc.innerHTML = tortenet
            break
        }
        case 4: {
            document.title = "LoL | Játékmenet"
            break
        }
        case 5: {
            document.title = "LoL | Esport"
            textDesc.innerHTML = esport
            break
        }
    }
}

function navHover(id) {
    for (i = 1; i <= navs; i++) {
        if (i != id) {
            document.getElementById(i).style.filter = "blur(2px)"
        } else {
            document.getElementById(i).style.color = "#ab8744"
            document.getElementById(i).style.fontWeight = "200"
            document.getElementById(i).style.backgroundColor = "rgba(32, 32, 32, 0.849)"
        }
    }
}

function navLeave() {
    for (i = 1; i <= navs; i++) {
        document.getElementById(i).style.filter = "blur(0px)"
        if (indexed != i) {
            document.getElementById(i).style.color = "black"
            document.getElementById(i).style.fontWeight = "0"
            document.getElementById(i).style.backgroundColor = "rgba(0, 0, 5, 0.144)"
        }
    }
}

const kezdolap = "<h1>Üdvözöljük a League of Legends oldalán!</h1>"
const tortenet = `A játékos regisztráció után az úgynevezett láthatatlan "Idéző" szerepébe bújik, aki egy egyedülálló mágikus képességekkel rendelkező hőst tud irányítani akinek célja, hogy csapattársai segítségével legyőzze az ellenfél csapatot. A két különböző pályán a játékosok két egyenlő, 5 fős csapatokra oszlanak, mindenki egy általa vagy véletlenszerűen választott hőst irányítva. A csapatok a térkép két átellenes pontján kezdenek egy Érkező Medence (Spawn Pool) nevű helyen, a Nexus (főközpont, szó szerint: összeköttetés) mellett. Az ellenfél Nexusának elpusztításával lehet megnyerni a játékot, vagy ha az ellenfél csapata feladja. A hősök a játék során folyamatosan tapasztalatot és aranyat gyűjtenek, ellenséges lények (hősök és minionok) illetve semleges szörnyetegek legyilkolásával, valamint tornyok és inhibitorok lerombolásával. Az aranyból különféle tárgyakat vehetnek, amelyek fokozzák a hatékonyságukat, képességeik erejét, vagy éppen védelmet adnak. Első szinten kezdenek és a 18. szintig fejlődhetnek minden játék alkalmával, míg az Idézői szint, folyamatosan növekszik.`
const esport = `A 2010-es Los Angeles-i World Cyber Games Grand Finals tartott egy League of Legends bajnokságot. Hétezer dolláros nyereményért küzdöttek a csapatok a Föld minden tájáról, a győztes a Counter Logic Gaming észak-amerikai csapat lett. Az első évad lezárásaként megrendezett bajnokságnak a Dreamhack svéd rendezvény adott otthont, 2011 júniusában. A százezer dollár összdíjazású bajnokságot az európai Fnatic csapat nyerte. A meccsek nézettsége rekordokat döntött, a legmagasabb mért érték több mint kétszázezer néző volt és összesen több mint 1.6 millió nézője volt a bajnokságnak.`