function iseven(a) {
    if (a > 0) {
        if (a % 2 == 0) {
            return true
        } else {
            return false
        }
    } else {
        return null
    }
};

function isodd(a) {
    if (a > 0) {
        if (a % 2 == 0) {
            return false
        } else {
            return true
        }
    } else {
        return null
    }
};

function pickodd(array) {
    const odds = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            continue;
        } else {
            odds.push(array[i])
        }
    }
    return odds;
};

function pickeven(array) {
    const evens = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evens.push(array[i])
        } else {
            continue;
        }
    }
    return evens;
};

module.exports = {
    iseven,
    isodd,
    pickodd,
    pickeven
}
