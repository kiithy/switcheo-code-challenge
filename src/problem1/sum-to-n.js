var sum_to_n_a = function(n){
    const ls = []
    var sum = 0
    for (let i = 1; i <= n; i++) {
        ls.push(i)
    }
    ls.forEach(i => sum = sum + i )
    return sum
};

var sum_to_n_b = function(n) {
    var sum = 0
    var num = 1
    while (num != n){
        sum += num
        num += 1
    }
    sum += num
    return sum
};

var sum_to_n_c = function(n) {
    var sum = 0;
    for (var num = 1; num <= n; num++){
        sum += num
    }
    return sum
};

console.log(sum_to_n_c(5));
