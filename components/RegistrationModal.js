import axios from 'axios';
import {useState} from 'react';
const submit = async () => {
axios.post('http://localhost:3000/api/auth/register',{  email,
password,
passwordconfirmation
}).then(response => {
  console.log(response);
});
}
  const registerUser = async (event) => {
    event.preventDefault()

    const res = await fetch(
      'http://localhost:3000/api/auth/register',
      {
        body: JSON.stringify({
          email: event.target.email.value,
          password:event.target.password.value,
          passwordconfirmation:event.target.passwordconfirmation.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
    console.log('user :',result)
  }

export default function RegistrationModal(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordconfirmation, setPasswordconfirmation] = useState('')

  return (
    <>
      <h2>Sign up</h2>
      <div className="form_box">
        <form onSubmit={registerUser}>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <input
            id="passwordconfirmation"
            type="password"
            placeholder="Enter password again"
            onChange={(event) => setPasswordconfirmation(event.target.value)}
          />
          <button>Sign up</button>
        </form>
        <p>
          Already have an account?{' '}
          <a href="#" onClick={() => props.showLogin()}>
            Log in
          </a>
        </p>

     </div>
    </>
  )
}