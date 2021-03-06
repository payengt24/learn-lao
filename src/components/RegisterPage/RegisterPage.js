import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css'

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
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
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (

      <div className="background-image">
        <div className="text-box col-sm-12">
          <h1 className="heading-primary col-sm-12">
            {/* <span className="heading-primary-main">Sabaidi</span> */}
            <span>
              <div className="logo-box col-sm-12">
                <img src="data/images/logo.png" alt="Logo" className="logo" />
              </div>
            </span>
            <span className="heading-primary-main-register col-sm-12">Sa-bai-dee</span>
            <span className="heading-primary-sub-register col-sm-12">Learn Lao</span>
          </h1>
          {this.renderAlert()}
          <form onSubmit={this.registerUser} className="form-register col-sm-12">
            <h1>Register</h1>
            <div>
              <label htmlFor="username col-sm-12">
                Username:
              <input
               className="col-sm-12"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password col-sm-12">
                Password:
              <input
               className="col-sm-12"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                value="Register"
              />
              <Link to="/home">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;

