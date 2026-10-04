import express from "express";
// 1. Import createProperty alongside your other controllers
import { getProperties, getProperty, createProperty } from "../controllers/propertyController.js";

// 2. Import your protect middleware (Adjust the path to match where your auth middleware actually is)
import { protect } from "../controllers/authController.js"; 

const propertyRouter = express.Router();

// 3. Chain the .post() method to the root route
propertyRouter.route("/")
    .get(getProperties)
    .post(protect, createProperty); // ✅ CORRECT: No brackets after 'protect'

propertyRouter.route("/:id").get(getProperty);

export { propertyRouter };