import React, { Component } from 'react';
import { Container, Column, Row, Img, Input, Button } from './Style';
//import Grid from 'styled-components-grid';

const url = "https://static-cdn.jtvnw.net/jtv_user_pictures/8f024bc0-1def-4a70-86c6-69360a2280b9-profile_image-300x300.png";
class RegisterFormPopUp extends Component {
    render() {
        return (
            <Container ContainerSize="45">
                <Row RowSize="350">
                    <label>Login</label>
                    <Column ColumnSize="100"><Input type="text" name="login" placeholder="Login" required /></Column>
                </Row><br />
                <Row RowSize="350">
                    <label>Password</label>
                    <Column ColumnSize="100"><Input type="password" name="password" placeholder="Password" required /></Column>
                </Row><br />
                <Row RowSize="350">
                    <label>Confirm Password</label>
                    <Column ColumnSize="100"><Input type="password" name="password" placeholder="Confirm Password" required /></Column>
                </Row><br />
                <Row RowSize="350">
                    <label>Email</label>
                    <Column ColumnSize="100"><Input type="email" name="email" placeholder="Email" required /></Column>
                </Row><br />
                <Row RowSize="350">
                    <Button>Reset</Button>
                    <Button>Register</Button>
                </Row>
            </Container>
        )
    }
}
export default RegisterFormPopUp;