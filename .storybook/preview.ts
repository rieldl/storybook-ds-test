import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8fafc',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1e293b',
        },
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        },
      ],
    },
    docs: {
      toc: true,
    },
    options: {
      storySort: {
        order: ['Introduction', 'Components', 'Illustrations'],
      },
    },
  },
};

export default preview;