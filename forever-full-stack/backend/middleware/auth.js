import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {

    const { token } = req.headers;

    console.log("=== AUTH MIDDLEWARE DEBUG ===");
    console.log("🔑 Token received:", token ? "Yes" : "No");

    if (!token) {
        console.log("❌ No token provided");
        return res.json({ success: false, message: 'Not Authorized Login Again' })
    }

    try {

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        console.log("✅ Token decoded:", token_decode);
        
        req.body.userId = token_decode.id
        console.log("✅ userId set in req.body:", token_decode.id);
        
        next()

    } catch (error) {
        console.log("❌ Token verification error:", error.message)
        res.json({ success: false, message: error.message })
    }

}

export default authUser