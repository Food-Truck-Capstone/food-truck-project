import { createSlice } from '@reduxjs/toolkit'
import { httpConfig} from "../utils/http-config.js"

const truckSlice = createSlice({
    name: "truck",
    initialState: [],
    reducers: {
        setAllTruck: (truck, action ) => action.payload
    }
})

export const {setAllTruck} = truckSlice.actions

export default truckSlice.reducer

export function fetchAllTruck () {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/truck')
        dispatch(setAllTruck(data))
    }
}