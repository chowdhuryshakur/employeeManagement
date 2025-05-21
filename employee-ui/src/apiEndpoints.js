const DNS = 'http://localhost:5001'

const loginEndpoint = `${DNS}/api/auth/login`

const allEmployeesEndpoint = `${DNS}/api/employee`
const subordinateEmployeesEndpoint = `${DNS}/api/employee/subordinateEmployees`

export { loginEndpoint, allEmployeesEndpoint, subordinateEmployeesEndpoint }