import { Composition } from 'remotion';
import { Opening } from './Pokemon/Abertura';
import { Carrosel } from './Pokemon/Carrosel';
import { Combos } from './Pokemon/Combos';
import { Ending } from './Pokemon/Fechamento';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Opening"
				component={Opening}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Carrosel"
				component={Carrosel}
				durationInFrames={1000}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Combos"
				component={Combos}
				durationInFrames={1000}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Ending"
				component={Ending}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
