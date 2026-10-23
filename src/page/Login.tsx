import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

type FormValues = {
    email: string;
    password: string
}

const onFinish = (values: FormValues) => {

};

const Login = () => {
    return (
        <div className="auth-bg">
            <div className="auth-container">
                <h3>Login</h3>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        label="Email"
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
                        rules={[
                            { required: true, message: "Please enter your password" },
                        ]}
                    >
                        <Input.Password required placeholder="Please enter your password" />
                    </Form.Item>

                    <Button className="auth-btn" type="primary" htmlType="submit" block>
                        Login
                    </Button>

                    <p>Don't have account? <Link to="/register">Register now</Link></p>
                </Form>
            </div>
        </div>
    )
}

export default Login;