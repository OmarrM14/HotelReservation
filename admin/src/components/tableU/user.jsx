import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DS from "./data.json";

const List = () => {
  const rows = [
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User1",
      Email: "user1@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "sharm Elshakh",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User2",
      Email: "user2@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Hurgada",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User3",
      Email: "user3@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Dahab",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User4",
      Email: "user4@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Dahab",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User5",
      Email: "user5@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Hurgada",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User6",
      Email: "user6@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Sharm Elshakh",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User7",
      Email: "user7@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Hurgada",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User8",
      Email: "user8@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Dahab",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User9",
      Email: "user9@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Sharm Elshakh",
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Name: "User10",
      Email: "user10@test.com",
      date: "13/05/2023",
      end: "20/05/2023",
      password: "1111",
      place: "Sharm ElShakh",
    },

  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">End</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.Name}</TableCell>
              <TableCell className="tableCell">{row.Email}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
