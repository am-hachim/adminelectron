import {FaTrashAlt} from 'react-icons/fa';
import axios from 'axios';



const Table = ({ tBodyData }) => {



function deleteUser(id)
{
    try {
        const response =  axios.delete(`https://flexit.systems/api/deleteUser/${id}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },
        });
console.log(response);  
    } catch (error) {
        console.log(error);
      }
}

    return (
      <table className="table table-striped table-bordered" id="myTable">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Email</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {tBodyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td onClick={deleteUser(item.id)}><FaTrashAlt/></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  