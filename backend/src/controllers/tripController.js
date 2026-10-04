import {Property} from "../Models/propertyModel.js";
import {planTrip} from "../ai/tripPlanner.js";
import { generateDescription } from "../ai/generateDescription.js";
// BUG FIX: toLowercase() -> toLowerCase()
const cleanCity = (text) => text.toLowerCase().replaceAll(" ", "");

const createTripPlan = async (req, res) => {
    try {
        const { destination, budget, days, people, interests } = req.body;
        
        if (!destination || !budget || !days || !people) {
            return res.status(400).json({
                status: "fail",
                message: "please fill in destination, budget, days, and people"
            });
        }
        
        const plan = await planTrip({
            destination,
            budget,
            days,
            people,
            interests: interests || []
        });

        const perNight = Number(budget) / Number(days);
        const city = cleanCity(destination);
        
        const properties = await Property.find({
            $or: [
                { "address.city": city },
                { "address.state": city }, // BUG FIX: 'state' was undefined, changed to 'city'
                { "address.area": city }
            ],
            price: { $lte: perNight },
            maximumGuest: { $gte: Number(people) },
        }).limit(6);
        
        res.status(200).json({
            status: "success",
            data: { plan, properties, perNight }
        });
        
    } catch (error) {
        // ADD THIS CONSOLE.LOG:
        console.error("TRIP PLAN ERROR DETAILS:", error); 

        res.status(500).json({
            status: "fail",
            message: "Could not create a trip plan, please try again",
            error: error.message // Temporarily send it to the frontend too if you want
        });
    }
};
const writeDescription =async (req,res)=>{
    try{
    const description=await generateDescription(req.body);
        res.status(200).json({status:"success",data:{description}})
}catch(error){
    res.status(500).json({
        status:"fail",
        message:"Could not generate a description"
    })
}}
export { createTripPlan,writeDescription };