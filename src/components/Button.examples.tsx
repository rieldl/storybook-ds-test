import React from 'react';
import { Button } from './Button';

/**
 * Button Component Examples
 * This file demonstrates all the different variants and use cases for the Button component
 */

// Example icons (you can replace these with your actual icon library)
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
);

/**
 * Button Types Examples
 */
export const ButtonTypesExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Button Types</h3>
      <div className="flex flex-wrap gap-2">
        <Button type="primary">Primary</Button>
        <Button type="default">Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
        <Button type="text">Text</Button>
      </div>
    </div>
  );
};

/**
 * Button Sizes Examples
 */
export const ButtonSizesExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="primary" size="large">Large Button</Button>
        <Button type="primary" size="middle">Middle Button</Button>
        <Button type="primary" size="small">Small Button</Button>
      </div>
    </div>
  );
};

/**
 * Button Shapes Examples
 */
export const ButtonShapesExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Button Shapes</h3>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="primary" shape="default">Default</Button>
        <Button type="primary" shape="round">Round</Button>
        <Button type="primary" shape="circle" iconLeft={<SearchIcon />} aria-label="Search" />
      </div>
    </div>
  );
};

/**
 * Danger Buttons Examples
 */
export const DangerButtonsExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Danger Buttons</h3>
      <div className="flex flex-wrap gap-2">
        <Button type="primary" danger>Primary Danger</Button>
        <Button type="default" danger>Default Danger</Button>
        <Button type="dashed" danger>Dashed Danger</Button>
        <Button type="link" danger>Link Danger</Button>
        <Button type="text" danger>Text Danger</Button>
      </div>
    </div>
  );
};

/**
 * Disabled Buttons Examples
 */
export const DisabledButtonsExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Disabled Buttons</h3>
      <div className="flex flex-wrap gap-2">
        <Button type="primary" disabled>Primary Disabled</Button>
        <Button type="default" disabled>Default Disabled</Button>
        <Button type="dashed" disabled>Dashed Disabled</Button>
        <Button type="link" disabled>Link Disabled</Button>
        <Button type="text" disabled>Text Disabled</Button>
      </div>
    </div>
  );
};

/**
 * Loading Buttons Examples
 */
export const LoadingButtonsExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Loading Buttons</h3>
      <div className="flex flex-wrap gap-2">
        <Button type="primary" loading>Loading</Button>
        <Button type="default" loading>Loading</Button>
        <Button type="primary" loading size="large">Large Loading</Button>
        <Button type="primary" loading size="small">Small Loading</Button>
      </div>
    </div>
  );
};

/**
 * Buttons with Icons Examples
 */
export const ButtonsWithIconsExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Buttons with Icons</h3>
      <div className="flex flex-wrap gap-2">
        <Button type="primary" iconLeft={<SearchIcon />}>Search</Button>
        <Button type="primary" iconRight={<DownloadIcon />}>Download</Button>
        <Button type="primary" danger iconLeft={<TrashIcon />}>Delete</Button>
        <Button type="default" shape="circle" iconLeft={<SearchIcon />} aria-label="Search" />
        <Button type="primary" shape="round" iconLeft={<DownloadIcon />}>Download</Button>
      </div>
    </div>
  );
};

/**
 * Block Buttons Examples
 */
export const BlockButtonsExample: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-4">Block Buttons (Full Width)</h3>
      <div className="space-y-2 max-w-md">
        <Button type="primary" block>Primary Block Button</Button>
        <Button type="default" block>Default Block Button</Button>
        <Button type="dashed" block>Dashed Block Button</Button>
      </div>
    </div>
  );
};

/**
 * All Examples Combined
 */
export const AllButtonExamples: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Button Component Examples</h1>

      <ButtonTypesExample />
      <ButtonSizesExample />
      <ButtonShapesExample />
      <DangerButtonsExample />
      <DisabledButtonsExample />
      <LoadingButtonsExample />
      <ButtonsWithIconsExample />
      <BlockButtonsExample />

      <div className="space-y-4">
        <h3 className="text-lg font-semibold mb-4">Complex Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            type="primary"
            size="large"
            shape="round"
            iconLeft={<DownloadIcon />}
            onClick={() => alert('Download clicked!')}
          >
            Download Report
          </Button>

          <Button
            type="primary"
            danger
            size="large"
            iconLeft={<TrashIcon />}
            onClick={() => alert('Delete clicked!')}
          >
            Delete Account
          </Button>

          <Button
            type="default"
            size="large"
            loading
          >
            Processing...
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllButtonExamples;
