import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Dev_BaseURL } from '../../Configuration/Urls'
import axios from 'axios';

export const fetchVacations = createAsyncThunk('vacationSlice/fetchVacations', async () => {
  const res = await fetch(`${Dev_BaseURL}/Vacation`);
  const data = await res.json();
  return data
})

export const createVacation = createAsyncThunk('vacationSlice/createVacation',
async ({ numberOfDays, daysLeft, vacationTypeId, employeeId }) => {
  return await axios.post(`${Dev_BaseURL}/Vacation/create`,
    { numberOfDays, daysLeft, vacationTypeId, employeeId })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return error.data;
    })
})

  export const createEmpVacation = createAsyncThunk('vacationSlice/createEmpVacation',
  async ({ employeeId, vacationTypeId, duration, startAt, endAt }) => {
    return await axios.post(`${Dev_BaseURL}/Vacation/CreateEmpVacation`,
      { employeeId, vacationTypeId, duration, startAt, endAt })
      .then(res => {
        return res;
      })
      .catch(error => {
        return error;
      })
  })

const vacationSlice = createSlice({
  name: 'vacationSlice',
  initialState: [],
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchVacations.fulfilled, (state, actions) => {
      return actions.payload
    })

    bulder.addCase(createVacation.fulfilled, (state, actions) => {
      return actions.payload
    })

    bulder.addCase(createEmpVacation.fulfilled, (state, actions) => {
      return actions.payload
    })

  }
})

export const { } = vacationSlice.actions
export default vacationSlice.reducer