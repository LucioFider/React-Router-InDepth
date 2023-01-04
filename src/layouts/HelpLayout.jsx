import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus
        quas officiis? Quibusdam veritatis impedit dignissimos! Cupiditate minus
        nulla, consequuntur sunt reiciendis, ut fugiat, consequatur quisquam
        nisi labore modi odit.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
