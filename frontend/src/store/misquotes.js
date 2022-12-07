import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config.js'

const misquotesSlice = createSlice({
    name: "misquotes",
    initialState: [],
    reducers: {
        setAllMisquotes: (misquotes, action) => action.payload
    }
})

export const {setAllMisquotes} = misquotesSlice.actions

export default misquotesSlice.reducer

export function fetchAllMisquotes () {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/misquote')
        dispatch(setAllMisquotes(data))
    }
}