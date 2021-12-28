import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { newTask } from './taskSlice'
import taskSlice from './taskSlice'

const TaskInput = () => {
    const dispatch = useDispatch()
    const [editTitle, setEditTitle] = useState("")
    const handleTitleChange = (e) => {setEditTitle(e.target.value )}
    const handleSubmit = (e) => { 
        e.preventDefault()
        dispatch(newTask(editTitle))
        setEditTitle("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={editTitle}
                onChange={handleTitleChange}
                placeholder="Please input title">
            </input>
            <button>New</button>
        </form> 
    )
    
}

export default TaskInput
