import { propertyDetailsAction } from "./propertyDetails-slice"; // Ensure spelling matches your slice export
import { axiosInstance } from "../../utils/axios";

export const getPropertyDetails = (id) => async (dispatch) => {
    try {
        dispatch(propertyDetailsAction.getListRequest());

        // FIX: Use backticks `` instead of single quotes '' so ${id} evaluates correctly
        const response = await axiosInstance(`/v1/rent/listing/${id}`);
        console.log(response);

        if (!response) {
            throw new Error("Could not fetch any propertyDetails");
        }

        const { data } = response.data;
        dispatch(propertyDetailsAction.getPropertyDetails(data));
    } catch (error) {
        dispatch(propertyDetailsAction.getErrors(error.response?.data?.error || error.message));
    }
};