import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';
import { SearchIcon, DownloadIcon, TrashIcon, PlusIcon, EditIcon } from '../components/Icons';

/**
 * O componente Button é um botão versátil e totalmente acessível baseado no Ant Design System.
 * Suporta múltiplas variantes, tamanhos, shapes e estados com total conformidade WCAG AA.
 */
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente de botão completo com suporte a diferentes tipos, tamanhos, formas e estados. Construído com React, TypeScript e Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'link', 'text'],
      description: 'Tipo de variante do botão',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['large', 'middle', 'small'],
      description: 'Tamanho do botão',
      table: {
        defaultValue: { summary: 'middle' },
      },
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
      description: 'Formato do botão',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    danger: {
      control: 'boolean',
      description: 'Define o estado de perigo (vermelho) para ações destrutivas',
      table: {
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão',
      table: {
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Define o estado de carregamento',
      table: {
        defaultValue: { summary: false },
      },
    },
    block: {
      control: 'boolean',
      description: 'Faz o botão ocupar toda a largura',
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Handler de clique',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Botão primário padrão - use para ações principais
 */
export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary Button',
  },
};

/**
 * Botão padrão - use para ações secundárias
 */
export const Default: Story = {
  args: {
    type: 'default',
    children: 'Default Button',
  },
};

/**
 * Botão tracejado - use para ações menos enfatizadas
 */
export const Dashed: Story = {
  args: {
    type: 'dashed',
    children: 'Dashed Button',
  },
};

/**
 * Botão link - use para navegação
 */
export const Link: Story = {
  args: {
    type: 'link',
    children: 'Link Button',
  },
};

/**
 * Botão texto - use para ações terciárias
 */
export const Text: Story = {
  args: {
    type: 'text',
    children: 'Text Button',
  },
};

/**
 * Botão grande
 */
export const Large: Story = {
  args: {
    type: 'primary',
    size: 'large',
    children: 'Large Button',
  },
};

/**
 * Botão pequeno
 */
export const Small: Story = {
  args: {
    type: 'primary',
    size: 'small',
    children: 'Small Button',
  },
};

/**
 * Botão arredondado
 */
export const Round: Story = {
  args: {
    type: 'primary',
    shape: 'round',
    children: 'Round Button',
  },
};

/**
 * Botão circular - ideal para ícones únicos
 */
export const Circle: Story = {
  args: {
    type: 'primary',
    shape: 'circle',
    iconLeft: <SearchIcon />,
    'aria-label': 'Search',
  },
};

/**
 * Botão de perigo - use para ações destrutivas
 */
export const Danger: Story = {
  args: {
    type: 'primary',
    danger: true,
    children: 'Delete',
    iconLeft: <TrashIcon />,
  },
};

/**
 * Botão desabilitado
 */
export const Disabled: Story = {
  args: {
    type: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

/**
 * Botão em carregamento
 */
export const Loading: Story = {
  args: {
    type: 'primary',
    loading: true,
    children: 'Loading...',
  },
};

/**
 * Botão com ícone à esquerda
 */
export const WithIconLeft: Story = {
  args: {
    type: 'primary',
    iconLeft: <DownloadIcon />,
    children: 'Download',
  },
};

/**
 * Botão com ícone à direita
 */
export const WithIconRight: Story = {
  args: {
    type: 'primary',
    iconRight: <PlusIcon />,
    children: 'Add New',
  },
};

/**
 * Botão full-width
 */
export const Block: Story = {
  args: {
    type: 'primary',
    block: true,
    children: 'Block Button',
  },
  parameters: {
    layout: 'padded',
  },
};

/**
 * Todos os tipos de botão
 */
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
      <Button type="text">Text</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos os tipos de botão disponíveis lado a lado',
      },
    },
  },
};

/**
 * Todos os tamanhos
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
      <Button type="primary" size="large">Large</Button>
      <Button type="primary" size="middle">Middle</Button>
      <Button type="primary" size="small">Small</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Todos os tamanhos de botão disponíveis',
      },
    },
  },
};

/**
 * Botões de perigo
 */
export const AllDangerTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Button type="primary" danger>Primary Danger</Button>
      <Button type="default" danger>Default Danger</Button>
      <Button type="dashed" danger>Dashed Danger</Button>
      <Button type="link" danger>Link Danger</Button>
      <Button type="text" danger>Text Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Variantes de perigo para todos os tipos de botão',
      },
    },
  },
};

/**
 * Exemplo de formulário
 */
export const FormExample: Story = {
  render: () => (
    <div style={{ width: '400px', background: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
      <h3 style={{ marginBottom: '1rem', color: '#1e293b' }}>Create Account</h3>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Name"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.25rem',
          }}
        />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="email"
          placeholder="Email"
          style={{
            width: '100%',
            padding: '0.5rem',
            border: '1px solid #e2e8f0',
            borderRadius: '0.25rem',
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button type="default" block>Cancel</Button>
        <Button type="primary" block>Create Account</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Exemplo de uso em um formulário real',
      },
    },
  },
};
