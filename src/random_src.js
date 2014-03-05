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