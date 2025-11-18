# Design System - React Components

Sistema de componentes React baseado no Ant Design, construído com TypeScript e Tailwind CSS.

## 📦 Componentes

### Button

Componente de botão completo com múltiplas variantes, tamanhos e estados, seguindo as especificações do Ant Design System.

## 🚀 Instalação

```bash
npm install react
# ou
yarn add react
```

Certifique-se de ter o Tailwind CSS configurado no seu projeto.

## 📖 Uso

### Importação

```tsx
import { Button } from './src/components';
// ou
import { Button } from './src/components/Button';
```

### Exemplos Básicos

```tsx
// Botão primário
<Button type="primary">Clique aqui</Button>

// Botão padrão
<Button type="default">Cancelar</Button>

// Botão com ícone
<Button type="primary" iconLeft={<SearchIcon />}>
  Buscar
</Button>

// Botão de perigo (ações destrutivas)
<Button type="primary" danger iconLeft={<TrashIcon />}>
  Excluir
</Button>

// Botão em loading
<Button type="primary" loading>
  Carregando...
</Button>

// Botão desabilitado
<Button type="primary" disabled>
  Desabilitado
</Button>
```

## 🎨 Props

### ButtonProps

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `type` | `'primary' \| 'default' \| 'dashed' \| 'link' \| 'text'` | `'default'` | Tipo de variante do botão |
| `size` | `'large' \| 'middle' \| 'small'` | `'middle'` | Tamanho do botão |
| `shape` | `'default' \| 'circle' \| 'round'` | `'default'` | Formato do botão |
| `danger` | `boolean` | `false` | Define o estado de perigo (vermelho) para ações destrutivas |
| `disabled` | `boolean` | `false` | Desabilita o botão |
| `loading` | `boolean` | `false` | Define o estado de carregamento |
| `iconLeft` | `React.ReactNode` | - | Ícone exibido antes do texto |
| `iconRight` | `React.ReactNode` | - | Ícone exibido depois do texto |
| `block` | `boolean` | `false` | Faz o botão ocupar toda a largura |
| `htmlType` | `'submit' \| 'button' \| 'reset'` | `'button'` | Tipo HTML do botão |
| `className` | `string` | - | Classes CSS adicionais |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Handler de clique |
| `children` | `React.ReactNode` | - | Conteúdo do botão |

## 🎭 Variantes

### Tipos

```tsx
<Button type="primary">Primary</Button>
<Button type="default">Default</Button>
<Button type="dashed">Dashed</Button>
<Button type="link">Link</Button>
<Button type="text">Text</Button>
```

### Tamanhos

```tsx
<Button size="large">Large</Button>
<Button size="middle">Middle</Button>
<Button size="small">Small</Button>
```

### Formatos

```tsx
<Button shape="default">Default</Button>
<Button shape="round">Round</Button>
<Button shape="circle" iconLeft={<Icon />} aria-label="Action" />
```

### Estados

```tsx
// Normal
<Button type="primary">Normal</Button>

// Perigo
<Button type="primary" danger>Danger</Button>

// Desabilitado
<Button type="primary" disabled>Disabled</Button>

// Loading
<Button type="primary" loading>Loading</Button>
```

## ♿ Acessibilidade (WCAG AA)

O componente Button foi desenvolvido seguindo as diretrizes WCAG AA:

### Características de Acessibilidade

- **Contraste de Cores**: Todos os estados do botão seguem a proporção mínima de contraste 4.5:1
- **Estados Focáveis**: Ring de foco visível com `focus:ring-2` para navegação por teclado
- **ARIA Attributes**:
  - `aria-busy` quando `loading={true}`
  - `aria-disabled` quando desabilitado
  - `aria-label` recomendado para botões apenas com ícone
- **Ícones Decorativos**: Ícones marcados com `aria-hidden="true"`
- **Navegação por Teclado**: Totalmente acessível via teclado (Enter e Space)
- **Estados Semânticos**: Uso correto de `disabled` attribute

### Exemplos de Uso Acessível

```tsx
// Botão apenas com ícone - SEMPRE adicionar aria-label
<Button
  shape="circle"
  iconLeft={<SearchIcon />}
  aria-label="Buscar produtos"
/>

// Botão de loading - aria-busy automático
<Button type="primary" loading>
  Salvando dados...
</Button>

// Botão de ação destrutiva - texto claro
<Button type="primary" danger iconLeft={<TrashIcon />}>
  Excluir permanentemente
</Button>
```

## 🎨 Customização com Tailwind

Você pode adicionar classes customizadas:

```tsx
<Button
  type="primary"
  className="shadow-lg hover:shadow-xl"
>
  Botão Customizado
</Button>
```

## 📁 Estrutura de Arquivos

```
src/
└── components/
    ├── Button.tsx           # Componente principal
    ├── Button.examples.tsx  # Exemplos de uso
    └── index.ts            # Exports
```

## 🔧 Configuração do Tailwind

Certifique-se de que seu `tailwind.config.js` inclui os arquivos do componente:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 🧪 Exemplos Completos

Veja o arquivo `src/components/Button.examples.tsx` para exemplos completos de todos os casos de uso.

## 📝 TypeScript

Todas as props são totalmente tipadas com TypeScript. O componente exporta os seguintes tipos:

```typescript
import type {
  ButtonProps,
  ButtonType,
  ButtonSize,
  ButtonShape,
  ButtonHTMLType
} from './src/components';
```

## 🎯 Design System Reference

Este componente foi criado baseado no Ant Design System do Figma, incluindo todas as variantes e estados do design original.

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**
