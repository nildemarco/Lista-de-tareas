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
  containerCard: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  card: {
    width: 210,
    fontSize: 15,
    marginTop: '60px',
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
})



const App = () => {
  const classes = useStyles()
  
   const [tareas, setTareas] = useState(['Comprar chocolates',
   'Trapear como Esperancita', 
   'Hacer ejercicios',
   'Cocinar', 
   'Mirar por el balcon'])
   const [completed, setCompleted] = useState(0)
  
   const handleClick = indice => {
     setTareas(tareas.filter((tarea, i) => i !== indice )) 
     setCompleted(completed + 1)
   }
  return (
    <>
      <AppBar className={classes.bar}> <p>Tareas pendientes: {tareas.length} <NotificationsNoneIcon className={classes.iconBar1} />
     Tareas completadas: {completed} <CheckCircleIcon className={classes.iconBar2} /></p>
      </AppBar>
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
                <Checkbox className={classes.check} onClick={()=>handleClick(i)} /> Completada
               </Button>
            </CardActions>
          </Card>
        )
      }
     </div>
    </>
  );
}

export default App;
