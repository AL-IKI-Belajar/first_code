let nama = "Kevin";
let gender = "Female";
let generasi = -1;

switch(generasi){
    case -2:
        if(gender == "Male"){
            console.log("Kakek")
        } else if (gender == "Female"){
            console.log("Nenek")
        } else {
            console.log("Pelangi")
        }
    break;
    case -1:
        if(gender == "Male"){
            console.log("Ayah")
        } else if (gender == "Female"){
            console.log("Ibu")
        } else {
            console.log("Bencong")
        }
    break;
    case 0:
        console.log("Saya");
    break;
    case 1:
        console.log("Anakku");
    break;
    case 2:
        console.log("cucu");
    break;

    default:
        console.log("Invalid")
}