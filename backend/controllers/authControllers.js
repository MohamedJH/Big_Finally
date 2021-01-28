

const register= async (req, res)=>{

    const {username,firstName,lastName,fullAdderess:{address,country,state,zip},email,password} = req.body

    try {
        res.send({user:{username,firstName,lastName,fullAdderess:{address,country,state,zip},email,password}})
    } catch (error) {
        
    }
}









module.exports = {
    register
}