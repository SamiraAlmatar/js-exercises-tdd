

const multByThree = number => number % 3 === 0;
const multByFive = number => number % 5 === 0;
const multByThreeAndFive = number => multByFive(number) && multByThree(number);

module.exports = (number) =>{
    var output = [];
    for(i = 1; i <= number; i++){
        if(multByThreeAndFive(i)){
            output.push('FizzBuzz');
        }else if(multByThree(i)){
            output.push('Fizz');
        }else if(multByFive(i)){
            output.push('Buzz');
        }else{
            output.push(i);
        }
    }
    return output.join(', ');
}

