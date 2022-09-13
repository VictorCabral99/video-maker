import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Title } from './Title';
import { Logo } from './Logo';
import imgLogo from '../shared/img/logo.png';
import WP from '../shared/img/wp/Magcargo.png';

export const HelloWorld = () => {
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
				<Sequence from={40}>
					<Logo src={imgLogo}></Logo>
				</Sequence>
				<Sequence from={65}>
					<Title titleText={subtitleText} titleColor={textColor} top={topSubtitle} fontSize={fontSize2}/>
				</Sequence>
				<Sequence from={80}>
					<Title titleText={pokemonName} titleColor={textColor} top={topPokemonName} fontSize={fontSize1}/>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
