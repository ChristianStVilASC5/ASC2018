function main() {
    let a = 10;
    let b = 4;
    let c = a + b;
    let d = mystery(a, b, c);
    b--;
    c = mystery(c, d, a);
    mystery(a, c, b);
    console.log(a + " " + b + " " + c + " " + d);
}
​
function mystery(b, c, a) {
    c++;
    console.log(c + " " + a + " " + b);
    return a + 2;
}
