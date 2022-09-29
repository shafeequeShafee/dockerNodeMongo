


const Employee = require("../model/employee")

const getEmployeesDetails=async(req,res)=>{
    
    try{
       const employess = await Employee.find()
       res.json(employess)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }  
}

const getEmployeeDetailsById=async(req,res)=>{
    
    try{
       const employee = await Employee.findById(req.params.id)
       res.json(employee)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }  
}

const postEmployeeDetails=async(req,res)=>{

    const employee =new Employee({
        name: req.body.name,
        language: req.body.language,
        experience:req.body.experience,
        teamLead:req.body.teamLead
    })
    try{
        const a2= await employee.save()
        res.json(a2)
    }
    catch (error) {
        console.error(error);
        res.render("400");
    }
}





module.exports ={
    getEmployeesDetails,
    getEmployeeDetailsById,
    postEmployeeDetails

   
}
