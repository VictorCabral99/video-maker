import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { Title } from './Title';

export const HelloWorld = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	const titleText = "TODAS AS CARTAS DA NOVA COLEÇÃO";
	const subtitleText = "LINHA DO MAGCARGO";
	const textColor = "black";

	const topTitle = 0;
	const topSubtitle = 1500;

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
		<AbsoluteFill style={{backgroundColor: 'white'}}>
			<AbsoluteFill style={{opacity}}>
				{/* Sequences can shift the time for its children! */}
				<Sequence from={35}>
					<Title titleText={titleText} titleColor={textColor} top={topTitle}/>
				</Sequence>
				{/* The subtitle will only enter on the 75th frame. */}
				<Sequence from={75}>
					<Title titleText={subtitleText} titleColor={textColor} top={topSubtitle}/>
				</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
