import React from 'react'
import ReactDOM from 'react-dom'
import {connect} from 'react-redux'; 
//import {createStore} from '../../my_redux'
import './login_box.css';
import {a_login} from './redux_login_actions'


const Login_box = ({ dispatch }) => {

    let login;
    let pwd;
    function handleSubmit(event) {
        
        event.preventDefault();
        //dispatch({type:'TEST', user_name:login.value});
        dispatch(a_login(login.value,pwd.value));
    }

    return (
        <div class="login-box">
            <form onSubmit={handleSubmit}>
                <label for="login">Login:</label>
                <input class="login-txt-inp" type="text" id="login" name="login"  ref={node => login = node} placeholder="Enter login..."/>
                <label for="pwd">Password:</label>
                <input class="login-txt-inp" type="text" id="pwd" name="pwd" ref={node => pwd = node} placeholder="Enter password..."/>
                <button class="login-btn" type="submit">Sing In</button>
            </form>
        </div>
    )
    
}
//export default Login_box;

/*
function mapStateToProps(state) {
    return { user_name: state.login_reducer.user_name }
}*/
  
  
  
export default connect()(Login_box)
