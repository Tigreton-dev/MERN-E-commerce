import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
// import { useDispatch } from 'react-redux';

const Login = () => {
    const [validForm, setValidForm] = useState(false);
    // const dispatch = useDispatch();
    const [form, setForm] = useState({
        name: '',
        contry: '',
        address: '',
        zipCode: '',
        phone: '',
    });
    const submitHandler = e => {
        if (validForm) {
            e.preventDefault();
            // dispatch(shippingData(form));
            // submit();
        }
    };

    const validator = () => {
        const isValidName = form.name.length >= 8;
        const isValidAdress = form.address.length >= 8;
        const isValidZipCode = form.zipCode.length === 4;

        if (isValidName && isValidAdress && isValidZipCode) setValidForm(true);
    };

    const handlerForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        validator();
    };

    return (
        <div className="login-container">
            <h3>Sign in</h3>
            <Form className="shipping-container">
                <FormGroup>
                    <Label for="examplePassword">Your email</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter your email"
                        value={form.name}
                        onChange={handlerForm}
                        minLength="8"
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Your password</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter your password"
                        value={form.name}
                        onChange={handlerForm}
                        minLength="8"
                        required
                    />
                </FormGroup>
                <button onClick={e => submitHandler(e)} type="button">
                    LOGIN
                </button>
            </Form>
            <p className="login-forgot-passowrd">Forgot Password?</p>
        </div>
    );
};

export default Login;
