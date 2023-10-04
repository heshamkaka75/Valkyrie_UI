import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {Dev_BaseURL} from '../../Configuration/Urls'


export const fetchEmployeesForm = createAsyncThunk('formDataSlice/fetchEmployeesForm', async ()=> {
    const res = await fetch(`${Dev_BaseURL}/Employee/CreateForm`);
    const data = await res.json();
    return data
})


const formDataSlice = createSlice({
  name: 'formDataSlice',
  initialState: [],
  reducers: {},
  extraReducers: (bulder) => {

      bulder.addCase(fetchEmployeesForm.fulfilled, (state , actions) => {
        return actions.payload
    })

  }
})

export const {} = formDataSlice.actions
export default formDataSlice.reducer