import React from "react";
import { axiosWithAuth } from './axiosWithAuth';
import './Style.css';

class Login extends React.Component {
  state = {
    userCred: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      userCred: {
        ...this.state.userCred,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    // add in our login api call
    axiosWithAuth()
      .post("/login", this.state.userCred)
      .then(res => {
        console.log("Response from the post request: ",res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/bubbles-page");
      })
      .catch(err => {
        console.log(err);
      });

  }

  render(){
  return (
    <div>
      <form onSubmit={this.handleLogin}>
        <input
          type="text"
          name="username"
          value={this.state.userCred.username}
          placeholder="USERNAME"
          onChange={this.handleChange}
          className="input-button"
        />

        <input
          type="text"
          name="password"
          placeholder="PASSWORD"
          value={this.state.userCred.password}
          onChange={this.handleChange}
          className="input-button"
        />
        <button> Log in </button>

      </form>
    </div>
  );
}
}

export default Login;



// const Login = (props) => {
//   const [user, setUser] = useState({ username: " ", password: " " });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
//   const handleChange = e => {
//     e.preventDefault();
//     setUser({ ...user, [e.target.name]: e.target.value })
//   }
  
//   const handleSubmit = e => {
//      e.preventDefault();
//     axiosWithAuth()
//       .post('/login',user)
//       .then(res => {
//         console.log('RESPONSE FROM POST REQUES=>', res);
      //   localStorage.setItem('token', res.data.token);
      // props.history.push('/');
//       })
//       .catch(err => {
//         console.log('ERROR FORM POST REQUEST=>', err);
//       });
//     setUser({ ...user, username: '', password: '' });
//   }