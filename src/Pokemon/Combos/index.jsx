import { spring, AbsoluteFill, interpolate, Sequence, useCurrentFrame, useVideoConfig } from 'remotion';

import { Logo } from '../../shared/components/Logo';
import { Combo } from '../../shared/components/Combo';
import { Title } from '../../shared/components/Title';

import imgLogo from '../../assets/img/logo.png';

import img1 from '../../assets/img/collection/021-022/021.png';
import img2 from '../../assets/img/collection/021-022/022.png';

export const Combos = () => {
  const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

  const images = [img1, img2];

  const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

  return (
		<AbsoluteFill style={{backgroundColor: "white" }}>
			<AbsoluteFill style={{opacity}}>
				<Sequence from={15}>
          <Logo src={imgLogo} top={50}></Logo>
				</Sequence>
				<Sequence from={20}>
					<Title titleText="Apoios" titleColor="black" top={260} fontSize={120}></Title>
				</Sequence>
        {
          images.map((url, idx)=>{
            return (
              <Sequence from={(300 * idx) + 30}>
                <Combo src={url}></Combo>
              </Sequence>
            )
          })
        }
			</AbsoluteFill>
		</AbsoluteFill>
	);
}