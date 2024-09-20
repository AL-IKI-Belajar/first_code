let nama = 'Budi';
var age = 16;
var money = 10000;

switch(true){
    case age >= 17 && money < 30000:
        console.log('uang tidak cukup, silahkan tambah dulu');
        break;
    
    case age >= 17 && money >=30000:
        console.log("Anda bisa pesan minum, sisa uang: " + (money - 30000));
        break;
    
    case age < 17 && money < 50000:
        console.log("Umur Tidak Cukup");
        break;
    
    case age < 17 && money >= 100000:
        console.log("Anda bisa pesan makan enak, sisa uang anda: " + (money - 100000));
        break;
    
    default:
        console.log("Kondisi tidak dikenal.");
        break;
}


let nama2 = "Kevin";
var datang = 7;
var umur = 26;

//datang kurang dari jam 7, tampilkan kamu datang lebih awal
//datang lebih dari jam 7, kamu terlambat
//datang pas jam 7, kamu ontime
//umur tidak sama dengan 26, kamu tidak terdaftar