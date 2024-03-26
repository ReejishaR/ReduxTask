import { useSelector, useDispatch } from 'react-redux';
import "../assets/style/style.css";
import { deleteTable } from '../redux/table/TableSlice';
import { Link } from "react-router-dom";

export const Table = ({ data }) => {
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.table.users);
  const handleDelete = (name) => {
    dispatch(deleteTable({ name }));
  };
  console.log(tableData);

  return (
    <div className="table-container">
      <Link to='/add'><button>+ Add New</button></Link>
      
     
         
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone} </td>
                <td><button onClick={() => handleDelete(data.name)}>Del</button>
                <Link to={`/edit/${data.id}`}><button >Edit</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
