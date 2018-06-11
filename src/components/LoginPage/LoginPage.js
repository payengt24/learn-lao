import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch(clearError());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  renderAlert = () => {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div className="background-image">
        <div className="text-box">
          <h1 className="heading-primary">
            {/* <span className="heading-primary-main">Sabaidi</span> */}
            <span>
              <div className="logo-box">
                <img src="data/images/logo.png" alt="Logo" className="logo" />
              </div>
            </span>
            <span className="heading-primary-main">Sa-bai-dee</span>
            <span className="heading-primary-sub">Learn Lao</span>
          </h1>

          {this.renderAlert()}
          <form onSubmit={this.login} className="form container">
            <h1>Login</h1>
            <div>
              <label htmlFor="username">
                Username:
              <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password container">
                Password:
              <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="container">
              <input 
                type="submit"
                name="submit"
                value="Log In"
              />
              <Link to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(LoginPage);
