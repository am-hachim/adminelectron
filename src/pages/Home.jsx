import React, { useEffect, useRef } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';

const Home = () => {


const getAllUsers = async () => {

    const res = await axios.get("https://flexit.systems/api/getAllUsers",
    {   headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization : 'Bearer ' + localStorage.getItem('token')
          },
    }).then((response) => {
        console.log(response);

    })


}

useEffect(() => {
getAllUsers();

},[])

    return (
<div className="container">
  <div className="row">
    <div className="col">
      <h1 className="mt-5">Accueil</h1>
      <Table/>
    </div>
  </div>
</div>
    );
};

export default Home;