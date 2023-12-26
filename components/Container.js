const Container = ({ children, className }) => {
  const classes = `container mx-auto px-6 ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Container;
