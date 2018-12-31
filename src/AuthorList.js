import React, { Component } from "react";
import AuthorCard from "./AuthorCard";
import authors from "./data";

class AuthorList extends Component {
  render() {
    const authorList = this.props.authors.map(author => (
      <AuthorCard key={author.first_name} author={author} />
    ));

    return (
      <div className="content col-10">
        <div className="authors">
          <h3>Authors</h3>
          <div className="row">{authorList}</div>
        </div>
      </div>
    );
  }
}
export default AuthorList;
