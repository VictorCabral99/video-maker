import React from 'react';
import { spring, useCurrentFrame, useVideoConfig, Img} from 'remotion';

const image = {
	position: 'absolute',
  left: '5%',
	width: '90%',
  top: 500
};

export const Combo = ({src}) => {
  const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

  const size = spring({
    fps: videoConfig.fps,
    frame: frame,
    from: 1800,
    to: 500
  })

  return (
    <Img style={{
      ...image,
      top: size,
    }} src={src}></Img>
  )
} 