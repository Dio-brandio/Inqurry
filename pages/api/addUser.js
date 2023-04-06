import jwt from "jsonwebtoken"
const query = require('./dbconnect')
export default async function handler(req, res) {
    if (req.method !== 'POST' || !req.body) {
        return res.status(403).json({ message: 'Bad request', ok: false })
    }
    try {
        const { email, password, fname, lname, branchid, role } = req.body

        const res = await query(`insert into users (email,password,fname,lname,branchid,role)
            values(${email.toString()},
            ${email.toString()},
            ${password.toString()},
            ${fname.toString()},
            ${lname.toString()},
            ${Number(branchid)},
            ${role.toString()})`)

        return res.status(403).json({ message: 'Successfully Created', ok: true })
    } catch (error) {
        return res.status(500).json({ message: 'server error', ok: false })
    }

}
