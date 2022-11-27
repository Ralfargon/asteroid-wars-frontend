import reactLogo from '../../assets/react.svg'
import './SignIn.css'
import { useDispatch, useSelector } from 'react-redux'
import { signInEmail, signInPassword, selectSignIn } from '../../store';
import { Outlet, Link } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const signInState = useSelector(selectSignIn);

  return (
    <div>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Asteroid Wars</h1>

      <div className='erros'>
        {signInState.erros.email == "" ? "" : <p className='texterros'>{signInState.erros.email}</p>}
        {signInState.erros.password == "" ? "" : <p className='texterros'>{signInState.erros.password}</p>}
      </div>

      <div>
        <form className="signInForm" onSubmit={(e) => {
          e.preventDefault();
          if (signInState.email != "" && signInState.password != "") {
            let responseApiSignIn = `{email: ${signInState.email}, password: ${signInState.password}`;

            console.log(responseApiSignIn)
          }
          return false
        }}>

          <div className='inputSpan'>
            <div>
              <div>
                <span>
                  E-mail:
                </span>
              </div>
              <div>
                <span>
                  Password:
                </span>
              </div>
            </div>
          </div>

          <div className='inputArea'>
            <div>
              <input type="text" name="email" onChange={(e) => dispatch(signInEmail(e.target.value))} />
            </div>
            <div>
              <input type="text" name="password" onChange={(e) => dispatch(signInPassword(e.target.value))} />
            </div>
          </div>

          <div className="signInAccount">
            <button>
              Sign In
            </button>
          </div>
        </form>
      </div>

      <p>
        Don't have an account? <Link to="/">Sign Up here</Link>
      </p>
    </div>
  )
}

export default SignIn
