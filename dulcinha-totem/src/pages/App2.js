// import { useState } from 'react';
// import './App.css';
// import { useHistory } from "react-router";


// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       cpf: '',
//       password: '',
//       firstName: '',
//       lastName: '',
//       gender: '',
//       buttonDisable: true,
//       messageError: true,
//       page: 1,
//     };
//   }

//   componentDidMount() {
//     const { history } = this.props;

//     const verify = JSON.parse(localStorage.getItem('user'));
//     if (!verify) return history.push('/login');
//     history.push('/customer/products');
//   }

//   renderPage () {
//     let content;
//     if (page === 2){
//       content = (
//         <>
//           <p className="hero-text" >
//             Me conta sobre você!<br/>
//             Qual o seu CPF?<br/>
//           </p>
//           <input 
//             id="cpf"
//             name="cpf"
//             type="text"
//             placeholder="Digite seu CPF"
//             value={ cpf }
//             onChange={ () => setCpf(cpf) }
//             className="input-login" />
//           <button
//             className="totem-span"
//             disabled={ cpf === '' }
//             onClick={ () => setPage(3) }
//           >
//             Clique aqui para continuar!
//           </button>
//         </>
//       )
//     } else if (page === 3) {
//       content = (
//         <>
//           <p className="hero-text" >
//             Vi que você não possui cadastro.<br/>
//             Me conte um pouco sobre você!<br/>
//           </p>
//           <input 
//             id="firstName"
//             name="firstName"
//             type="text"
//             placeholder="Digite seu primeiro nome."
//             value={ ({ target }) => setFirstName(target.value) }
//             // onChange={ () => setFirstName(firstName) }
//             className="input-login" />
//           <input 
//             id="lastName"
//             name="lastName"
//             type="text"
//             placeholder="Digite seu sobrenome."
//             value={ lastName }
//             onChange={ () => setLastName(lastName) }
//             className="input-login" />
//           <select name="gender" id="gender" value={ gender } onChange={ () => setGender(gender) }>
//             <option value="f">Feminino</option>
//             <option value="m">Masculino</option>
//             <option value="nb">Não binário</option>
//           </select>
//           <button
//             className="totem-span"
//             onClick={ () => setPage(4) }
//             disabled={ gender === '' && lastName === '' && firstName === ''}
//           >
//             Vamos continuar!
//           </button>
//         </>
//       )
//     } else if (page === 4) {
//       content = (
//         <>
//           <p className="hero-text" >
//             Vi que você não possui cadastro.<br/>
//             Me conte um pouco sobre você!<br/>
//           </p>
//           <input 
//             id="firstName"
//             name="firstName"
//             type="text"
//             placeholder="Digite seu primeiro nome."
//             value={ firstName }
//             onChange={ () => setFirstName(firstName) }
//             className="input-login" />
//           <input 
//             id="lastName"
//             name="lastName"
//             type="text"
//             placeholder="Digite seu sobrenome."
//             value={ lastName }
//             onChange={ () => setLastName(lastName) }
//             className="input-login" />
//           <select name="gender" id="gender" value={ gender } onChange={ () => setGender(gender) }>
//             <option value="f">Feminino</option>
//             <option value="m">Masculino</option>
//             <option value="nb">Não binário</option>
//           </select>
//           <button
//             className="totem-span"
//             onClick={ () => setPage(4) }
//             disabled={ gender === '' && lastName === '' && firstName === ''}
//           >
//             Vamos continuar!
//           </button>
//         </>
//       )
//     }
//     return content;
//   }

//   return (
     
//     <div className="App">
//       <main className='App-main'>
//       <img src="https://scontent.fslz15-1.fna.fbcdn.net/v/t39.30808-6/354257641_108551045609763_1931973505007604583_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=aEmyd3jwmQgAX-qFRov&_nc_oc=AQnddtyuZCzI9y7VGzEJJ7KNVQOaQ2JDxFcj4-ApJBPTN2V02GTHKZ_N_wxmkFFsoeE&_nc_ht=scontent.fslz15-1.fna&oh=00_AfBoX2nVrMOyB9qo_sT-3-RpcSStgDVQXSXutNppk__hNg&oe=6493C558" className="logo-osid" alt='Logo das Obras Sociais irmã dulce com fundo branco e o nome Obras Sociais em preto e Imrã Dulce em azul'/>
//         { renderPage() }
//       </main>
//       <img alt="Imagem animada de Irmã Dulce apelidade de Dulcinha falando com aureola dourada na cabeça e com vestimentas de freira" className="totem-santa-dulce"></img>
//       <div className="div-wrapper"></div>
//     </div>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class App2 extends React.Component {
  constructor() {
    super();
    this.state = {
      cpf: '',
      buttonDisable: true,
      messageError: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, this.verifyInputs);
  };

  verifyInputs = () => {
    const minCharacters = 6;
    const cpfLength = 11
    const { cpf, password } = this.state;
    const validate = (cpf.length === cpfLength && password.length >= minCharacters);

    this.setState({ buttonDisable: !validate });
  };

  handleNext = () => {
    localStorage.setItem('user', JSON.stringify({cpf: '', firstName: '', lastName: '', whatsapp: null, telephone: null}))
  }

  render() {
    const { cpf } = this.state;
    const { history } = this.props;
    return (
      <div className="App">
       <main className='App-main'>
        <img src="https://scontent.fslz15-1.fna.fbcdn.net/v/t39.30808-6/354257641_108551045609763_1931973505007604583_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=aEmyd3jwmQgAX-qFRov&_nc_oc=AQnddtyuZCzI9y7VGzEJJ7KNVQOaQ2JDxFcj4-ApJBPTN2V02GTHKZ_N_wxmkFFsoeE&_nc_ht=scontent.fslz15-1.fna&oh=00_AfBoX2nVrMOyB9qo_sT-3-RpcSStgDVQXSXutNppk__hNg&oe=6493C558" className="logo-osid" alt='Logo das Obras Sociais irmã dulce com fundo branco e o nome Obras Sociais em preto e Imrã Dulce em azul'/>
        <p className="hero-text" >
              Me conta sobre você!<br/>
             Qual o seu CPF?<br/>
           </p>
           <input 
             id="cpf"
             name="cpf"
             type="text"
             placeholder="Digite seu CPF"
             value={ cpf }
             onChange={ () => this.handleChange(cpf) }
             className="input-login" />
           <button
             className="totem-span"
             disabled={ cpf === '' }
             onClick={ () => history.push('/page2') }
           >
             Clique aqui para continuar!
           </button>
       </main>
       <img alt="Imagem animada de Irmã Dulce apelidade de Dulcinha falando com aureola dourada na cabeça e com vestimentas de freira" className="totem-santa-dulce"></img>
       <div className="div-wrapper"></div>
     </div>
    );
  }
}

App2.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default App2;
