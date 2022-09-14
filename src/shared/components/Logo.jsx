import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, Img} from 'remotion';

const image = {
	position: 'absolute',
  left: '5%',
	width: '80%',
  top: 800
};

export const Logo = ({src, top}) => {
  const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

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
    to: 80
  })

  return (
    <Img style={{
      ...image,
      top: top,
      transform: `rotateY(${scale}deg)`,
      width: `${size}%`,
      left: `${(100-size)/2}%`
    }} src={src}></Img>
  )
} 