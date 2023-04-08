import jwt from 'jsonwebtoken'
export async function checkCookie(token,role){
    try{
     
        if (token && token!=null || token !=undefined || token.length>1 ) {
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
        }else if (!token) {
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
    if (header==null || header==undefined || header=='' || !header.includes('authtoken')) {
        return false
    }
    return header.split("authtoken=")[1]
}