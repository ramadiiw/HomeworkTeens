//Pohon Natal
console.log("-- Pohon Natal --");
console.log();
function buatPohonNatal(tinggi) {
    for (let i = 1; i<= tinggi; i++) {
        let spasi = ' '.repeat(tinggi - i);
        let bintang = '*'.repeat(2 * i - 1);
        console.log(spasi + bintang);
    }
 
    let spasiBatang = ' '.repeat(tinggi - 1);
    console.log(spasiBatang + '|');
    console.log(spasiBatang + '|');
}
buatPohonNatal(5);

console.log();

//Draw Fisher
console.log("-- Gambar Ikan --");
console.log();

console.log("FISH FISH FISH");

for (let i = 1; i <= 3; i++){
    if (i == 2){
        console.log("   <><");
    }else{
        console.log("<><   <><");
    }
}
console.log();

//Draw Cat
console.log("-- Gambar Kucing --");
console.log();

console.log("MEAW MEAW");
const Kucing = [" /\\_/\\", "( o.o )", " > ^ <"];
for (const baris of Kucing) {
    console.log(baris);
}

