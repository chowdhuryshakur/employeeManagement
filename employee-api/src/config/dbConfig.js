import pkg from 'pg'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
const saltRounds = 10;
 
const { Pool } = pkg
dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

pool.on("connect", () => console.log("Database Connected Successfully!"))


async function dbInitializer() {
    try {
        const client = await pool.connect();
        
        // Create employee table if not exists
        await client.query(`
            CREATE TABLE IF NOT EXISTS employee (
                id SERIAL PRIMARY KEY,
                employee_name VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                password_hash VARCHAR(100) NOT NULL,
                designation VARCHAR(100) NOT NULL,
                manager_id BIGINT,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Check if table already has data
        const { rows } = await client.query('SELECT COUNT(*) FROM employee');
        const rowCount = parseInt(rows[0].count, 10);

        if (rowCount === 0) {
            const hashedPassword = await bcrypt.hash('Pass@123', saltRounds)
            await client.query(`
                INSERT INTO employee (employee_name, email, password_hash, designation, manager_id)
                VALUES 
                    ('John Doe', 'john.doe@company.com', $1, 'CEO', NULL),
                    ('Jane Smith', 'jane.smith@company.com', $1, 'CTO', 1),
                    ('Mike Johnson', 'mike.johnson@company.com', $1, 'Engineering Manager', 2),
                    ('Sarah Williams', 'sarah.williams@company.com', $1, 'Senior Developer', 3),
                    ('David Brown', 'david.brown@company.com', $1, 'Junior Developer', 3),
                    ('Emily Davis', 'emily.davis@company.com', $1, 'HR Manager', 1)
            `, [hashedPassword]);

            console.log("Initial employee data inserted successfully!");
        }

        console.log("Database initialized successfully!");
        client.release();
    } catch (error) {
        console.error("Error initializing database:", error);
        throw error;
    }
}

export {pool, dbInitializer}