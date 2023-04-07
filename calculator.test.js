const {
    getMean,
    getMedian,
    getMode
} = require("./calculator");


describe("getMedian", function() {
    test("get the median of an even set", function() {
        expect(getMedian("1, -1, 4, 2")).toEqual(1.5)
    })

    test("get the median of an odd set", function() {
        expect(getMedian("1, -1, 4")).toEqual(1)
    })
})

describe("getMean", function () {
    test("get the mean of an empty array", function () { 
      expect(getMean("")).toEqual(0)
    })

    test("get the mean of an array of numbers", function () { 
      expect(getMean("1,-1,4,2")).toEqual(1.5)
    })
})
  
describe("getMode", function () {
    test("get the mode", function () { 
        expect(getMode("1,1,1,2,2,3")).toEqual(1)
    })
})