import { pool } from '../config/dbConfig.js'

const allEmployees = async (req, res) => {
   try {
    const {rows} = await pool.query('SELECT * FROM employee')
    if (rows.length > 1) {
        res.status(200).json(rows)
    }
   } catch {err => {
        res.status(500).json({ error: err.message })
   }}
}

const getSubordinateEmployees = async (req, res) => {
    
   const employeeId = parseInt(req.params.id)
    
   try {
    const {rows} = await pool.query(`
        WITH RECURSIVE subordinates AS (
            SELECT id, employee_name, email, designation, manager_id
            FROM employee
            WHERE id = $1
            
            UNION
            
            SELECT e.id, e.employee_name, e.email, e.designation, e.manager_id
            FROM employee e
            INNER JOIN subordinates s ON e.manager_id = s.id
        )
        SELECT * FROM subordinates WHERE id != $1;
    `, [employeeId])

    res.status(200).json(rows)
   } catch {err => {
        res.status(500).json({ error: err.message })
   }}
}

export { allEmployees, getSubordinateEmployees }