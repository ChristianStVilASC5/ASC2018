function rand(){
    const decimal = Math.random(); // decimal between 0-1
    const times10 = decimal * 10; // get number between 0-10
    const final = Math.floor(times10);
    console.log(final);
}

rand();