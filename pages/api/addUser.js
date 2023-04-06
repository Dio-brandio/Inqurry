import checkCookie from "./middleware"
const query = require('./dbconnect')
export default async function handler(req, res) {
    const isAdmin = await checkCookie(req.headers.cookie, "admin");
    if (!isAdmin) {
        return res.status(403).json({ message: 'Not Authenticated', ok: false })
    }
    if (req.method !== 'POST' || !req.body ) {
        return res.status(403).json({ message: 'Bad request', ok: false })
    }
    try {
        const { email, password, fname, lname, branchid, role } = req.body
       
        const rowcount = await query(`insert into users (email,password,fname,lname,branchid,role)
            values('${email.toString()}',
            '${password.toString()}',
            '${fname.toString()}',
            '${lname.toString()}',
            '${Number(branchid)}',
            '${role.toString()}')`)
            if (rowcount.affectedRows==1) {
                return res.status(200).json({ message: 'Successfully Created', ok: true })
            }

    } catch (error) {
        return res.status(500).json({ message: error.message, ok: false })
    }

}
