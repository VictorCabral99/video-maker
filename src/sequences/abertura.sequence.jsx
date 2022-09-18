import { Sequence } from 'remotion';

import global from '../global.constant';

import { Logo, Title } from '../shared/components';

export const Abertura = ({ timer }) => {

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

  const titleTime = 15;
  const logoTime = 30;
  const subtitleTime = 45;
  const pokemonNameTime = 60;

  return (
    <>
      <Sequence from={titleTime} durationInFrames={timer - titleTime}>
				<Title titleText={titleText} titleColor={textColor} top={topTitle} fontSize={fontSize1}/>
			</Sequence>
      <Sequence from={logoTime} durationInFrames={timer - logoTime}>
        <Logo src={logo} top={topCentralLogo}></Logo>
      </Sequence>
      <Sequence from={subtitleTime} durationInFrames={timer - subtitleTime}>
        <Title titleText={subtitleText} titleColor={textColor} top={topSubtitle} fontSize={fontSize2}/>
      </Sequence>
      <Sequence from={pokemonNameTime} durationInFrames={timer - pokemonNameTime}>
        <Title titleText={pokemonName} titleColor={textColor} top={topPokemonName} fontSize={fontSize1}/>
      </Sequence>
    </>
  )
}