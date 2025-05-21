import bcrypt from 'bcrypt'
import { pool } from '../config/dbConfig.js'
import { generateToken } from '../middlewares/authMiddleware.js'

const comparePassword = async (email, password) => {
  const { rows } = await pool.query('SELECT * FROM employee WHERE email = $1', [email])
  const employee = rows[0]
  if ( !employee ) return false
  return bcrypt.compare(password, employee?.password_hash)
}

const loginController = async (req, res) => {
  try {
    const {email, password} = req.body
    const isValid = await comparePassword(email, password)

    if (!isValid) {
      res.status(401).json({ error: 'Invalid credentials.' })
    }

    const {rows} = await pool.query('SELECT * FROM employee WHERE email = $1', [email])
    const employee = rows[0]
    const token = generateToken(employee.id)

    const {employee_name, designation, manager_id, created_at, updated_at } = employee
    res.status(200).json({employee_name, email, designation, manager_id, created_at, updated_at, token })
   } catch {error => {
      res.status(400).json({ error: error.message })
  }}
}

export { loginController }
