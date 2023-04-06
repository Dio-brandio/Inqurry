import jwt from 'jsonwebtoken'
export default async function checkCookie(token){
    if (token!=null || token !=undefined || token.length>0) {
        const verify = await jwt.verify(token,process.env.JWT_SECRET)
        console.log(verify);
    }
}