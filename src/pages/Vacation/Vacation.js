import React, { useEffect, useState } from "react";
import './Vacation.css'
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { Container, Form, Modal, Table } from "react-bootstrap";
import MyNav from '../../Componants/Navbar/Nav';
import Footer from '../../Componants/Footer/Footer'
import { CDBBreadcrumb, CDBIcon, CDBContainer } from "cdbreact";
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdArticle } from 'react-icons/md'
import { printVacationReport } from "../../Componants/rtk/slices/employeeSlice";
import Swal from 'sweetalert2'
import { fetchVacations } from "../../Componants/rtk/slices/vacationSlice";

function Vacation() {

    const printReports = () => {
        dispatch(printVacationReport())
          .unwrap()
          .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'The report has been generated',
                text: 'The report has been generated',
              })
          })
          .catch(() => {
            Swal.fire({
              icon: 'error',
              title: 'something wrong',
              text: 'Not Print',
            })
    
          })
        }

    const vacations = useSelector((state) => state.vacation);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchVacations());
    }, [])

    if (vacations) {

        try {

            var view = vacations.data.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.employee.name}</td>
                        <td>{data.employee.department.name}</td>
                        <td>{data.vacationType.name}</td>
                        <td>{data.numberOfDays}</td>
                        <td>{data.daysLeft}</td>
                        <td>
                            <MdArticle data-id={data.id} /> -
                            <FaEdit data-id={data.id} /> -
                            <MdDelete data-id={data.id} /></td>
                    </tr>
                )
            })
        } catch (error) {
            console.log(error)
        }

    }

    return (



        <>
            <MyNav />

            <div className="pageHeaderBreadcrumb">
                <h2>Vacation</h2>
                <div className="itemInBreadcrumb">
                    <CDBContainer>
                        <CDBBreadcrumb color="none" className="align-items-center">
                            <li className="breadcrumb-item" ><Link className="p-0" to="/">Home</Link></li>
                            <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
                            <li className="breadcrumb-item active">Vacation</li>
                        </CDBBreadcrumb>
                    </CDBContainer>
                </div>
            </div>

            <Container className="employees">
            <Button as={Link} to={'/Vacation/createBlance'} className="addEmpbtn">Add Vacation Balance</Button>
            <Button as={Link} to={'/Vacation/createEmpVac'} className="addEmpbtn">Create Employee Vacation</Button>
                <Button onClick={printReports} variant="success">Print Vacations Report</Button>
                <Table striped bordered hover className="employeeTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>vacation Type</th>
                            <th>Number Of Days</th>
                            <th>Days Left</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            view
                                ? view
                                : <tr></tr>
                        }
                    </tbody>
                </Table>

            </Container>

            <Footer />

        </>
    )
}

export default Vacation