function get_random() {
    do {
        var result = get_one_random().toString();
    } while(!result);

    for (var i = 0; i < 4; i++) {
        result += get_one_random().toString();
        if (!is_every_digit_different(result)) {
            result.substr(0, result.length - 1);
            i--;
        }
    }

    for(var i = 0; i < result.length; i++) {
        result += parseInt(result[i]) * Math.pow(10, 3 - i);
    }

    console.log("result", result);

    return result;
}
