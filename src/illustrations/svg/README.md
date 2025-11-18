# Aurora Illustrations - SVG Files

Arquivos SVG puros das ilustrações isométricas tech. Use em qualquer projeto, framework ou plataforma!

## 📁 Arquivos Disponíveis

1. **server.svg** - Infraestrutura de servidores
2. **cloud.svg** - Cloud computing
3. **mobile-dev.svg** - Desenvolvimento mobile
4. **code.svg** - Programação e código
5. **security.svg** - Segurança cibernética
6. **analytics.svg** - Analytics e dashboards
7. **database.svg** - Banco de dados
8. **api.svg** - API e integrações
9. **deployment.svg** - Deploy (com animação!)
10. **ai.svg** - AI e Machine Learning (com animação!)

## 🎨 Preview

Abra o arquivo `index.html` em qualquer navegador para ver todas as ilustrações e fazer download individual.

```bash
# Abra o arquivo diretamente ou use um servidor local
open index.html
# ou
python -m http.server 8000
```

## 💻 Como Usar

### Em HTML Puro

```html
<!-- Método 1: Tag img -->
<img src="server.svg" alt="Server" width="200" height="200">

<!-- Método 2: Object tag (mantém interatividade) -->
<object data="cloud.svg" type="image/svg+xml"></object>

<!-- Método 3: Inline (editar cores diretamente) -->
<svg>... cole o conteúdo do SVG aqui ...</svg>
```

### Em CSS

```css
.hero-bg {
  background-image: url('cloud.svg');
  background-size: 400px 400px;
  background-repeat: no-repeat;
  background-position: center;
}

.icon::before {
  content: url('security.svg');
  width: 50px;
  height: 50px;
}
```

### Em React

```jsx
// Método 1: Import direto
import ServerIcon from './server.svg';

function MyComponent() {
  return <img src={ServerIcon} alt="Server" />;
}

// Método 2: Como componente (usando SVGR)
import { ReactComponent as ServerIcon } from './server.svg';

function MyComponent() {
  return <ServerIcon width={200} height={200} />;
}
```

### Em Vue

```vue
<template>
  <div>
    <img src="@/assets/server.svg" alt="Server" />
  </div>
</template>
```

### Em Angular

```typescript
// component.html
<img src="assets/illustrations/server.svg" alt="Server">

// Ou usando Angular Material
<mat-icon svgIcon="server"></mat-icon>
```

### Em Figma / Adobe XD

1. Abra o arquivo SVG no editor de texto
2. Copie todo o conteúdo
3. Cole diretamente no Figma/XD como SVG

### Em Markdown

```markdown
![Server](./server.svg)
```

## 🎯 Tamanhos Recomendados

| Uso | Tamanho |
|-----|---------|
| Ícone pequeno | 24x24px ou 32x32px |
| Ícone médio | 64x64px ou 80x80px |
| Card | 120x120px ou 150x150px |
| Hero section | 300x300px ou 400x400px |
| Background | 600x600px ou maior |

## 🎨 Personalizando Cores

### Método 1: Editor de Texto
Abra o SVG em um editor de texto e substitua os códigos hex:

```svg
<!-- De -->
<path fill="#FF4566" .../>

<!-- Para -->
<path fill="#YOUR_COLOR" .../>
```

### Método 2: CSS (se inline ou object)
```css
svg path {
  fill: #YOUR_COLOR;
}
```

### Método 3: JavaScript
```javascript
const svg = document.querySelector('svg');
const paths = svg.querySelectorAll('path');
paths.forEach(path => {
  if (path.getAttribute('fill') === '#FF4566') {
    path.setAttribute('fill', '#YOUR_COLOR');
  }
});
```

## ⚡ Otimização

Os SVGs já estão otimizados, mas você pode reduzi-los ainda mais:

```bash
# Usando SVGO
npm install -g svgo
svgo server.svg -o server-optimized.svg

# Ou online
# https://jakearchibald.github.io/svgomg/
```

## 📊 Tamanho dos Arquivos

Cada arquivo SVG tem aproximadamente:
- **Sem otimização:** 5-15KB
- **Com otimização SVGO:** 3-10KB
- **Gzipped:** 1-4KB

## 🎭 Animações

Duas ilustrações incluem animações SVG nativas:

### deployment.svg
- Fogo do foguete animado (3 chamas oscilando)
- Usa `<animate>` nativo do SVG

### ai.svg
- Pulsos de dados na rede neural
- Partículas em movimento
- Usa `<animateMotion>` nativo do SVG

Para desabilitar animações:
```css
svg * {
  animation: none !important;
}
```

## 🌐 Compatibilidade

✅ Todos os navegadores modernos
✅ Internet Explorer 9+
✅ Mobile (iOS/Android)
✅ Figma, Sketch, Adobe XD
✅ PowerPoint, Keynote, Google Slides
✅ Email marketing (depende do cliente)

## 📱 Uso em Email Marketing

```html
<!-- Fallback para clientes que não suportam SVG -->
<img src="server.png"
     srcset="server.svg"
     alt="Server"
     width="200"
     height="200">
```

## 🔧 Ferramentas Úteis

- **SVGOMG:** https://jakearchibald.github.io/svgomg/
- **SVG Editor Online:** https://www.svgedit.io/
- **SVG to PNG:** https://cloudconvert.com/svg-to-png
- **SVG Path Editor:** https://yqnn.github.io/svg-path-editor/

## 💡 Dicas

1. **Performance:** Use `<img>` para melhor performance
2. **Interatividade:** Use `<object>` ou inline para CSS/JS
3. **Acessibilidade:** Sempre adicione `alt` ou `aria-label`
4. **Responsivo:** SVGs escalam perfeitamente, use porcentagens
5. **Dark Mode:** Considere criar versões alternativas

## 📄 Licença

Estes SVGs fazem parte do Design System e são de uso interno do projeto.

---

**Criado com ❤️ para interfaces modernas**
