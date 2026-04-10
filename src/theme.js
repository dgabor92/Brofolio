import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  fonts: {
    heading: '"Fraunces", Georgia, serif',
    body: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  colors: {
    brand: {
      50: '#f9f3e6',
      100: '#f0e0ba',
      200: '#e3c88b',
      300: '#d5b05f',
      400: '#c79a3d',
      500: '#ad7d21',
      600: '#8a6119',
      700: '#684911',
      800: '#49330c',
      900: '#2f2108',
    },
    slate: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
      950: '#020617',
    },
    surface: {
      50: '#fbf8f2',
    },
  },
  styles: {
    global: {
      'html, body, #root': {
        minHeight: '100%',
      },
      body: {
        bg: '#fbf8f2',
        color: '#0f172a',
        fontFeatureSettings: '"ss01" on, "ss02" on',
      },
      '*::selection': {
        background: '#ad7d21',
        color: '#fff',
      },
    },
  },
});

export default theme;
