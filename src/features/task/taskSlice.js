import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',
    initialState: {
        idCount: 3,
        tasks: [
            { id: 1, title: 'titleA', completed: false, },
            { id: 2, title: 'titleB', completed: true, },
            { id: 3, title: 'titleC', completed: false, },
        ]
    },
    reducers: {
        newTask: (state, action) => {
            state.idCount++;
            const newItem = { 
                id: state.idCount,
                title: action.payload,
                completed: false
            }
            state.tasks = [newItem, ...state.tasks]
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        completeTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id)
            if (task) {
                task.completed = !task.completed
            }
        },
    },

});

export const { newTask, deleteTask, completeTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
