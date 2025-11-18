# 📖 Storybook - Design System Aurora

Documentação interativa completa dos componentes e ilustrações do Design System.

## 🚀 Iniciando o Storybook

```bash
npm run storybook
```

O Storybook abrirá automaticamente em **http://localhost:6006/**

## 📚 O que você encontrará

### 🏠 Introduction
Página inicial com overview completo do Design System, tecnologias usadas e guia rápido.

### 🔘 Components/Button
Documentação completa do componente Button com:
- ✅ **Controls interativos** - Teste todas as props em tempo real
- ✅ **Todas as variantes** - Primary, Default, Dashed, Link, Text
- ✅ **Todos os tamanhos** - Large, Middle, Small
- ✅ **Todas as formas** - Default, Circle, Round
- ✅ **Estados** - Normal, Hover, Active, Disabled, Loading
- ✅ **Modo Danger** - Variante vermelha para ações destrutivas
- ✅ **Com ícones** - Left, Right, Icon-only
- ✅ **Exemplos práticos** - Formulários, cards, etc.

### 🖼️ Illustrations/Aurora Tech
Documentação das ilustrações isométricas com:
- ✅ **10 Ilustrações** - Todas as ilustrações individuais
- ✅ **Grid completo** - Visualização de todas juntas
- ✅ **Paleta de cores** - Aurora color palette
- ✅ **Exemplos de uso** - Hero sections, empty states, etc.
- ✅ **Animações** - Deployment e AI com animações SVG

## 🎨 Features do Storybook

### Controls Interativos
Teste todas as props do componente Button em tempo real:
- Type (primary, default, dashed, link, text)
- Size (large, middle, small)
- Shape (default, circle, round)
- Boolean flags (danger, disabled, loading, block)

### Backgrounds
Teste componentes em diferentes backgrounds:
- Light (padrão)
- White
- Dark
- Gradient

### Acessibilidade (A11y)
Addon de acessibilidade automático que verifica:
- Contraste de cores
- ARIA attributes
- Navegação por teclado
- Screen reader support

### Documentação Auto-gerada
- **Props Table** - Todas as props com tipos e defaults
- **JSDoc** - Descrições completas de cada prop
- **Code Examples** - Exemplos de código copiáveis
- **Stories** - Múltiplos exemplos de uso

## 📖 Navegação

```
Storybook
├── Introduction          # Overview do Design System
├── Components
│   └── Button           # Documentação do Button
│       ├── Primary      # Story: Botão primário
│       ├── Default      # Story: Botão padrão
│       ├── Dashed       # Story: Botão tracejado
│       ├── Danger       # Story: Botão de perigo
│       ├── Loading      # Story: Botão loading
│       ├── WithIcons    # Story: Com ícones
│       └── ...          # Mais stories
└── Illustrations
    └── Aurora Tech      # Documentação das ilustrações
        ├── Server       # Story: Server Infrastructure
        ├── Cloud        # Story: Cloud Computing
        ├── Code         # Story: Programming
        ├── Security     # Story: Cybersecurity
        └── ...          # Mais stories
```

## 🛠️ Addons Instalados

### @storybook/addon-docs
- Documentação automática
- Props table
- Code snippets
- MDX support

### @storybook/addon-a11y
- Verificação de acessibilidade
- WCAG compliance
- Contraste de cores
- ARIA validation

### @storybook/addon-controls
- Controles interativos
- Props editing em tempo real
- Type-safe

### @chromatic-com/storybook
- Visual testing
- Snapshot testing
- CI/CD integration

## 📝 Scripts Disponíveis

```bash
# Iniciar Storybook em modo desenvolvimento
npm run storybook

# Build do Storybook para produção
npm run build-storybook

# O build será gerado em: storybook-static/
```

## 🌐 Deploy do Storybook

### Deploy local
```bash
npm run build-storybook
npx serve storybook-static
```

### Deploy para produção

#### Vercel
```bash
npm run build-storybook
vercel storybook-static/
```

#### Netlify
```bash
npm run build-storybook
netlify deploy --dir=storybook-static
```

#### GitHub Pages
```bash
npm run build-storybook
# Commit storybook-static/ para gh-pages branch
```

## 🎯 Casos de Uso

### 1. Desenvolvimento
Use o Storybook durante o desenvolvimento para:
- Visualizar componentes isoladamente
- Testar diferentes estados
- Validar acessibilidade
- Documentar props

### 2. Design Review
Compartilhe o Storybook com designers para:
- Validar implementação vs design
- Testar variantes
- Aprovar estados interativos

### 3. QA Testing
Use para testes de qualidade:
- Testar todos os estados
- Verificar acessibilidade
- Validar responsividade

### 4. Documentação
Como documentação viva do Design System:
- Onboarding de novos devs
- Referência rápida
- Exemplos de código

## 💡 Dicas

### Atalhos de Teclado
- `F` - Fullscreen mode
- `S` - Show sidebar
- `T` - Show toolbar
- `A` - Show addons panel
- `/` - Search stories

### URL Direto
Acesse stories diretamente pela URL:
```
http://localhost:6006/?path=/story/components-button--primary
http://localhost:6006/?path=/docs/components-button--docs
http://localhost:6006/?path=/story/illustrations-aurora-tech--server
```

### Compartilhar Stories
Copie a URL da story para compartilhar com o time:
```
http://localhost:6006/?path=/story/components-button--danger
```

## 🔧 Customização

### Tema
Edite `.storybook/preview.ts` para customizar:
- Backgrounds
- Ordem das stories
- Controles padrão
- Documentação

### Novos Addons
Adicione novos addons em `.storybook/main.ts`:
```bash
npm install @storybook/addon-nome
```

## 📚 Recursos

- [Storybook Docs](https://storybook.js.org/docs)
- [Addons](https://storybook.js.org/addons)
- [Recipes](https://storybook.js.org/recipes)

---

**Desenvolvido com ❤️ usando Storybook 10**
