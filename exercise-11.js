var nama = '';
var peran = 'Ksatria';
var tahunLahir = '1992';
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));


if (peran == 'Ksatria')
{
	console.log (`Selamat datang di Dunia Proxytia, ${nama}. Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == 'Tabib')
{
	console.log (`Selamat datang di Dunia Proxytia, ${nama}. Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (peran == 'Penyihir')
{
	console.log	(`Selamat datang di Dunia Proxytia, ${nama}. Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else if (peran==='')
{
	console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else (nama ==='')
{
  peran = 'Kacung'
}


for(var tahunLahir = 1992; tahunLahir <= 1992; tahunLahir++)
if((tahunLahir%umur)===0)
  {
    console.log(peran + ' ' + nama + ' menyerang monster!');
    monsterHealth-umur
  }
  else if ((tahunLahir%kodeMonster)===0)
  {
    console.log('monster menyerang ' + peran + ' ' + nama + '!');
    playerHealth-kodeMonster
  }
  else if (((tahunLahir%umur)===0) && ((tahunLahir%kodeMonster)===0))
  {
    console.log('Health keduanya bertambah')
    playerHealth+kodeMonster
    monsterHealth+umur
  }
  else if (playerHealth>monsterHealth)
  {
    console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
  }
  else
  {
    console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')
  }
