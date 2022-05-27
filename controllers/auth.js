const User=require('../schemas/User')
const asyncHandler=require('../middlewares/async')
const ErrorResponce=require('../utils/ErrorResponce');


//@desc Create user
//@router POST /api/user
//@access Public
exports.register = asyncHandler(async (req, res, next) => {
    console.log(req.body);

    const { name,consumerNumber, email, password} = req.body;

    const role="user";

    //Create a User
    const user = await User.create({name,consumerNumber, email, password, role});

    if (!user) {
        return next(new ErrorResponce(`Entered invalid entry`, 404));
    }
    sendbackCookie(200, res, user);


});

//@desc Login User
//@router GET /api/user/login
//@access Private
exports.loginUser = asyncHandler(async (req, res, next) => {

    const { email, password } = req.body;
    const status="active";

    //Checking basic validation for email and password
    if (!email || !password) {
        return next(new ErrorResponce('Please enter a email and a password :', 400));
    }

    //Checking for user in db
    const user = await User.findOne({where: {email}});

    if (!user) {
        return next(new ErrorResponce('Invalid credientials', 401));
    }

    //Match passwords
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponce('Invalid credientials', 401));
    }
    const currentdate=new Date();
        await User.update({status:status,lastLogin:currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/" 
        + currentdate.getFullYear() + " @ "  
        + currentdate.getHours() + ":"  
        + currentdate.getMinutes() + ":" 
        + currentdate.getSeconds()},{where:{id: user.id}})
    sendbackCookie(200, res, user);

});

//@desc Current User
//@router GET /api/user/me
//@access Private
exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findByPk(req.user.id)
    console.log(user)

    if (!user) {
        return next(new ErrorResponce(`Some error has Occured`, 404));
    }
    res.status(200).json({
        success: true,
        user
    })
});

//@desc Current User
//@router /api/v1/user/me
//@access Private
exports.logoutUser = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });
    const status='inactive';
    await User.update({status},{where:{id: req.user.id}})

    res.status(200).json({ success: true, data: {} })
});

//Create a cookie from create user and login
const sendbackCookie = (statusCode, res, user) => {

    //Creating jwt web token
    const token = user.jwtWebToken();

    const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE_IN  * 24 * 60 * 60 * 1000),
        httpOnly: false,secure:false
    }

    if (process.env.NODE_ENV === "production") {
        options.secure = true;
    }

    res.status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token,
            user
        });
    }
