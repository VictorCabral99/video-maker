import { Sequence } from 'remotion';

import global from '../global.constant';

import { Logo, Card } from '../shared/components';

export const Carrosel = () => {

  const logo = global.images.logo;
  const images = global.images.carrosel;

  return (
    <>
      <Sequence from={150} durationInFrames={150 + (300 * (images.length))}>
        <Logo src={logo} top={50}></Logo>
      </Sequence>
      {
        images.map((url, idx)=>{
          return (
            <Sequence from={(300 * idx) + 150} durationInFrames={150 + (300 * (images.length - idx))}>
              <Card src={url}></Card>
            </Sequence>
          )
        })
      }
    </>
  )
}