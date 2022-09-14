import React from 'react';
import { Img } from 'remotion';

const image = {
	position: 'absolute',
  left: '5%',
	width: '90%',
  top: 500
};

export const FinalCard = ({src}) => {
  return (
    <Img style={image} src={src}></Img>
  )
} 