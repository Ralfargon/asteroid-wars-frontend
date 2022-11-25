import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { signUpNameChange, selectSignUp } from './store';


function App() {
  const dispatch = useDispatch();
  const signUpState = useSelector(selectSignUp);


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Asteroid Wars</h1>
      <div className="cardcreate">
        <form className="createform" onSubmit={(e) => {
          e.preventDefault();
          if(signUpState.erros.name != ""){
            console.log(signUpState.erros.name)
          }

          return false
        }}>
          <div className="inputCreateForm">
            <label>
              <span className="spanCreateForm">
              Name:
              </span>
              <input type="text" name="name" onChange={(e) => dispatch(signUpNameChange(e.target.value))}/>
            </label>
          </div>
          {signUpState.erros.name == "" ? "" : <div>{signUpState.erros.name}</div>}
          <div className="inputCreateForm">
            <label>
              <span className="spanCreateForm">
              E-mail:
              </span>
              <input type="text" name="email" />
            </label>
          </div>
          <div className="inputCreateForm">
            <label>
              <span className="spanCreateForm">
                Password:
              </span>
              <input type="text" name="password" />
            </label>
          </div>

          <div>
            <button>
              Create Account
            </button>
          </div>

        </form>
      </div>
      <div className="card">
        <button >
          Sign In
        </button>
      </div>
      <p className="read-the-docs">
        Click on Create Account or Sign In
      </p>
    </div>
  )
}

export default App
