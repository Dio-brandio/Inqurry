import jwt from 'jsonwebtoken'
export default async function checkCookie(token,role){
    try{
        const puretoken = token.split("authtoken")[1].split("=")[1]
        if (puretoken!=null || puretoken !=undefined || puretoken.length<1) {
            const verify =  jwt.verify(puretoken,process.env.JWT_SECRET)
            if (verify.role==role) {
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
    catch(err){
        return false
    }
}