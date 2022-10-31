import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {
    return (
      <div>
          <header>
              <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                  <div>
                      <a href="https://github.com/AbrahamQM/Products_ApiRest_REACT" className="navbar-brand">User magnament App</a>
                  </div>
              </nav>
          </header>
      </div>
    )
  }
}
