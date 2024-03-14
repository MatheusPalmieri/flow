import { HeaderLogo } from './Logo';
import { HeaderUser } from './User';

export const Header = () => (
  <header className='w-full bg-primary-500 py-2 px-4 flex items-center justify-between'>
    <HeaderLogo />

    <HeaderUser />
  </header>
);
