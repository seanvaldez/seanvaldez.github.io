import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="px-4 py-5 shadow-xl border-b flex gap-x-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export default Navigation;
