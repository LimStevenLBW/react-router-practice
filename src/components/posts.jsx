import React from "react";
import queryString from 'query-string';

const Posts = ({ match, location }) => {
  const { sortBy, approved } = queryString.parse(location.search); //Parses queries from the url for string entries

  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month: {match.params.monthn}
    </div>
  );
};

export default Posts;
