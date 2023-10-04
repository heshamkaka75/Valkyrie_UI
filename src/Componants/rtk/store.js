import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import EmployeeSlice from './slices/employeeSlice';
import formDataSlice from './slices/formDataSlice'
import vacationSlice from './slices/vacationSlice'

const store = configureStore({
    reducer: {
        
        auth: authReducer,
        message: messageReducer,     
        employee: EmployeeSlice,
        formData: formDataSlice,
        vacation: vacationSlice
    }
})

export default store