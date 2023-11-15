'use client';

import { motion } from 'framer-motion';

const Home = () => (
  <div className='relative flex h-full w-full'>
    <div className='absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-28 text-center font-playfair text-3xl font-normal uppercase sm:text-5xl md:text-7xl lg:text-8xl'>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Matthias</h1>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1>Berchtold</h1>
      </motion.div>
    </div>
    <motion.h2
      className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center lowercase'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      Software engineer
    </motion.h2>
  </div>
);

export default Home;
