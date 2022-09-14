import { spring, AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';
import { Title } from '../../shared/components/Title';
import { Logo } from '../../shared/components/Logo';

import imgLogo from '../../assets/img/logo.png';
import WP from '../../assets/img/wp/Magcargo.png';

export const Opening = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const titleText = "TODAS AS CARTAS DA COLEÇÃO";
	const subtitleText = "Linha evolutiva do";
	const pokemonName = "Magcargo";
	const textColor = "white";

	const topTitle = 0;
	const topSubtitle = 1400;
	const topPokemonName = 1500;

	const fontSize1 = 150;
	const fontSize2 = 100;

	// Animate from 0 to 1 after 25 frames
	const logoTranslationProgress = spring({
		frame: frame - 25,
		fps,
		config: {
			damping: 100,
		},
	});

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	// A <AbsoluteFill> is just a absolutely positioned <div>!
	return (
		<AbsoluteFill style={{backgroundImage: `url(${WP})`}}>
			<AbsoluteFill style={{opacity}}>
				<Sequence from={15}>
					<Title titleText={titleText} titleColor={textColor} top={topTitle} fontSize={fontSize1}/>
				</Sequence>
				<Sequence from={30}>
					<Logo src={imgLogo} top={800}></Logo>
				</Sequence>
				<Sequence from={45}>
					<Title titleText={subtitleText} titleColor={textColor} top={topSubtitle} fontSize={fontSize2}/>
				</Sequence>
				<Sequence from={60}>
					<Title titleText={pokemonName} titleColor={textColor} top={topPokemonName} fontSize={fontSize1}/>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
