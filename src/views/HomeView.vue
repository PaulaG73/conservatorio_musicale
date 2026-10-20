<template>
  <section class="hero">
    <div class="hero__copy">
      <h1 class="hero__title">
        <span>Conservatorio</span>
        <span>Musicale</span>
      </h1>
      <h2>Cultura de la emoción</h2>
    </div>
    <div class="hero__score" aria-hidden="true">
      <svg viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M34 62
             C 20 74, 16 112, 18 146
             C 20 168, 11 182, 7 196
             C 3 210, 11 222, 18 244
             C 16 286, 18 318, 34 338
             C 24 316, 22 280, 24 246
             C 26 226, 18 214, 16 196
             C 18 178, 26 164, 24 146
             C 22 110, 26 78, 34 62 Z"
        />
        <line x1="46" y1="64" x2="46" y2="336" stroke="currentColor" stroke-width="1.6"/>

        <g stroke="currentColor" stroke-width="1.15">
          <line x1="46" y1="64" x2="1440" y2="64"/>
          <line x1="46" y1="86" x2="1440" y2="86"/>
          <line x1="46" y1="108" x2="1440" y2="108"/>
          <line x1="46" y1="130" x2="1440" y2="130"/>
          <line x1="46" y1="152" x2="1440" y2="152"/>
          <line x1="46" y1="248" x2="1440" y2="248"/>
          <line x1="46" y1="270" x2="1440" y2="270"/>
          <line x1="46" y1="292" x2="1440" y2="292"/>
          <line x1="46" y1="314" x2="1440" y2="314"/>
          <line x1="46" y1="336" x2="1440" y2="336"/>
          <line x1="430" y1="64" x2="430" y2="336" stroke-width="1.35"/>
          <line x1="760" y1="64" x2="760" y2="336" stroke-width="1.35"/>
          <line x1="1090" y1="64" x2="1090" y2="336" stroke-width="1.35"/>
        </g>

        <text x="56" y="151" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-size="150">𝄞</text>
        <text x="58" y="323" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-size="118">𝄢</text>

        <g fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-size="46" text-anchor="middle">
          <text x="186" y="104">2</text>
          <text x="186" y="150">4</text>
          <text x="186" y="288">2</text>
          <text x="186" y="334">4</text>
        </g>

        <g fill="currentColor">
          <ellipse cx="280" cy="130" rx="13.5" ry="8.6" transform="rotate(-20 280 130)"/>
          <ellipse cx="322" cy="119" rx="13.5" ry="8.6" transform="rotate(-20 322 119)"/>
          <ellipse cx="364" cy="108" rx="13.5" ry="8.6" transform="rotate(-20 364 108)"/>
          <polygon points="292,62 376,48 376,57 292,71"/>
        </g>
        <g stroke="currentColor" stroke-width="1.7">
          <line x1="292" y1="126" x2="292" y2="66"/>
          <line x1="334" y1="115" x2="334" y2="58"/>
          <line x1="376" y1="104" x2="376" y2="52"/>
        </g>

        <text x="520" y="148" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-size="78">&#x1D13E;</text>

        <g fill="currentColor">
          <ellipse cx="860" cy="97" rx="13.5" ry="8.6" transform="rotate(-20 860 97)"/>
        </g>
        <line x1="848" y1="101" x2="848" y2="168" stroke="currentColor" stroke-width="1.7"/>

        <g fill="none" stroke="currentColor" stroke-width="1.7">
          <ellipse cx="1180" cy="108" rx="14" ry="9" transform="rotate(-20 1180 108)"/>
          <line x1="1192" y1="104" x2="1192" y2="36"/>
        </g>

        <g fill="currentColor">
          <ellipse cx="300" cy="314" rx="13.5" ry="8.6" transform="rotate(-20 300 314)"/>
          <ellipse cx="390" cy="292" rx="13.5" ry="8.6" transform="rotate(-20 390 292)"/>
        </g>
        <g stroke="currentColor" stroke-width="1.7">
          <line x1="312" y1="310" x2="312" y2="242"/>
          <line x1="378" y1="296" x2="378" y2="364"/>
        </g>

        <g fill="none" stroke="currentColor" stroke-width="1.7">
          <ellipse cx="620" cy="292" rx="14" ry="9" transform="rotate(-20 620 292)"/>
          <line x1="608" y1="296" x2="608" y2="368"/>
        </g>

        <text x="900" y="332" fill="currentColor" font-family="Georgia, 'Times New Roman', serif" font-size="78">&#x1D13E;</text>

        <g fill="currentColor">
          <ellipse cx="1200" cy="314" rx="13.5" ry="8.6" transform="rotate(-20 1200 314)"/>
        </g>
        <line x1="1212" y1="310" x2="1212" y2="242" stroke="currentColor" stroke-width="1.7"/>
      </svg>
    </div>
    <router-link class="button hero__cta" to="/contacto">Contáctanos</router-link>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
