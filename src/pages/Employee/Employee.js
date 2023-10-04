import React, { useEffect, useState } from "react";
import './Employee.css'
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { Container, Form, Modal, Table } from "react-bootstrap";
import MyNav from '../../Componants/Navbar/Nav';
import Footer from '../../Componants/Footer/Footer'
import { CDBBreadcrumb, CDBIcon, CDBContainer } from "cdbreact";
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'
import { MdDelete, MdArticle } from 'react-icons/md'
import { fetchEmployees, printReport } from "../../Componants/rtk/slices/employeeSlice";
import Swal from 'sweetalert2'

function Employee() {

    const printReports = () => {
        dispatch(printReport())
          .unwrap()
          .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'The report has been generated',
                text: 'The report has been generated',
              })
              dispatch(fetchEmployees());
          })
          .catch((d) => {
            Swal.fire({
              icon: 'error',
              title: 'something wrong',
              text: 'Not Print',
            })
    
          })
        }

    const employees = useSelector((state) => state.employee);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEmployees());
    }, [])

    if (employees) {

        try {

            var view = employees.data.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.department.name}</td>
                        <td>{data.jobTitle}</td>
                        <td>{data.salary}</td>
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
                <h2>Employee</h2>
                <div className="itemInBreadcrumb">
                    <CDBContainer>
                        <CDBBreadcrumb color="none" className="align-items-center">
                            <li className="breadcrumb-item" ><Link className="p-0" to="/">Home</Link></li>
                            <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
                            <li className="breadcrumb-item active">Employee</li>
                        </CDBBreadcrumb>
                    </CDBContainer>
                </div>
            </div>

            <Container className="employees">
            <Button as={Link} to={'/Employees/create'} className="addEmpbtn">Add Employee</Button>
                <Button onClick={printReports} variant="success">Print Employees Report</Button>
                <Table striped bordered hover className="employeeTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Jobe Title</th>
                            <th>Salary</th>
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

export default Employee