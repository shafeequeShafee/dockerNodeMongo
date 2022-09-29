const express = require('express')
const routerEmployee = express.Router()

const {
    getEmployeesDetails,
    getEmployeeDetailsById,
    postEmployeeDetails
}=require("../controller/controller")

routerEmployee.get('/',(req,res)=>{
    res.send('hello sfq')
})
routerEmployee.get('/getEmployeesDetails', getEmployeesDetails)

routerEmployee.get('/getEmployeeDetailsById/:id',getEmployeeDetailsById)

routerEmployee.post('/postEmployeeDetails', postEmployeeDetails)


module.exports = routerEmployee