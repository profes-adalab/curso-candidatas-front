module.exports = (error, req, res) => {
    if(error.httpStatus >= INTERNAL_SERVER_ERROR) {
        console.error();
    } else {
        console.warn();
    }

    res.status(error.httpStatus).json(error);
};