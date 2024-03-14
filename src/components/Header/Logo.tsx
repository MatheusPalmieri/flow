import Logo from '../../assets/images/logo.png';
import { HeaderCard } from './Card';

export const HeaderLogo = () => (
  <HeaderCard>
    <img
      src={Logo}
      alt='Logo Flow'
      className='w-[30px] h-[30px]'
      style={{ filter: 'brightness(0) invert(100%)' }}
    />

    <h1 className='text-2xl font-bold tracking-wide text-white'>Flow</h1>
  </HeaderCard>
);
