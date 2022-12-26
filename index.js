const input=document.querySelector('#numberofwords')


function generatewords(n)
{
    let ls='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let s=''
    for(let i=0;i<=n;++i)
    {
       
        const random=(Math.random()*25).toFixed(0)

       
        s+=ls[random]
    }

    return s

}
let now;
function generatepara()
{
 
    now=Number(input.value)
    const newpara = document.createElement("p");
    newpara.setAttribute('class','paras')
    let ans=''
    for(let i=0;i<now;i++)
    {
        
        let len=(Math.random()*8).toFixed(0)
        ans+=generatewords(len)
        ans+=' '
    }
    newpara.innerText=ans
    document.querySelector('.container').append(newpara)

}