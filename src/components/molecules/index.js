import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Bank from '../../Assests/bank.png';
import Dust from '../../Assests/dust.png'
//atoms
import { Div, Heading, Top, Button, Text, Text1, Select, Option, Image, Input } from '../atoms';




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Index() {
  const [address, setaddress] = useState("")
  const [draw, setdraw] = useState(null)
  const [amount, setamount] = useState(null)
  const [remaining, setremaining] = useState(null)
  const [spendBal, setspendBal] = useState(null)
  const [bal, setbal] = useState(null)

 //change remaing amount to float
 const floatremaining =parseFloat(remaining).toFixed(6)

 // handle click
  const handleClick =() =>{
setaddress('boa1456fjknd12345345908nnn1324234')
setspendBal(100.9999999)
setbal(100.9999999)
var floatamount = parseFloat(amount).toFixed(2);
var balamount =  parseFloat(bal).toFixed(2);
console.log(floatamount)
setremaining(balamount - floatamount)


  }

  return (
    <Top>
      <Div>
        <Heading>
          Receiver
          <Text>
            Address
          </Text>
         
         
          <Select>
            <option value="" hidden>
              boa1456fjknd12345345908nnn1324234
            </option>

          </Select>
        
           <Input defaultValue="100.9999999" type="text" onChange={e => setamount(e.target.value)} />
        </Heading>


      </Div>
      <Div>
        <Heading>
          Fee
          <Text>
            Option
          </Text>
          <Select>
            <option value="" hidden>
              Medium
            </option>

          </Select>
          <Input defaultValue="2.52" type="text" />
        </Heading>

      </Div>
      <Div>

        <Heading>
          Sender
          <Button onClick={handleClick}>Add Sender</Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell align="right">Drawn</TableCell>
                  <TableCell align="right">Remaining</TableCell>
                  <TableCell align="right">Spendable Balance </TableCell>
                  <TableCell align="right">Balance</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map((row) => ( */}
                  <TableRow
                   
                    
                  >
                    <TableCell component="th" scope="row">
                      <img src={Bank} alt="bank" width="20" height="20" />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {address}
                    </TableCell>
                    <TableCell align="right">{}</TableCell>
                    <TableCell align="right">{floatremaining}</TableCell>
                    <TableCell align="right">{spendBal}</TableCell>
                    <TableCell align="right">{bal}</TableCell>
                    <TableCell align="right"><img src={Dust} alt="dust" width="20" height="20" /></TableCell>
                  </TableRow>
                {/* ))} */}
              </TableBody>
            </Table>
          </TableContainer>

        </Heading>

      </Div>

    </Top>


  )
}

export default Index
