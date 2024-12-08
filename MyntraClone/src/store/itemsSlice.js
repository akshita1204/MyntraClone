import { createSlice} from "@reduxjs/toolkit"
import { DEFAULTITEMS } from "../../data/items";


const itemsSilce=createSlice({
    name:"items",
    initialState:[DEFAULTITEMS
    ],

    reducers:{
        addInitialItems:(store,action)=>
        {
            return store;
        }
    }
})
export const itemsActions = itemsSilce.actions;

export default itemsSilce;

