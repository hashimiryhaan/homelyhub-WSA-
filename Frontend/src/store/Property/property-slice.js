import {createSlice} from "@reduxjs/toolkit";

const propertySlice=createSlice({
    name:"property",
    initialState:{
        properties:[],
        totalProperties:0,
        searchParams:{},
        error:null,
        loading:false
    },
    reducers:{
        getRequest(state){
            state.loading=true;
        },
        // Inside your property slice reducers:
    getProperties: (state, action) => {
    state.loading = false;
    state.properties = action.payload.data;           // Maps the array of 12 items
    state.totalProperties = action.payload.no_of_responses; // Maps total count for pagination
},
        updateSearchParams:(state,action)=>{
            state.searchParams=Object.keys(action.payload).length===0 ?{}:{
                ...state.searchParams,
                ...action.payload
            }
        },
        getErrors(state,action){
            state.error=action.payload
        }
    }
})
export const propertyAction=propertySlice.actions
export default propertySlice;