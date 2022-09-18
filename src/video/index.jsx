import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

import global from '../global.constant';
import { Abertura, Carrosel, Combos, Fechamento } from '../sequences';

export const Main = () => {

	const wallpaper = global.images.wallpaper;

	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

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

	const aberturaTime = 150;
	const carroselTime = aberturaTime + (300 * global.images.carrosel.length);
	const combosTime = carroselTime + (300 * global.images.support.length);
	const fechamentoTime = combosTime + 300;

	return (
		<AbsoluteFill style={background}>
			<AbsoluteFill style={{opacity}}>
				<Abertura timer={aberturaTime}></Abertura>
				<Carrosel timer={carroselTime} init={aberturaTime}></Carrosel>
				<Combos timer={combosTime} init={carroselTime}></Combos>
				<Fechamento timer={fechamentoTime} init={combosTime}></Fechamento>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
