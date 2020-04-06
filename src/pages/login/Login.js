import React, {Component} from 'react';
import logo from '../../assets/logo.png';
import './Login.css';
import {login} from '../../services/user'

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {name: '',
                    password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  attemptLogin = async () => {
    let data = {
      "user": this.state.name,
      "password": this.state.password
    }

    console.log(data)

    login(data).then(res => {
      console.log(res.status)
      if (res.status === 200) {
        console.log("Success")
        //setar token e ir para próxima página
        console.log(res.data.token)
      } else {
        console.log("unauthorized")
      }
    }).catch(err => {
      //alert("Acesso não autorizado. Verifique seu nome de usuário e senha.")
        console.error(err)
      }
    )
    
  }

  render(){
    return (
      <div className="Login">
       <div className="login-background-container"></div>
       <div className="login-panel-container">
 
         <img  className='logo'
               alt='rede-de-mentores-logo' 
               src={logo}
         />
 
         <form className='login-panel-form'>
             <div className='login-input-field'>
               <label htmlFor="email-input">Email</label>
               <input id="email-input" type='email' value={this.state.name} onChange = {this.handleChange}  />
             </div>
 
             <div className="login-input-field">
               <label htmlFor="pw-input">Senha</label>
               <input id="pw-input" type='password' value={this.state.password} onChange = {this.passwordChange}/>
             </div>
 
             <a href='#'>Esqueci minha senha</a>
           <button type="button" onClick={this.attemptLogin}>Entrar</button>
         </form>
 
         <div className="login-separator">
           <hr/>
             <h4>Novo por aqui?</h4>
           <hr/>
         </div>
 
         <button type="button">Cadastrar</button>
 
       </div>
   </div>
    )
    }
}

export default Login;
