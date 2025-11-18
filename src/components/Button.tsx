import React from 'react';

/**
 * Supported button types following Ant Design System
 */
export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text';

/**
 * Supported button sizes
 */
export type ButtonSize = 'large' | 'middle' | 'small';

/**
 * Supported button shapes
 */
export type ButtonShape = 'default' | 'circle' | 'round';

/**
 * HTML button types
 */
export type ButtonHTMLType = 'submit' | 'button' | 'reset';

/**
 * Props for the Button component
 * @interface ButtonProps
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Button type variant
   * @default 'default'
   */
  type?: ButtonType;

  /**
   * Button size
   * @default 'middle'
   */
  size?: ButtonSize;

  /**
   * Button shape
   * @default 'default'
   */
  shape?: ButtonShape;

  /**
   * Set the danger status (red variant for destructive actions)
   * @default false
   */
  danger?: boolean;

  /**
   * Disable the button
   * @default false
   */
  disabled?: boolean;

  /**
   * Set the loading status
   * @default false
   */
  loading?: boolean;

  /**
   * Icon to display before the button text
   */
  iconLeft?: React.ReactNode;

  /**
   * Icon to display after the button text
   */
  iconRight?: React.ReactNode;

  /**
   * Make the button full width
   * @default false
   */
  block?: boolean;

  /**
   * HTML button type attribute
   * @default 'button'
   */
  htmlType?: ButtonHTMLType;

  /**
   * Button content
   */
  children?: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Get button size classes
 */
const getSizeClasses = (size: ButtonSize, shape: ButtonShape, iconOnly: boolean): string => {
  if (iconOnly) {
    switch (size) {
      case 'large':
        return shape === 'circle' ? 'w-10 h-10' : 'w-10 h-10 px-0';
      case 'small':
        return shape === 'circle' ? 'w-6 h-6' : 'w-6 h-6 px-0';
      case 'middle':
      default:
        return shape === 'circle' ? 'w-8 h-8' : 'w-8 h-8 px-0';
    }
  }

  switch (size) {
    case 'large':
      return 'h-10 px-4 text-base';
    case 'small':
      return 'h-6 px-2 text-sm';
    case 'middle':
    default:
      return 'h-8 px-4 text-sm';
  }
};

/**
 * Get button shape classes
 */
const getShapeClasses = (shape: ButtonShape): string => {
  switch (shape) {
    case 'circle':
      return 'rounded-full';
    case 'round':
      return 'rounded-full';
    case 'default':
    default:
      return 'rounded';
  }
};

/**
 * Get button type classes
 */
const getTypeClasses = (
  type: ButtonType,
  danger: boolean,
  disabled: boolean
): string => {
  // Base transition classes
  const baseClasses = 'transition-all duration-200 font-medium';

  if (disabled) {
    switch (type) {
      case 'primary':
        return `${baseClasses} bg-gray-200 text-gray-400 border border-gray-200 cursor-not-allowed`;
      case 'dashed':
        return `${baseClasses} bg-transparent text-gray-400 border border-dashed border-gray-300 cursor-not-allowed`;
      case 'link':
        return `${baseClasses} bg-transparent text-gray-400 border-none cursor-not-allowed`;
      case 'text':
        return `${baseClasses} bg-transparent text-gray-400 border-none cursor-not-allowed`;
      case 'default':
      default:
        return `${baseClasses} bg-gray-100 text-gray-400 border border-gray-300 cursor-not-allowed`;
    }
  }

  if (danger) {
    switch (type) {
      case 'primary':
        return `${baseClasses} bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:border-red-600 active:bg-red-700 active:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`;
      case 'dashed':
        return `${baseClasses} bg-transparent text-red-500 border border-dashed border-red-500 hover:text-red-600 hover:border-red-600 active:text-red-700 active:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`;
      case 'link':
        return `${baseClasses} bg-transparent text-red-500 border-none hover:text-red-600 active:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`;
      case 'text':
        return `${baseClasses} bg-transparent text-red-500 border-none hover:bg-red-50 active:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`;
      case 'default':
      default:
        return `${baseClasses} bg-white text-red-500 border border-red-500 hover:text-red-600 hover:border-red-600 active:text-red-700 active:border-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50`;
    }
  }

  switch (type) {
    case 'primary':
      return `${baseClasses} bg-[#FF4566] text-white border border-[#FF4566] hover:bg-[#e63d5c] hover:border-[#e63d5c] active:bg-[#cc334f] active:border-[#cc334f] focus:outline-none focus:ring-2 focus:ring-[#FF4566] focus:ring-opacity-50`;
    case 'dashed':
      return `${baseClasses} bg-transparent text-gray-700 border border-dashed border-gray-300 hover:text-[#FF4566] hover:border-[#FF4566] active:text-[#cc334f] active:border-[#cc334f] focus:outline-none focus:ring-2 focus:ring-[#FF4566] focus:ring-opacity-50`;
    case 'link':
      return `${baseClasses} bg-transparent text-[#FF4566] border-none hover:text-[#e63d5c] active:text-[#cc334f] focus:outline-none focus:ring-2 focus:ring-[#FF4566] focus:ring-opacity-50`;
    case 'text':
      return `${baseClasses} bg-transparent text-gray-700 border-none hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF4566] focus:ring-opacity-50`;
    case 'default':
    default:
      return `${baseClasses} bg-white text-gray-700 border border-gray-300 hover:text-[#FF4566] hover:border-[#FF4566] active:text-[#cc334f] active:border-[#cc334f] focus:outline-none focus:ring-2 focus:ring-[#FF4566] focus:ring-opacity-50`;
  }
};

/**
 * Loading spinner component
 */
const LoadingSpinner: React.FC<{ size?: ButtonSize }> = ({ size = 'middle' }) => {
  const spinnerSize = size === 'large' ? 'w-5 h-5' : size === 'small' ? 'w-3 h-3' : 'w-4 h-4';

  return (
    <svg
      className={`animate-spin ${spinnerSize}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

/**
 * Button Component
 *
 * A comprehensive button component following Ant Design System specifications.
 * Supports multiple variants, sizes, shapes, and states with full accessibility support.
 *
 * @example
 * ```tsx
 * // Primary button
 * <Button type="primary">Click me</Button>
 *
 * // Danger button with icon
 * <Button type="primary" danger iconLeft={<TrashIcon />}>
 *   Delete
 * </Button>
 *
 * // Large rounded button
 * <Button size="large" shape="round">
 *   Submit
 * </Button>
 *
 * // Loading state
 * <Button loading>Loading...</Button>
 *
 * // Icon only button
 * <Button shape="circle" iconLeft={<SearchIcon />} aria-label="Search" />
 * ```
 *
 * @component
 * @param {ButtonProps} props - Button component props
 * @returns {React.ReactElement} Rendered button component
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'default',
      size = 'middle',
      shape = 'default',
      danger = false,
      disabled = false,
      loading = false,
      iconLeft,
      iconRight,
      block = false,
      htmlType = 'button',
      children,
      className = '',
      onClick,
      ...rest
    },
    ref
  ) => {
    // Determine if button is icon-only (no children text)
    const iconOnly = !children && (!!iconLeft || !!iconRight);

    // Combine all class names
    const buttonClasses = [
      'inline-flex items-center justify-center gap-2',
      'select-none',
      getSizeClasses(size, shape, iconOnly),
      getShapeClasses(shape),
      getTypeClasses(type, danger, disabled || loading),
      block ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Handle click events
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        type={htmlType}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={handleClick}
        aria-busy={loading}
        aria-disabled={disabled || loading}
        {...rest}
      >
        {loading && <LoadingSpinner size={size} />}
        {!loading && iconLeft && (
          <span className="inline-flex items-center" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        {children && <span>{children}</span>}
        {!loading && iconRight && (
          <span className="inline-flex items-center" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
