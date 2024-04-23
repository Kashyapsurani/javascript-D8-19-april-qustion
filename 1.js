var income = 10000;

if (income <= 10000) {
    var sum = 5 / 100 * income
    console.log(income - sum)
} else if (income >= 10001 && income <= 50000) {
    var sum = 10 / 100 * income
    console.log(income - sum)
} else if (income >= 50001 && income <= 1000000) {
    var sum = 15 / 100 * income
    console.log(income-sum)
}else{
    var sum = 20 / 100 * income
    console.log(income-sum)
}