// Делятся на 5

function getDivFive(from, to){
    let result = 0;
    for(i = from; i <= to; i++){
        if (i % 5 === 0){
            result = i;
            console.log(result);
        }
    }
}


const res = getDivFive(15, 44);
console.log('The end of script');