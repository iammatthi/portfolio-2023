'use client';

import AnimatedCursor from 'react-animated-cursor';

const Cursor = () => (
  <AnimatedCursor
    color='255, 255, 255'
    innerSize={8}
    innerScale={1}
    outerSize={35}
    outerScale={1.5}
    outerAlpha={1}
    outerStyle={{
      mixBlendMode: 'exclusion',
    }}
    showSystemCursor={false}
    trailingSpeed={8}
  />
);

export { Cursor };
