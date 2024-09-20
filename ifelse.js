let nama = 'Budi';
let sekarang = true; // ontime
let telat = false; // telat

if (nama) {
    if (telat) {
        if (telat) {
            console.log(nama + ' kamu hadir, tapi telat');
        } else {
            console.log(nama + ' bagus kamu ontime');
        }
    } else {
        console.log(nama + ' kamu gak hadir.');
    }
} else {
    console.log('Nama tidak terdaftar');
}