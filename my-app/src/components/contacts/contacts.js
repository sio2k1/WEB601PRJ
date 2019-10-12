import React from 'react'
import './contacts.css';
import TitleChanger from '../../functions/titlechanger'
import json_parser from '../common/page_json_parser.js'


const Contacts =  ({article}) => { 
  
   console.log(article)
   //
  if (article!==undefined)
  {  
    TitleChanger(article.ArticleTitle);
    return (

      <div>
        {json_parser(JSON.parse(article.ArticleDataJson))}
      </div>

      )
  } else 
  {
    return (
      <div className="article-content-centerer">         
        <div className="article-content">
          Loading...
        </div>
      </div> 
    )
  }
} 

/* <div className="article-content-centerer">         
<div className="article-content">
  <h2>{article.ArticleTitle}</h2>
  <p>e-mail:contact@ecoferma.me</p>
  <p>tel.:+7 (111) 111-11-11</p>
</div>
</div> */

export default Contacts;