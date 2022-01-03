export const colorScheme = (scheme: string) => {
  if (scheme === 'light') {
    return {
      '--bg-main': '#FFFFFF',
      '--bg-second': 'rgb(255, 255, 255)',
      '--bg-alt': 'rgb(251, 253, 255)',
      '--base': 'rgb(24, 104, 183)',
      '--tx-main': '#282B31',
      '--tx-rgb': '4, 17, 29',
      '--bdr-grey': 'rgb(229, 232, 235)',
    };
  }

  return {
    '--bg-main': 'rgb(32, 34, 37)',
    '--bg-second': 'rgb(4, 17, 29)',
    '--bg-alt': 'rgb(48, 51, 57)',
    '--base': 'rgb(24, 104, 183)',
    '--tx-main': 'rgb(255, 255, 255)',
    '--tx-rgb': '255, 255, 255',
    '--bdr-grey': 'rgb(21, 27, 34)',
  };
};

export const toggleTheme = (mode: string) => {
  try {
    const root: any = document.querySelector(':root');

    const themeArray = Object.entries(colorScheme(mode));

    themeArray.map(([key, color]) => root.style.setProperty(key, color));

    localStorage.setItem('theme', mode);
  } catch (error) {
    console.log(error);
  }
};

export const getTheme = (): string | null => localStorage.getItem('theme');
