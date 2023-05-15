import React, { useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const loginEmail = useRef();
    const loginPassword = useRef();
    // const connect = async (e) => {
    //     e.preventDefault();

    //     const ttruc = axios.get('https://flexit.systems/sanctum/csrf-cookie');

    //     const res = await fetch("https://flexit.systems/api/postConnection", {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email: loginEmail.current.value,
    //         password: loginPassword.current.value,
    //       }),
    //     })
    //       .then((res) => res.json())
    //       .then((truc) => {
    //         console.log(ttruc);
    //         if (truc.success) {
    //           console.log(truc);
    //           return truc["success"];
    //         } else {
    //           return truc["success"];
    //         }
    //       })
    //       .catch((error) => {
    //         return error;
    //       });
    //     console.log({ res });
    //     return res;
    // }

    // const connect = async (e) => {
    //   e.preventDefault();
    
    //   axios.get('https://flexit.systems/sanctum/csrf-cookie').then(response => {
    //     try {
    //       const csrfToken = document.cookie
    //         ? document.cookie
    //             .split(';')
    //             .find(cookie => cookie.trim().startsWith('XSRF-TOKEN='))
    //         : null;
    
    //       if (!csrfToken) {
    //         throw new Error('CSRF token not found.');
    //       }
    
    //       const res = axios.post("https://flexit.system/api/postConnection", {
    //         email: loginEmail.current.value,
    //         password: loginPassword.current.value,
    //       }, {
    //         headers: {
    //           'X-CSRF-TOKEN': csrfToken,
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         withCredentials: true
    //       });
    
    //       console.log(res.data);
    //       return res.data.success;
    //     } catch (error) {
    //       console.log(error);
    //       return error;
    //     }
    //   });
    // }

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
      console.log(response.data.data["token"]);
      localStorage.setItem("token", response.data.data);

    });
    }
    
    return (
        <div className='login-container' >
            <div className="login">

                <h3>Se connecter </h3>
                <form onSubmit={(e) => { connect(e) }}>

                    <input type="email" placeholder='email' required ref={loginEmail} />
                    <input type="password" placeholder='mdp' required ref={loginPassword} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;