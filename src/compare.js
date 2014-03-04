function compare(val1, val2) {
    var arr1 = val1.split("");
    var arr2 = val2.split("");
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