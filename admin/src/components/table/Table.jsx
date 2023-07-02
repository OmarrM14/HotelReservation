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
      Place: "Hurgada",
      customer: "user1",
      date: "13/05/2023",
      end: "20/05/2023",
      Hotel: "test",
      Persons: 1
    },
    {
      id: '64641db70b6a082fd003d3b3',
      Place: "Dahab",
      customer: "user1",
      date: "18/06/2023",
      end: "10/07/2023",
      Hotel: "test2",
      Persons: 1
    },
    {
      id: '64641dfe0b6a082fd003d3b4',
      Place: "Sharm El-shakh",
      customer: "user1",
      date: "10/08/2023",
      end: "20/08/2023",
      Hotel: "test3",
      Persons: 3
    },
    {
      id: '64641e5f0b6a082fd003d3b5',
      Place: "Marsa Alam",
      customer: "user1",
      date: "24/05/2023",
      end: "28/05/2023",
      Hotel: "test3",
      Persons: 2
    },
    {
      id: '64641e940b6a082fd003d3b6',
      Place: "Aswan",
      customer: "user1",
      date: "19/07/2023",
      end: "30/07/2023",
      Hotel: "test4",
      Persons: 1
    },
    {
      id: '64641ef10b6a082fd003d3b7',
      Place: "Ras Seder",
      customer: "user1",
      date: "25/09/2023",
      end: "30/09/2023",
      Hotel: "test5",
      Persons: 1
    },
    {
      id: '6466be72aa9c34e1e0787752',
      Place: "Allamen",
      customer: "user1",
      date: "13/05/2023",
      end: "20/05/2023",
      Hotel: "test",
      Persons: 1
    },
    {
      id: '6466beb6aa9c34e1e0787753',
      Place: "North Coast",
      customer: "user1",
      date: "18/06/2023",
      end: "10/07/2023",
      Hotel: "test2",
      Persons: 1
    },
    {
      id: '6466bef2aa9c34e1e0787754',
      Place: "Marsa Matouh",
      customer: "user1",
      date: "10/08/2023",
      end: "20/08/2023",
      Hotel: "test3",
      Persons: 3
    },
    {
      id: '6466bf36aa9c34e1e0787755',
      Place: "Sharm El-shekh",
      customer: "user1",
      date: "24/05/2023",
      end: "28/05/2023",
      Hotel: "test3",
      Persons: 2
    },
    {
      id: '6466bf8faa9c34e1e0787756',
      Place: "Fayoum",
      customer: "user1",
      date: "19/07/2023",
      end: "30/07/2023",
      Hotel: "test4",
      Persons: 1
    },
    {
      id: '6466bff5aa9c34e1e0787757',
      Place: "Luxer",
      customer: "user1",
      date: "25/09/2023",
      end: "30/09/2023",
      Hotel: "test5",
      Persons: 1
    },
    {
      id: '6466c02baa9c34e1e0787758',
      Place: "Alexandria",
      customer: "user1",
      date: "13/05/2023",
      end: "20/05/2023",
      Hotel: "test",
      Persons: 1
    },
    {
      id: '6466c0acaa9c34e1e0787759',
      Place: "Hurgada",
      customer: "user1",
      date: "18/06/2023",
      end: "10/07/2023",
      Hotel: "test2",
      Persons: 1
    },
    {
      id: '6466c0e3aa9c34e1e078775a',
      Place: "Safaga",
      customer: "user1",
      date: "10/08/2023",
      end: "20/08/2023",
      Hotel: "test3",
      Persons: 3
    },
    {
      id: '6466c118aa9c34e1e078775b',
      Place: "Luxer",
      customer: "user1",
      date: "24/05/2023",
      end: "28/05/2023",
      Hotel: "test3",
      Persons: 2
    },
    {
      id: '6466c150aa9c34e1e078775c',
      Place: "Aswan",
      customer: "user1",
      date: "19/07/2023",
      end: "30/07/2023",
      Hotel: "test4",
      Persons: 1
    },
    {
      id: '6466c184aa9c34e1e078775d',
      Place: "Allamen",
      customer: "user1",
      date: "25/09/2023",
      end: "30/09/2023",
      Hotel: "test5",
      Persons: 1
    },
    {
      id: '6466beb6aa9c34e1e0787753',
      Place: "North Coast",
      customer: "user1",
      date: "18/06/2023",
      end: "10/07/2023",
      Hotel: "test2",
      Persons: 1
    },
    {
      id: '6466bef2aa9c34e1e0787754',
      Place: "Marsa Matouh",
      customer: "user1",
      date: "10/08/2023",
      end: "20/08/2023",
      Hotel: "test3",
      Persons: 3
    },
    {
      id: '6466bf36aa9c34e1e0787755',
      Place: "Sharm El-shekh",
      customer: "user1",
      date: "24/05/2023",
      end: "28/05/2023",
      Hotel: "test3",
      Persons: 2
    },
    {
      id: '6466bf8faa9c34e1e0787756',
      Place: "Fayoum",
      customer: "user1",
      date: "19/07/2023",
      end: "30/07/2023",
      Hotel: "test4",
      Persons: 1
    },
    {
      id: '645ed3e02f911d417ddb5071',
      Place: "Hurgada",
      customer: "user1",
      date: "13/05/2023",
      end: "20/05/2023",
      Hotel: "test",
      Persons: 1
    },
    {
      id: '64641db70b6a082fd003d3b3',
      Place: "Dahab",
      customer: "user1",
      date: "18/06/2023",
      end: "10/07/2023",
      Hotel: "test2",
      Persons: 1
    },
    {
      id: '64641dfe0b6a082fd003d3b4',
      Place: "Sharm El-shakh",
      customer: "user1",
      date: "10/08/2023",
      end: "20/08/2023",
      Hotel: "test3",
      Persons: 3
    },
    {
      id: '64641e5f0b6a082fd003d3b5',
      Place: "Marsa Alam",
      customer: "user1",
      date: "24/05/2023",
      end: "28/05/2023",
      Hotel: "test3",
      Persons: 2
    },
    {
      id: '64641e940b6a082fd003d3b6',
      Place: "Aswan",
      customer: "user1",
      date: "19/07/2023",
      end: "30/07/2023",
      Hotel: "test4",
      Persons: 1
    },
    {
      id: '64641ef10b6a082fd003d3b7',
      Place: "Ras Seder",
      customer: "user1",
      date: "25/09/2023",
      end: "30/09/2023",
      Hotel: "test5",
      Persons: 1
    },
    {
      id: '6466be72aa9c34e1e0787752',
      Place: "Allamen",
      customer: "user1",
      date: "13/05/2023",
      end: "20/05/2023",
      Hotel: "test",
      Persons: 1
    },
    {
      id: '6466beb6aa9c34e1e0787753',
      Place: "North Coast",
      customer: "user1",
      date: "18/06/2023",
      end: "10/07/2023",
      Hotel: "test2",
      Persons: 1
    },
    {
      id: '6466bef2aa9c34e1e0787754',
      Place: "Marsa Matouh",
      customer: "user1",
      date: "10/08/2023",
      end: "20/08/2023",
      Hotel: "test3",
      Persons: 3
    },
    {
      id: '6466bf36aa9c34e1e0787755',
      Place: "Sharm El-shekh",
      customer: "user1",
      date: "24/05/2023",
      end: "28/05/2023",
      Hotel: "test3",
      Persons: 2
    },
    {
      id: '6466bf8faa9c34e1e0787756',
      Place: "Fayoum",
      customer: "user1",
      date: "19/07/2023",
      end: "30/07/2023",
      Hotel: "test4",
      Persons: 1
    },
    {
      id: '6466bff5aa9c34e1e0787757',
      Place: "Luxer",
      customer: "user1",
      date: "25/09/2023",
      end: "30/09/2023",
      Hotel: "test5",
      Persons: 1
    },

  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Place</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">End</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Persons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.Place}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.end}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.Hotel}`}>{row.Hotel}</span>
              </TableCell>
              <TableCell className="tableCell">{row.Persons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
