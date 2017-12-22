// TUGAS 1
/*
SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'
*/
function hitungBagi(a, b)
{
	return 'Halo ' + nama + ', ' + a + ' dibagi ' + b + ' adalah sama dengan ' + (a/b) + '.';
}
var a=15
var b=3
var nama = 'Test'
var hasilBagi = hitungBagi(a,b);
console.log(hasilBagi);



// TUGAS 2
/*
SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"
*/
function luas(alas, tinggi)
{
	return ('Luas Segitiga: ' + (alas*tinggi)/2);
}
var alas=15
var tinggi=3
var hasilLuas = luas(alas, tinggi);
console.log(hasilLuas);


// TUGAS 3
/*
MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF
*/
var tahun = 1900;
if((tahun%4)===0)
{
  console.log (`${tahun} adalah tahun kabisat`);
}
else if((tahun%100)!==0)
{
  console.log(`${tahun} adalah tahun kabisat`);
}
else if ((tahun%400)===0)                       // ?? saya bingung disini, 1900 bukan tahun kabisat, karena ga habis dibagi 400, tapi kenapa output nya, 1900 adalah tahun kabisat ??
{
  console.log(`${tahun} adalah tahun kabisat`);
}
else
{
  console.log(`${tahun} adalah bukan tahun kabisat`);
}
