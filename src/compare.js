function compare(number1, number2) {
    var arr1 = number1.toString().split("");
    var arr2 = number2.toString().split("");
    var a_count = 0;
    var b_count = 0;
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0;j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                if (i==j) {
                    a_count++;
                } else {
                    b_count++;
                }
            }
        }
    }
    return a_count+"A"+b_count+"B";
}