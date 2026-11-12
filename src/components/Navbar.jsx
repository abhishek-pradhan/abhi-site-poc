import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
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
            logo={<NavIcon icon={<Icon icon="menu" size="md" />} />}
          />
        }
        startContent={
          <>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileNavOpen(false)}
              >
                {({ isActive: isActiveRoute }) => (
                  <TopNavItem
                    label={item.label}
                    href={item.path}
                    isSelected={isActiveRoute}
                  />
                )}
              </NavLink>
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
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileNavOpen(false)}
            >
              {({ isActive: isActiveRoute }) => (
                <SideNavItem
                  label={item.label}
                  href={item.path}
                  isSelected={isActiveRoute}
                />
              )}
            </NavLink>
          ))}
        </SideNavSection>
      </MobileNav>
    </>
  );
}
