import { Sequence } from 'remotion';

import global from '../global.constant';

import { Logo, Title, Combo } from '../shared/components';

export const Combos = () => {

  const logo = global.images.logo;
  const images = global.images.carrosel;

  return (
    <>
      <Sequence from={900} durationInFrames={300 * (images.length)}>
        <Logo src={logo} top={50}></Logo>
      </Sequence>
      <Sequence from={900} durationInFrames={300 * (images.length)}>
        <Title titleText="Apoios" titleColor="black" top={260} fontSize={120}></Title>
      </Sequence>
      {
        images.map((url, idx)=>{
          return (
            <Sequence from={(300 * idx) + 900} durationInFrames={300 * (images.length - idx)}>
              <Combo src={url}></Combo>
            </Sequence>
          )
        })
      }
    </>
  )
}