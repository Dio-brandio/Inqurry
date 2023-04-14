import { splitToken, checkCookie } from "./middleware"
const query = require('./dbconnect')
export default async function handler(req, res) {

    const api_key =req.headers.api_key.toString()
    
    if (req.method !== 'GET'|| api_key==null ||api_key==undefined || api_key.length<1 || api_key.includes(" ")) {
        return res.status(403).json({ message: 'Bad request', ok: false })
    }
    try {
        const limit = await query(`select * from apikeys where value='${api_key.toString()}'`)
        return res.status(200).json({ users: api_key, ok: true })

    } catch (error) {
        return res.status(500).json({ message: error.message, ok: false })
    }

}
