import React from "react";

export default function Navbar() {
  const navItems = ["About", "My Dashboard", "Billing"];
  const listItems = navItems.map((navItem) => <li>{navItem}</li>);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
