import React, { useEffect, useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const loginEmail = useRef();
    const loginPassword = useRef();
    const navigate = useNavigate();




    const connect = async (e) => {
      e.preventDefault();
    
    const res = await axios.post("https://flexit.systems/api/postConnection", {
      email: loginEmail.current.value,
      password: loginPassword.current.value,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(response => {
      if(response.data.success )
      {
        if(response.data.data["admin"])
        {
      console.log(response.data.data["admin"]);
      localStorage.setItem("token", response.data.data["token"]);
      navigate('/home')
        }else
        {
          alert('Seuls les admins sont autorisé');
        }
      }
    }).catch((error) => {
      alert("email et/ou mot de passe incorrect(s)");
      console.log(error);
    });
    }
    
    return (
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Se connecter</h3>
              <form onSubmit={(e) => { connect(e) }}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Email" required ref={loginEmail} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input type="password" className="form-control" id="password" placeholder="Mot de passe" required ref={loginPassword} />
                </div>
                <button type="submit" className="btn btn-primary">Se connecter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default Login;