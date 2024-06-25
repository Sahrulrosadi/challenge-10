const errorHandler = (err, req, res, next)=>{
    let statusCode;
    let message;

    switch (err.message){
        case "Missing Token":
            statusCode = 401
            message = "Missing Access Token";
            break;

       
        // case "user not registered":
        //     statusCode = 404
        //     message = "user not registered";
        //     break;

         default:
            code = 500
            message = " Internal Server Error";
            break;
            
    }

    return res.status(statusCode).json({
        success : false,
        message
    })


}

export default errorHandler