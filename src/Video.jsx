import {Composition} from 'remotion';
import { HelloWorld } from './Pokemon';

export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
