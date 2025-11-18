import React, { useState } from 'react';
import { AllButtonExamples } from './components/Button.examples';
import { IllustrationsShowcase } from './illustrations/IllustrationsShowcase';
import { Button } from './components/Button';
import './index.css';

type ViewMode = 'buttons' | 'illustrations';

/**
 * Main App Component
 * Displays Design System components and illustrations
 */
function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('illustrations');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Design System</h1>
              <p className="text-sm text-gray-600">React + TypeScript + Tailwind CSS</p>
            </div>
            <div className="flex gap-3">
              <Button
                type={viewMode === 'buttons' ? 'primary' : 'default'}
                onClick={() => setViewMode('buttons')}
              >
                Button Components
              </Button>
              <Button
                type={viewMode === 'illustrations' ? 'primary' : 'default'}
                onClick={() => setViewMode('illustrations')}
              >
                Aurora Illustrations
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {viewMode === 'buttons' && <AllButtonExamples />}
        {viewMode === 'illustrations' && <IllustrationsShowcase />}
      </div>
    </div>
  );
}

export default App;
