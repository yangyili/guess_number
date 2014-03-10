function is_every_digit_different(random_number) {
    var random_str = typeof random_number == 'number'?random_number.toString():random_number;
    var random_array = random_str.split("");
    var random_arr_length = random_array.length;
    for(var i = 0; i < random_arr_length; i++) {
        for(var j = i + 1;j < random_arr_length; j++) {
            if (random_array[i] == random_array[j]) {
                return false;
            }
        }
    }
    return true;
}

function is_random(get_random) {
    var repeat_count = 0;
    for (var i = 0; i < 50; i++) {
        if (get_random() == get_random()) {
            repeat_count++;
        }
    }
    if (repeat_count > 40) {
        return false;
    }
    return true;
}
