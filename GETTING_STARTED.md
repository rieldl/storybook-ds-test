# 🚀 Guia de Início Rápido

Este guia irá ajudá-lo a configurar e executar o Design System.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🔧 Instalação

1. **Instalar dependências:**

```bash
npm install
# ou
yarn install
```

2. **Iniciar o servidor de desenvolvimento:**

```bash
npm run dev
# ou
yarn dev
```

3. **Abrir no navegador:**

Acesse `http://localhost:5173` para ver todos os exemplos de botões em ação.

## 📦 Build para Produção

Para criar uma build otimizada:

```bash
npm run build
# ou
yarn build
```

Para visualizar a build de produção:

```bash
npm run preview
# ou
yarn preview
```

## 🎯 Usando o Componente Button

### 1. Importação Básica

```tsx
import { Button } from './src/components';
```

### 2. Exemplo Simples

```tsx
import React from 'react';
import { Button } from './src/components';

function MyComponent() {
  return (
    <div>
      <Button type="primary" onClick={() => alert('Clicou!')}>
        Clique aqui
      </Button>
    </div>
  );
}

export default MyComponent;
```

### 3. Exemplo com Ícone

```tsx
import React from 'react';
import { Button } from './src/components';

// Seu ícone personalizado
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    {/* SVG path aqui */}
  </svg>
);

function MyComponent() {
  return (
    <Button
      type="primary"
      iconLeft={<DownloadIcon />}
      onClick={handleDownload}
    >
      Baixar Arquivo
    </Button>
  );
}
```

### 4. Exemplo de Formulário

```tsx
import React, { useState } from 'react';
import { Button } from './src/components';

function MyForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sua lógica de submit aqui
      await submitForm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Seus campos de formulário */}

      <div className="flex gap-2">
        <Button type="default" disabled={loading}>
          Cancelar
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Salvar
        </Button>
      </div>
    </form>
  );
}
```

## 🎨 Customização

### Modificar Cores do Tema

Edite o arquivo `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        500: '#1890ff', // Sua cor primária
      },
      danger: {
        500: '#f5222d', // Sua cor de perigo
      },
    },
  },
}
```

### Adicionar Novas Variantes

Você pode criar variantes customizadas modificando o arquivo `Button.tsx`:

```tsx
// Adicione sua lógica de customização nas funções de classes
```

## 📚 Próximos Passos

- Explore todos os exemplos em `src/components/Button.examples.tsx`
- Leia a documentação completa no `README.md`
- Comece a criar novos componentes seguindo o mesmo padrão

## 🐛 Problemas Comuns

### Tailwind CSS não funciona

Certifique-se de que:
1. O arquivo `src/index.css` está importado no `src/main.tsx`
2. O `postcss.config.js` está configurado corretamente
3. Execute `npm install` novamente

### TypeScript errors

Execute:
```bash
npm install --save-dev @types/react @types/react-dom
```

## 💡 Dicas

1. **Sempre use `aria-label`** em botões apenas com ícone para acessibilidade
2. **Use `htmlType="submit"`** em botões de formulário
3. **Use `danger` prop** para ações destrutivas (excluir, remover, etc.)
4. **Use `loading` state** durante operações assíncronas

## 🆘 Ajuda

Se encontrar problemas, verifique:
- Versão do Node.js (deve ser 18+)
- Dependências instaladas corretamente
- Arquivo `package.json` está correto

---

**Bom desenvolvimento! 🚀**
