import React,{useEffect,useState} from 'react';
import api from './Services/api';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    width : '100%',
    overflowX : 'auto',
  },
  table: {
    minWidth: 650,
  },
});


function App() {

  const [perguntas,setPerguntas] = useState([]);
  const classes = useStyles();

  useEffect(()=>{
    api.get('/showConcursos').then((response)=>{
      setPerguntas(response.data)
    }).catch((error)=>{
      alert(error)
    })

  },[])


  return (
    <div style={{width:'80%', margin: 'auto',}}>

    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Autor</TableCell>
            <TableCell align="letf">Identificação</TableCell>
            <TableCell align="right">Titulo</TableCell>
            <TableCell align="right">Senha</TableCell>
            <TableCell align="right">Quantidade Perguntas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {perguntas.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.autor}
              </TableCell>
              <TableCell align="left">{row._id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.senha}</TableCell>
              <TableCell align="right">{row.perguntas.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <DeleteIcon style={{
       "hover": {
        backgroundColor: "#558",
        fontSize:500
      },
    }} fontSize="small" onClick={()=>{
      alert('teste')
    }} />
    

    </div>
  );
}

export default App;
