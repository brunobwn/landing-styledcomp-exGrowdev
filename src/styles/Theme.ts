export interface ThemeProps {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    backgroundSecondary: string;
    textColor: string;
  };
}

export const light = {
  name: 'light',
  colors: {
    primary: 'rgb(29,126,238)',
    secondary: '#fafbfc',
    background: '#fff',
    backgroundSecondary: '#f9f9f9',
    textColor: '#222',
  },
};

export const dark = {
  name: 'dark',
  colors: {
    primary: '#fff',
    secondary: '#2e2e2e',
    background: '#222',
    backgroundSecondary: 'radial-gradient(circle, rgba(43,43,43,1) 0%, rgba(34,34,34,1) 100%)',
    textColor: '#f9f9f9',
  },
};
