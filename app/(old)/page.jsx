'use client'; // Essential for JavaScript to work

import { useEffect } from 'react';

export default function Page() {
	const oldHtml = `
		<style>
  /* ## Globals ## */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ## Text and Font ## */
  h1, h2, h3, h4, h5, h6, a, p, li {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  h2 { font-weight: 500; }
  h3 { font-weight: 500; margin-top: 8px; }
  h4 { font-weight: 400; margin-top: 5px; }

  p {
    font-size: 1rem;
    @media(min-width: 1400px) {
      font-size: 1.1rem;
    }
  }

  a {
    color: #dedede;
    text-decoration: none;
  }

  a:hover {
    text-shadow: 0 0 5px black;
  }

  ul, li {
    list-style-type: none;
  }

  body {
    background-color: grey;
    overflow-x: hidden;
  }

  /* ## Header container ## */
  .image-wrapper {
    height: 100svh;
    width: 100vw;
    position: relative;
    overflow: hidden;
  }

  .image-wrapper img {
    height: 100%;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    min-width: 100%;
  }

  .image-overlay {
    background-color: rgba(99, 104, 104, 0.4);
    height: 100vh;
    position: absolute;
    width: 100vw;
  }

  .menu {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    gap: 20px;
    position: absolute;
    top: 0.5rem;
    width: 100vw;
    
    @media (min-width: 1400px) {
      height: 70vh;
      justify-content: center;
      top: 0;
      width: 200px;
    }
  }

  .menu-container {
    align-items: center;
  }

  .menu-container p,
  .menu-container a {
    text-shadow: 2px 0 2px #000, -2px 0 2px #000, 0 2px 2px #000, 0 -2px 2px #000,
    1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000;
  }

  .menu .menu-items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    height: 5vh;
    justify-content: space-evenly;
    
    @media (min-width: 1400px) {
      align-content: center;
      flex-direction: column;
      gap: 40px;
      height: 70vh;
    }
  }

  .menu .menu-items .menu-item {
    align-content: center;
    justify-content: center;
    width: fit-content;
    z-index: 10;
  }

  .menu-item a {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    
    @media (min-width: 1400px) {
      flex-direction: row;
      gap: 10px;
    }
  }

  .menu-item span {
    align-self: center;
  }

  .menu-item-text {
    color: white;
    font-size:0.8rem;
    transition: all 0.3s;
    
    @media (min-width: 1400px) {
      opacity: 0;
      font-size: 2rem;
    }
  }

  .menu-item:hover {
    & > a span,
    .menu-item-text {
      opacity: 1;
      text-shadow: 2px 0 2px #000, -2px 0 2px #000, 0 2px 2px #000, 0 -2px 2px #000,
      1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000;
    }
  }

  .left { left: 0; }
  .right { right: 0; }

  /* ## Main container ## */
  .text-container {
    color: white;
    display: flex;
    flex-direction: column;
    height: 25vh;
    left: 50%;
    max-width: 1200px;
    position: absolute;
    text-shadow: 2px 0 2px #000, -2px 0 2px #000, 0 2px 2px #000, 0 -2px 2px #000,
    1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000;
    top: 20vh;
    transform: translateX(-50%);
    transition: all 0.3s;
    width: 80vw;

    @media (min-width: 400px) { top: 42vh; }
    @media (min-width: 1400px) { top: 70vh; }
  }

  .text-container h1 {
    font-size: 2.2rem;
    letter-spacing: 4px;
    padding: 20px 0;
    text-align: center;
    @media (min-width: 1400px) { font-size: 3rem; }
  }

  .text-container p {
    letter-spacing: 2px;
    line-height: 1.5;
    padding-top: 10px;
    text-align: center;
  }

  .accessibility {
    background-color:rgba(39, 39, 39, 0.3);
    line-height: 2;
  }

  #overlay {
    display: none;
    height: 100svh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100vw;
  }

  #overlay.active {
    display: block;
    z-index: 2;
  }

  /* ## Sections ## */
  .section {
    display: none;
    transition: all 0.3s;
  }

  .section-content {
    background-color: rgba(191, 207, 207, 0.863);
    border-radius: 6px;
    color: rgb(36, 39, 39);
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 80svh;
    left: 50%;
    padding: 20px;
    position: absolute;
    overflow: auto;
    scrollbar-color: rgba(0,0,0,0.2) transparent;
    scrollbar-width: thin;
    top: 7vh;
    transform: translateX(-50%);
    width: 80%;
    z-index: 10;

    @media (min-width: 1400px) {
      height: 85vh;
      top: 5vh;
      width: 70%;
    }
  }

  .section-content h2 { text-align: center; }
  .open { display: flex; }

  /* CV Section */
  .cv-wrapper .section-content {
    flex-direction: column;
    @media (min-width: 1400px) { flex-direction: row; }
  }

  .cv-columns {
    width: 100%;
    @media(min-width: 1400px) { width: 50%; }
  }

  .cv-position { margin-bottom: 20px; }
  .cv-title, .cv-duration { font-weight: 400; }
  .cv-location { font-weight: 500; }
  .cv-description { font-weight: 400; margin-top: 5px; }

  .cv-skills {
    display: flex;
    flex-direction: row;
    font-weight: 400;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 10px;
  }

  .cv-skill {
    flex-basis: calc(33% - 15px);
    font-weight: 400;
    @media (min-width: 800px) { flex-basis: calc(25% - 15px); }
  }

  /* Cases */
  .wl-cases { height: 100%; gap: 20px; }
  .wl-case { gap: 20px; height: 480px; position: relative; margin-bottom: 20px; }

  .case-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media(min-width: 1400px) { flex-direction: row; }
  }

  .img-col {
    max-height: 455px;
    position: relative;
    max-width: 100%;
    object-fit: contain;
    @media (min-width: 1400px) { width: 65%; max-width: 65%; }
  }

  .img-col span {
    align-content: center;
    background-color:rgb(102, 109, 109);
    border-radius: 50%;
    cursor: pointer;
    height: 30px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
  }

  .img-col span.left {
    display: none;
    left: -15px;
    @media(min-width: 1400px) { left: 5px; }
  }

  .img-col span.right {
    right: -15px;
    @media(min-width: 1400px) { right: 5px; }
  }

  .shown-img {
    display: flex;
    flex-direction: row;
    height: 200px;
    overflow: hidden;
    justify-content: center;
    object-fit: contain;
    @media(min-width: 1400px) { height: 100%; }
  }

  .case-img { display: none; max-height: 100%; max-width: 100%; object-fit: contain; }
  .case-img.first { display: block; }

  .text-col {
    margin-bottom: 20px;
    position: relative;
    width: 100%;
    @media(min-width: 1400px) { margin-bottom: 0; width: 33%; }
  }

  .text-col .info-header { padding: 20px; text-align: center; }
  .text-col .info-header a { color: black; font-weight: 400; text-decoration: underline; text-shadow: unset; }
  .text-col .info-text { margin-top: 20px; }

  /* Projects */
  .byO-container { margin-bottom: 40px; }
  .byO-project-title { margin-bottom: 10px; text-align: center; }
  .byO-project-title a { color: black; font-weight: 400; text-decoration: underline; text-shadow: unset; }
  .byO-img-container { display: flex; justify-content: center; margin-bottom: 20px; }
  .byO-img{ max-width: 100%; object-fit: contain; }
  .completed { text-decoration: line-through; }

  /* About */
  .about-wrapper h3 { font-weight: 500; padding-bottom: 10px; }
  .about-wrapper .section-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    @media(min-width: 1400px) { flex-direction: row; flex-wrap: wrap; }
  }

  .about-column {
    object-fit: contain;
    width: 100%;
    justify-content: space-evenly;
    @media(min-width: 1400px) { height: 100%; width: calc(50% - 20px); }
  }

  .about-img { max-height: 95%; max-width: 100%; object-fit: contain; }
  .about-img-text {
    font-size: 0.8rem;
    font-weight: 400;
    @media (min-width: 1400px) { max-width: 90%; }
  }

  /* Contact */
  .contact-wrapper .section-content { height: fit-content; }
  .contact-wrapper a {
    color: black;
    text-align: center;
    @media(min-width: 1400px) { text-align: left; }
  }

  /* Footer */
  footer { bottom: 0; height: 40px; position: absolute; }
  .footer-container {
    display: flex;
    flex-direction: row;
    width: calc(100vw - 40px);
    height: 100%;
    justify-content: space-between;
    align-items: end;
    padding: 0 20px;
  }

  .footer-container p {
    text-shadow: 2px 0 2px #000, -2px 0 2px #000, 0 2px 2px #000, 0 -2px 2px #000,
    1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000;
  }

  .footer-area {
    color: white;
    display: flex;
    flex-direction: row;
    gap: 20px;
    position: relative;
    justify-content: center;
    margin-bottom: 12px;
  }

  .byO-background-swapper { align-self: center; display: flex; height: 100%; }
  .byO-background-swapper p {
    font-size: 1rem;
    @media(min-width: 1400px) { display: none; }
  }

  .byO-background-swapper-thumbnail {
    align-self: end;
    border: solid 1px white;
    bottom: 5px;
    box-shadow: 2px 0 2px #000, -2px 0 2px #000, 0 2px 2px #000, 0 -2px 2px #000,
    1px 1px 2px #000, -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000;
    cursor: pointer;
    height: 30px;
    position: relative;
    transition: all 0.3s;
    width: 30px;
    z-index: 10;

    @media(min-width: 1400px) {
      &:hover { height: 50px; width: 30px; object-fit: cover; }
    }
  }

  .byO-background-swapper-thumbnail:not(:first-of-type) { margin-left: 10px; }

  .byO-reglage {
    font-size: 0.7rem;
    background-color: black;
    display: none;
    @media (min-width: 1400px) { display: block; }
  }

  .accessibility-contanier { margin-bottom: 12px; }

  .accessibility-slider {
    -webkit-appearance: none;
    appearance: none;
    height: 1vh;
    border-radius: 6px;
    background:rgba(99, 104, 104, 1);
    border: solid 1px white;
  }

  .accessibility-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background: rgb(45, 46, 45);
    border-radius: 50%;
    height: 1.3vh;
    width: 1.3vh;
  }

  .cc { margin-bottom: 12px; font-size: 0.8rem; text-align: center; }
</style>

    <div class="wrapper">

      <header>
        <div class="image-wrapper">
          <img id="ByO-background" src="/abisko1.webp" alt="" class="header-image" />
          <div class="image-overlay"></div>
        </div>
        <nav class="menu left">
          <div class="menu-container">
            <ul class="menu-items">
              <li class="menu-item">
                <a id="cv" href="#">
                  <span class="material-symbols-outlined">newspaper</span>
                  <span class="menu-item-text">CV</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="#">
                  <span class="material-symbols-outlined">cases</span>
                  <span class="menu-item-text">Case</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="#">
                  <span class="material-symbols-outlined">folder_open</span>
                  <span class="menu-item-text">Projekt</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="#">
                  <span class="material-symbols-outlined">face</span>
                  <span class="menu-item-text">Om mig</span>
                </a>
              </li>
              <li class="menu-item">
                <a href="#">
                  <span class="material-symbols-outlined">contact_page</span>
                  <span class="menu-item-text">Kontakt</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <!--       <nav class="menu right">
        <div class="menu-container">
          <ul>

          </ul>
        </div>
      </nav> -->
        <div id="overlay"></div>
      </header>

      <!-- ## Start of Main ## -->

      <main>
        <div id="MainText" class="text-container">
          <h1 class="title"><span class="accessibility">Jens Österqvist</span></h1>
          <p><span class="accessibility">Välkommen till min portfolio</span></p>
          <p><span class="accessibility">Jag brinner för programmering, teknik och naturen.</span></p>
          <p><span class="accessibility">Denna portfolio är tänkt som en levande sådan, och kommer fyllas på med nya projekt med tiden.</span>
          </p>
        </div>
      </main>

      <!-- ## Start of sections for each part of the page ## -->

      <section id="section0" class="section cv-wrapper">
        <div class="section-content">
          <div class="cv-columns">
            <ul id="cv-work" class="cv-work">
              <h2>Arbetserfarenheter</h2>
            </ul>
          </div>
          <div class="cv-columns">
            <div id="cv-studies" class="cv-studies">
              <h2>Utbildningar</h2>
            </div>
          </div>
        </div>
      </section>

      <section id="section1" class="section case-wrapper">
        <div class="section-content">
          <h2>Cases</h2>
          <p>
            Nedan följer projekt jag varit del av under min tid hos
            Webblandskapet.
          </p>
          <p>
            Det första tre sidorna är över e-lines, vilka jag sedan återskapat
            den design vår grafiker tillsammans med kund kommit överens om,
            primära språk använda är jQuery samt SASS.
          </p>
          <ul class="wl-cases">
            <li class="wl-case">
              <div class="case-container">
                <div class="col img-col">
                  <span id="left" class="left material-symbols-outlined"
                    >chevron_left</span
                  >
                  <div class="shown-img">
                    <img
                      class="case-img first"
                      src="/malmo-desktop.webp"
                      alt="Bild på Malmö chokladfabriks återförsäljarsida i desktopmiljö."
                    />
                    <img
                      class="case-img"
                      src="/malmo-mobil.webp"
                      alt="Bild på Malmö chokladfabriks återförsäljarsida i mobilmiljö."
                    />
                  </div>
                  <span id="right" class="right material-symbols-outlined"
                    >chevron_right</span
                  >
                </div>
                <div class="col text-col">
                  <div class="info">
                    <h3 class="info-header">
                      <a
                        href="https://shop.malmochokladfabrik.se/"
                        target="_blank"
                        >Malmö Chokladfabrik</a
                      >
                    </h3>
                    <p class="info-text">
                      Till Malmö Chokladfabrik har många instatser blivit
                      gjorda, jag har fått mobilanpassa deras webshop gentemot
                      återförsäljare, ta fram funktionalitet för att visa ifall
                      en vara är ekologisk, fairtrade eller vegansk,vid inloggad
                      återförsäljade så har funktionalitet för att från
                      produktlistan välja antal varor att lägga i varukorgen.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="wl-case">
              <div class="case-container">
                <div class="col img-col">
                  <span id="left" class="left material-symbols-outlined"
                    >chevron_left</span
                  >
                  <div class="shown-img">
                    <img
                      class="case-img first"
                      src="/fitz-start.webp"
                      alt="Fitzpatrick startsida"
                    />
                    <img
                      class="case-img"
                      src="/fitz-menu.webp"
                      alt="Fitzpatrick meny"
                    />
                  </div>
                  <span id="right" class="right material-symbols-outlined"
                    >chevron_right</span
                  >
                </div>
                <div class="col text-col">
                  <div class="info">
                    <h3 class="info-header">
                      <a
                        href="https://e-line.fitzpatrick.se/SE/"
                        target="_blank"
                        >Fitzpatrick</a
                      >
                    </h3>
                    <p class="info-text">
                      Här önskades stora förändringar av hemsidan. Bland annat
                      en megameny täckandes 3 nivåer med innehåll, samt ett
                      hero-bildspel.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="wl-case">
              <div class="case-container">
                <div class="col img-col">
                  <span id="left" class="left material-symbols-outlined"
                    >chevron_left</span
                  >
                  <div class="shown-img">
                    <img
                      class="case-img first"
                      src="/bra-desktop.webp"
                      alt=""
                    />
                    <img
                      class="case-img"
                      src="/bra-mobil.webp"
                      alt=""
                    />
                  </div>
                  <span id="right" class="right material-symbols-outlined"
                    >chevron_right</span
                  >
                </div>
                <div class="col text-col">
                  <div class="info">
                    <h3 class="info-header">
                      <a href="http://www.brascandinavia.se" target="_blank"
                        >Bra Scandinavia</a
                      >
                    </h3>
                    <div class="info-text">
                      <p>
                        Bra Scandinavia hade en önskan om att kunna gå ifrån sin
                        tidigare wordpress-sida, till en specialanpassad e-line.
                        De var fortfarande väldigt nöjda med sin grafiska
                        layout på sin wordpress, så jag fick i uppdrag att
                        återskapa denna till deras nya sida.
                      </p>
                      <p>
                        Detta löste jag genom att skapa html templates för att
                        efterlikna de wordpress "block" de var vana att arbeta
                        med, och ge dem möjligheten att enkelt kunna fortsätta
                        uppdatera sin sida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="wl-case">
              <div class="case-container">
                <div class="col img-col">
                  <span id="left" class="left material-symbols-outlined"
                    >chevron_left</span
                  >
                  <div class="shown-img">
                    <img
                      class="case-img first"
                      src="/sture-start.webp"
                      alt="Sturebadets startsida"
                    />
                    <img
                      class="case-img"
                      src="/sture-behandlingar.webp"
                      alt="sturebadets behandlingssida"
                    />
                    <img
                      class="case-img"
                      src="/sture-mobil.webp"
                      alt="sturebadets mobilsida"
                    />
                  </div>
                  <span id="right" class="right material-symbols-outlined"
                    >chevron_right</span
                  >
                </div>
                <div class="col text-col">
                  <div class="info">
                    <h3 class="info-header">
                      <a href="http://www.sturebadet.se" target="_blank"
                        >Sturebadet</a
                      >
                    </h3>
                    <div class="info-text">
                      <p>
                        Sturebadets hemsida är uppbyggt igenom Zoezi, en
                        webplattform specifikt inriktad mot att skapa
                        funktionella hemsidor åt gym och friskvårdsföretag.
                      </p>
                      <p>
                        Här har jag byggt webkomponenter för att hantera deras
                        bokningssystem, integration mellan kassa och kundprofil,
                        en separat sida som styr deras digitala skärmar på plats
                        i deras lokaler.
                      </p>
                      <p>
                        Här får man arbeta med ren html, css och javascript, då
                        Zoezis verktyg internt sedan väver ihop det till en vue
                        fil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="section2" class="section project-wrapper">
        <div class="section-content">
          <h2>Egna projekt</h2>
          <p>
            Nedan följer exempel på projekt jag driver framåt på min fritid.
          </p>

          <ul class="byO-projects">
            <li class="byO-project">
              <h3 class="byO-project-title"><a href="http://www.spelenshus011.se" target="_blank">Spelens Hus i Norrköping</a></h3>
              <div class="byO-container">
                <div class="byO-img-container">
                  <img
                    class="byO-img"
                    src="/spelens-hus-norrkoping.webp"
                    alt="Spelens Hus i Norrköping"
                  />
                </div>
                <div class="byO-text">
                  <p>
                    Jag har jobbat med att bygga en hemsida för Spelens Hus
                    i Norrköping. Detta projekt är ett sätt att slå ihop två av mina
                    stora intressen, programmering och spelhobbykulturen.
                  </p>
                  <p>
                    Hemsidan använder Wordpress som sin CMS, och jag har
                    byggt egna block för att synliggöra de behov som fanns inför Augustifesten i Norrköping, efter Kulturnatten (slutet av september) kommer jag påbörja arbetet med att skapa ett nytt tema för Spelens hus och mallar för de olika typer av block som kommer populera hemsidan.</p>
              </div>
            </li>
            <li class="byO-project">
              <h3 class="byO-project-title">In the works</h3>
              <ul>
                <li class="completed">Bakgrundsväljare till portfolio</li>
                <li>To-do list som skall ersätta denna lista</li>
                <li>
                  Omarbete av Spelens hus hemsida med skapandet av
                  ett helt eget tema och egna blockmallar i Wordpress
                </li>
                <li>Fotogalleri</li>
                <li>
                  Enklare webapp som agerar regeluppslagsverk till ett spel jag
                  spelar på min fritid
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="section3" class="section about-wrapper">
        <div class="section-content">
          <div class="about-column">
            <h2>Om mig</h2>
            <div class="about-work">
              <h3>På arbetsplatsen</h3>
              <p>Jag trivs med att arbeta både i team och på egen hand.</p>
              <p>
                Det bästa med att jobba i ett team är att man hjälps åt och tar
                nytta av varandras styrkor, vilket medför att ett väl
                genomarbetat team kompletterar varandra väldigt bra och ser till
                att alla kommer till sin fulla rätt.
              </p>
              <p>
                Att arbeta själv medför andra fördelar, man får följa sin egen
                struktur och man får en annan helhetsbild över vad man arbetar
                med, vilket kan leda till en djupare förståelse över alla
                processer som är en del av arbetet.
              </p>
            </div>
            <div class="about-family">
              <h3>Familj och vänner</h3>
              <p>
                Jag bor för tillfället i centrala Norrköping, tillsammans med
                min fru Vannessa och vår son.
              </p>
              <p>
                Min förlängda familj bor alla i Norrköpings närområde, vilket
                möjliggör att ses ofta.
              </p>
              <p>
                Jag har genom åren samlat på mig många bekanta runtom i Sverige
                och Europa, men de jag umgås med finns inom en timmes restid.
              </p>
            </div>
            <div class="about-freetime">
              <h3>På fritiden</h3>
              <p>
                Min fritid består främst av att träffa vänner och familj, men
                när tid blir över så finns det ett par fritidsintressen som står
                över alla andra.
              </p>
              <p>Dessa är spelhobbykulturen och friluftsliv</p>
              <h4>Spelhobbyn</h4>
              <p>
                Jag är med och driver Spelens Hus i Norrköping, där jag ingår i
                styrelsen och ansvarar för ekonomin, samt deras hemsida. Utöver
                att vara där och spela någon gång ibland.
              </p>
              <h4>Friluftsliv</h4>
              <p>
                Att vara ute i skog och mark är ett väldigt stort intresse som
                jag haft med mig hela livet. Nu för tiden brukar jag försöka
                komma iväg på en lite större vandring varje sommar.
              </p>
              <p>
                Det är inte omöjligt att man tar sig ut i skogen över en helg
                ibland heller.
              </p>
            </div>
          </div>
          <div class="about-column">
            <img
              src="/jens-i-peru.webp"
              alt="Bild på Jens i de peruanska anderna"
              class="about-img"
            />
            <p class="about-img-text">
              BIlden är tagen i ruinstaden Pisac, den sista utposten
              mellan Cusco och de indianstammar som bodde i de västra delarna
              av Amazondjungeln från Inkas sida när man skulle korsa Anderna.
            </p>
          </div>
        </div>
      </section>

      <section id="section4" class="section contact-wrapper">
        <div class="section-content">
          <h2>Kontakt</h2>
          <p>
            Email:
            <a href="mailto:osterqvist@gmail.com">osterqvist@gmail.com</a>
          </p>
          <p>Telefon: <a href="tel:+46768026366"> 0768 02 63 66</a></p>
          <a
            href="https://www.linkedin.com/in/jens-%C3%B6sterqvist-8a554a1b0/"
            >Linkedin</a
          >
          <a href="https://github.com/Khvoto/portfolio" target="_blank">Github Repository</a>
          <div class="social">
          </div>
        </div>
      </section>

      <!-- ## Start of Footer ## -->

      <footer>
        <div class="footer-container">
          <div class="footer-area left">
            <div class="byO-background-swapper">
              <!--<p class="byO-background-swapper-text">Byt bakgrundsbild</p> -->
              <img class="byO-background-swapper-thumbnail" src="/abisko-thumbnail.webp" alt="Thumbnail för Abisko bakgrundsbild">
              <img class="byO-background-swapper-thumbnail" src="/jotunheimen-thumbnail.webp" alt="Thumbnail för Jotunheimen bakgrundsbild">
              <img class="byO-background-swapper-thumbnail" src="/peru-thumbnail.webp" alt="Thumbnail för Peru Bakgrundsbild">
            </div>
          </div>
          <div class="footer-area"></div>
          <div class="footer-area right">
            <p class="byO-reglage">Läsbarhetsreglage: </p>
            <div class="accessability-container">
              <input type="range" min="0" max="100" value="30" class="accessibility-slider" id="accessibility-slider">
            </div>
            
            <!-- <p class="cc">Produced by: Jens Österqvist</p> -->
          </div>
        </div>
      </footer>
    </div>
  </body>
</html>
  `;
	
	useEffect(() => {
		// OLD JAVASCRIPT
		const iconLink1 = document.createElement('link')
		iconLink1.rel = 'stylesheet'
		iconLink1.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"

		const iconLink2 = document.createElement('link')
		iconLink2.rel = 'preconnect'
		iconLink2.href="https://fonts.googleapis.com"

		const iconLink3 = document.createElement('link')
		iconLink3.rel = 'preconnect'
		iconLink3.href="https://fonts.gstatic.com"
		iconLink3.crossOrigin = true


		document.head.appendChild(iconLink1)
		document.head.appendChild(iconLink2)
		document.head.appendChild(iconLink3)


		//Accesibility_overlay.js
		function accessibility() {
			const slider = document.getElementById("accessibility-slider");
			const target = Array.from(document.getElementsByClassName("accessibility"));
			
			slider.oninput = () => {
				target.forEach((element) => {
					element.style.backgroundColor =
						"rgba(39, 39, 39," + slider.value / 100 + ")";
				});
			};
		}
		
		//Background swapper:
		function backgroundSwapper() {
			const elements = document.querySelectorAll(
				".byO-background-swapper-thumbnail",
			);
			const target = document.getElementById("ByO-background");
			console.log(target);
			const backgroundImages = [
				"/abisko1.webp",
				"/jotunheimen.webp",
				"/peru-background.webp",
			];
			elements.forEach((element, index) => {
				element.addEventListener("click", () => {
					const backgroundImage = backgroundImages[index] || backgroundImages[0];
					target.setAttribute("src", `${backgroundImage}`);
				});
			});
		}
		
		//CV_class:
		/**
		 * Create cards for each experience
		 *
		 * This class is a wip rework for the cv section of the portfolio.
		 *
		 * @class CreateExperienceCard
		 * @extends {HTMLElement}
		 */
		class CreateExperienceCard extends HTMLElement {
			
			constructor(experience) {
				super();
				
				this.data = experience;
				
				const card = this.attachShadow({ mode: "open" });
				card.innerHTML = `
      <style>
        experience-card {
        display: block;
          height: 200px;
          width: 325px;
        }

        .cv-skills {
          display: flex;
          gap: 15px;
          justify-content: start;
          padding-top: 20px;
          flex-wrap: wrap;

          .cv-skill {
            width: 30%;
            
          }
        }
      </style>
      <experience-card class=" cv-experience exp-${this.data.id} ">
        <h3 class="cv-title">${this.data.title}<h3>
        <h4 class="cv-location">${this.data.location}</h4>
        <p class="cv-duration">${this.data.start} - ${this.data.end}</p>
        <p class="cv-description">${this.data.description}</p>
        <div class="cv-skills-container">
          <ul class="cv-skills">
          </ul>
        </div>
      </experience-card>
    `;
				
				const targetColumn = document.getElementById('cv-' + this.data.type);
				targetColumn.appendChild(card);
			}
			
			showData() {
				console.log('Current Data: ', this.data);
			}
			
			fillSkills() {
				setTimeout( () => {
					console.log('this:', experience)
					const ffs = '.exp-' + experience.id;
					const element = card.shadowRoot.getElementsByClassName(ffs);
					const skillList = element.querySelector('.cv-skills');
					
					
					const skills = this.data.skills;
					console.log(skills);
					skills.forEach(skill => {
					
					});
				})
			}
			
			
			
			
		}
		
		window.customElements.define("experience-card", CreateExperienceCard);
		
		
		// Case section:
		function caseFunctions() {
			caseImageShifter();
			alternateCaseLayout();
		}
		
		function caseImageShifter() {
			const cases = Array.from(document.getElementsByClassName("wl-case"));
			cases.forEach((caseElement, index) => {
				const left = caseElement.querySelector("span#left");
				const right = caseElement.querySelector("span#right");
				const images = caseElement.querySelectorAll(".case-img");
				let shown = 0;
				
				//console.log("shown:", shown);
				//console.log("img:", images);
				
				left.addEventListener("click", () => {
					// Add code to slide left
					shown--;
					images.forEach((img) => (img.style.display = "none"));
					images[shown].style.display = "block";
					
					if (shown < images.length - 1) {
						right.style.display = "block";
					}
					if (shown === 0) {
						left.style.display = "none";
					}
					
					console.log("shown:", shown);
				});
				
				right.addEventListener("click", () => {
					// Add code to slide right
					shown++;
					images.forEach((img) => (img.style.display = "none"));
					images[shown].style.display = "block";
					
					if (shown === images.length - 1) {
						right.style.display = "none";
					}
					if (shown > 0) {
						left.style.display = "block";
					}
					
					console.log("shown:", shown);
				});
			});
		}
		
		function alternateCaseLayout() {
			const cases = Array.from(document.getElementsByClassName("wl-case"));
			cases.forEach((caseElement, index) => {
				const container = caseElement.querySelector(".case-container");
				if (index % 2 === 0 && window.innerWidth >= 1400) {
					container.style.flexDirection = "row-reverse";
				}
				if (window.innerWidth < 1400) {
					container.style.flexDirection = "column";
				}
			});
		}
		
		// cv section:
		//import { CreateExperienceCard } from './cv_class.js'
		
		/**
		 * Array filled with each prior work och studies.
		 */
		const prior_experience = [
			{
				id: 0,
				type: "work",
				title: "Junior Frontendutvecklare",
				location: "Webblandskapet - Norrköping",
				start: 2023,
				end: "current",
				description: "Arbetat gentemot kunder med olika projekt, ",
				skills: {
					0: "Javascript",
					1: "PHP",
					2: "CSS",
					3: "HTML",
					4: "SASS",
					5: "Docker",
					6: "Ddev",
					7: "Linux",
					8: "Git",
					9: "Agile dev",
					10: "Eline",
					11: "Zoezi",
				},
			},
			{
				id: 1,
				type: "work",
				title: "Personlig Assistent",
				location: "Akria Assistans - Norrköping",
				start: 2022,
				end: "current",
				description:
					"Hjälper en vän till familjen, numera en förmiddag i veckan, tidigare som enda arbete.",
				skills: {
					0: "Flexibilitet",
					1: "Ansvarstagande",
					2: "Struktur",
					3: "",
				},
			},
			{
				id: 2,
				type: "work",
				title: "Personlig Assistent",
				location: "Humana AB - Stockholm",
				start: "2021.02",
				end: "2021.10",
				description:
					"Arbete åt brukare med Autism, var dennes trygga punkt och skulle läsa av situationer som brukaren inte var bekväm i. ",
				skills: {
					0: "Ickeverbal kommunikation",
					1: "Ansvarstagande",
					2: "Struktur",
					3: "Förbli lugn",
				},
			},
			{
				id: 3,
				type: "studies",
				title: "Webbutvecklare",
				location: "Linnéuniversitetet - Distans",
				start: 2021,
				end: "current",
				description: "Läser detta program vid sidan av arbete på 25%",
				skills: {
					0: "Javascript",
					1: "OOP",
					2: "CSS",
					3: "HTML",
					4: "Java",
					5: "Gitlab",
					6: "Docker",
					7: "Kubernetes",
				},
			},
			{
				id: 4,
				type: "work",
				title: "Personlig Assistent",
				location: "Liv Ihop - Norrköping",
				start: 2019,
				end: 2021,
				description: "Hjälpa en vän till familjen, halvtid under denna period",
				skills: {
					0: "Flexibilitet",
					1: "Ansvarstagande",
					2: "Struktur",
					3: "Förbli lugn",
				},
			},
			{
				id: 5,
				type: "work",
				title: "Charkeritekniker",
				location: "Charkman - Norrköping",
				start: 2019.06,
				end: 2019.09,
				description: "Sommarplacering i charkeri",
				skills: {
					0: "Stresstålighet",
					1: "Flexibilitet",
					2: "Struktur",
					3: "Högt tempo",
				},
			},
			{
				id: 6,
				type: "studies",
				title: "Fritidslärare",
				location: "Linköpings Univeristet - Norrköping",
				start: 2015,
				end: 2016,
				description:
					"Påbörjad utbildning till fritidslärare, avbruten pga. sjukskrivning",
				skills: {
					0: "Pedagogik",
					1: "Didaktik",
					2: "Utvärdering",
					3: "Bedömning",
				},
			},
			{
				id: 7,
				type: "studies",
				title: "Miljövetenskap",
				location: "Linköpings Univeristet - Norrköping",
				start: 2013,
				end: 2015,
				description:
					"Påbörjad utbildning till Miljövetare, avbruten då jag inte såg mig själv i detta område.",
				skills: {
					0: "Labbteknik",
					1: "Informationssökning",
					2: "Vetenskaplig metodik",
					3: "Kritiskt tänkande",
				},
			},
			{
				id: 8,
				type: "work",
				title: "Parkskötare",
				location: "PEAB AB - Norrköping",
				start: 2008,
				end: 2013,
				description:
					"Säsongsanställning Start mars, slut oktober/november beroende på säsong. ",
				skills: {
					0: "Renhållning",
					1: "Trädgårdsskötsel",
					2: "Planering",
					3: "Maskinvana",
				},
			},
			{
				id: 9,
				type: "studies",
				title: "Naturvetenskap",
				location: "Hagagymnasiet - Norrköping",
				start: 2005,
				end: 2008,
				description: "Gymnasiestudier, Matematik & Data inriktning",
				skills: {
					1: "Programmering ( C++ )",
					2: "Webbdesign",
					3: "Webbproduktion",
					4: "Engelska C",
					5: "Matematik E",
				},
			},
		];
		
		/**
		 * Create cards for each experience
		 */
		function createCards() {
			prior_experience.forEach((experience) => {
				const li = document.createElement("li");
				const target = document.getElementById("cv-" + experience.type);
				li.classList.add("cv-position", "exp-" + experience.id);
				target.appendChild(li);
				
				addFieldsToCards(experience);
			});
		}
		
		function addFieldsToCards(experience) {
			const current = document.getElementsByClassName("exp-" + experience.id);
			const target = current[0];
			const skillContainer = document.createElement("div");
			const title = document.createElement("h3");
			const location = document.createElement("h4");
			const duration = document.createElement("p");
			const description = document.createElement("p");
			const skills = document.createElement("ul");
			const li = document.createElement("li");
			
			title.classList.add("cv-title");
			title.innerHTML = experience.title;
			target.appendChild(title);
			
			location.classList.add("cv-location");
			location.innerHTML = experience.location;
			target.appendChild(location);
			
			duration.classList.add("cv-duration");
			duration.innerHTML = experience.start + " - " + experience.end;
			target.appendChild(duration);
			
			description.classList.add("cv-description");
			description.innerHTML = experience.description;
			target.appendChild(description);
			
			skillContainer.classList.add("cv-skills-container");
			skillContainer.classList.add("cv-skills-container" + experience.id);
			target.appendChild(skillContainer);
			
			const currentSkills = document.getElementsByClassName(
				"cv-skills-container" + experience.id,
			);
			const skillsContainer = currentSkills[0];
			
			skills.classList.add("cv-skills", "cv-skills-" + experience.id);
			skillsContainer.appendChild(skills);
			
			fillSkills(experience.skills, experience.id);
		}
		
		/**
		 * Function to populate the skills list for each experience in CV
		 *
		 * @param {object} skills Contains all skills related to specific experience
		 * @param {number} id Identifies which experience we're adding skills to
		 */
		function fillSkills(skills, id) {
			const current = document.getElementsByClassName("cv-skills-" + id);
			const target = current[0];
			
			for (let key in skills) {
				const skill = document.createElement("li");
				skill.classList.add("cv-skill");
				skill.innerHTML = skills[key];
				target.appendChild(skill);
			}
		}
		
		/**
		 * Function called from main.js
		 */
		function fillCV() {
			createCards();
		}
		
		
		// MAIN PART:
		const collection = document.getElementsByClassName("menu-item"); // Creates an HTMLCollection of menu items
		const menuItems = Array.from(collection); // Converts the HTMLCollection to an array
		
		menuItems.forEach((item, index) => {
			item.addEventListener("click", () => {
				/*
				 * The following code is both a test during development to have an easy control of proper targeting of the click event.
				 * As a rule, I would recommend commenting out this kind of code for production, as we don't want any leftovers.
				 */
				//const getMenuItemText = item.getElementsByClassName('menu-item-text'); // Find the text inside the menu item
				//const makeArrayOfMenuItemText = Array.from(getMenuItemText); // Convert the HTMLCollection to an array
				//console.log(makeArrayOfMenuItemText[0].innerText); // Logs the text of the clicked menu item for testing purposes
				
				/*
				 * Following is the code that performs the desired action when a menu item is clicked.
				 * It will toggle the different menu items content.
				 */
				checkSectionVisibility(index); // Check the visibility of the clicked section and toggle the 'open' class accordingly
				toggleOverlay(); // Toggle the overlay visibility
				toggleVisibility(); // Toggle the visibility of the Main text
			});
		});
		
		function checkSectionVisibility(index) {
			let open;
			const section = document.getElementById("section" + index);
			if (section.classList.contains("open")) {
				open = true;
			} // If the section is already open, remember the state
			const siblings = Array.from(section.parentElement.children); // Get all the sibling sections
			siblings.forEach((sibling) => sibling.classList.remove("open")); // Remove the 'open' class
			if (open === true) {
				section.classList.remove("open");
			} // If the section was open before
			else {
				section.classList.add("open");
			} // If the section was closed before, add the 'open' class to it
		}
		
		function toggleVisibility() {
			const visible = document.getElementsByClassName("open");
			const mainText = document.getElementById("MainText");
			if (visible.length === 1) {
				// Hide Main text if a section is opened.
				mainText.style.opacity = 0;
			} else {
				// And show it again if sections are closed.
				mainText.style.opacity = 1;
			}
		}
		
		function toggleOverlay() {
			const overlay = document.getElementById("overlay");
			const open = document.getElementsByClassName("open");
			
			if (open.length === 1) {
				overlay.classList.add("active");
			} else {
				overlay.classList.remove("active");
			}
		}
		
		function overlayClickability() {
			const overlay = document.getElementById("overlay");
			const sections = document.getElementsByClassName("section");
			overlay.addEventListener("click", () => {
				Array.from(sections).forEach((section) => {
					section.classList.remove("open");
					overlay.classList.remove("active");
				});
				toggleVisibility();
			});
		}
		
		overlayClickability();
		backgroundSwapper();
		accessibility();
		
		fillCV();
		caseFunctions();
		
		// This is where your logic for buttons, sliders, etc. goes.
		const btn = document.getElementById('alertBtn');
		if (btn) {
			btn.onclick = () => alert('JavaScript is alive!');
		}
	}, []);
	
	return (
		<div dangerouslySetInnerHTML={{ __html: oldHtml }} />
	);
}