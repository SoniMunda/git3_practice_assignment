let n=11;
let count=0;
for(let i=0;i<=n;i++)
  {
    if(n%i==0)
    {
      count++;
    }
  }
if(count===2)
{
  console.log("Number is Prime")
}else
{
  console.log("Number is not Prime")
}