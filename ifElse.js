var nama = 'kevin';
var umur = 25;
var biaya = 1000000;

if(nama) {
    if (umur <= 30) {
        if (biaya < 400000) {
            console.log('biaya anda tidak mencukupi, silakan kembali lagi nanti');
        } else {
            console.log("anda terverivikasi bisa membeli minuman keras seharga 500000, silakan nikmati waktu anda" + (biaya-400000))
        }
    } else {
        if (biaya < 600000) {
            console.log ("anda bisa tambah menu softdrink, sisa uang anda sekarang: " + (biaya-600000))
        }
    }
} else {
    console.log("umur anda tidak mencukupi");
}