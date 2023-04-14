import { v4 as uuidv4 } from 'uuid';
const query = require('./dbconnect')
export default async function handler(req, res) {

   
    if (req.method !== 'GET') {
        return res.status(403).json({ message: 'Bad request', ok: false })
    }
    try {
        // const users = await query(`call getAllUsersBranchId(${isAdmin.data.branchid},${id})`)
        const apiKey = uuidv4()
        const rowcount =await query(`INSERT INTO apikeys( value, api_limit) VALUES ('${apiKey}','3')`)
        if (rowcount.affectedRows==1) {
            return res.status(200).json({ apiKey: apiKey, ok: true })
        }else{
            return res.status(200).json({ apikey: apiKey, ok: true })
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message, ok: false })
    }

}
