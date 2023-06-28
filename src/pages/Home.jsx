import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "../components/Table";

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  //functions to search an user by his email
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
  //Get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://flexit.systems/api/getAllUsers",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      setUsers(response.data);
    } catch (error) {
      return error ;
    }
  };
  //log out the user
  const logOut = async () => {
    try {
      const response = await axios.post(
        "https://flexit.systems/api/logOutUser",
        null,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTableFunctionCall = () => {
    getAllUsers();
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-end mb-3">
            <button
              onClick={logOut}
              type="button"
              className="btn btn-secondary mb-3"
            >
              Déconnecter
            </button>
          </div>
          <h1 className="mt-5">Accueil</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              id="myInput"
              onKeyUp={myFunction}
              placeholder="Recherche par email"
              title="Type in a name"
              className="form-control"
            />
          </div>
          <Table tBodyData={users} getalluser={handleTableFunctionCall} />
        </div>
      </div>
    </div>
  );
};

export default Home;
