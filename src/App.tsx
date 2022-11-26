import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { signUpNameChange, selectSignUp, signUpSurnameChange, signUpEmailChange, signUpPasswordChange } from './store';


function App() {
  const dispatch = useDispatch();
  const signUpState = useSelector(selectSignUp);

  return (
    <div>
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Asteroid Wars</h1>

      <div className='erros'>
        {signUpState.erros.name == "" ? "" : <p className='texterros'>{signUpState.erros.name}</p>}
        {signUpState.erros.surname == "" ? "" : <p className='texterros'>{signUpState.erros.surname}</p>}
        {signUpState.erros.email == "" ? "" : <p className='texterros'>{signUpState.erros.email}</p>}
        {signUpState.erros.password == "" ? "" : <p className='texterros'>{signUpState.erros.password}</p>}
      </div>

      <div>
        <form className="signUpForm" onSubmit={(e) => {
          e.preventDefault();
          if (signUpState.erros.name != "") {
            console.log(signUpState.erros.name)
          }
          return false
        }}>

          <div className='inputSpan'>
            <div>
              <span>
                Name:
              </span>
            </div>
            <div>
              <span>
                Surname:
              </span>
            </div>
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

          <div className='inputArea'>
            <div>
              <input type="text" name="name" onChange={(e) => dispatch(signUpNameChange(e.target.value))} />
            </div>
            <div>
              <input type="text" name="surname" onChange={(e) => dispatch(signUpSurnameChange(e.target.value))}/>
            </div>
            <div>
              <input type="text" name="email" onChange={(e) => dispatch(signUpEmailChange(e.target.value))}/>
            </div>
            <div>
              <input type="text" name="password" onChange={(e) => dispatch(signUpPasswordChange(e.target.value))}/>
            </div>
          </div>

          <div className="signUpAccount">
            <button>
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <p>
        Already has an account? <a href='#'>Sign In here!</a>
      </p>
    </div>
  )
}

export default App
