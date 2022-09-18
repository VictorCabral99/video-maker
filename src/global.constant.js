import logo from './assets/img/logo.png';
import WP from './assets/img/wp/Magcargo.png';

import img1 from './assets/img/collection/021-022/021.png';
import img2 from './assets/img/collection/021-022/022.png';

const global = {
  color: {
    textColor: 'white'
  },
  fontSize: {
    fontSize1: 150,
    fontSize2: 100
  },
  images: {
    logo: logo,
    main: img2,
    carrosel: [img1, img2],
    wallpaper: WP
  },
  text: {
    titleText: 'TODAS AS CARTAS DA COLEÇÃO',
    subtitleText: 'Linha evolutiva do',
    pokemonName: 'Magcargo'
  },
  top: {
    topTitle: 0,
    topSubtitle: 1400,
    topPokemonName: 1500,
    topCentralLogo: 800
  }
}

export default global;