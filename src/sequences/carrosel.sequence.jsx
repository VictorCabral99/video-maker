import { Sequence } from 'remotion';

import global from '../global.constant';

import { Logo, Card } from '../shared/components';

export const Carrosel = ({ timer, init }) => {

  const logo = global.images.logo;
  const images = global.images.carrosel;

  return (
    <>
      <Sequence from={init} durationInFrames={timer - init}>
        <Logo src={logo} top={50}></Logo>
      </Sequence>
      {
        images.map((url, idx)=>{
          return (
            <Sequence from={init + (300 * idx)} durationInFrames={(300 * (images.length - idx))}>
              <Card src={url}></Card>
            </Sequence>
          )
        })
      }
    </>
  )
}