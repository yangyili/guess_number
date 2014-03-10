function get_random() {
    do {
        var result = get_one_random().toString();
    } while(result === '0');

    var is_different = 0;
    for (var i = 0; i < 3; i++) {
        result += get_one_random().toString();
        is_different = is_every_digit_different(result);
        if (!is_different) {
            result.substr(0, result.length - 1);
            i--;
        }
    }

    var resultNum = 0;
    for(var i = 0; i < result.length; i++) {
        resultNum += parseInt(result[i]) * Math.pow(10, 3 - i);
    }

    return resultNum;
}
