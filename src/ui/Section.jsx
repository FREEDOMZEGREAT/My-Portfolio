import PropTypes from 'prop-types';
import './Sections.css';

function Section({
  id,
  children,
  variant = 'default',
  className = '',
}) {
  const classes = ['section', `section-${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'alt', 'dark']),
  className: PropTypes.string,
};

export default Section;
