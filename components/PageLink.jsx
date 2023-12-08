import React from 'react';
import Link from 'next/link';

import NavBarItem from './NavBarItem';

const PageLink = ({ children, href, className, tabIndex, testId }) => {

  return (
    <Link legacyBehavior href={href}>
      <a>
        <NavBarItem href={href} className={className} tabIndex={tabIndex} testId={testId}>
          {children}
        </NavBarItem>
      </a>
    </Link>
  );
};

export default PageLink;
