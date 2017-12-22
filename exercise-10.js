// TUGAS 1
/*
TENTUKAN `total` sama dengan 0
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`"
*/
var total = 0
for(var index = 1; index <= 100; index++)
{
  if((index%2)===0)
  {
    hasil = total-index
    console.log(hasil + ' - Genap')
  }            // saya nampilin hasil ini cuma mau make sure code nya benar, meskipun ga ada di pseudocode
  else
  {
    hasil = total+index
    console.log(hasil +' - Ganjil') // saya nampilin hasil ini cuma mau make sure code nya benar, meskipun ga ada di pseudocode
  }
}
console.log('Total: ' + total)


//TUGAS 2
/*
SIMPAN karakter kosong pada `pagar`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
        TAMBAHKAN `pagar` dengan karakter "#"
    ENDFOR
    TULISKAN `pagar`
    SIMPAN karakter kosong pada `pagar`
ENDFOR
*/
var pagar='';
for(var index1 = 1; index1 <= 10; index1++)
{
  for(var index2 = 0; index2 <= 10; index2++)
  {
    pagarX = pagar +'#'
  }
  console.log(pagar)
}
console.log(pagar)


//TUGAS 3
/*
SIMPAN karakter kosong pada `bintang`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
        TAMBAHKAN `bintang` dengan karakter "*"
    ENDFOR
    TULISKAN `bintang`
    SIMPAN karakter kosong pada `bintang`
ENDFOR
*/
var bintang='';
for(var index1 = 1; index1 <= 10; index1++)
{
  for(var index2 = 0; index2 <= 10; index2++)
  {
    bintangX = bintang +'*'
  }
  console.log(bintang)
}
console.log(bintang)
