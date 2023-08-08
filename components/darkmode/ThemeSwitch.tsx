import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme)


  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className=''>
        <button
          className='rounded-full bg-dark-icon p-2.5 text-dark-default hover:bg-sky-800'
          aria-label='Theme'
        >
          <div className='h-5 w-5'></div>
        </button>
      </div>
    ); // TODO use skeleton if layout shift
  }

  return (
    <div className=''>
      <button
        onClick={() => {
          if (resolvedTheme === 'dark') {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        }}
        className='rounded-full bg-dark-icon p-2.5 text-dark-default hover:bg-sky-800'
        aria-label='Theme'
      >
        <ThemeSwitchIcon resolvedTheme={resolvedTheme || 'dark'} />
      </button>
    </div>
  );
};

// ThemeSwitchIcon props
type ThemeSwitchIconProps = {
  resolvedTheme: string;
};

const ThemeSwitchIcon = ({ resolvedTheme }: ThemeSwitchIconProps) => {
  return (
    <>
      <svg
        className={`${resolvedTheme === 'dark' ? 'hidden' : ''} h-5 w-5`}
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
      </svg>
      <svg
        className={`${resolvedTheme === 'light' ? 'hidden' : ''} h-5 w-5`}
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
          fillRule='evenodd'
          clipRule='evenodd'
        ></path>
      </svg>
    </>
  );
};