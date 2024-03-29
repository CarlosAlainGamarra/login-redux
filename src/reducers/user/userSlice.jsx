import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: 'visitor',
  password: '',
  logged: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.email = action.payload.email,
        state.password = action.payload.password
        state.logged = action.payload.logged
    },
  },
})


export const { setUser } = userSlice.actions

export default userSlice.reducer