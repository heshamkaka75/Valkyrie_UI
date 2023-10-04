import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Table } from "react-bootstrap";
import MyNav from '../../Componants/Navbar/Nav';
import Footer from '../../Componants/Footer/Footer'
import { CDBBreadcrumb, CDBIcon, CDBContainer } from "cdbreact";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { fetchEmployeesForm } from "../../Componants/rtk/slices/formDataSlice";
import { createEmpVacation } from "../../Componants/rtk/slices/vacationSlice";

function EmployeeVacation() {

  const [vacationTypeId, setvacationTypeId] = useState('');
  const [employeeId, setemployeeId] = useState('');
  const [duration, setduration] = useState('');
  const [startAt, setstartAt] = useState('');
  const [endAt, setendAt] = useState('');


  const formDatas = useSelector((state) => state.formData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEmployeesForm());
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmpVacation({ employeeId, vacationTypeId, duration, startAt, endAt }))
      .unwrap()
      .then((res) => {
        if (res.data.statusCode === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Create Success',
            text: 'Create Success'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!!!',
            text: 'Something went wrong!!!',
          })
        }

      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!!!',
          text: 'Something went wrong!!!',
        })
      })
  }

  if (formDatas) {
    try {
      var vtView = formDatas.data.vtNames.map((data) => {
        return (
          <option key={data.vtId} value={data.vtId} >{data.vtName}</option>
        )
      })

      var empView = formDatas.data.empNames.map((data) => {
        return (
          <option key={data.empId} value={data.empId} >{data.empName}</option>
        )
      })
    } catch (error) {

    }
  }

  return (

    <>
      <MyNav />

      <div className="pageHeaderBreadcrumb">
        <h2>Create Employee Vacation</h2>
        <div className="itemInBreadcrumb">
          <CDBContainer>
            <CDBBreadcrumb color="none" className="align-items-center">
              <li className="breadcrumb-item" ><Link className="p-0" to="/">Home</Link></li>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
              <li className="breadcrumb-item"><Link className="p-0" to="/Vacations">Vacation</Link></li>
              <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
              <li className="breadcrumb-item active">Create Employee Vacation</li>
            </CDBBreadcrumb>
          </CDBContainer>
        </div>
      </div>

      <Container className="employees">
        <div className="hrForm">
          <Form>

            <Form.Group className="mb-3">
              <Form.Group className="mb-3">
                <Form.Label>Employee</Form.Label>
                <Form.Select value={employeeId} onChange={(e) => setemployeeId(e.target.value)}>
                  <option >Select</option>
                  {
                    formDatas
                      ? empView
                      : <option >Select</option>
                  }
                </Form.Select>
              </Form.Group>

              <Form.Label>Vacation Type</Form.Label>
              <Form.Select value={vacationTypeId} onChange={(e) => setvacationTypeId(e.target.value)}>
                <option >Select</option>
                {
                  formDatas
                    ? vtView
                    : <option >Select</option>
                }
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number Of Days</Form.Label>
              <Form.Control type="text" value={duration} onChange={(e) => setduration(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Start At:</Form.Label>
              <Form.Control type="date" value={startAt} onChange={(e) => setstartAt(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Ent At:</Form.Label>
              <Form.Control type="date" value={endAt} onChange={(e) => setendAt(e.target.value)} />
            </Form.Group>

            <Button variant="success" type="submit" onClick={handleSubmit}>Create</Button>

          </Form>
        </div>

      </Container>

      <Footer />

    </>
  )
}

export default EmployeeVacation