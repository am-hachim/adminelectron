const Table = ({ tBodyData }) => {
    return (
      <table className="table table-striped table-bordered" id="myTable">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Nom</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tBodyData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  