import itemsSilce from "./itemsSlice";
import {configureStore} from "@reduxjs/toolkit"
const myntrastore=configureStore({
    reducer:{
     items:itemsSilce.reducer
    }
})
export default myntrastore;