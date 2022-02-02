import React from 'react';

const Article = ({ article }) => {
  return(
    <>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </>
  )
}

export default Article;