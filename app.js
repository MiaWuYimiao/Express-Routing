const express = require('express');
const calculator = require("./calculator")
const checker = require("./checker")
const ExpressError = require("./expressError")
const app = express();

app.use(express.json());

app.get('/mean', function(req, res, next) {
    try {
        nums = req.query.nums;
        if(!nums) throw new ExpressError("Numbers are required", 400);
        
        let invalidItem = checker.checkNumsInput(nums);
        if(invalidItem !== ""){
            throw new ExpressError(`${invalidItem} is not a number`, 400);
        } 
        let mean = calculator.getMean(nums);
        return res.send({
            response: {
                operation: "mean",
                value: mean
            }
        });
    } catch (err) {
        return next(err);
    }

});

app.get('/median', function(req, res, next) {
    try {
        nums = req.query.nums;
        let invalidItem = checker.checkNumsInput(nums);
        if(invalidItem !== ""){
            throw new ExpressError(`${invalidItem} is not a number`, 400);
        } 
        let median = calculator.getMedian(nums);
        return res.send({
            response: {
                operation: "median",
                value: median
            }
        });
    } catch (err) {
        return next(err);
    }

});

app.get('/mode', function(req, res, next) {
    try {
        nums = req.query.nums;
        let invalidItem = checker.checkNumsInput(nums);
        if(invalidItem !== ""){
            throw new ExpressError(`${invalidItem} is not a number`, 400);
        } 
        let mode = calculator.getMode(nums);
        console.log(mode);
        return res.send({
            response: {
                operation: "mode",
                value: mode
            }
        });
    } catch (err) {
        return next(err);
    }
});

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found", 404);

    return next(err);
});

app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({
        error: {message, status}
    });
});


app.listen(3000, function(){
    console.log('App on port 3000');
});