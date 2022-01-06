import React, { useState } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { toast } from "react-toastify";

const MakeAdmin = () => {
    const [email, setEmail] = useState({});
    // const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    };

    const handleMakeAdmin = (e) => {
        const user = { email };
        e.preventDefault();
        fetch('https://desolate-beyond-60013.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success(`Admin added successfully`, {
                        position: "bottom-left",
                        autoClose: 2000,
                    });
                }
                else {

                }
                e.target.reset();
            });
    };



    /* const handleMakeAdmin = e => {
        e.preventDefault();

        const user = { email };

        const confirmAffirmation = window.confirm(`Do you want to add "${email}" as admin?`);

        if (confirmAffirmation) {
            fetch('', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(result => {
                    if (DataTransfer.modifiedCount) {
                        alert(`"${email} already added as admin.`);
                        setSuccess(true);
                    }
                    else {
                        alert(`No user exists in database with "${email}".`);
                    }
                })
        }
    }; */

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Add New Admin</h3>
                </div>

                <Form onSubmit={handleMakeAdmin}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            onBlur={handleOnBlur}
                            style={{ maxWidth: '570px', margin: 'auto 0' }}
                            type="email"
                            placeholder="Enter Email" />
                    </Form.Group>

                    <Button
                        type="submit"
                        variant="dark"
                    >
                        Add Admin
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default MakeAdmin;