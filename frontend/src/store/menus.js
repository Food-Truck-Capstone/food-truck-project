import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config";

const menuSlice = createSlice({
    name: "menus",
    initialState: {},
    reducers: {

        addMenus: (menus, action) => {
            menus[action.payload.menuTruckId] = action.payload.data
        },
    }
})

export const {addMenus} = menuSlice.actions

// export const fetchMenusByTruckId = (menuTruckId) => async (dispatch) => {
//     const {data} =  await httpConfig.get(`/apis/menu/menuTruckId/${menuTruckId}`);
//     const payload = {menuTruckId, data}
//     dispatch(addMenus(payload));
// };
export function fetchAllMenus () {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/menu')
        let dataObject = {}
        for (let menu of data) {
         if    (dataObject[menu.menuTruckId]){
             dataObject[menu.menuTruckId].push(menu)
         } else {dataObject[menu.menuTruckId]=[menu]}
        }
        for (let menu in dataObject) {
            dispatch (addMenus({menuTruckId: menu, data:dataObject[menu]}))
        }
    }
}

export default menuSlice.reducer