import type { Meta, StoryObj } from '@storybook/react';
import {
  ServerIllustration,
  CloudIllustration,
  MobileDevIllustration,
  CodeIllustration,
  SecurityIllustration,
  AnalyticsIllustration,
  DatabaseIllustration,
  APIIllustration,
  DeploymentIllustration,
  AIIllustration,
} from '../illustrations';
import { AuroraColors } from '../illustrations/colors';

/**
 * Ilustrações isométricas tech com paleta Aurora - perfeitas para interfaces de apps,
 * landing pages, dashboards e empty states.
 */
const meta = {
  title: 'Illustrations/Aurora Tech',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Set de 10 ilustrações isométricas tech com paleta de cores inspirada em aurora boreal. Flat design isométrico, leve (SVG), e totalmente customizável.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

/**
 * Infraestrutura de servidores - representa cloud infrastructure e server technology
 */
export const Server: StoryObj = {
  render: () => <ServerIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Ilustração de servidores empilhados com LEDs indicadores. Use para representar infraestrutura, data centers ou cloud computing.',
      },
    },
  },
};

/**
 * Cloud Computing - representa serviços cloud e armazenamento
 */
export const Cloud: StoryObj = {
  render: () => <CloudIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Nuvem com setas de upload e download. Perfeita para serviços cloud, backup, sincronização.',
      },
    },
  },
};

/**
 * Mobile Development - representa desenvolvimento de apps mobile
 */
export const MobileDev: StoryObj = {
  render: () => <MobileDevIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Smartphone isométrico com UI e símbolos de código. Use para mobile development, apps, UI/UX.',
      },
    },
  },
};

/**
 * Code & Programming - representa desenvolvimento de software
 */
export const Code: StoryObj = {
  render: () => <CodeIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Laptop com editor de código. Ideal para desenvolvimento, programação, coding bootcamps.',
      },
    },
  },
};

/**
 * Security - representa segurança cibernética
 */
export const Security: StoryObj = {
  render: () => <SecurityIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Escudo 3D com cadeado. Use para segurança, proteção de dados, autenticação, privacy.',
      },
    },
  },
};

/**
 * Analytics - representa análise de dados e métricas
 */
export const Analytics: StoryObj = {
  render: () => <AnalyticsIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Dashboard com gráficos de barras e linha de tendência. Perfeita para analytics, metrics, reports.',
      },
    },
  },
};

/**
 * Database - representa armazenamento de dados
 */
export const Database: StoryObj = {
  render: () => <DatabaseIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Cilindros de banco de dados empilhados com conexões. Use para databases, storage, SQL.',
      },
    },
  },
};

/**
 * API Integration - representa conexões e integrações
 */
export const API: StoryObj = {
  render: () => <APIIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Hub central com nós conectados e pulsos de dados animados. Ideal para APIs, integrations, webhooks.',
      },
    },
  },
};

/**
 * Deployment - representa deploy e lançamento
 */
export const Deployment: StoryObj = {
  render: () => <DeploymentIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Foguete com fogo animado. Use para deployment, launch, CI/CD, releases. Inclui animação!',
      },
    },
  },
};

/**
 * AI & Machine Learning - representa inteligência artificial
 */
export const AI: StoryObj = {
  render: () => <AIIllustration width={250} height={250} />,
  parameters: {
    docs: {
      description: {
        story: 'Rede neural com pulsos de dados animados. Perfeita para AI, ML, deep learning, data science. Inclui animação!',
      },
    },
  },
};

/**
 * Todas as ilustrações em um grid
 */
export const AllIllustrations: StoryObj = {
  render: () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      padding: '2rem',
      maxWidth: '1200px',
    }}>
      <div style={{ textAlign: 'center' }}>
        <ServerIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Server</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CloudIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Cloud</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <MobileDevIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Mobile Dev</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <CodeIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Code</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SecurityIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Security</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AnalyticsIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Analytics</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DatabaseIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Database</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <APIIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>API</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DeploymentIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Deployment</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <AIIllustration width={180} height={180} />
        <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>AI/ML</p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Visualização de todas as 10 ilustrações disponíveis',
      },
    },
  },
};

/**
 * Paleta de cores Aurora
 */
export const ColorPalette: StoryObj = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h3 style={{ marginBottom: '1.5rem', color: '#1e293b' }}>Aurora Color Palette</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            height: '80px',
            backgroundColor: AuroraColors.auroraGreen.DEFAULT,
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
          }} />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Aurora Green</p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{AuroraColors.auroraGreen.DEFAULT}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            height: '80px',
            backgroundColor: AuroraColors.auroraBlue.DEFAULT,
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
          }} />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Aurora Blue</p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{AuroraColors.auroraBlue.DEFAULT}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            height: '80px',
            backgroundColor: AuroraColors.auroraPurple.DEFAULT,
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
          }} />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Aurora Purple</p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{AuroraColors.auroraPurple.DEFAULT}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            height: '80px',
            backgroundColor: AuroraColors.auroraPink.DEFAULT,
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
          }} />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Aurora Pink</p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{AuroraColors.auroraPink.DEFAULT}</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '100%',
            height: '80px',
            backgroundColor: AuroraColors.auroraCyan.DEFAULT,
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
          }} />
          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569' }}>Aurora Cyan</p>
          <p style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace' }}>{AuroraColors.auroraCyan.DEFAULT}</p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Paleta de cores Aurora usada em todas as ilustrações',
      },
    },
  },
};

/**
 * Exemplo de uso em Hero Section
 */
export const HeroExample: StoryObj = {
  render: () => (
    <div style={{
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <CloudIllustration width={300} height={300} />
      <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginTop: '2rem', marginBottom: '1rem' }}>
        Cloud Solutions
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
        Armazene, sincronize e acesse seus dados de qualquer lugar com nossa plataforma cloud.
      </p>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Exemplo de uso em uma hero section de landing page',
      },
    },
  },
};

/**
 * Exemplo de Empty State
 */
export const EmptyStateExample: StoryObj = {
  render: () => (
    <div style={{
      background: 'white',
      padding: '3rem',
      borderRadius: '0.5rem',
      textAlign: 'center',
      maxWidth: '400px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <DatabaseIllustration width={200} height={200} />
      <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
        No data yet
      </h3>
      <p style={{ fontSize: '1rem', color: '#64748b', marginBottom: '1.5rem' }}>
        Start by creating your first database entry
      </p>
      <button style={{
        background: '#FF4566',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '0.375rem',
        border: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
      }}>
        Create Entry
      </button>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'Exemplo de uso em um empty state',
      },
    },
  },
};
