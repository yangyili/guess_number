function str_to_arr(str) {
    var arr = [];
    for(var i = 0; i < str.length; i++) {
        arr[i] = str.substr(i, 1);
    }
    return arr;
}

function compare(val1, val2) {
    var arr1 = str_to_arr(val1);
    var arr2 = str_to_arr(val2);
    var A = 0;
    var B = 0;
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0;j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                if (i==j) {
                    A++;
                } else {
                    B++;
                }
            }
        }
    }
    return A+"A"+B+"B";
}