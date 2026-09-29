// ================================================
// src/ui/Reveal.jsx
// 🎯 SCROLL REVEAL WRAPPER
// ================================================

import PropTypes from 'prop-types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Reveal.css';

function Reveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
}) {
  const { ref, isVisible } = useScrollReveal();
  
  const classes = [
    'reveal',
    `reveal-${direction}`,
    isVisible ? 'reveal-visible' : '',
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <div
      ref={ref}
      className={classes}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right', 'fade']),
  className: PropTypes.string,
};

export default Reveal;