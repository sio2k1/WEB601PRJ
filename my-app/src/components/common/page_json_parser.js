import React from 'react'
import ReactDOM from 'react-dom'
import './page_json_parser.css';


const return_article_content = (json) => { //parsing an artical content to get parag. and img from json
  return ( 
    <div class="article-content-centerer"><div class="article-content">
    {json.map((parag) => {
    
      if (parag.paragraph != undefined)
      {
        return (<p>{parag.paragraph}</p>)
      } else 
      if (parag.img != undefined)
      {
        return (
        <div class="img-article-container">
          <img class="img-article" src={require('../../images/'+parag.img)} alt={parag.alt} />
        </div>
        )
      }
    })}
    </div></div>
  )
}

const return_pic_grid = (json) => { //parsing header and footer
  
  if (json!= undefined) //if header or footer exists in json
  {

    return ( 
      <div class="pic-table-centerer"><table class="pic-table"><tr>
      {
        json.map((pic) => 
          <td>
            <div class="td-pic">
              <img class="t-img-auto" src={require('../../images/'+pic.src)} alt={pic.alt} />
            </div>
          </td>)
      }
      </tr></table></div>
    )

  } else //if header or footer not exists in json return empty div
  {
    return(<div></div>); // there is no header table
  }

 
}

const json_parser = (json) => {
    return (
      <div>
        <div class="text-box">
        {return_pic_grid(json.header_pic)}
        {return_article_content(json.data_p)}
        {return_pic_grid(json.bottom_pic)} 
        </div> 
      </div>
      )
    }
    
export default json_parser;