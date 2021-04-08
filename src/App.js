import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from './components/AddTask';
const App = () =>  {

  const [showAddTask , setshowAddTask] = useState(false)
  const [tasks , setTasks] = useState([

    // {
    //   id : '1',
    //   text : 'Learning React',
    //   day : '9th March,2021',
    //   reminder : true
    // },
    // {
    //   id:'2',
    //   text : 'Coding data structures',
    //   day : '9th March,2021',
    //   reminder : true
    // },
    // {
    //   id : '3',
    //   text : 'Attend Classes',
    //   day : '9th March,2021',
    //   reminder : false
    // }
 ])


//Add Tasks
const addTasks = (task) => {
  const id= Math.floor(Math.random() * 1000) + 1;

  const newTask = {id , ...task}
  setTasks([...tasks , newTask])
} 



//Delete Tasks
const deleteTasks = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTasks(tasks.map((task)=> 
                task.id === id ? {...task, reminder : !task.reminder} : task))
}




  return (
    <div className="container">
      <Header onAdd = {() => setshowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {/* It means if showAddTask is True then show the AddTask component */}
      {showAddTask && <AddTask onAdd={addTasks}/>}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder}/> : 'No Tasks added'}
    </div>
  );
}

export default App;
