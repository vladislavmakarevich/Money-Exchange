// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency===0){
        return {};
    }
    if(currency>10000){
        return {error:"You are rich, my friend! We don't have so much coins for exchange"};
    }
    var r={};
    if(currency/50>=1){
        r.H=Math.trunc(currency/50);
        currency=currency-50*r.H;
    }
    if(currency/25>=1){
        r.Q=Math.trunc(currency/25);
        currency=currency-25*r.Q;
    }
    if(currency/10>=1){
        r.D=Math.trunc(currency/10);
        currency=currency-10*r.D;
    }
    if(currency/5>=1){
        r.N=Math.trunc(currency/5);
        currency=currency-5*r.N;
    }
    if(currency/1>=1){
        r.P=Math.trunc(currency/1);
    }
    return r;
}
