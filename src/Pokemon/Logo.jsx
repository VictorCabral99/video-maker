import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import { Img } from "remotion";

const image = {
	position: 'absolute',
  left: '5%',
	width: '90%',
  top: 800
};

export const Logo = ({src}) => {
  const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

  let delay = 0;

  const scale = spring({
    fps: videoConfig.fps,
    frame: frame,
    from: 0,
    to: 360
  });

  const size = spring({
    fps: videoConfig.fps,
    frame: frame,
    from: 0,
    to: 90
  })

  return (
    <Img style={{
      ...image,
      transform: `rotateY(${scale}deg)`,
      width: `${size}%`,
      left: `${(100-size)/2}%`
    }} src={src}></Img>
  )
} 