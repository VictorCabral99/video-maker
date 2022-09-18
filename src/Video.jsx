import { Composition } from 'remotion';
import { Main } from './video/index';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={2500}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
