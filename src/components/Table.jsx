import { FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';

const Table = ({ tBodyData,getalluser }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  function deleteUser(id) {
    try {
      const response = axios.delete(`https://flexit.systems/api/deleteUser/${id}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }).then((response) => {
        console.log(response);
        window.location.reload();
      })
    
    } catch (error) {
      console.log(error);
    }
  }

  function makeUserAdmin(id) {
    try {
      const response = axios.put(`https://flexit.systems/api/makeAdmin/${id}`,null, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }).then((response) => {
        console.log(response);
        window.location.reload();
      })
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(id) {
    setSelectedRow(id);
    deleteUser(id);
  }

  function handleClickAdmin(id) {
    setSelectedRow(id);
    makeUserAdmin(id);
  }

  return (
    <table className="table table-striped table-bordered" id="myTable">
      <thead className="thead-dark">
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>Email</th>
          <th></th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {tBodyData.map((item) => (
          <tr key={item.id} className={selectedRow === item.id ? 'table-danger' : ''}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td id='delete' onClick={() => handleClick(item.id)}>
              <FaTrashAlt className={selectedRow === item.id ? 'text-danger' : ''} />
            </td>
            <td id='admin' onClick={() => handleClickAdmin(item.id)}>{item.isAdmin ? 'Admin' : 'Attribuer droit admin'}</td>

          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
