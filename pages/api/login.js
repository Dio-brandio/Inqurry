import jwt  from "jsonwebtoken"
export default async function handler(req, res) {
    if (req.method!=='POST' || !req.body) {
        return res.status(403).json({ message: 'Bad request',ok:false })
    }
    try {
        const { email,  password } = req.body
        if (email==='admin' && password==='123') {
            const token =  jwt.sign({
                email:email,
                role:"admin"
            },process.env.JWT_SECRET)

            return res.status(200).json({ message: 'Successful',token:token,ok:true })
        }else{
            return res.status(403).json({ message: 'Invalid credentials',ok:false })
        }
        
    } catch (error) {
        return res.status(500).json({ message: 'server error',ok:false })
    }
    
  }
  