


// will always be implemented with protectedRoute as some data can be fetched without verification only for payment we need verification and registering
exports.verifyGuard = async (req, res, next) => {
    let {verified} = req.user;
    if(!verified) return res.status(401).json({
        success:false,
        message:"User not verified"
    })
}