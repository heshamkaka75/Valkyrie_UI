import React, { useEffect, useState } from "react";
import './Employee.css'
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { Col, Container, Form, Table } from "react-bootstrap";
import MyNav from '../../Componants/Navbar/Nav';
import Footer from '../../Componants/Footer/Footer'
import { CDBBreadcrumb, CDBIcon, CDBContainer } from "cdbreact";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { fetchEmployeesForm } from "../../Componants/rtk/slices/formDataSlice";
import { createEmp } from "../../Componants/rtk/slices/employeeSlice";

function CreateEmployee() {

    const [name, setname] = useState('');
    const [departmentId, setdep] = useState('');
    const [genderId, setgender] = useState('');
    const [motherName, setmother] = useState('');
    const [nationalID, setnational] = useState('');
    const [phoneNo, setphone] = useState('');
    const [jobTitle, settitle] = useState('');
    const [salary, setsal] = useState('');

    const formDatas = useSelector((state) => state.formData);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEmployeesForm());
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEmp({ name, departmentId, genderId, motherName, nationalID, phoneNo, jobTitle, salary }))
            .unwrap()
            .then((res) => {
                if (res) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Create Success',
                        text: 'Create Success',
                    })
                }

            })
            .catch(() => {
            })
    }

    if (formDatas) {
        try {
            var depView = formDatas.data.depNames.map((data) => {
                return (
                    <option key={data.dId} value={data.dId} >{data.dName}</option>
                )
            })

            var genderView = formDatas.data.genderNames.map((data) => {
                return (
                    <option key={data.gId} value={data.gId} >{data.gName}</option>
                )
            })
        } catch (error) {

        }
    }

    return (

        <>
            <MyNav />

            <div className="pageHeaderBreadcrumb">
                <h2>Create Employee</h2>
                <div className="itemInBreadcrumb">
                    <CDBContainer>
                        <CDBBreadcrumb color="none" className="align-items-center">
                            <li className="breadcrumb-item" ><Link className="p-0" to="/">Home</Link></li>
                            <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
                            <li className="breadcrumb-item"><Link className="p-0" to="/Employees">Employee</Link></li>
                            <CDBIcon className="mx-2 text-muted" fas icon="angle-double-right" />
                            <li className="breadcrumb-item active">Create Employee</li>
                        </CDBBreadcrumb>
                    </CDBContainer>
                </div>
            </div>

            <Container className="employees">
                <div className="hrForm">
                    <Form>

                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setname(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Select value={departmentId} onChange={(e) => setdep(e.target.value)}>
                                <option >Select</option>
                                {
                                    formDatas
                                        ? depView
                                        : <option >Select</option>
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select value={genderId} onChange={(e) => setgender(e.target.value)}>
                                <option >Select</option>
                                {
                                    formDatas
                                        ? genderView
                                        : <option >Select</option>
                                }
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Mother Name</Form.Label>
                            <Form.Control type="text" value={motherName} onChange={(e) => setmother(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>National ID</Form.Label>
                            <Form.Control type="text" value={nationalID} onChange={(e) => setnational(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" value={phoneNo} onChange={(e) => setphone(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" value={jobTitle} onChange={(e) => settitle(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Salary</Form.Label>
                            <Form.Control type="text" value={salary} onChange={(e) => setsal(e.target.value)} />
                        </Form.Group>

                        <Button variant="success" type="submit" onClick={handleSubmit}>Create</Button>

                    </Form>
                </div>

            </Container>

            <Footer />

        </>
    )
}

export default CreateEmployee