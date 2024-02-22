function x() {
    let a = 13;
    function y(){
        console.log(a);
    }
    a = 5;
    return y;
}
const z = x()
console.log(z());