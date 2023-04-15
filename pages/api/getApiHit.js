const query = require('./dbconnect')
export default async function handler(req, res) {

    const api_key =req.headers.api_key.toString()
    
    if (req.method !== 'GET'|| api_key==null ||api_key==undefined || api_key.length<1 ||
     api_key.includes(" ")) {
        return res.status(403).json({ message: 'Bad request', ok: false })
    }
    try {
        const isVerified = await query(`call checkApiKeyAndHit('${api_key.toString()}')`)
        console.log( isVerified.length);
        if ( isVerified.length==1) {
            return res.status(200).json({ users: isVerified, ok: true })
        }
        else{
            return res.status(200).json({ users: isVerified, ok: false })
        }


    } catch (error) {
        return res.status(500).json({ message: error.message, ok: false })
    }

}
