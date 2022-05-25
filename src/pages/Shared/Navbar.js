import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const navItemsCenter = (
    <>
      <li>
        <Link to={`/blog`}>Blog</Link>
      </li>
      <li>
        <Link to={`/portfolio`}>My Portfolio</Link>
      </li>
      {
        user ?
          <>
            <li>
              <Link to={`/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <button>{user?.displayName}</button>
            </li>
            <li>
              <button onClick={() => {
                localStorage.removeItem("accessToken");
                signOut(auth)
              }}>Sign Out</button>
            </li>
          </>
          : <li>
            <Link to={`/login`}>Login</Link>
          </li>

      }
    </>
  );
  const navItemsEnd = (
    <>
      {
        user &&
        <>

        </>

      }
    </>
  );

  return (
    <header className='lg:px-12'>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItemsCenter}
              {navItemsEnd}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case font-bold text-3xl">Elctrix</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-lg">
            {navItemsCenter}
            {navItemsEnd}
          </ul>
        </div>

        <div className="lg:hideen flex justify-end w-full lg:w-0">
          <ul className="menu menu-horizontal p-0">
            <label htmlFor="dashboard-drawer" className="btn btn-ghost drawer-button lg:hidden"><svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg></label>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;