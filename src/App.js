import React, { useState } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles({
  bar: {
    width: '100%',
    height: 50,
    backgroundColor: 'blueGrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBar1: {
    fontSize: '20px',
    color: "orange",
    marginRight: '5px',
    marginBottom: "-5px",
  },
  iconBar2: {
    fontSize: '20px',
    color: "green",
    marginRight: '5px',
    marginBottom: "-5px",
  },
  iconBar3: {
    fontSize: '20px',
    color: "red",
    marginRight: '5px',
    marginBottom: "-5px",
  },
  form: {
    marginTop: '60px',
    marginBottom: '20px',
    marginLeft: '20px'
  },
  inputText: {
    width: 210,
    padding: '5px',
  },
  containerCard: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: 210,
    fontSize: 15,
    marginLeft: '20px',
  },
  title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  content: {
    padding: '10px'
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: 'aquamarine',
    textAlign: 'left',
    fontSize: 10,
  },
  buttonDelete: {
    width: 30,
    height: 50,
    backgroundColor: 'red',
    opacity: '0.7',
    color:'white',
  },
})



const App = () => {
  const classes = useStyles()
  
   const [tareas, setTareas] = useState(['Comprar chocolates',
   'Trapear como Esperancita', 
   'Hacer ejercicios',
   'Cocinar', 
   'Mirar por el balcon'])
   const [completed, setCompleted] = useState(0);

   const [tareaDelete, setDelete] = useState(0)

   const [nuevaTarea, setNuevaTarea] = useState('')
  
   const handleClick = (accion,indice) => {
     setTareas(tareas.filter((tarea, i) => i !== indice ))
     if(accion === 'complete'){ 
     setCompleted(completed + 1)
     } else {
      setDelete(tareaDelete + 1)
     }
   }

  const handleChange = e => {
   setNuevaTarea(e.target.value)
  } 

  const handleSubmit = e => {
    e.preventDefault()
    const tareasExtras = [...tareas, nuevaTarea]
    setTareas(tareasExtras)
    setNuevaTarea('')
  }
  return (
    <>
      <AppBar className={classes.bar}> <p>Tareas pendientes: {tareas.length} <NotificationsNoneIcon className={classes.iconBar1} />
     Tareas completadas: {completed} <CheckCircleIcon className={classes.iconBar2}/>
  Tareas Eliminadas: {tareaDelete} <ClearIcon className={classes.iconBar3}/></p>
      </AppBar>
      <form  className={classes.form} onSubmit={handleSubmit}>
       <TextField 
       label="Escribe aqui tu nueva tarea" 
       className= {classes.inputText} 
       variant="filled" 
       type="text" 
       name="text" 
       onChange={handleChange}
       value={nuevaTarea}
       />
     </form>
      <div className={classes.containerCard}>
      {
        tareas.map((tarea, i) =>
          < Card key={tarea} className={classes.card} >
            <CardContent className={classes.content}>
              <div className={classes.title}>
                <HomeWorkIcon fontSize='small' />
                <h3>Tarea a realizar</h3>
              </div>
              <p>{tarea}</p>
            </CardContent>
            <CardActions>
              <Button className={classes.button}>
                <Checkbox className={classes.check} onClick={()=>handleClick("complete",i)}/> Completada
               </Button>
               <Button className={classes.buttonDelete} onClick={()=>handleClick("delete",i)}><ClearIcon/></Button>
            </CardActions>
          </Card>
        )
      }
     </div>
    </>
  );
}

export default App;
