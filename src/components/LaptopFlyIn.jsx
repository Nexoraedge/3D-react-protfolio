import React from 'react';
import { a, useSpring } from '@react-spring/three';
import Laptop from './Laptop';

/*
  LaptopFlyIn
  -------------
  Plays a fly-in animation every time it (re)mounts. To replay the animation
  when project index changes, mount it with a different `key` (done in
  Projects.jsx).

  Animation:
  • position Z:  -12  -> -2.5   (far to near)
  • rotation Y:   π   ->  0      (back towards user → front)
  • scale:       0.4  -> 1       (small → normal)
*/
const LaptopFlyIn = ({ media, zoom = 1, rotation = 0, ...props }) => {
  const spring = useSpring({
    from: {
      position: [.8, -0.8, -30],
      rotation: [ +4.5, Math.PI, 0.35 ],  // flipped around Y
      scale: 0.4,
    },
    to: {
      position: [0, 0, -2],
      rotation: [ 0, 0, 0 ],
      scale: .78,
    },
    config: { mass: 1, tension: 30, friction: 20 },
    reset: true,
  });

  return (
    <a.group {...spring} {...props}>
      <Laptop media={media} zoom={zoom} rotation={rotation} />
    </a.group>
  );
};

export default LaptopFlyIn;
