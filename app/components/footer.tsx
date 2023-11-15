'use client';

import { Variants, motion } from 'framer-motion';

interface LinkData {
  href: string;
  label: string;
}

const links: LinkData[] = [
  { href: 'mailto:contact@matthiasberchtold.com', label: 'email' },
  { href: 'https://github.com/iammatthi', label: 'github' },
  {
    href: 'https://www.linkedin.com/in/matthias-berchtold/',
    label: 'linkedin',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2.5,
      duration: 1.5,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Footer = () => (
  <footer>
    <motion.div
      className='flex flex-row place-content-end gap-8'
      variants={container}
      initial='hidden'
      animate='show'
    >
      {links.map((link) => (
        <motion.a
          key={link.href}
          href={link.href}
          className='text-white hover:text-gray-300'
          variants={item}
          target='_blank'
        >
          {link.label}
        </motion.a>
      ))}
    </motion.div>
  </footer>
);

export { Footer };
