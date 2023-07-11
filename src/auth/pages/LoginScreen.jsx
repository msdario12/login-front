import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { testApi } from '../../api/testApi';
import { useNavigate } from 'react-router';

export const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [status, setStatus] = useState('');

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validaciones
		// Mandar datos al backend
		try {
			const res = await testApi.post('/auth/login', {
				email,
				password,
			});
			console.log(res);
			setTimeout(() => navigate('/home'), 1500);
			setStatus(res.data.msg);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='container'>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='Enter email'
					/>
					<Form.Text className='text-muted'>
						ever share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			<p>{status}</p>
		</div>
	);
};
