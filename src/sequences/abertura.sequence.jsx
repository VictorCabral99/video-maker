import { Sequence } from 'remotion';

import global from '../global.constant';

import { Logo, Title } from '../shared/components';

export const Abertura = () => {

  const logo = global.images.logo;
  
  const titleText = global.text.titleText;
  const subtitleText = global.text.subtitleText;
  const pokemonName = global.text.pokemonName;

  const textColor = global.color.textColor;

  const fontSize1 = global.fontSize.fontSize1;
  const fontSize2 = global.fontSize.fontSize2;

  const topTitle = global.top.topTitle;
  const topSubtitle = global.top.topSubtitle;
  const topPokemonName = global.top.topPokemonName;
  const topCentralLogo = global.top.topCentralLogo;

  return (
    <>
      <Sequence from={15} durationInFrames={135}>
				<Title titleText={titleText} titleColor={textColor} top={topTitle} fontSize={fontSize1}/>
			</Sequence>
      <Sequence from={30} durationInFrames={120}>
        <Logo src={logo} top={topCentralLogo}></Logo>
      </Sequence>
      <Sequence from={45} durationInFrames={105}>
        <Title titleText={subtitleText} titleColor={textColor} top={topSubtitle} fontSize={fontSize2}/>
      </Sequence>
      <Sequence from={60} durationInFrames={90}>
        <Title titleText={pokemonName} titleColor={textColor} top={topPokemonName} fontSize={fontSize1}/>
      </Sequence>
    </>
  )
}