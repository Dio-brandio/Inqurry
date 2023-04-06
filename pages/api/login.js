import jwt  from "jsonwebtoken"
const query = require('./dbconnect')
export default async function handler(req, res) {
   
    if (req.method!=='POST' || !req.body) {
        return res.status(403).json({ message: 'Bad request',ok:false })
    }
    try {
        const { email,  password } = req.body

        const res =await query(`select * from users where email=${email.toString()} and password=${password.toString()}`)
        if (res.length==0) {
            return res.status(403).json({ message: 'Invalid credentials',ok:false })
        }
        else{
            const token =await jwt.sign({
                uid: res[0].id,
                email: res[0].email,
                role: res[0].role,
                branchid:res[0].branchid
            },process.env.JWT_SECRET)
            return res.status(200).json({ message: 'Successful',token:token,ok:true })
        }
        // }else{
        //     return res.status(403).json({ message: 'Invalid credentials',ok:false })
        // }
        
    } catch (error) {
        return res.status(500).json({ message: 'server error',ok:false })
    }
    
  }
  