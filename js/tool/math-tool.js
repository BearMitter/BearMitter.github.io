function count(...nums) {
    return nums.length;
}


function fac(n) {
    if (n == 0 || n == 1)
        return 1;
    return fac(n - 1) * n;
}

function rad(n) {
    return n * 180 / Math.PI;
}
function deg(n) {
    return n / 180 * Math.PI;
}



function count(...nums) {
    return nums.length;
}

function sum(...nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];

    }
    return sum;
}

function avg(...nums) {
    return sum(...nums) / nums.length;
}

function stddev(...nums) {

    var mean = avg(...nums);
    var sum = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += (Math.pow(nums[i] - mean, 2));
    }

    return Math.sqrt(sum / nums.length);

}
