// ============ KIRÁNDULÁSOK ADATAI ============

const tours = {
  bacalar: {
    title: "Bacalar avagy a 7 szinű tó",
    desc: "BACALAR- egy édes vízű csodálatos tó, ami a kék minden színében játszik! A tó színe és hófehér homokja igazi Caribi hangulatot varázsol. 54 km hosszú, 2 km széles, több Cenote is található a partján! A tavat hajóval tudjuk felfedezni, mely felejthetetlen élményt nyújt! Ezt mindenkinek látni kell! Gyönyörű hely, hangulatos kis település, kiváló szállások és éttermek a történelmi kis erődítmény körül. Útközben átmegyünk két, ananász-termelő falun,kóstolhatunk friss ananászt és levét, miután megálltunk egy eldugott piramist is megnézni!",
    images: [
      "/assets/img/portfolio/bacalar.jpg",
      "/assets/img/portfolio/bacalar2.jpg",
      "/assets/img/portfolio/bacalar3.jpg",
    ],
  },
  cenote: {
    title: "Cenote",
    desc: "Amikor egy egész napot áldozunk, hogy három csodálatos Cenotéban érezhessük jól magunkat! Legyünk újra gyerekek akik Tarzanként vetik bele magukat a csábító mélységbe! <br>Suytun, Oxman, Saamal.",
    images: [
      "/assets/img/portfolio/cenote.avif",
      "/assets/img/portfolio/cenote2.jpg",
    ],
  },
  chichenitza: {
    title: "Chichen Itza",
    desc: "Chichén Itza a legismertebb Maya város! A város egyedülálló építészeti rom-együttese 1988 óta az UNESCO kulturális világöröksége, és 2007. július 7-től a világ hét új csodájának egyike. Chichen Itza, a X. században, hatalma csúcsán, több tízezer lakosnak adott otthont! Ma turisták millióit nyűgözi le minden évben, maya piramisaival, a spanyolok előtti labdapályákkal és szent cenoteival. Mexikó spanyol meghódítása után az erdők által visszahódított Chichen Itza templomait és piactereit ismét feltárták és helyreállították, lehetővé téve a látogatók számára, hogy szemtanúi legyenek, ennek az egykor hatalmas, Maya város dicsőségének.",
    images: [
      "/assets/img/portfolio/chichenizta.webp",
      "/assets/img/portfolio/chichenizta2.jpg",
    ],
  },
  delfin: {
    title: "Delfin úszás",
    desc: "Sokunk Nagy Álma, Delfinekkel úszni! Ezt itt megteheted! Tudunk olyan fantasztikus helyet, ahol a delfinek nem medencében, hanem a tengerben vannak és ott van lehetőség velük örömködni! Mindenki számára életre szóló élmény! <br>Gyertek és valósítsátok meg az Álmotokat!",
    images: [
      "/assets/img/portfolio/delfin.jpg",
      "/assets/img/portfolio/delfin2.jpg",
      "/assets/img/portfolio/delfin3.jpg",
    ],
  },
  uxmal: {
    title: "Uxmal piramis",
    desc: "Vannak akik messzebbre merészkednének, mint a megszokott turista célpontok! Nekik ajánljuk a körutazásainkat! Egyik ilyen állomás Uxmal piramis.<br>Uxmal városa a Yucatán-félszigeten, a mexikói Yucatán államában helyezkedik el,Mayák alapították. A maya civilizáció késői klasszikus korában kb. i. sz. 800 és i. sz. 1000 között élte virágkorát és a Mayapán városszövetségbe tartozott. A város nevének jelentése: Háromszor épített. Uxmal, Mexikó egyik legfontosabb történelmi és kulturális látnivalója. A Yucatán-félszigeten található Merida városától durván 55 kilométerre található Uxmal-t eredetileg a 9. században kezdték el építeni. Uxmal egykor a régió fővárosa volt. A különböző kőszintek és bonyolult kőfaragások adják a piramis alakzat hihetetlen megjelenését. Ha a városban járunk, semmiképp se hagyjuk ki a Varázsló piramisát, Uxmal legmagasabb piramisát. <br>Nekünk a kedvenc piramisunk!",
    images: [
      "/assets/img/portfolio/uxmaljpg",
      "/assets/img/portfolio/uxmal2.jpeg",
    ],
  },
  ekbalam: {
    title: "Ek Balam & Cenote Hubiku & Tequila",
    desc: "Ek Balam piramis + Cenote Hubiku és Tequila farm kirándulás! <br>Mindenkinek javaslom, aki nem szereti a tömeges turizmust!<br>Fantasztikus hely, tele jó energiákkal, csenddel, nyugalommal. Mellette az egyik leggyönyörűbb, igazán meglepő szépségű cenote! De, hogy áldozzunk a világi hívságok oltárán is, gyorsan betérünk még egy tequila farmra.<br>Gyere velünk és éld át ezt a fantasztikus élményt. Legyen még egy felejthetetlen napod! ",
    images: [
      "/assets/img/portfolio/ek_balam.jpeg",
      "/assets/img/portfolio/ekbalam2.jpg",
    ],
  },
  islamujeres: {
    title: "Isla Mujeres",
    desc: "A Yucatán-félszigeten fekvő Cancun, Mexikó egyik népszerű idegenforgalmi célpontja! Innen indulunk komppal Isla Mujeres szigetére! Mujeres szigete Cancuntól mindössze 8 kilométerre található. A fehér homok és a sekély vizek ideálisak az úszáshoz, búvárkodáshoz és a pihenéshez egyaránt.A természet szerelmeseinek kitűnő kikapcsolódást és élményt jelenthet a cápasimogatás , Punta Sur maja szobrainak felfedezése és a Guadalupei szent szűz temploma. Mindezt golfkocsival tudjuk felfedezni miután átértünk komppal a szigetre! Szigetlátogatás után, lehetőség van megmártózni a csodás tengerben. Itt még nem ér véget programunk, hiszen a cancuni kikötő, forgó kilátójából megnézhetjük a napnyugtát a város felett!",
    images: [
      "/assets/img/portfolio/islamujeres1.jpg",
      "/assets/img/portfolio/islamujeres2.jpeg",
      "/assets/img/portfolio/islamujeres3.jpg",
    ],
  },
  holbox: {
    title: "Holbox szigete",
    desc: "Sziget ahol igazán elmúlik minden gond és bánat, egyszerűen a paradicsomban érzed magad! Nagyon autentikus, igazi Mexikói feelinggel.<br>Az egész sziget nagyon hangulatos. Hamisítatlan trópusi, karibi hely. Pici falu,betonos utak nélkül. A sziget nagy része ma is lakatlan,dzsungeles, amit nem is lehet bejárni. Az egész szigeten egy falu van csak. Mindenki golfkocsival közlekedik, KRESZ nincs igazán, a STOP tábla is fából készült. Az utcán gyalogolva az ember kicsit úgy érzi, mint aki visszautazott az időben és hippi földre került. Az emberek mezítláb sétálnak az utcán, a házakat pálmalevéllel fedik, szól a zene, gyerekek játszanak a ház előtt az úton, ami igazából egy nagy homokozó, időnként elhajt mellettünk egy citromsárgára festett golfkocsi taxi. A sok reggae zene pedig elég jamaicai hangulatot varázsol.Érdemes itt eltölteni akár 2 napot.<br>Nekünk a kedvenc szigetünk, imádunk ide járni a Barátainkkal!",
    images: [
      "/assets/img/portfolio/holbox.jpg",
      "/assets/img/portfolio/holbox2.jpeg",
      "/assets/img/portfolio/holbox3.jpeg",
      "/assets/img/portfolio/holbox4.jpg",
    ],
  },
  lascoloradas: {
    title: "Las Coloradas",
    desc: "Las Coloradas, Mexikó mágikus rózsaszín tava flamingókkal és Río Lagartos lagúnája! Mexikó mágikus rózsaszín lagúnája az ország legjobb és legszebb rejtett titkai közé tartozik. A maják elsőként fedezték fel, hogy a falu ideális hely a sótermelésre a sima síkságok elhelyezkedése miatt, amelyek körülkerítették a közeli mangrovékat.<br>Hogy mitől rózsaszín a tó és a flamingók?<br>Ha szeretnétek tudni, gyertek, nézzétek meg, utána élvezzétek a Río Lagartos lagúna csodálatos elővilágát egy csónaktúra keretében ahol meglepetések is várnak az út során!",
    images: [
      "/assets/img/portfolio/las_coloradas.jpg",
      "/assets/img/portfolio/las_coloradas2.jpg",
      "/assets/img/portfolio/las_coloradas3.jpg",
    ],
  },
  cancunmercado: {
    title: "Cancun piac",
    desc: "Mindenki szeretne egy szelet, kézzel fogható emléket is hazavinni és persze szeretünk a családnak és az otthon maradt barátoknak is felkutatni valami kis ajándékot!<br>Erre a legmegfelelőbb a Cancuni piac! Itt minden féle, kézzel készített csecsebecse, míves ezüst ékszer, Mexikói motívumos póló-táska-hűtőmágnes megtalálható! Lehet itt alkudozni, élvezni a vásárlás örömét! A férfiaknak akiknek mindez nyűg, lehetősége van a piac közepén egy-két hideg sör mellett várakozni.<br>Szerintünk nagyon kellemes délutáni program, kár lenne kihagyni!",
    images: [
      "/assets/img/portfolio/mercado.webp",
      "/assets/img/portfolio/mercado2.jpg",
    ],
  },
  tulum: {
    title: "Tulum & Coba piramis",
    desc: "Mi az, amit velünk lehetőségetek van a Yucatan-félszigeten megtekinteni!<br>Mit is nyújtunk az út során?<br>Először is megígérjük, ha velünk jöttök, a hangulat fergeteges lesz! Továbbá az út során lesznek hideg italok, tequila, ebéd! Az áraink tartalmazzák a belépőket, kompjegyet, kerékpár, golf és csónak bérlést!<br>Merrefelé induljunk?!<br>Talán első találkozásra, ismerkedés és bemelegítésként egy rövid kirándulás:Tulum-Coba piramis megtekintése!<br>Mit láthattok?!<br>Mexikó egyetlen olyan piramis romja, ami a tengerparton fekszik! Csodálatos látvány tárul elénk a romok mellől!Coba piramis!Egy elfelejtett, kevésbé ismert piramis, ami a dzsungelben található, igazi kalandtúra! A piramisokhoz kerékpárral, korosabb vendégeink tricikli taxival ( nem saját hajtóerővel) juthatnak el.",
    images: [
      "/assets/img/portfolio/tulum.jpeg",
      "/assets/img/portfolio/tulum2.jpg",
      "/assets/img/portfolio/tulum3.jpg",
      "/assets/img/portfolio/tulum4.jpg",
    ],
  },
};

// ============ URL PARAMÉTER LEKÉRÉSE ============
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// ============ ELEMEK FRISSÍTÉSE ============

function updateTourContent(tour) {
  // Cím
  document.querySelector(".portfolio-description h2").textContent = tour.title;
  // Leírás
  document.querySelector(".portfolio-description p").textContent = tour.desc;

  // Képek frissítése
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  swiperWrapper.innerHTML = "";
  tour.images.forEach((img) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.innerHTML = `<img src="${img}" alt="">`;
    swiperWrapper.appendChild(div);
  });
}

// ============ HA VAN TALÁLAT ============
if (id && tours[id]) {
  updateTourContent(tours[id]);
} else {
  document.querySelector(".portfolio-details").innerHTML = `
    <div class="container text-center py-5">
      <h2>Nem található a keresett kirándulás 😢</h2>
      <a href="index.html" class="btn btn-primary mt-3">Vissza a főoldalra</a>
    </div>
  `;
}
