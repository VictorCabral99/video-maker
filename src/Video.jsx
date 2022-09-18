import { Composition } from 'remotion';
import { Main } from './video/index';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={2250}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
