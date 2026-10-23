import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

type FormValues = {
    name: string
    email: string;
    password: string
}

const onFinish = (values: FormValues) => {

};

const Register = () => {
    return (
        <div className="auth-bg">
            <div className="auth-container">
                <h3>Register</h3>
                <Form layout="vertical" onFinish={onFinish}>
                     <Form.Item
                        name="name"
                        label="Name"
                        hasFeedback
                        validateFirst
                        rules={[
                            { required: true, message: "Please enter your name" },
                        ]}
                    >
                        <Input required placeholder="Please enter your name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email"
                        hasFeedback
                        validateFirst
                        rules={[
                            { required: true, message: "Please enter your email" },
                            {
                                type: 'email',
                                message: 'Invalid email address',
                            }
                        ]}
                    >
                        <Input type="email" required placeholder="Please enter your email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        hasFeedback
                        validateFirst
                        rules={[
                            { required: true, message: "Please enter your password" },
                            {
                                min: 8,
                                message: 'Password at least 8 characters',
                            },
                        ]}
                    >
                        <Input.Password minLength={8} required placeholder="Please enter your password" />
                    </Form.Item>

                    <Button className="auth-btn" type="primary" htmlType="submit" block>
                        Register
                    </Button>

                    <p>Already have account? <Link to="/login">Login now</Link></p>
                </Form>
            </div>
        </div>
    )
}

export default Register;