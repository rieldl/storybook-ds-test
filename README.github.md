# 🎨 Design System Aurora

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://rieldl.github.io/storybook-ds-test/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Sistema de componentes moderno construído com React, TypeScript e Tailwind CSS, inspirado no Ant Design com paleta de cores Aurora.

## 🌐 Live Demo

**Storybook:** [https://rieldl.github.io/storybook-ds-test/](https://rieldl.github.io/storybook-ds-test/)

## ✨ Features

- 🔘 **Button Component** - Componente de botão versátil com 5 tipos, 3 tamanhos e múltiplos estados
- 🖼️ **10 Ilustrações Isométricas** - Ilustrações tech com paleta Aurora
- 🎨 **Paleta Aurora** - Cores vibrantes inspiradas em aurora boreal
- ♿ **Totalmente Acessível** - WCAG AA compliant
- 📱 **Responsivo** - Mobile-first design
- 📖 **Documentado no Storybook** - Documentação interativa completa
- 🎯 **TypeScript** - Type-safe components
- 🎨 **Tailwind CSS** - Utility-first CSS

## 📦 Componentes

### Button
- 5 tipos: `primary`, `default`, `dashed`, `link`, `text`
- 3 tamanhos: `large`, `middle`, `small`
- 3 formas: `default`, `circle`, `round`
- Estados: normal, hover, active, disabled, loading
- Suporte a ícones e modo danger
- WCAG AA acessível

### Ilustrações Aurora
10 ilustrações isométricas tech:
- Server Infrastructure
- Cloud Computing
- Mobile Development
- Code & Programming
- Security
- Analytics
- Database
- API Integration
- Deployment
- AI & Machine Learning

## 🎨 Paleta de Cores Aurora

```css
Aurora Green:  #00FFB9
Aurora Blue:   #0080FF
Aurora Purple: #9D00FF
Aurora Pink:   #FF4566
Aurora Cyan:   #00FFCC
```

## 🚀 Quick Start

```bash
# Clone o repositório
git clone https://github.com/rieldl/storybook-ds-test.git

# Instale as dependências
npm install

# Rode o projeto
npm run dev

# Rode o Storybook
npm run storybook
```

## 💻 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor Vite
npm run build        # Build para produção
npm run storybook    # Inicia o Storybook
npm run build-storybook  # Build do Storybook
```

## 📖 Documentação

Acesse o [Storybook](https://rieldl.github.io/storybook-ds-test/) para:
- Ver todos os componentes
- Testar props interativamente
- Verificar acessibilidade
- Copiar exemplos de código
- Ver documentação completa

## 🔧 Stack Tecnológica

- **React** 18.2.0
- **TypeScript** 5.2.2
- **Tailwind CSS** 3.4.3
- **Vite** 5.2.0
- **Storybook** 10.0.8

## 🎯 Uso

### Button Component

```tsx
import { Button } from './components';

function App() {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button type="primary" danger>Delete</Button>
      <Button type="primary" loading>Loading...</Button>
    </>
  );
}
```

### Ilustrações

```tsx
import { ServerIllustration, CloudIllustration } from './illustrations';

function Hero() {
  return (
    <div>
      <ServerIllustration width={300} height={300} />
      <h1>Cloud Infrastructure</h1>
    </div>
  );
}
```

## 📱 Screenshots

### Button Component
![Button Component](https://via.placeholder.com/800x400?text=Button+Component)

### Ilustrações Aurora
![Illustrations](https://via.placeholder.com/800x400?text=Aurora+Illustrations)

## 🤝 Contribuindo

Contributions são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**rieldl**
- GitHub: [@rieldl](https://github.com/rieldl)

---

**Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS**
