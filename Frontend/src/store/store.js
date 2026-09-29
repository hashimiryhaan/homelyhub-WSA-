import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "./Property/property-slice";
import propertDetailsSlice from "./PropertyDetails/propertyDetails-slice";
import userSlice from "./User/user-slice";
export const store=configureStore({
    reducer:{
        properties:propertySlice.reducer,
        propertydetails:propertDetailsSlice.reducer,
        user:userSlice.reducer
    }
});
export default store;