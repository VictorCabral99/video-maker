import logo from './assets/img/logo.png';
import WP from './assets/img/wp/Current-WP.png';

import img1 from './assets/img/collection/024 - 026/024.png';
import img2 from './assets/img/collection/024 - 026/025.png';
import img3 from './assets/img/collection/024 - 026/026.png';
import img4 from './assets/img/collection/024 - 026/221.png';

import support1 from './assets/img/support/024 - 026/4.png';
import support2 from './assets/img/support/024 - 026/6.png';
import support3 from './assets/img/support/024 - 026/5.png';
import support4 from './assets/img/support/024 - 026/7.png';

const global = {
  color: {
    textColor: 'black'
  },
  fontSize: {
    fontSize1: 150,
    fontSize2: 100
  },
  images: {
    logo: logo,
    main: img4,
    carrosel: [img1,img2,img3,img4],
    support: [support1,support2,support3,support4],
    wallpaper: WP
  },
  text: {
    titleText: 'TODAS AS CARTAS DA COLEÇÃO',
    subtitleText: 'Linha evolutiva do', // 'Apresentando', //
    pokemonName: 'Chandelure'
  },
  top: {
    topTitle: 0,
    topSubtitle: 1400,
    topPokemonName: 1500,
    topCentralLogo: 800
  }
}

export default global;