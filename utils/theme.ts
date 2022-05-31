export const fontFamily = [
  'Roboto',
  'HarmonyOS Sans SC',
  'MiSans',
  'Source Han Sans SC',
  'Noto Sans SC',
  'Source Han Sans',
  'Noto Sans',
  '-apple-system',
  'BlinkMacSystemFont',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Noto Color Emoji',
].join(',')

export const palette = {
  primary: {
    light: '#f381a7',
    main: '#f06292',
    dark: '#a84466',
    contrastText: '#fff',
  },
  secondary: {
    light: '#9e9e9e',
    main: '#757575',
    dark: '#424242',
    contrastText: '#000',
  },
  subtle: {
    light: '#f5f5f5',
    main: '#eeeeee',
    dark: '#e0e0e0',
    contrastText: '#424242',
  },
}

declare module '@mui/material/styles' {
  interface Palette {
    subtle: Palette['primary']
  }
  interface PaletteOptions {
    subtle: PaletteOptions['primary']
  }
}
