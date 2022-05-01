import { useEffect, useState } from 'react';
import useSidebar from '@utils/store/useSidebar';
import { useDarkMode } from './useDarkMode';

export function useLogoColor() {
  const isDark = useDarkMode();
  const { color } = useSidebar();
  const [savedTheme, setSavedTheme] = useState('system');
  const [logoColor, setLogoColor] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) setSavedTheme(theme);
  }, [isDark, color]);

  useEffect(() => {
    const htmlClass = document.getElementsByTagName('html').item(0).className;

    // console.log({ dark: htmlClass.includes('dark') });
    if (htmlClass.includes('dark')) setLogoColor('light');
    else setLogoColor('dark');
  }, [savedTheme]);

  return logoColor;
}
