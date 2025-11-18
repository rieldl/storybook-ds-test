import type { Meta, StoryObj } from '@storybook/react';

const Introduction = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>🎨 Design System Aurora</h1>
      <p>
        Bem-vindo à documentação do Design System Aurora - um sistema de componentes moderno
        construído com <strong>React</strong>, <strong>TypeScript</strong> e{' '}
        <strong>Tailwind CSS</strong>.
      </p>

      <h2>📦 O que está incluído</h2>

      <h3>🔘 Componentes</h3>
      <ul>
        <li>
          <strong>Button</strong> - Botão versátil com múltiplas variantes, tamanhos e estados
          <ul>
            <li>5 tipos: primary, default, dashed, link, text</li>
            <li>3 tamanhos: large, middle, small</li>
            <li>3 formas: default, circle, round</li>
            <li>Estados: normal, hover, active, disabled, loading</li>
            <li>Suporte a ícones e modo danger</li>
            <li>Totalmente acessível (WCAG AA)</li>
          </ul>
        </li>
      </ul>

      <h3>🖼️ Ilustrações</h3>
      <p>
        <strong>10 Ilustrações Isométricas Tech</strong> com paleta Aurora:
      </p>
      <ul>
        <li>Server Infrastructure</li>
        <li>Cloud Computing</li>
        <li>Mobile Development</li>
        <li>Code &amp; Programming</li>
        <li>Security</li>
        <li>Analytics</li>
        <li>Database</li>
        <li>API Integration</li>
        <li>Deployment (com animação!)</li>
        <li>AI &amp; Machine Learning (com animação!)</li>
      </ul>

      <h3>🌈 Paleta de Cores Aurora</h3>
      <p>Inspirada em aurora boreal:</p>
      <ul>
        <li>
          <strong>Aurora Green</strong>: <code>#00FFB9</code>
        </li>
        <li>
          <strong>Aurora Blue</strong>: <code>#0080FF</code>
        </li>
        <li>
          <strong>Aurora Purple</strong>: <code>#9D00FF</code>
        </li>
        <li>
          <strong>Aurora Pink</strong>: <code>#FF4566</code>
        </li>
        <li>
          <strong>Aurora Cyan</strong>: <code>#00FFCC</code>
        </li>
      </ul>

      <h2>🚀 Como usar</h2>

      <h3>Instalação</h3>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <code>npm install</code>
      </pre>

      <h3>Importando componentes</h3>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <code>{`import { Button } from './components';
import { ServerIllustration, CloudIllustration } from './illustrations';`}</code>
      </pre>

      <h3>Exemplo básico</h3>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <code>{`// Button
<Button type="primary" onClick={handleClick}>
  Click me
</Button>

// Ilustração
<ServerIllustration width={200} height={200} />`}</code>
      </pre>

      <h2>✨ Características</h2>
      <ul>
        <li>✅ <strong>TypeScript</strong> - Totalmente tipado</li>
        <li>✅ <strong>Acessibilidade</strong> - WCAG AA compliant</li>
        <li>✅ <strong>Responsivo</strong> - Mobile-first design</li>
        <li>✅ <strong>Leve</strong> - Componentes otimizados</li>
        <li>✅ <strong>Documentado</strong> - JSDoc completo</li>
        <li>✅ <strong>Testável</strong> - Props bem definidas</li>
        <li>✅ <strong>Customizável</strong> - Fácil de estender</li>
      </ul>

      <h2>📚 Navegação</h2>
      <p>Use o menu lateral para explorar:</p>
      <ul>
        <li>
          <strong>Components</strong> - Componentes React documentados
        </li>
        <li>
          <strong>Illustrations</strong> - Ilustrações isométricas
        </li>
      </ul>

      <h2>🛠️ Tecnologias</h2>
      <ul>
        <li>React 18</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Vite</li>
        <li>Storybook 10</li>
      </ul>

      <hr style={{ margin: '2rem 0' }} />

      <p>
        <strong>Desenvolvido com ❤️ usando React + TypeScript + Tailwind CSS</strong>
      </p>
    </div>
  );
};

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Introduction>;

export const Page: Story = {};
