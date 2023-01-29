const navs = 4
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
            document.title = "LoL | Szerepek"
            textDesc.innerHTML = roles
            break
        }
        case 3: {
            document.title = "LoL | Alapok"
            textDesc.innerHTML = alapok
            break
        }
        case 4: {
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


//INNERHTML DESCS
const kezdolap = "<h1>Üdvözöljük a League of Legends oldalán!</h1>"
const roles = `<h2> Toplaner - felső ösvényes </h2> Általában bruiserek és tankok találhatóak meg itt, bár vannak különböző típusú hősök, általában a csapatok egy tank hőssel játszanak - valakivel, aki sok sebzést képes elviselni mielőtt kiesne. Ők használhatók a ellenfél csapat arcába menéséhez lényegi pontként, vagy próbálva elkapni vagy támadni az ellenséges ADC-t. Hősök, mint például a Malphite, nem csak magas alap statisztikákkal rendelkeznek az életerő és a ellenállás terén, hanem azonnali behatolást is biztosítanak az ellenséges csapatba, akár az ösvény-fázisban, akár a közép-késői játék során. <h2> Jungler </h2> Az Idézők Szurdokában három ösvény van, de öt harcos, így a jungler az ösvények között fogja eltölteni az idő legnagyobb részét a térképnek az a részén, amit dzsungelnek hívnak. A jungler fő célja, hogy a lehető legtöbb aranyat és tapasztalati pontot (XP) szerezze meg rövid idő alatt és segítse a többi ösvényt gankekkel. <h2> Midlaner - középső ösvényes (APC) </h2> A kettőnél több IQ-val rendelkező játékosok AP hőst játszanak a középső ősvényen. Az APC (AbilityPowerCarry) a varázssebzés hordozója a játékban. Ennek a szerepnek az a feladata, hogy a lehető legnagyobb sebzést okozza a csapatnak. Az APC általában távoli harcos, de lehet közelharci is, attól függően, hogy melyiket választják. Például Diana képes távoli támadásokkal folyamatosan zavarni az ellenséget, majd egy közelharcra alkalmas képességgel követi őket. A legjobb középső ösvényes hős kérdés nélkül Sylas. A távoli harcosok (mint például az Ahri) gyakran használnak olyan képességeket, amelyekkel az ellenséget távolról tudják sebezni, mielőtt az végső képességükkel belemennek a harcba. Azonban ezek a harcosok általában nagyon sebezhetőek, mivel alacsonyak az ellenállásai és a mozgási sebességük. <h2> ADC - Lövész </h2> Az Attack-Damage Carry (ADC), mostanában lövészként ismert, a csapat fizikai sebzést okozó fő képviselője. Az ADC általában jelentős mennyiségű sebzést okoz az ellenfél csapat minden tagjának, kivéve a tankokat. Azonban ezért cserébe alacsony életerője és ellenállása van, ami miatt könnyen meghal, de egy support segíti. Az ADC gyakran távolsági képviselő, ami elsősorban alacsony életerejének köszönhető. Az ADC fő feladata, hogy megsemmisítse az ellenfél ADC-jét (az ösvény-fázis alatt), és csapat harcokban a legnagyobb veszélyt (a tank kivételével) priorizálja. Az egyik legfontosabb szerep a csapatban, ez a típusú képviselő általában a térkép alsó (bot) sávjában található. <h2> Support - Támogató </h2> A Support játékos az ADC-vel van párban, hogy le tudják győzni az ellenfél csapatot, védi az ADC-t képességeivel és biztosítja a rálátást a térképen az ADC és a csapat többi tagja számára wardok használatával. Általában alacsony a sebzésük. A Support segít az ADC-nek az ösvény-fázis alatt, de nagy szerepet játszanak a csapat harcokban is. A supportok, mint például a Thresh, használhatják képességeiket, hogy behúzza egy helyzetén kívül lévő (vagy helyzetén belüli) ellenséges hőst, hogy csapat harcot indítsanak és beavatkozzanak.`
const esport = `A 2010-es Los Angeles-i World Cyber Games Grand Finals tartott egy League of Legends bajnokságot. Hétezer dolláros nyereményért küzdöttek a csapatok a Föld minden tájáról, a győztes a Counter Logic Gaming észak-amerikai csapat lett. Az első évad lezárásaként megrendezett bajnokságnak a Dreamhack svéd rendezvény adott otthont, 2011 júniusában. A százezer dollár összdíjazású bajnokságot az európai Fnatic csapat nyerte. A meccsek nézettsége rekordokat döntött, a legmagasabb mért érték több mint kétszázezer néző volt és összesen több mint 1.6 millió nézője volt a bajnokságnak. <h2> Esport Európában - LEC </h2> A League of Legends EMEA Championship (LEC) a Riot Games által üzemeltetett profi League of Legends esports ligája az EMEA (Európa, Közel-Kelet és Afrika) régióban, amelyben tíz csapat vesz részt. Az éves játékidő két részre oszlik, a tavaszi és a nyári, mindkettő 9 hét rövidke játékot tartalmaz, amelyeket aztán a legjobb hat csapat részvételével play-off tornák követnek. A szezon végén az első helyezettek kvalifikálódnak az éves League of Legends Világbajnokságra. A LEC az EMEA legmagasabb szintű League of Legends játékot képviseli. A LEC játékok túlnyomó része élőben kerül lebonyolításra a Riot Games berlini stúdiójában, ahol kis számú közönség is jelen van. A játékokat több nyelven élőben közvetítik Twitch és YouTube csatornákon, amelyek általában több mint 300 000 nézőt vonzanak. Az LEC népszerűsége és sikere jelentős médiafigyelmet vonzott. 2016 szeptember 30-án a francia szenátus egyhangúlag fogadta el az "egy digitális köztársaságról" szóló törvény utolsó változatát, amely jelentősen javította az LEC játékosainak és az esports sportolóinak vízumeljárását, jogkereteket biztosított az esports szerződések számára, bevezetett mechanizmusokat a készpénzdíjak fizetésének biztosítására, részletezte a fiatal esports sportolók jogait, és többet. Néhány hónappal korábban Franciaország is létrehozta az "Esports France" nevű új esports szövetséget, amelynek feladata az esportok képviselete az állam és a "Francia Nemzeti Olimpiai és Sportbizottság partnerének" szerepe az elektronikus sportok mint sportok elismerése ügyében. Spanyolország is hasonlóképpen tette 2016 novemberében, a "Videojátékok és Esports Spanyol Szövetség" létrehozásával. Az LEC szponzori megállapodásokat kötött a Kia, a Red Bull és az Erste Group cégekkel. A Fnatic az egyetlen csapat, amely részt vett minden 2013 tavaszi split óta tartó splitben. Az LEC 2020-ban egy kontroversiális szponzori megállapodást jelentett be a Neom céggel. A ligában dolgozó sok munkatárs fenyegetőzött a munka kilépésével, ami miatt a szponzori megállapodás végül megszűnt. <h2> Világbajnokság - Worlds </h2> A League of Legends Világbajnokság (röviden Worlds) az éves profi League of Legends világbajnokság verseny, amelyet a Riot Games szervez. A csapatok a bajnok címért, a 32 kilogrammos Summoner's Cup-ot és több millió dolláros bajnoki díjat küzdenek meg. 2018-ban a döntőt 99,6 millió ember nézte meg, megdöntve 2017 döntőjének nézettségi rekordját. A verseny díszleti előadásai miatt dicsérték, és a világ minden részén figyelemre méltatta a drámai és érzelmi jelleg miatt. A League of Legends Világbajnokság nagyszerű sikerre és népszerűségre tett szert, ezért az egyik legbecsültebb és legnézettebb verseny a világon, valamint a legnézettebb videójáték a világon. A verseny évente váltogatja helyszíneit különböző nagy országokban és régiókban. Dél-Korea T1 csapata a verseny történetének legnépszerűbb csapata, három világbajnoki címmel. <p> További információk: <a href="https://www.leagueoflegends.com/hu-hu/news/esports/" target="_blank" draggable="false">Riot Games</a>, <a href="https://lolesports.com/" target="_blank" draggable="false">LoLEsports</a></p>`
const alapok = `A játékos regisztráció után az úgynevezett láthatatlan "Idéző" szerepébe bújik, aki egy egyedülálló mágikus képességekkel rendelkező hőst tud irányítani akinek célja, hogy csapattársai segítségével legyőzze az ellenfél csapatot. A két különböző pályán a játékosok két egyenlő, 5 fős csapatokra oszlanak, mindenki egy általa vagy véletlenszerűen választott hőst irányítva. A csapatok a térkép két átellenes pontján kezdenek egy Érkező Medence (Spawn Pool) nevű helyen, a Nexus (főközpont, szó szerint: összeköttetés) mellett. Az ellenfél Nexusának elpusztításával lehet megnyerni a játékot, vagy ha az ellenfél csapata feladja. A hősök a játék során folyamatosan tapasztalatot és aranyat gyűjtenek, ellenséges lények (hősök és minionok) illetve semleges szörnyetegek legyilkolásával, valamint tornyok és inhibitorok lerombolásával. Az aranyból különféle tárgyakat vehetnek, amelyek fokozzák a hatékonyságukat, képességeik erejét, vagy éppen védelmet adnak. Első szinten kezdenek és a 18. szintig fejldhetnek minden játék alkalmával, míg az Idézői szint, folyamatosan növekszik.<p>Jelenleg 2 állandó játékmód létezik a játékban , mely 2 különböző térképen zajlik.<h2>Az Igazság Mezeje</h2><ul><li><b>Idézők Szurdoka</b>: a klasszikus pálya, melyen három ösvény (top-felső, mid-középső és bot-alsó) <a href="#" onclick="navClick(2)" draggable="false">[szerepek]</a> van, ezeket a dzsungel választja el egymástól. Két 5 fős csapat küzd egymás ellen, hogy a másik csapat Nexusát lerombolják, vagy feladásra kényszerítsék őket. Ezen a térképen található Baron Nashor, a Szurdok Hírnöke, valamint az 5 Sárkány.</li><li><b> Szakadék</b>: a 2013 április végén megjelent (Aram) térkép egy hidat foglal magába, azaz egyetlen úttal rendelkezik, ahol a játékosok véletlenszerűen kisorsolt hőssel játszhatnak, szintén 5 vs 5. Ha nem azzal a hőssel szeretnének játszani 2 újrapörgetési, azaz reroll lehetőségük van, ekkor egy új, szintén véletlenszerűen kisorsolt hőst kapnak. Ezt a lehetőséget az Ordító Szakadékon játszott mérkőzésekkel lehet szerezni. A másik lehetőségük a játékosoknak, hogy cserélnek csapattársukkal, amennyiben megvan mindkettőjüknek ugyanaz a hős, és a kért játékos is beleegyezik a cserébe. Elődje a Proving Grounds pálya volt, melyen szintén hídon folytak a harcok, így szintén egy útvonallal rendelkezett, csak más kinézettel. Maradványai még mindig láthatóak a térkép „tetején”.</li></ul><h2>A hősök</h2>A hősök a játék világában olyan nagy hatalmú egyének, különbözőféle hatalmi forrásokkal, akiket/amiket az Idéző (a játékos) idéz meg és irányít. Jelenleg közel 170 hős található meg a játékban. Ezek a hősök egyedi képességekkel és játékstílussal rendelkeznek, de beoszthatók 6 kategóriába:<ul><li>Orgyilkos: középszintű támadó- és védekezőképességgel rendelkeznek. Lényegük az, hogy magas prioritású, alacsony életerejű célpontokat gyorsan tudjanak megsemmisíteni. Általában van valamilyen "utazó" képességük, mellyel gyorsan tudnak helyet változtatni, akár támadás, akár menekülés céljából. Könnyen végeznek a Támogató, Mágus és Lövész karakterekkel.</li><li>Harcos (vagy Off-Tank): erős támadóerővel és védekezéssel rendelkeznek, viszont általában lassúak. A Harcosok alapértékei igen magasak, ezért a játék elején kulcsfontosságú a szerepük. A játék végében viszont érdemesebb, úgymond "rásegítésre" vagy védekezésre használni őket. A Harcosok bármilyen szerepet fölvehetnek.</li><li>Mágus: főleg távolsági karakterek, nagyon erős támadóerővel, de nagyon gyenge védekezéssel és alaptámadással. Céljuk, hogy távolról és területre, vagy több játékosra sebezzen. Gyakran CC-vel (crowd control effect) rendelkeznek, melyek rövid távon negatív hatással vannak az ellenfél küzdőképességére. Ezekkel irányítható a játék menete is. Érdemes velük a háttérből irányítani, mivel erejük miatt magas szintű célpontok és gyorsan megölhetők.</li><li>Lövész (vagy ADC vagy Carry): távolsági karakterek, melyeknek alaptámadása gyors és erős. Leggyakrabban rendelkeznek olyan képességekkel, amikkel saját értékeiket (támadási sebesség, mozgási sebesség stb.) erősíteni, növelni tudják. Mivel ők képesek kiosztani a legnagyobb sebzést a legrövidebb idő alatt, ezért kulcsfontosságú karakterek, mind a saját, mind az ellenfél csapat számára. A játék elején és közepén folyamatos támogatásra szorulnak, így nem érdemes egyedül menni egy Lövész karakterrel.</li><li>Támogató: gyenge támadó- és védekező képességű karakterek. Céljuk, a csapattársak támogatása, gyógyítással, buffolással, előnyös helyzetek teremtésével vagy éppen a támadási lehetőségek elkerülésével. A Támogató nem öli meg a minionokat, de megfelelő eszközzel, vagy Mesterségekkel megfelelő mennyiségű aranyat gyűjthet a fejlődéshez.</li><li>Tank: extrém védekezőképességgel és viszonylag gyenge támadással rendelkeznek és minden Tank rendelkezik valamilyen tömegirányító hatással. Lényegük, hogy megvédjék a gyengébb karaktereket, fölfogják a támadásokat, így előnyhöz juttatva saját csapatát. Nem ritka, hogy a Tank (akár a Támogató) teljesen föláldozza magát, amíg a csapattársak megölik a fontos ellenfeleket.</li></ul><h2>Erőforrások</h2>A játék jelenleg többféle erőforrást tartalmaz, valamint különféle módszereket a képességhasználat korlátozására. Egy hős maximum egy erőforrással rendelkezik.<ul><li>Mana: a legáltalánosabb erőforrás, a legtöbb hős manát (mágikus energiát) használ a képességeihez. A maximális értéke és a visszatöltődés sebessége is növekszik szintlépéskor, illetve tárgyakkal vagy fogyaszthatókkal is fokozható. A játékban kék színnel jelölik.</li><li>Energia: négy nindzsa (Akali, Kennen, Shen, Zed) és egy szerzetes által (Lee Sin) használt erőforrás. Jellemzője, hogy a maximális alapértéke rögzített (200), valamint a visszatöltődés sebessége is kevésbé befolyásolható, viszont alapvetően gyors. Ez azt eredményezi, hogy az erőforrás a manával ellentétben hosszú távon nem fogy el, viszont rövidtávon a képességek túlzott használatával könnyen kimerülhet.</li><li>Düh/Vadság: ez az erőforrás nulláról indul, nagyrészt alaptámadásokkal növekszik, és a képességek használatát erősíti, és röviddel a harc befejezése után folyamatosan fogy. Maximum értéke 100, illetve 5. Jelenleg 5 hős, Tryndamere, Renekton, Shyvana, Gnar és Rek'Sai használja a Dühöt képességeik erősítésére, míg Rengar a Vadságot használja fel erőforrásként. A Düh piros, a Vadság narancssárga színnel van jelölve.</li><li>Hő: jelenleg egy hős használja, (Rumble) a mechanikus gépezetének a túlmelegedését mérve ezzel. Minden képességhasználattal növekszik, bizonyos határ felett erősíti a képességeit, valamint ha eléri a maximumot akkor a túlmelegedett gép kihűlésig nem tud több képességet használni. Képességhasználat nélkül folyamatosan hűl a gép, fogyasztva az erőforrást.</li><li>Bátorság: egy hős használja, mégpedig Kled. Ha Kled gyíkja, Skaarl elfut, bátorsággal lehet visszahívni, melyet ellenséges hősök sebzésével, vagy minionok megölésével lehet szerezni. Ha a bátorságcsík eléri a maximumot, Skaarl visszajön.</li><li>Élet: öt karakter a saját életerejéből veszít, amikor bizonyos képességeket használ. Ezeknél a karaktereknél az élet visszatöltése megoldott, így általában nem áll fent az a veszély, hogy "túlhasználja" a képességeit az adott karakter (Pl.: Zac).</li><li>Semmi: vannak olyan karakterek is, amelyeket csupán a töltési idő korlátoz képességeik használatában. Illetve vannak hősök akik ezt az erőforrást a passzív képességükkel felhasználják (Pl.: Yasuo).</li></ul><h2>Eszközök</h2>Ezek olyan tárgyak, melyek nagyban módosítják az adott karakter állapotát és növelik teljesítményét (két kivétel ez alól a Vadászpenge (Hunter's Machete) és a Lélekkő (Spirit Stone) melyek nem adnak hozzá a karakter statisztikájához). Jelenleg 6+1 tárgyat hordhat magával minden hős, így ezek összeválogatása kulcsfontosságú a játékmenet tekintetében. Ezeket kizárólag a boltban lehet megvenni, a Kezdő Medencétől nem messze. Ez alól kivétel az Ordító Szakadék, mivel itt csak bizonyos feltételek mellett lehet vásárolni. A boltban az eszközöket el is lehet adni, amiért a teljes ár 70%-át kapjuk vissza. Kivételt képeznek a Kutató- és Doran tárgyak, azok, amiknek arany bevételük van, a fogyaszthatók és az Őrangyal (Guardian Angel), melyek után az értékük 40%-a jár vissza. Azok a tárgyak, amik egyedi passzív képességekkel rendelkeznek, nem halmozhatók más, azonos nevű passzív képességekkel. A tárgyak csoportokra oszthatók használatuk szerint: támadó, védekező, varázserőt növelő, talizmánok, illetve egyéb tárgyak, mely csoportba a fogyaszthatók is beletartoznak. Vannak olyan tárgyak is, amik kizárólag közelharci (Vérszomjas hidra (Ravenous Hydra), Húsevő (Flesheater)), vagy távolsági (Runaan hurrikánja (Runaan's Hurricane)) bajnokok számára használható, ezen felül olyanok is vannak, melyek kizárólag bizonyos bajnokok által használhatók (Kalista - Fekete lándzsa (The Black Spear), Viktor - A Hex agy (The Hex Core)). Külön említést érdemelnek a támogatók számára készített tárgyak, amiknek egyedi képességeik segítségével a csapattársakat támogathatják, akár pajzsolással (A hegy arca (Face of the Mountain)), akár saját maguk erősítésével, pl. plusz arany bevétellel (A felemelkedés talizmánja (Talisman of Ascension)) vagy éppen mindkettővel (pl. a pajzs pusztításával a támogató kap aranyat - Bizalomgömb (Globe of Trust)).<h2>Minionok</h2>A minionok feláldozható lények, amik automatikusan generálódnak a Nexusban, azzal a céllal, hogy az előre kiválasztott ösvényen haladva folyamatosan törjenek előre. Az első hullám a játék kezdete után másfél perccel indul, mind a kék, mind a piros csapat oldaláról, ezután 30 másodpercenként új hullámban jönnek és 3 percenként minden új minion erősödik. A tornyok felé 50%-kal többet, míg a hősök felé 15%-kal kevesebbet sebeznek. Fontos, hogy a minionok nem összetévesztendők a dzsungelben lévő semleges szörnyekkel. A minionok 'lelketlen háborús gépezetek' így nem éreznek, nem gondolkodnak. Mégis, csak bizonyos esetekben fognak támadni. Jelenleg négy fajtájuk van:<ol><li>Közelharci: a legközelebbi ellenséges egységet támadják, erősebb védekezéssel rendelkeznek.</li><li>Távolsági: 600 egységnyi távolságban támadnak. Elenyészően, de magasabb DPS-sel (damage per second) rendelkeznek, viszont gyengébbek is.</li><li>Ostromminion: minden harmadik hullámban jön egy. Erősebb a többi minionnál és 30%-kal kevesebb sebzést szenvednek a tornyoktól.</li><li>Nexustörő: csak azon az ösvényen erednek, ahol az ellenséges inhibitort már elpusztították. Minden hullámmal folyamatosan jönnek az nexustörő leváltva, amíg az inhibitor visszaáll (ami négy perc). Az összes többi minionnál több életpontja és sebzése van, sokkal nehezebb is legyőzni egy ilyet.</li></ol><h2>Rúnák</h2>A Rúnák olyan erősítések, melyeket az Idéző azelőtt szerez be és állít össze, mielőtt hősével az Igazság Mezejére lépne. A rúnákon belül 5 fajta típust különböztetünk meg. Mindegyiken belül vannak fő rúnák, ezek közül egyet lehet választani az elsődleges rúnához. Mind az 5 rúna típusban van 3 sor sima rúna, minden sorban 3 rúna van azaz összesen 9 rúna van egy rúna típusban. Egy rúna sorból egy rúnát lehet kiválasztani (Így 4 rúna lesz az elsődleges rúna fából).Másodlagos rúna választása kor a maradék 4 rúna típus közül választhatunk. Itt nem választhatunk fő rúnát és csak 2 sorból választhatunk nem 3-ból (Így 2 rúna lesz a másodlagos rúna fából). A játék 5 rúnatípust ajánl fel, de bizonyos hősök számára más elsődleges-másodlagos rúna kombinációk lehetnek előnyösebbek, ezért a játékosok kettő saját rúna-listát is összeállíthatnak, az alapértelmezetteken kívül. Van 3 sor flex rúna is ami függ az adott matchtől.<h3>Előre beállított rúnák</h3><ol><li>Boszorkányság = felerősített képességek és erőforrás-manipuláció; másodlagos rúna: Uralom</li><li>Elszántság = szívósság és tömegirányítás; másodlagos rúna: Boszorkányság</li><li>Ihlet = kreatív eszközök és a szabályok megkerülése; másodlagos rúna: Elszántság</li><li>Precizitás = erősebb támadások és folyamatos sebzés; másodlagos rúna: Boszorkányság</li><li>Uralom = hirtelen sebzés és hozzáférés a célpontokhoz; másodlagos rúna: Precizitás</li></ol><h2>Épületek</h2><ul><li><b>Torony</b>: célja a védelem, a minionhullámok lassítása. Minden lövéssel 37%-kal növekszik a sebzésük, így nem érdemes sokáig célpont maradni. Mikor elérte a maximális sebzési bónuszt (75%), +25%-kal többet sebez. A szövetséges tornyok közelében a láthatatlan ellenséges egységek láthatóvá, így támadhatóvá válnak. A külső tornyok életereje 4000 pont, a belső tornyoké 4000 pont, az inhibitor tornyok 4000 ponttal és élet-regenerálódással, a nexus tornyok 2500 ponttal és szintén élet-regenerálódással rendelkeznek.</li><li><b>Inhibitor</b>: meggátolja, hogy az ellenfél oldalán Szuperminionok induljanak el. Az inhibitorok nem sebeznek, bár a hősök, csak alapsebzésük 85%-át tudják kiosztani, plusz a bónusz fizikai sebzést, vagy a varázserő 40%-át, attól függ, melyik a magasabb. 4000 életponttal rendelkeznek és az elpusztítás után négy perccel újra üzemkészek. Mikor a bemondó figyelmeztet, hogy az inhibitor hamarosan visszaáll, onnantól kezdve 15 másodperc múlva felépül.</li><li><b>Nexus</b>: ez indítja el a minionokat az útjukra, valamint a Nexus tartja fent a kapcsolatot az Idéző és hőse között. Tehát, amikor a Nexus elpusztul, a kapcsolat megszakad és a játék véget ér. 5500 élettel és 25 élet-regenerációval rendelkezik.</li><li><b>Nexus Obeliszk</b>: az érkező medence sarkában található torony, ami célozhatatlan. A hatótávján belül (ami maga a medence) 1000 sebzést oszt ki 0,5 másodperc alatt. Ez semmilyen páncéllal, varázsellenállással vagy képességgel nem védhető.</li></ul></p><p>További információk: <a href="https://www.leagueoflegends.com/hu-hu/how-to-play/" target="_blank" draggable="false">Riot Games</a></p>`