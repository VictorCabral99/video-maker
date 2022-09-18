import { Sequence } from 'remotion';

import global from '../global.constant';

import { Logo, Title, Combo } from '../shared/components';

export const Combos = ({timer, init}) => {

  const logo = global.images.logo;
  const images = global.images.support;

  return (
    <>
      <Sequence from={init} durationInFrames={300 * (images.length)}>
        <Logo src={logo} top={50}></Logo>
      </Sequence>
      <Sequence from={init} durationInFrames={300 * (images.length)}>
        <Title titleText="Apoios" titleColor="black" top={260} fontSize={120}></Title>
      </Sequence>
      {
        images.map((url, idx)=>{
          return (
            <Sequence from={init + (300 * idx)} durationInFrames={300 * (images.length - idx)}>
              <Combo src={url}></Combo>
            </Sequence>
          )
        })
      }
    </>
  )
}