import { createSlice, configureStore } from '@reduxjs/toolkit'

type AppState = {
    signup: {
        name: string,
        email: string,
        password: string
        erros: {
            name: string,
            email: string,
            password: string
        }
    }
};

function initialState(): AppState {
    return {
        signup: {
            name: "",
            email: "",
            password: "",
            erros: {
                name: "",
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
            
            if (/\d/.test(state.signup.name)){
                state.signup.erros.name = "Invalid name";
            } else {
                state.signup.erros.name = "";
            }

            
        }
    }

});

export const selectSignUp = (state: AppState) => state.signup;

export const store = configureStore({
    reducer: counterSlice.reducer
})

export const { signUpNameChange } = counterSlice.actions


