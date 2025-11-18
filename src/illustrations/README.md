# Aurora Illustrations 🎨

Set de 10 ilustrações isométricas tech com paleta de cores inspirada em aurora boreal.

## 🌈 Paleta de Cores Aurora

```typescript
const AuroraColors = {
  auroraGreen: {
    light: '#B4FF00',
    DEFAULT: '#00FFB9',
    dark: '#00D9A0',
  },
  auroraBlue: {
    light: '#4DA6FF',
    DEFAULT: '#0080FF',
    dark: '#0066CC',
  },
  auroraPurple: {
    light: '#B366FF',
    DEFAULT: '#9D00FF',
    dark: '#7B00CC',
  },
  auroraPink: {
    light: '#FF6B8A',
    DEFAULT: '#FF4566',
    dark: '#FF0080',
  },
  auroraCyan: {
    light: '#66FFE6',
    DEFAULT: '#00FFCC',
    dark: '#00CCB3',
  },
}
```

## 📦 Ilustrações Disponíveis

### 1. Server Infrastructure
**Componente:** `ServerIllustration`
**Representa:** Infraestrutura cloud e servidores
**Cores:** Aurora Blue + Aurora Pink + Aurora Purple

### 2. Cloud Computing
**Componente:** `CloudIllustration`
**Representa:** Serviços cloud e armazenamento
**Cores:** Aurora Blue + Aurora Green + Aurora Pink

### 3. Mobile Development
**Componente:** `MobileDevIllustration`
**Representa:** Desenvolvimento de apps mobile
**Cores:** Aurora Purple + Aurora Pink + Aurora Blue

### 4. Code & Programming
**Componente:** `CodeIllustration`
**Representa:** Desenvolvimento de software
**Cores:** Aurora Purple + Aurora Pink + Aurora Blue + Aurora Green

### 5. Security
**Componente:** `SecurityIllustration`
**Representa:** Segurança cibernética
**Cores:** Aurora Pink + Aurora Green + Aurora Blue

### 6. Analytics
**Componente:** `AnalyticsIllustration`
**Representa:** Análise de dados e métricas
**Cores:** Aurora Blue + Aurora Pink + Aurora Green + Aurora Purple

### 7. Database
**Componente:** `DatabaseIllustration`
**Representa:** Armazenamento de dados
**Cores:** Aurora Cyan + Aurora Blue + Aurora Purple

### 8. API Integration
**Componente:** `APIIllustration`
**Representa:** Conexões e integrações via API
**Cores:** Aurora Purple + Aurora Blue + Aurora Pink + Aurora Green

### 9. Deployment
**Componente:** `DeploymentIllustration`
**Representa:** Deploy e lançamento de apps
**Cores:** Aurora Pink + Aurora Blue + Aurora Green + Aurora Cyan
**Animações:** Fogo do foguete animado

### 10. AI & Machine Learning
**Componente:** `AIIllustration`
**Representa:** Inteligência artificial e ML
**Cores:** Aurora Purple + Aurora Blue + Aurora Green + Aurora Cyan
**Animações:** Pulsos de dados na rede neural

## 🚀 Como Usar

### Importação Individual

```tsx
import { ServerIllustration } from './illustrations';

function MyComponent() {
  return (
    <div>
      <ServerIllustration width={200} height={200} />
    </div>
  );
}
```

### Importação Múltipla

```tsx
import {
  CloudIllustration,
  CodeIllustration,
  SecurityIllustration,
} from './illustrations';
```

### Props Disponíveis

Todas as ilustrações aceitam as mesmas props:

```typescript
interface IllustrationProps {
  width?: number;        // Default: 200
  height?: number;       // Default: 200
  className?: string;    // Classes CSS adicionais
}
```

### Exemplos de Uso

#### Tamanho Personalizado
```tsx
<DatabaseIllustration width={300} height={300} />
```

#### Com Classes CSS
```tsx
<AIIllustration
  width={150}
  height={150}
  className="hover:opacity-80 transition-opacity"
/>
```

#### Em Grid Responsivo
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <ServerIllustration width={200} height={200} />
  <CloudIllustration width={200} height={200} />
  <CodeIllustration width={200} height={200} />
</div>
```

#### Com Efeitos Hover
```tsx
<div className="transform hover:scale-110 transition-transform">
  <DeploymentIllustration width={180} height={180} />
</div>
```

## 🎨 Usando a Paleta de Cores

```tsx
import { AuroraColors } from './illustrations';

// Em componentes
const MyComponent = () => (
  <div style={{ backgroundColor: AuroraColors.auroraBlue.DEFAULT }}>
    <h1 style={{ color: AuroraColors.auroraPink.light }}>
      Aurora Colors
    </h1>
  </div>
);

// Com Tailwind (via inline styles)
const MyButton = () => (
  <button style={{
    backgroundColor: AuroraColors.auroraGreen.DEFAULT,
    color: 'white'
  }}>
    Click Me
  </button>
);
```

## ✨ Características

- ✅ **Isométrico:** Design 3D isométrico profissional
- ✅ **Flat Design:** Estilo flat moderno
- ✅ **Paleta Aurora:** Cores vibrantes inspiradas em aurora boreal
- ✅ **Responsivo:** Funciona em qualquer tamanho
- ✅ **Animações:** Algumas ilustrações incluem animações SVG
- ✅ **TypeScript:** Totalmente tipado
- ✅ **Customizável:** Props para ajustar tamanho e styling
- ✅ **Leve:** SVG puro, sem dependências externas

## 🎯 Casos de Uso

### Landing Pages
```tsx
<section className="hero">
  <CloudIllustration width={400} height={400} />
  <h1>Cloud Solutions</h1>
</section>
```

### Empty States
```tsx
<div className="empty-state">
  <DatabaseIllustration width={250} height={250} />
  <p>No data available yet</p>
</div>
```

### Feature Cards
```tsx
<div className="feature-card">
  <SecurityIllustration width={120} height={120} />
  <h3>Secure by Default</h3>
  <p>Enterprise-grade security</p>
</div>
```

### Dashboards
```tsx
<div className="dashboard-widget">
  <AnalyticsIllustration width={180} height={180} />
  <div className="metrics">...</div>
</div>
```

## 📊 Performance

- **Tamanho:** ~5-15KB por ilustração (SVG otimizado)
- **Rendering:** Instantâneo (SVG inline)
- **Escalabilidade:** Perfeito em qualquer resolução
- **Compatibilidade:** Todos os browsers modernos

## 🔄 Animações

Duas ilustrações incluem animações CSS/SVG:

### DeploymentIllustration
- Fogo do foguete oscilando
- Efeito de propulsão animado

### AIIllustration
- Pulsos de dados na rede neural
- Partículas em movimento

Para desabilitar animações (se necessário):
```css
.illustration * {
  animation: none !important;
}
```

## 🎨 Customização Avançada

### Alterando Cores
Você pode criar sua própria paleta estendendo as cores:

```typescript
import { AuroraColors } from './illustrations';

const MyCustomColors = {
  ...AuroraColors,
  myCustomColor: {
    light: '#FF00FF',
    DEFAULT: '#CC00CC',
    dark: '#990099',
  },
};
```

### Criando Variantes
```tsx
const GrayscaleServer = () => (
  <svg {...props} style={{ filter: 'grayscale(100%)' }}>
    <ServerIllustration />
  </svg>
);
```

## 📝 Licença

Estas ilustrações fazem parte do Design System e são de uso interno do projeto.

---

**Desenvolvido com ❤️ usando React + TypeScript + SVG**
