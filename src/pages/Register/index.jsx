import { Button, TextField, Typography } from "@mui/material";
import Classes from './register.module.scss'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "./actions";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const RegisterPage = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.registerReducer);
    

    useEffect(() => {
        if (loading === false && error === '') {
            navigate('/login'); // Redirect hanya ketika loading selesai dan tidak ada error
          }
    }, [loading, error, navigate]);

    const handleRegister = async (event) => {
        event.preventDefault();
        if (!fullName || !email || password.length < 6) {
            // Error handling for client-side validation
            return;
        }

        dispatch(registerRequest({ fullName, email, password }));
    };

    return (
        <div className={Classes.registercontainer}>
            <Typography variant="h6">Register</Typography>
            <form onSubmit={handleRegister} noValidate>
                <TextField
                    label="Full Name"
                    type="text"
                    required
                    fullWidth
                    margin="normal"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <TextField
                    label="Email"
                    type="email"
                    required
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </Button>
                <Typography sx={{ textAlign: 'center', marginTop: 2 }}>Have an account? <Link to={'/login'}>Klik Here</Link></Typography>
                {error && <Typography color="error" sx={{ textAlign: 'center' }}>{error}</Typography>}
            </form>
        </div>
    );
}

export default RegisterPage;