import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      buttonDisable: true,
      messageError: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleNext = () => {
    const { firstName, lastName, gender } = this.state;
    const user = localStorage.getItem('user');
    localStorage.setItem('user', JSON.stringify({cpf: user.cpf, firstName, lastName, gender, whatsapp: null, telephone: null}))
  }

  render() {
    const { firstName, lastName, gender } = this.state;
    const { history } = this.props;
    return (
      <div className="App">
       <main className='App-main'>
        <img src="https://scontent.fslz15-1.fna.fbcdn.net/v/t39.30808-6/354257641_108551045609763_1931973505007604583_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=aEmyd3jwmQgAX-qFRov&_nc_oc=AQnddtyuZCzI9y7VGzEJJ7KNVQOaQ2JDxFcj4-ApJBPTN2V02GTHKZ_N_wxmkFFsoeE&_nc_ht=scontent.fslz15-1.fna&oh=00_AfBoX2nVrMOyB9qo_sT-3-RpcSStgDVQXSXutNppk__hNg&oe=6493C558" className="logo-osid" alt='Logo das Obras Sociais irmã dulce com fundo branco e o nome Obras Sociais em preto e Imrã Dulce em azul'/>
        <p className="hero-text" >
             Vi que você não possui cadastro.<br/>
             Me conte um pouco sobre você!<br/>
           </p>
           <input 
             id="firstName"
             name="firstName"
             type="text"
             placeholder="Digite seu primeiro nome."
             value={ firstName }
             onChange={ (e) => this.handleChange(e) }
             className="input-login" />
           <input 
             id="lastName"
             name="lastName"
             type="text"
             placeholder="Digite seu sobrenome."
             value={ lastName }
             onChange={ (e) => this.handleChange(e) }
             className="input-login" />
           <select name="gender" id="gender" value={ gender } onChange={ (e) => this.handleChange(e) }>
             <option value="f">Feminino</option>
             <option value="m">Masculino</option>
             <option value="nb">Não binário</option>
           </select>
           <button
             className="totem-span"
             onClick={ () => history.push('/for_contact') }
             disabled={ gender === '' && lastName === '' && firstName === ''}
           >
             Vamos continuar!
           </button>
        </main>
       <img alt="Imagem animada de Irmã Dulce apelidade de Dulcinha falando com aureola dourada na cabeça e com vestimentas de freira" className="totem-santa-dulce"></img>
       <div className="div-wrapper"></div>
     </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default App;
