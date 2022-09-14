import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, Img} from 'remotion';

const image = {
	position: 'absolute',
  left: '5%',
	width: '90%',
  top: 500
};

export const Card = ({src}) => {
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
    from: -85,
    to: 5
  })

  return (
    <Img style={{
      ...image,
      left: `${size}%`
    }} src={src}></Img>
  )
} 