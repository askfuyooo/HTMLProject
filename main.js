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
    
    switch(page) {
        case 1: {
            document.title = "LoL | Kezdőlap"
            break
        }
        case 2: {
            document.title = "LoL | Alap hősök"
            break
        }
        case 3: {
            document.title = "LoL | Történet"
            break
        }
        case 4: {
            document.title = "LoL | Játékmenet"
            break
        }
        case 5: {
            document.title = "LoL | Esport"
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