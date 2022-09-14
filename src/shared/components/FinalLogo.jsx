import React from 'react';
import { Img } from 'remotion';

const image = {
	position: 'absolute',
  left: '10%',
	width: '80%',
  top: 50
};

export const FinalLogo = ({src}) => {
  return (
    <Img style={image} src={src}></Img>
  )
} 