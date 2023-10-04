import { Route , Routes } from 'react-router-dom';
import './App.css';
import {Login, Home, NotFound, Vacation, VacationBalance, EmployeeVacation, Employee, CreateEmployee} from './Componants/Configuration/ImportsDefault'
import React from 'react';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element = { <Login /> } />
        <Route path='*' element = { <NotFound /> } />
        <Route path='/' element = { <Home /> } />

        <Route path='/Vacations' element = { <Vacation /> } />
        <Route path='/Vacation/createBlance' element = { <VacationBalance /> } />
        <Route path='/Vacation/createEmpVac' element = { <EmployeeVacation /> } />
        
        <Route path='/Employees' element = { <Employee /> } />
        <Route path='/Employees/create' element = { <CreateEmployee /> } />
      </Routes>
    </div>
  );
}

export default App;