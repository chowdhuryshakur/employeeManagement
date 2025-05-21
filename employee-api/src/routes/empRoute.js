import { allEmployees, getSubordinateEmployees } from "../controllers/employeeController.js";
import express from 'express'
import { authenticate } from "../middlewares/authMiddleware.js";
const router = express.Router()

router.get('/', authenticate, allEmployees)
router.get('/subordinateEmployees/:id', getSubordinateEmployees)

export default router