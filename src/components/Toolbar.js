import React from 'react'
import { NavLink } from 'react-router-dom'

const Toolbar = () => {
  return (
    <header className="mdc-toolbar">
      <div className="mdc-toolbar__row">
        <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
          <span className="mdc-toolbar__title">React mini projects</span>
        </section>

        <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
          <nav className="mdc-tab-bar">
            <NavLink
              activeClassName="mdc-tab--active"
              exact
              to="/"
              className="mdc-tab"
            >
              Drum
            </NavLink>
            <NavLink
              activeClassName="mdc-tab--active"
              to="/watch"
              className="mdc-tab"
            >
              Clock
            </NavLink>
            <NavLink
              activeClassName="mdc-tab--active"
              to="/filters"
              className="mdc-tab"
            >
              Filters
            </NavLink>
            <NavLink
              activeClassName="mdc-tab--active"
              to="/accordion"
              className="mdc-tab"
            >
              Accordion
            </NavLink>
          </nav>
        </section>
      </div>
    </header>
  )
}

export default Toolbar
