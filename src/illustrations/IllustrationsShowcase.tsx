import React from 'react';
import { ServerIllustration } from './ServerIllustration';
import { CloudIllustration } from './CloudIllustration';
import { MobileDevIllustration } from './MobileDevIllustration';
import { CodeIllustration } from './CodeIllustration';
import { SecurityIllustration } from './SecurityIllustration';
import { AnalyticsIllustration } from './AnalyticsIllustration';
import { DatabaseIllustration } from './DatabaseIllustration';
import { APIIllustration } from './APIIllustration';
import { DeploymentIllustration } from './DeploymentIllustration';
import { AIIllustration } from './AIIllustration';
import { AuroraColors } from './colors';

interface IllustrationCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const IllustrationCard: React.FC<IllustrationCardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
      <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
        {children}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 text-center">{description}</p>
    </div>
  );
};

/**
 * Illustrations Showcase Component
 * Displays all isometric tech illustrations in a grid
 */
export const IllustrationsShowcase: React.FC = () => {
  const illustrations = [
    {
      title: 'Server Infrastructure',
      description: 'Cloud infrastructure and server technology',
      component: <ServerIllustration width={180} height={180} />,
    },
    {
      title: 'Cloud Computing',
      description: 'Cloud services and data storage',
      component: <CloudIllustration width={180} height={180} />,
    },
    {
      title: 'Mobile Development',
      description: 'Mobile app development and UI',
      component: <MobileDevIllustration width={180} height={180} />,
    },
    {
      title: 'Code & Programming',
      description: 'Software development and coding',
      component: <CodeIllustration width={180} height={180} />,
    },
    {
      title: 'Security',
      description: 'Cybersecurity and data protection',
      component: <SecurityIllustration width={180} height={180} />,
    },
    {
      title: 'Analytics',
      description: 'Data analytics and metrics',
      component: <AnalyticsIllustration width={180} height={180} />,
    },
    {
      title: 'Database',
      description: 'Data storage and databases',
      component: <DatabaseIllustration width={180} height={180} />,
    },
    {
      title: 'API Integration',
      description: 'API connections and integrations',
      component: <APIIllustration width={180} height={180} />,
    },
    {
      title: 'Deployment',
      description: 'App deployment and launch',
      component: <DeploymentIllustration width={180} height={180} />,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence and ML',
      component: <AIIllustration width={180} height={180} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Aurora Illustrations
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Isometric tech illustrations with aurora-inspired colors
        </p>

        {/* Color palette display */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Aurora Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div
                className="w-full h-20 rounded-lg mb-2 shadow-inner"
                style={{ backgroundColor: AuroraColors.auroraGreen.DEFAULT }}
              />
              <p className="text-sm font-medium text-gray-700">Aurora Green</p>
              <p className="text-xs text-gray-500">{AuroraColors.auroraGreen.DEFAULT}</p>
            </div>
            <div className="text-center">
              <div
                className="w-full h-20 rounded-lg mb-2 shadow-inner"
                style={{ backgroundColor: AuroraColors.auroraBlue.DEFAULT }}
              />
              <p className="text-sm font-medium text-gray-700">Aurora Blue</p>
              <p className="text-xs text-gray-500">{AuroraColors.auroraBlue.DEFAULT}</p>
            </div>
            <div className="text-center">
              <div
                className="w-full h-20 rounded-lg mb-2 shadow-inner"
                style={{ backgroundColor: AuroraColors.auroraPurple.DEFAULT }}
              />
              <p className="text-sm font-medium text-gray-700">Aurora Purple</p>
              <p className="text-xs text-gray-500">{AuroraColors.auroraPurple.DEFAULT}</p>
            </div>
            <div className="text-center">
              <div
                className="w-full h-20 rounded-lg mb-2 shadow-inner"
                style={{ backgroundColor: AuroraColors.auroraPink.DEFAULT }}
              />
              <p className="text-sm font-medium text-gray-700">Aurora Pink</p>
              <p className="text-xs text-gray-500">{AuroraColors.auroraPink.DEFAULT}</p>
            </div>
            <div className="text-center">
              <div
                className="w-full h-20 rounded-lg mb-2 shadow-inner"
                style={{ backgroundColor: AuroraColors.auroraCyan.DEFAULT }}
              />
              <p className="text-sm font-medium text-gray-700">Aurora Cyan</p>
              <p className="text-xs text-gray-500">{AuroraColors.auroraCyan.DEFAULT}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Illustrations Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {illustrations.map((illustration, index) => (
            <IllustrationCard
              key={index}
              title={illustration.title}
              description={illustration.description}
            >
              {illustration.component}
            </IllustrationCard>
          ))}
        </div>
      </div>

      {/* Usage Guide */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Import Individual Illustrations:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { ServerIllustration } from './illustrations';

<ServerIllustration width={200} height={200} />`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Use Aurora Colors:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { AuroraColors } from './illustrations';

const myColor = AuroraColors.auroraBlue.DEFAULT;`}</code>
              </pre>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Customize Size:</h3>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<CloudIllustration
  width={300}
  height={300}
  className="hover:opacity-80"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IllustrationsShowcase;
