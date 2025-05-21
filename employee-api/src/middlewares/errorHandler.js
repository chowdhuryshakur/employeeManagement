const errorHandling = (err, req, res, next) => {
    res.status(500).json({
        status: 500,
        error: err.message,
        message: "Something went wrong"
    })
}

export default errorHandling