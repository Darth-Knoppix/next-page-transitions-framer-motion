import React from "react";

const StyledLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <a
      className="button is-medium is-link"
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </a>
  );
});

export default StyledLink;
