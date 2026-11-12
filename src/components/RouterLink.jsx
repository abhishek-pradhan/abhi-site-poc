import { NavLink } from 'react-router-dom';

export default function RouterLink({ href, ...props }) {
  return <NavLink to={href} {...props} />;
}
