import { propertyAction } from "./property-slice.js";
import { axiosInstance } from "../../utils/axios.js";

export const getAllProperties = () => async (dispatch, getState) => {
    try {
        console.log("API call started");
        dispatch(propertyAction.getRequest());

        // Fix: Access state.properties (matching your store.js reducer key)
        const { searchParams } = getState().properties; 
        console.log("Search params:", searchParams);

        const response = await axiosInstance.get('/v1/rent/listing', {
            params: { ...searchParams }
        });

        if (!response) {
            throw new Error("Could not fetch any properties");
        }   

        const { data } = response;
        console.log("API response data:", data);
        dispatch(propertyAction.getProperties(data));
    } catch (error) {
        console.error("Error fetching properties:", error.message);
        dispatch(propertyAction.getErrors(error.message));
    }
};