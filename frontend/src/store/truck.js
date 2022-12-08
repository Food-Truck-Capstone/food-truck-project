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
export function fetchTrucksByOwnerId () {
    return async function (dispatch, getState) {
        const auth = getState().auth
        if (auth?.ownerId !== undefined) {
            const {data} = await httpConfig(`/apis/truck/truckOwnerId/${auth.ownerId}`)

            dispatch(setAllTruck(data))
        }
    }
}