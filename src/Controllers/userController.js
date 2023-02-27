const userRegisterModel = require("../Models/userRegisterModel")
const {isValid,isValidCharRegex,isValidPasswordRegex,isValidEmailRegex} = require("../Validator/validator")

const userRegister = async (req, res)=>{

    const data  = req.body

    // Check body containt Any field or not
    if(Object.keys(data).length == 0) return res.status(400).send({status : false , msg : "Please Provide data"})

    let {fname , lname , email , gender , password} =  data

    if(!isValid(fname)) return res.status(400).send({status : false , msg : "fname is mandatory"})
    if(!isValidCharRegex(fname)) return res.status(400).send({status : false , msg : "fname must be conatant character only"})

    if(!isValid(lname)) return res.status(400).send({status : false , msg : "fname is mandatory"})
    if(!isValidCharRegex(lname)) return res.status(400).send({status : false , msg : "fname must be conatant character only"})

    if(!isValid(email)) return res.status(400).send({status : false , msg : "Email is mandatory"})
    if(!isValidEmailRegex(email)) return res.status(400).send({status : false , msg : "Emaiul is Invalid"})

    const isAlreadyEmail = userRegisterModel.findOne({email : email})

    if(!isAlreadyEmail) return res.status(409).send({status : false , msg : "Email is Already Exist"})

    if(isValid(password)) return res.status(400).send({status : false , msg : "Password is Mandatory"})
    if(!isValidPasswordRegex(password)) return res.status(400).send({status : false , msg : "Password must be 8 character"})

}