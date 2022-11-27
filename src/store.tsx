import { createSlice, configureStore } from '@reduxjs/toolkit'

type AppState = {
    signup: {
        name: string,
        surname: string,
        email: string,
        password: string
        erros: {
            name: string,
            surname: string,
            email: string,
            password: string
        }
    }
};

function initialState(): AppState {
    return {
        signup: {
            name: "",
            surname: "",
            email: "",
            password: "",
            erros: {
                name: "",
                surname: "",
                email: "",
                password: ""
            }
        }
    }
};

const counterSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        signUpNameChange: (state, param) => {
            state.signup.name = param.payload;
            
            if (/[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(state.signup.name)){
                state.signup.erros.name = "Invalid name";
            } else {
                state.signup.erros.name = "";
            }
        },

        signUpSurnameChange: (state, param) => {
            state.signup.surname = param.payload;
            
            if (/[\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(state.signup.surname)){
                state.signup.erros.surname = "Invalid Surname";
            } else {
                state.signup.erros.surname = "";
            }
        },

        signUpEmailChange: (state, param) => {
            state.signup.email = param.payload;

                if (state.signup.email == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state.signup.email)){
                    state.signup.erros.email = "";
                } else {
                    state.signup.erros.email = "Invalid e-mail";
                }
        },

        signUpPasswordChange: (state, param) => {
            state.signup.password = param.payload;

            if (state.signup.password == "" || /.{2}/.test(state.signup.password)){
                state.signup.erros.password = "";
            } else {
                state.signup.erros.password = "Invalid password";
            }
        }
    }

});

export const selectSignUp = (state: AppState) => state.signup;

export const store = configureStore({
    reducer: counterSlice.reducer
})

export const { signUpNameChange, signUpSurnameChange, signUpEmailChange,  signUpPasswordChange} = counterSlice.actions


