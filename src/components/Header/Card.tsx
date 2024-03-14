import { ReactNode } from 'react';

export const HeaderCard = ({ children }: { children: ReactNode }) => (
  <section className='bg-primary-700 hover:bg-primary-600 duration-300 rounded py-2 px-4 flex items-center gap-4 cursor-pointer'>
    {children}
  </section>
);
