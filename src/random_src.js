function get_random() {
    var randomNumber;
    var randomResult=new Array(4);
    var result = 0;

    randomNumber=Math.random()*10;
    parseInt(randomNumber);
    randomResult[3]=randomNumber;

    do{
        randomNumber=Math.random()*10;
        parseInt(randomNumber);
    }   while(randomNumber==randomResult[3]);

    randomResult[2]=randomNumber;

    do{
        randomNumber=Math.random()*10;
        parseInt(randomNumber);
    }   while(randomNumber==randomResult[3]||randomNumber==randomResult[2]);
    randomResult[1]=randomNumber;

    do{
        randomNumber=Math.random()*10;
        parseInt(randomNumber);
    }   while(randomNumber==randomResult[3]||randomNumber==randomResult[2]||randomNumber==randomResult[1]);
    randomResult[0]=randomNumber;

    for(var i = 0; i < randomResult.length; i++) {
        result += randomResult[i] * Math.pow(10, i);
    }
    console.log("result", result);

    return parseInt(result);
}
