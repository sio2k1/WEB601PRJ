import React from 'react'
import './u_editor.css';
import TitleChanger from '../../../functions/titlechanger'


const TITLE = 'User list editor'; //TitleChanger(TITLE);





const UEditor = () => {  
  TitleChanger(TITLE);  

  return (
      <div><h1>User editor component</h1></div>
  )
}
export default UEditor;
