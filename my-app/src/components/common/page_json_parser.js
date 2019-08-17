import React from 'react'
import ReactDOM from 'react-dom'
import './page_json_parser.css';
import './flipcards.css';

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
  
  const GenCard = props => // we return card here, if there is a text we return flip card
  {
    const pic = props.pic;

    if (pic.flipcardtext!=undefined)
    {
      return  (
        <div class="td-pic">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="t-img-auto" src={require('../../images/'+pic.src)} alt={pic.alt} />
              </div>
              <div class="flip-card-back">
                <p>{pic.flipcardtext}</p> 
              </div>
            </div>
          </div>
        </div>
      )
    }
    else
    {
      return  (
        <div class="td-pic">
          <img class="t-img-auto" src={require('../../images/'+pic.src)} alt={pic.alt} />
        </div> 
      )
    }


  }
  

  if (json!= undefined) //if header or footer exists in json
  {

    return ( 
      <div class="pic-table-centerer"><table class="pic-table"><tr>
      {
        json.map((pic) => 
          <td>
            <GenCard pic={pic} />
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