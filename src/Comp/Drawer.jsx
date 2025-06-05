import { useState } from "react";
import Root from "./Root";
import { Link } from "react-router-dom";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen manrope">
      {/* Mobile overlay sidebar */}
      <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden transition-opacity ${isOpen ? "block" : "hidden"}`} onClick={() => setIsOpen(false)}></div>

      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-base-200 shadow-lg transform transition-transform lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="menu">
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/createEvent">Create Event</Link></li>
            <li><a>Settings</a></li>
            <li><a>Profile</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Mobile Navbar */}
        <div className="lg:hidden p-4 bg-base-100 shadow-md">
          <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
            Open Menu
          </button>
        </div>

        {/* Main content */}
        <main className="p-6">
      <Root></Root>
        </main>
      </div>
    </div>
  );
};

export default Drawer;
