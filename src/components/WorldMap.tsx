import React from 'react';
import { motion } from 'framer-motion';

const WorldMap: React.FC = () => {
  return (
    <div className="absolute inset-0 z-10">
      <motion.svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* World Map Paths */}
        <path
          d="M100,150 C150,140 200,160 250,150 C300,140 350,160 400,150 C450,140 500,160 550,150 C600,140 650,160 700,150"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-400/40"
        />
        <path
          d="M150,200 C200,190 250,210 300,200 C350,190 400,210 450,200 C500,190 550,210 600,200 C650,190 700,210 750,200"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-400/40"
        />
        <path
          d="M200,250 C250,240 300,260 350,250 C400,240 450,260 500,250 C550,240 600,260 650,250 C700,240 750,260 800,250"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-blue-400/40"
        />
        
        {/* Connection Points */}
        {[
          [300, 150], [400, 180], [500, 200], [600, 230],
          [250, 230], [350, 240], [450, 250], [550, 260]
        ].map(([cx, cy], index) => (
          <motion.circle
            key={index}
            cx={cx}
            cy={cy}
            r="4"
            className="text-blue-500 fill-current"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
        ))}
        
        {/* Connection Lines */}
        {[
          [[300, 150], [400, 180]],
          [[400, 180], [500, 200]],
          [[500, 200], [600, 230]],
          [[250, 230], [350, 240]],
          [[350, 240], [450, 250]],
          [[450, 250], [550, 260]]
        ].map(([[x1, y1], [x2, y2]], index) => (
          <motion.line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
            className="text-blue-400/70"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.4
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default WorldMap;