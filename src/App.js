import React, { Component } from "react";
import authors from "./data";

import SideBar from "./Sidebar";
import AuthorList from "./AuthorList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SideBar />
          </div>
          <AuthorList authors={authors} />
        </div>
      </div>
    );
  }
}

export default App;
