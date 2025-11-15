// Componente Button reutilizable con variantes
// Variantes: primary, octagon, secondary

function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}) {
  const baseClasses = 'font-display px-6 py-3 tracking-wider transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark'
  
  const variants = {
    primary: 'btn-primary',
    octagon: 'btn-octagon',
    secondary: 'btn-secondary',
  }

  const classes = `${variants[variant]} ${baseClasses} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

