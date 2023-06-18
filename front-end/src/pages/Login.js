import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dulce from '../assets/dulce.png';
import { handleUser } from '../redux/actions';
import { requestPost } from '../services/request';
import '../styles/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      cpf: '',
      password: '',
      buttonDisable: true,
      messageError: true,
    };
  }

  componentDidMount() {
    const { history } = this.props;

    const verify = JSON.parse(localStorage.getItem('user'));
    if (!verify) return history.push('/login');
    history.push('/customer/products');
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

  handleSubmit = async () => {
    try {
      const { cpf, password } = this.state;
      const { dispatch, history } = this.props;
      const { token } = await requestPost('/user/login', { cpf, password });
      const { id, name, role } = await requestPost('/user/cpf', { cpf });

      localStorage.setItem('user', JSON.stringify({
        id, name, cpf, role, token,
      }));

      if (role === 'customer') {
        history.push('/home');
      } else if (role === 'employee') {
        history.push('/obras-sociais');
      } else {
        history.push('/admin');
      }

      dispatch(handleUser(cpf));
    } catch (error) {
      this.setState({ messageError: false });
      const quatroSeg = 4000;
      setTimeout(() => { this.setState({ messageError: true }); }, quatroSeg);
    }
  };

  createAccount = () => {
    const { history } = this.props;
    history.push('/cadastro');
  };

  render() {
    const { cpf, password, buttonDisable, messageError } = this.state;
    return (
      <main className="login">
        <div className='back-login'>
        <form className='login-form'>
          <h1> BEM-VINDO AO PORTAL OSID </h1>
          <label htmlFor="cpf" className='label-login'>
            CPF:
            <input
              autoComplete="off"
              id="cpf"
              name="cpf"
              type="text"
              placeholder="Digite seu cpf"
              value={ cpf }
              onChange={ this.handleChange }
              className="input-login"
            />
          </label>
          <label htmlFor="password" className='label-login'>
            PASSWORD:
            <input
              id="password"
              name="password"
              type="password"
              data-testid="common_login__input-password"
              placeholder="Digite sua Senha"
              value={ password }
              onChange={ this.handleChange }
              className="input-login"
              />
            </label>
            <div className='buttons-wrapper'>
            <button
              type="button"
              data-testid="common_login__button-login"
              disabled={ buttonDisable }
              onClick={ this.handleSubmit }
              className="login-button"
            >
              Entrar
            </button>
            <button
              type="button"
              onClick={ this.createAccount }
              className="login-button"
            >
              Criar conta
            </button>
            </div>
        </form>
        <div className='login-hero'>
          <img src={ dulce } className='dulce-login'/>
        </div>
      </div>
      <div className="errror-login">
        {
          !messageError ? (
            <span
              className="error-span"
            >
              <br />
              CPF e senha devem ser validos!
              <div className="progress-login" />
            </span>
          ) : null
        }
      </div>
      </main>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(Login);
