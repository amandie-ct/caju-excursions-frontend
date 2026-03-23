import { Link, NavLink } from 'react-router-dom';

import Button from './Button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 w-full border-b border-gray-400 bg-white px-4 py-2 backdrop-blur-lg lg:px-8 xl:px-10">
      <section className="mx-auto flex w-full items-center justify-between">
        <Link to="/" className="group flex items-center px-2 hover:bg-gray-100">
          <img
            src="/assets/caju_excursions.png"
            alt="caju"
            width="100"
            className="transition duration-300 ease-in-out group-hover:rotate-20"
          />
        </Link>
        <div className="flex items-center justify-between gap-6">
          <div className="hidden items-center gap-2 md:flex">
            <NavLink
              to="/event"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-bold transition ${
                  isActive ? 'bg-stone-100' : 'hover:bg-stone-100'
                }`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-bold transition ${
                  isActive ? 'bg-stone-100' : 'hover:bg-stone-100'
                }`
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/manage-my-events"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 font-bold transition ${
                  isActive ? 'bg-stone-100' : 'hover:bg-stone-100'
                }`
              }
            >
              Manage my events
            </NavLink>
          </div>
          <div className="flex gap-3">
            <Button text="Sign Up" to="/sign-up" color="bg-jade" />
            <Button text="Log In" to="/sign-in" color="bg-amber-500" />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
