import cn from 'classnames';
import type { Metadata } from 'next';
import { Footer } from './components/footer';
import { Cursor } from './cursor';
import { fonts_variables } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Matthias Berchtold - Software Engineer',
  description: 'Matthias Berchtold personal portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'flex h-screen w-screen flex-col bg-[#222222] px-10 py-6 font-raleway text-sm font-extralight text-[#EAEAEA] md:px-20 md:py-12 md:text-lg lg:text-xl',
          fonts_variables
        )}
      >
        <main className='flex-grow'>{children}</main>
        <Footer />

        <Cursor />
      </body>
    </html>
  );
}
