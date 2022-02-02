import React from 'react'
import Article from './Article/article'

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map(article => (
        <Article article={article} key={article.id}/>
      ))}
    </div>
  )
}

export default Articles;
