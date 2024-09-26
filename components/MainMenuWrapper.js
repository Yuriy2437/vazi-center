'use client';

import { usePathname } from 'next/navigation';
import MainMenu from './MainMenu';

const MainMenuWrapper = () => {
  const pathname = usePathname();
  const showMenu = pathname !== '/' && pathname !== '/menu';

  if (!showMenu) {
    return null;
  }

  return <MainMenu />;
};

export default MainMenuWrapper;
