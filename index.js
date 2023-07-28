function order(name, age, money) {

    if (name == "") {
       console.log("ANDA TIDAK BOLEH MASUK BRO !");
        return;
    };
    var drink;
    var price;

    if (age < 17) {
        drink = "juice";
        price = 50000;
    }else {
        drink = "anggur";
        price = 300000;
    }

    if (money < drink) {
        console.log("UANG ANDA KURANG SILAHKAN, ANDA KELUAR !");
    }else{
        const sisaUang = money - price;
        console.log(`Anda bisa pesan minuman ${drink}. Sisa uang Anda: ${sisaUang}`);
    }
}

order("rizal", 20, 1000000000);


// function userData() {

//     const readline = require('readline');
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

//     rl.question("Masukkan nama Anda: ", (name) => {
//         if (name == "") {
//             console.log("ANDA TIDAK BOLEH MASUK BRO !");
//             rl.close();
//         };
//         rl.question("Masukkan usia Anda: ", (age) => {
//             rl.question("Masukkan jumlah uang Anda: ", (money) => {
//                 // Konversi age dan money dari string menjadi number
//                 const ageNumber = parseInt(age);
//                 const moneyNumber = parseInt(money);
                
//                 // Panggil fungsi pesanMinuman dengan data yang dimasukkan pengguna
//                 order(name, ageNumber, moneyNumber);
                
//                 // Tutup readline interface setelah pengguna selesai memasukkan data
//                 rl.close();
//             });
//         });
//     });
// }

// userData();
    
// let car = {close: () => "test"}
//     console.log(car.close());