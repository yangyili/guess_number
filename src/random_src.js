function get_random() {
    var randomNumber;
    var randomResult=new Array(4);
    var result = 0;

    randomNumber=Math.random()*10;
    randomNumber=Math.floor(randomNumber);
    randomResult[3]=randomNumber;

    do{
        randomNumber=Math.random()*10;
        randomNumber=Math.floor(randomNumber);
    }   while(randomNumber==randomResult[3]);

    randomResult[2]=randomNumber;

    do{
        randomNumber=Math.random()*10;
        randomNumber=Math.floor(randomNumber);
    }   while(randomNumber==randomResult[3]||randomNumber==randomResult[2]);
    randomResult[1]=randomNumber;

    do{
        randomNumber=Math.random()*10;
        randomNumber=Math.floor(randomNumber);
    }   while(randomNumber==randomResult[3]||randomNumber==randomResult[2]||randomNumber==randomResult[1]);
    randomResult[0]=randomNumber;

    for(var i = 0; i < randomNumber.length; i++) {
        result += randomResult[i] * Math.pow(10, i);
    }

    return result;
}

function is_every_digit_different(random_number) {
    var random_str = random_number.toString();
    var random_array = random_str.split("");
    var random_arr_length = random_array.length;
    for(var i = 0; i < random_arr_length; i++) {
        for(var j = i + 1;j < random_arr_length.length; j++) {
            if (random_array[i] == random_array[j]) {
                return false;
            }
        }
    }
    return true;
}