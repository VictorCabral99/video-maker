import { AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

import { FinalCard } from '../../shared/components/FinalCard';
import { FinalLogo } from '../../shared/components/FinalLogo';

import imgLogo from '../../assets/img/logo.png';
import image from '../../assets/img/collection/021-022/022.png';

export const Ending = () => {
  return (
		<AbsoluteFill style={{backgroundColor: "white" }}>
			<AbsoluteFill>
					<Sequence from={0}>
						<FinalLogo src={imgLogo}></FinalLogo>
						<FinalCard src={image}></FinalCard>
					</Sequence>
			</AbsoluteFill>
		</AbsoluteFill>
	);
}