function solve(input) {
    let rotation = input.pop();
    for (let i = 0; i < rotation%input.length; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));




}




solve(['1','2','3','4','2'])