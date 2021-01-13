/** @jsx jsx */

import React from "react";
import { Link } from "gatsby";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { jsx } from "theme-ui";

const MenuItems = [
  {
    path: "/",
    title: "Beranda",
  },
  {
    path: "/share",
    title: "Donor Plasma",
  },
  {
    path: "/need",
    title: "Butuh Plasma",
  },
];

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showMenu: !state.showMenu,
    }));
  }

  render() {
    const listMenuItems = MenuItems.map((menuItem, index) => (
      <ListLink key={index} to={menuItem.path}>
        {menuItem.title}
      </ListLink>
    ));
    return (
      <header className="site-header">
        <div className="site-logo">
          <Link to="/">Share Plasma</Link>
        </div>
        <nav className="site-navigation">
          <button
            onClick={this.handleToggleClick}
            className={
              "menu-trigger" + (this.state.showMenu ? " is-active" : "")
            }
          >
            <div className="icon-menu-line">
              <RiMenu3Line />
            </div>
            <div className="icon-menu-close">
              <RiCloseLine />
            </div>
          </button>
          <ul>
            {listMenuItems}
            <div sx={navStyle.border}></div>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;

const navStyle = {
  menu: {
    ul: {
      bg: "primary",
    },
  },
  theme: {
    display: ["block", "block", "block", "none"],
    p: " 25px 20px 20px",
  },
  border: {
    bg: "borderColor",
    borderTop: "1px solid transparent",
    display: ["block", "block", "block", "none"],
  },
};
