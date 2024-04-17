function hitungkb(pilihan)
{
    var skb= document.getElementById('skb').value;
    skb = parseFloat(skb)
    if(pilihan=='volume kb')
    {
        document.getElementById('hasilkkb').value = (skb * skb * skb + " cm3");
    }
    if(pilihan=='luas kb')
    {
        document.getElementById('hasillkb').value = (6 * skb * skb + " cm2");
    }
}

function hitungkr(pilihan)
{
    var skr= document.getElementById('skr').value;
    var tkr= document.getElementById('tkr').value;
    var r= document.getElementById('r').value;
    skr = parseFloat(skr)
    tkr = parseFloat(tkr)
    r = parseFloat(r)
    if(pilihan=='volume kr')
    {
        document.getElementById('hasilkkr').value = (1/3 * 22/7 * r ** 2 * tkr + " cm3");
    }
    if(pilihan=='luas kr')
    {
        document.getElementById('hasillkr').value = (22/7 * r * (r+skr) + " cm2");
    }
}

function hitungbk(pilihan)
{
    var sbk= document.getElementById('sbk').value;
    var pbk= document.getElementById('pbk').value;
    var lbk= document.getElementById('lbk').value;
    sbk = parseFloat(sbk)
    pbk = parseFloat(pbk)
    lbk = parseFloat(lbk)
    if(pilihan=='volume bk')
    {
        document.getElementById('hasilbk').value = (sbk * pbk * lbk + " cm3");
    }
    if(pilihan=='luas bk')
    {
        document.getElementById('hasillbk').value = (2 * ((pbk * lbk) + (pbk * sbk) + (lbk * sbk)) + " cm2");
    }
}

function hitungtb(pilihan)
{
    var stb= document.getElementById('stb').value;
    var ttb= document.getElementById('ttb').value;
    stb = parseFloat(stb)
    ttb = parseFloat(ttb)
    if(pilihan=='volume tb')
    {
        document.getElementById('hasilktb').value = (22/7 * stb **2 * ttb + " cm3");
    }
    if(pilihan=='luas tb')
    {
        document.getElementById('hasilltb').value = (2 * 22/7 * stb * (stb +  ttb) + " cm2");
    }
}