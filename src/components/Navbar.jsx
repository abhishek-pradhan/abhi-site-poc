import { useLocation } from 'react-router-dom';
import {
  TopNav,
  TopNavHeading,
  TopNavItem,
  MobileNav,
  MobileNavToggle,
  SideNavSection,
  SideNavItem,
  NavIcon,
  Icon,
} from '@astryxdesign/core';
import { useState } from 'react';
import RouterLink from './RouterLink';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop Navigation - TopNav */}
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
        endContent={
          <MobileNavToggle />
        }
      />

      {/* Mobile Navigation - MobileNav */}
      <MobileNav
        isOpen={mobileNavOpen}
        onOpenChange={setMobileNavOpen}
        header="Navigation"
        label="Mobile navigation"
      >
        <SideNavSection title="Main">
          {navItems.map((item) => (
            <SideNavItem
              key={item.path}
              label={item.label}
              href={item.path}
              as={RouterLink}
              isSelected={isActive(item.path)}
              onClick={() => setMobileNavOpen(false)}
            />
          ))}
        </SideNavSection>
      </MobileNav>
    </>
  );
}
