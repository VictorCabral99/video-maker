import logo from './assets/img/logo.png';
import WP from './assets/img/wp/Magcargo.png';

import img1 from './assets/img/collection/021-022/021.png';
import img2 from './assets/img/collection/021-022/022.png';

import support1 from './assets/img/support/021-022/163.png';
import support2 from './assets/img/support/021-022/079.png';
import support3 from './assets/img/support/021-022/Coalossal.png';
import support4 from './assets/img/support/021-022/Ursaluna.png';

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
    support: [support1, support2, support3, support4],
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