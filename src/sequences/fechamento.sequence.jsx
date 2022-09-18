import { Sequence } from 'remotion';

import global from '../global.constant';

import { FinalCard, FinalLogo } from '../shared/components';

export const Fechamento = () => {

  const logo = global.images.logo;
  const image = global.images.main;

  return (
    <>
      <Sequence from={1500}>
        <FinalLogo src={logo}></FinalLogo>
        <FinalCard src={image}></FinalCard>
      </Sequence>
    </>
  )
}