import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dev_BaseURL } from '../../Configuration/Urls'
import axios from 'axios';

export const fetchEmployees = createAsyncThunk('employeeSlice/fetchEmployees', async () => {
  const res = await fetch(`${Dev_BaseURL}/Employee`);
  const data = await res.json();
  return data
})

export const fetchEmployeesForm = createAsyncThunk('employeeSlice/fetchEmployeesForm', async () => {
  const res = await fetch(`${Dev_BaseURL}/Employee/CreateForm`);
  const data = await res.json();
  return data
})

export const printReport = createAsyncThunk('employeeSlice/printReport', async () => {
  const res = await fetch(`${Dev_BaseURL}/Employee/AllEmpReports`);
  const data = await res.json();
  return data
})


export const printVacationReport = createAsyncThunk('employeeSlice/printVacationReport', async () => {
  const res = await fetch(`${Dev_BaseURL}/Vacation/AllEmpReports`);
  const data = await res.json();
  return data
})

  export const createEmp = createAsyncThunk('employeeSlice/createEmp',
  async ({ name, departmentId, genderId, motherName, nationalID, phoneNo, jobTitle, salary }) => {
    return await axios.post(`${Dev_BaseURL}/employee/create`,
      { name, departmentId, genderId, motherName, nationalID, phoneNo, jobTitle, salary })
      .then(res => {
        return res.data;
      })
      .catch(error => {
        return error.data;
      })
  })

const employeeSlice = createSlice({
  name: 'employeeSlice',
  initialState: [],
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchEmployees.fulfilled, (state, actions) => {
      return actions.payload
    })

    bulder.addCase(fetchEmployeesForm.fulfilled, (state, actions) => {
      return actions.payload
    })

    bulder.addCase(printReport.fulfilled, (state, actions) => {
      return actions.payload
    })

    bulder.addCase(printVacationReport.fulfilled, (state, actions) => {
      return actions.payload
    })

    bulder.addCase(createEmp.fulfilled, (state, actions) => {
      return actions.payload
    })

  }
})

export const { } = employeeSlice.actions
export default employeeSlice.reducer