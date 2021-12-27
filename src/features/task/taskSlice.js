import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

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
            const newItem = {cd 
                id: state.idCount,
                title: action.payload,
                completed: false
            }
            state.tasks = [newItem, ...state.tasks]
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) = t.id !== action.payload.id);
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

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTask = (state) => state.task.value;



export default taskSlice.reducer;
