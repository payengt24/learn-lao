import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { LOGIN_ACTIONS } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
  user: state.user,
});

const logout = () => {
  this.props.dispatch({
    type: LOGIN_ACTIONS.LOGOUT
  });
  this.props.history.push('home');
}

const Nav = (props) => {
  console.log('...... props:')
  console.log(props);
  const loginButton = props.isLogin ? (
    <li >
      <Link onClick={this.logout} to="/">
        Logout
      </Link>
    </li>
  ) : '';

  return (
    <div className="navbar">
      <div>
        <li>
        {/* <Link to="/user"><img src="data/images/logo.png" alt="Logo" className="logo" /> </Link> */}
        <img src="data/images/logo.png" alt="Logo" className="logo" /> 
        </li>
        <ul>
          <li>
            <Link to="/user">
              Home
          </Link>
          </li>
          <li>
            <Link to="/consonants">
              Consonants
          </Link>
          </li>
          <li>
            <Link to="/vowels">
              Vowels
          </Link>
          </li>
          <li>
            <Link to="/vocabulary">
              Vocabulary
          </Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
          </Link>
          </li>
          {loginButton}


          {/* <li><button className="logOutButton" onClick={this.logout}>Log Out</button></li> */}
        </ul>
      </div>

      

    </div>

    

    // <div id="navWrapper">
    //   <div class="container">

    //     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    //     <li>
    //       <img src="data/images/logo.png" alt="Logo" className="logo" />
    //     </li>
    //       <a class="navbar-brand" href="#home"><Link to="/user">Home</Link></a>

    //       <ul class="navbar-nav">

    //         <li class="nav-item">
    //           <a class="nav-link" href="#consonants"><Link to="/consonants">Consonants</Link></a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#vowels"><Link to="/vowels">Vowels</Link></a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#vocabulary"><Link to="/vocabulary">Vocabulary</Link></a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#favorites"><Link to="/favorites">Favorites</Link></a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>


)
};

export default connect(mapStateToProps)(Nav);
