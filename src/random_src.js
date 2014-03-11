function get_random() {
    var results = [];
    do {
        results[0] = get_one_random();
    } while(results[0] == 0);

    do {
        results[1] = get_one_random();
    } while(results[0] == results[1]);

    do {
        results[2] = get_one_random();
    } while(results[2] == results[0] || results[2] == results[1]);

    do {
        results[3] = get_one_random();
    } while(results[3] == results[0] || results[3] == results[1] || results[3] == results[2]);

    var resultNum = 0;
    for(var i = 0; i < results.length; i++) {
        resultNum += parseInt(results[i]) * Math.pow(10, 3 - i);
    }

    console.log(resultNum);

    return resultNum;
}
