let output = 1;

for (let i=1; i<101; i++){

    let n=i % 3;
    if (n==0){
    output= "Fizz";
    }
    console.log(output);
    output=i + 1;
}