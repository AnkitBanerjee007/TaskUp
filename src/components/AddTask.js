import {useState} from 'react';




const AddTask = ( {onAdd} ) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a Task')
            return;
        }

        //Else if it is a text entered
        onAdd({text,day,reminder})

        //Clear the boxes
        setText('')
        setDay('')
        setReminder(false)

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add your Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className = 'form-control'>
                <label>Date</label>
                <input type='text' placeholder='Date & Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className = 'form-control form-control-check'>
                <label>Reminder</label>
                <input type='checkbox' value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Queue Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
