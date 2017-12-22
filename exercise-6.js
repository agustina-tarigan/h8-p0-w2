// Ganjil - Genap

for(var deret = 1; deret <= 100; deret++)
{
  if((deret%2)==1)
  {
    console.log(deret + ' - Ganjil' );
  }
  else if ((deret%2)==0)
  {
    console.log(deret + ' - Genap');
  }
}


// Kelipatan 3

for(var deret = 1; deret <= 100; deret+=2)
{
  if((deret%3)==0)
  {
    console.log(deret + ' - Kelipatan 3')
  }
  else
  {
    console.log(deret)
  }
}


// Kelipatan 6

for(var deret = 1; deret <= 100; deret+=5)
{
  if((deret%6)==0)
  {
    console.log(deret + ' - Kelipatan 6')
  }
  else
  {
    console.log(deret)
  }
}


// Kelipatan 10

for(var deret = 1; deret <= 100; deret+=9)
{
  if((deret%10)==0)
  {
    console.log(deret + ' - Kelipatan 10')
  }
  else
  {
    console.log(deret)
  }
}
