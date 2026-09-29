// ================================================
// src/ui/Button.jsx
// 🎯 REUSABLE BUTTON
// ================================================

import PropTypes from 'prop-types';
import './Button.css';

/**
 * 📚 WHY A BUTTON COMPONENT?
 * 
 * 1. Consistent styling everywhere
 * 2. Single place to update
 * 3. Handles variants (primary, secondary, ghost)
 * 4. Handles sizes (sm, md, lg)
 * 5. Can render as link or button
 */

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full' : '',
    className,
  ].filter(Boolean).join(' ');
  
  // If href is provided, render as <a>
  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }
  
  // Otherwise render as <button>
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;