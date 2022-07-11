const _ = {
    clamp(number, lowerBound, upperBound) {
        if (number < lowerBound) {
            return lowerBound;
        } else if (number > upperBound) {
            return upperBound;
        } else if (number >= lowerBound && number <= upperBound) {
            return number;
        }
    },
    inRange(number, startValue, endValue) {
        if (typeof endValue === 'undefined') {
            endValue = startValue;
            startValue = 0;
        } else if (startValue > endValue) {
            let storageV = endValue;
            endValue = startValue;
            startValue = storageV;
        } 
        let isInRange = ((number >= startValue && number < endValue) ? true : false)
        return isInRange;
    },
    words(str) {
        let newArray = str.split(' ');
        return newArray;
    },
    pad(str, length) {
        if (length > str.length) {
            let n = length - str.length;
            let u = n/2;
            let str1 = str.padStart(str.length + u, ' ');
            let str2 = str1.padEnd(str.length + n, ' ');
            return str2;
        } else if (str.length === length) {
            return str;
        } else if (str.length > length) {
            return str;
        }
    },
    has(obj, key) {
        if (obj[key]) {
            return true;
        } else if (obj[key] === undefined) {
            return false;
        }
    },
    invert(obj) {
        let safeOne = Object.keys(obj);
        console.log(safeOne)
        let safeTwo = Object.values(obj);
        console.log(safeTwo)
        let newObject = {};
        for (const item in obj) {
            newObject[obj[item]] = item;
        }
        return newObject;
    },
    findKey(obj, predFunc) {
        for (item in obj) {
            if (predFunc(obj[item])) {
                return item;
            } else if (predFunc(obj[item]) === undefined) {
                return undefined;
            }
        }
    },
    drop(arr, num) {
        if (num) {
            for (let i = 1; i <= num; i++) {
            arr.shift();  
            }
            return arr;
        } else if (num === undefined) {
            arr.shift();
            return arr;
        }
    },
    dropWhile(arr, predFunc) {
        let dropNumber = arr.findIndex((element, index) => {
            return !predFunc(element, index, arr);
        })
        const droppedArray = this.drop(arr, dropNumber);
        return droppedArray;
    },
    chunk(arr, size) {
        if (size === undefined) {
            size = 1;
        }
        const arrayChunks = [];
        for (let i = 0; i < arr.length; i+=size) {
            let arrayChunk = arr.slice(i, i+size);
            arrayChunks.push(arrayChunk);
        } return arrayChunks;
    }
}


// Do not write or modify code below this line.
module.exports = _;