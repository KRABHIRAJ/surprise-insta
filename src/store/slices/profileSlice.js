import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    profileData:{},
    errorMsg: ""
}

const profileSlice = createSlice({
    name:'profile',
    initialState,
    reducers: {
        setProfileData: (state, action) => {
            state.profileData = {...action.payload};
        },
        setErrorMsg: (state, action) => {
            state.errorMsg = action.payload;
        }
    }
})

export const { setProfileData, setErrorMsg } = profileSlice.actions;
export default profileSlice.reducer;