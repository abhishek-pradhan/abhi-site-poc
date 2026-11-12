import { useLocation } from 'react-router-dom';
import {
  TopNav,
  TopNavHeading,
  TopNavItem,
} from '@astryxdesign/core';
import RouterLink from './RouterLink';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
      <TopNav
        label="Main navigation"
        heading={
          <TopNavHeading
            heading="Abhishek Pradhan"
            headingHref="/"
            logo={<img src="/profile.svg" alt="Abhishek Pradhan" style={{ width: 32, height: 32, borderRadius: '50%' }} />}
          />
        }
        startContent={
          <>
            {navItems.map((item) => (
              <TopNavItem
                key={item.path}
                label={item.label}
                href={item.path}
                as={RouterLink}
                isSelected={isActive(item.path)}
              />
            ))}
          </>
        }
      />
  );
}
