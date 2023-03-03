import Table from 'react-bootstrap/Table';
import {
  Link
} from "react-router-dom";


const columns = [
    { id: 'title', label: 'Title', minWidth: 200 },
    { id: 'authorID', label: 'Author', minWidth: 100 },
    {
      id: 'language',
      label: 'Language',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'workDate',
      label: 'Date of Work',
      minWidth: 100,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
   
  ];
  
function Content({ data }) {
  console.log("content data", data)
  return (
    <Table striped>
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>

        {data.map((data) => (
          <tr>
            <td>
              <Link className='link' to={`/works/${data.id}`}>
                {data.display_title}
              </Link>
            </td>
            <td>{data.author_id?.display_name}</td>
            <td>{data.language?.name}</td>
            <td>{data.work_date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Content;
