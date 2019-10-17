/* Actions for articles in navigation bar  */

export const SETARTICLES = 'SETARTICLES';

export const a_setArticles = (articles_) => ( // set articles, contains list of articles from API 
{
  type:SETARTICLES , articles:articles_ 
}
);


