import React from 'react'
import './page_json_parser.css';
import './flipcards.css';
import './article.css';

const return_article_content = (json) => { //parsing an article content to get parag. and img from json
  let i=0;
  return ( 
    <div className="article-content-centerer"><div className="article-content">
    {json.map((parag) => {
      if (parag.paragraph !== undefined) //if we have a paragraph - output it
      {
        return (<p key={i++} >{parag.paragraph}</p>)
      } else 
      if (parag.h2 !== undefined) //if we have a h2 - output it
      {
        return (<h2 key={i++} >{parag.h2}</h2>)
      } else 
      if (parag.img !== undefined) //if we have an image - output it
      {
        return (
        <div key={i++} className="page-json-parser-img-article-container">
          <img className="page-json-parser-img-article" src={require('../../images/'+parag.img)} alt={parag.alt} />
        </div>
        )
      } else
      {
        return (<div></div>)
      }
    })}
    </div></div>
  )
}

const return_pic_grid = (json) => { //parsing header and footer
  
  const GenCard = props => // we return card here, if there is a text we return flip card
  {
    const pic = props.pic;

    if (pic.flipcardtext!==undefined) //if there is a flipcard text - return flipcard structure
    {
      return  (
        <div className="page-json-parser-td-pic">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img className="page-json-parser-t-img-auto" src={require('../../images/'+pic.src)} alt={pic.alt} />
              </div>
              <div className="flip-card-back">
                <p>{pic.flipcardtext}</p> 
              </div>
            </div>
          </div>
        </div>
      )
    }
    else
    { // just return image
      return  (
        <div className="page-json-parser-td-pic">
          <img className="page-json-parser-t-img-auto" src={require('../../images/'+pic.src)} alt={pic.alt} />
        </div> 
      )
    }


  }
  

  if (json!== undefined) //if header or footer exists in json
  {
    let i=0;
    return ( 
      <div className="page-json-parser-pic-table-centerer"><table className="page-json-parser-pic-table"><tbody><tr>
      {
        json.map((pic) => 
          <td key={i++}>
            <GenCard  pic={pic} />
          </td>)
      }
      </tr></tbody></table></div>
    )

  } else //if header or footer not exists in json return empty div
  {
    return(<div></div>); // there is no header table
  }

 
}

const json_parser = (json) => { //parsing incoming json here to JSX


  
    return (
      <div className="text-box">
        {return_pic_grid(json.header_pic)}
        {return_article_content(json.data_p)}
        {return_pic_grid(json.bottom_pic)}
      </div> 
      )
    }
  
export default json_parser;