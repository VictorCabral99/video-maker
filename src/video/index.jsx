import { spring, AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

import global from '../global.constant';
import { Abertura, Carrosel, Combos, Fechamento } from '../sequences';

export const Main = () => {

	const wallpaper = global.images.wallpaper;

	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

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

	const background = frame < 150 
		? { backgroundImage: `url(${wallpaper})` } 
		: { backgroundColor: 'white' }

	return (
		<AbsoluteFill style={background}>
			<AbsoluteFill style={{opacity}}>
				<Abertura></Abertura>
				<Carrosel></Carrosel>
				<Combos></Combos>
				<Fechamento></Fechamento>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
