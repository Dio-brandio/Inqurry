import { splitToken ,checkCookie} from "./middleware"
const query = require('./dbconnect')
export default async function handler(req, res) {
    const token = splitToken(req.headers.cookie)
    const isAdmin = await checkCookie(token, "admin");
    const isManager = await checkCookie(token, "manager");
    console.log(token);
    if (!isAdmin.verified && !isManager.verified) {
        return res.status(401).json({ message: 'Not Authenticated', ok: false })
    }
    if (req.method !== 'GET') {
        return res.status(403).json({ message: 'Bad request', ok: false })
    }
    try {
       const branches = await query(`select * from branch`)
       return res.status(200).json({ branches: branches, ok: true })
       
    } catch (error) {
        return res.status(500).json({ message: error.message, ok: false })
    }

}
