let kata = 'xoxoxox';
let jumlahX = 0;
let jumlahO = 0;

for (i=0 ; i < kata.length; i++){
    if (kata[i] === 'x'){
        jumlahX++
    }
}

console.log(jumlahX)

for (i=0 ; i < kata.length; i++){
    if (kata[i] === 'o'){
        jumlahO++
    }
}

console.log(jumlahO)

if(jumlahX === jumlahO){
    console.log(true)
} else {
    console.log(false)
}