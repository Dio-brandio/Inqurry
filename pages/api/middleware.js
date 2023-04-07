import jwt from 'jsonwebtoken'
export async function checkCookie(token,role){
    try{
     
        if (token!=null || token !=undefined || token.length<1) {
            const verify =  jwt.verify(token,process.env.JWT_SECRET)
            if (verify.role==role) {
                return {
                    verified:true,
                    data:verify
                }
            }else{
                return {
                    verified:false,
                    data:''
                }
            }
        }else{
            return {
                verified:false,
                data:''
            }
        }
    }
    catch(err){
        return {
            verified:false,
            data:err.message
        }
    }
}

export function splitToken(header){
    return header.split("authtoken=")[1]
}