import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from '../components/Table';

const Home = () => {
  const [users, setUsers] = useState([]);


  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await axios.get("https://flexit.systems/api/getAllUsers", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-5">Accueil</h1>
          <input type="text" id="myInput" onKeyUp={myFunction} placeholder="Recherche par email" title="Type in a name"></input>
          <Table tBodyData={users} />
        </div>
      </div>
    </div>
  );
};

export default Home;
