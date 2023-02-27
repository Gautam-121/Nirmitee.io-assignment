const isValid = (value)=>{
    if(!value) return false
    if(typeof value !== "string" || value.trim().length === 0) return false;
    return true   
}                        

const isValidCharRegex = (value)=>{   
    return (/^[A-Za-z'\s]{1,}[A-Za-z\s]{0,}$/.test(value))
}

const isValidPasswordRegex = (value)=>{
    return (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,15}$/.test(value))
}

const isValidEmailRegex = (value)=>{
    return (/^([a-z0-9\._]+){3,}@([a-zA-Z0-9])+.([a-z]){2,6}(.[a-z]+)?$/.test(value))
}



module.exports = {isValid,isValidCharRegex,isValidPasswordRegex,isValidEmailRegex}

