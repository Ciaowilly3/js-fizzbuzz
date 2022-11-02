let output = 1;

for (let i=1; i<101; i++){

    // utilizzo n per controlalre se i è multiplo di 3
    let n=i % 3;
    if (n==0){
    output= "Fizz";
    }
    // uso m per quanto riguarda il 5
    let m=i % 5;
    if (m==0){
    output= "Buzz";
    }
    // i numeri che sono sia multipli di 3 e 5 sono multipli del minimo comune multiplo tra i 2, quindi lo calcolo mentalmente(15)
    // e quando un numero è multiplo di 15 allora è multiplo di 3 e 5
    let v=i % 15;
    if (v==0){
    output= "FizzBuzz";
    }
    console.log(output);
    output=i + 1;
}