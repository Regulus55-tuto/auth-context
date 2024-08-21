import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useAuth} from "../context/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = useAuth()

    const submitHandler = (e) => {
        e.preventDefault();

        const userInput = {
            email,
            password
        }
        auth.loginAction(userInput)
        return
    }

    return (
        <Container>
            <Row>
                <Col className='mt-5'>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>이메일</Form.Label>
                            <Form.Control type="email" placeholder="이메일을 입력하세요" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Text className="text-muted">
                                영문, 숫자, 기호 포함 8자
                            </Form.Text>
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            로그인
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;