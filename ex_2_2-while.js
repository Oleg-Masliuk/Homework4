let i = 0;

while (i<100) {
    do {
        i++; 
    }
    while ((i-1) % 3 !== 0) {
        console.log(i-1);
    };
}