function hitung(pilihan)
{
    var spersegi= document.getElementById('spersegi').value;
    spersegi = parseFloat(spersegi)
    if(pilihan=='keliling')
    {
        document.getElementById('hasilk').value = (4 * spersegi + " cm");
    }
    if(pilihan=='luas')
    {
        document.getElementById('hasill').value = (spersegi * spersegi + " cm2");
    }
}

function hitungsg(pilihan)
{
    var ssg1= document.getElementById('ssg1').value;
    var ssg2= document.getElementById('ssg2').value;
    var ssg3= document.getElementById('ssg3').value;
    var sgt= document.getElementById('sgt').value;
    ssg1 = parseFloat(ssg1)
    ssg2 = parseFloat(ssg2)
    ssg3 = parseFloat(ssg3)
    sgt = parseFloat(sgt)
    if(pilihan=='keliling sg')
    {
        document.getElementById('hasilksg').value = (ssg1 + ssg2 + ssg3 + " cm");
    }
    if(pilihan=='luas sg')
    {
        document.getElementById('hasillsg').value = (1/2 * ssg1 *  sgt + " cm2");
    }
}

function hitungtp(pilihan)
{
    var stp1= document.getElementById('stp1').value;
    var stp2= document.getElementById('stp2').value;
    var stp3= document.getElementById('stp3').value;
    var ttp= document.getElementById('ttp').value;
    stp1 = parseFloat(stp1)
    stp2 = parseFloat(stp2)
    stp3 = parseFloat(stp3)
    ttp = parseFloat(ttp)
    if(pilihan=='keliling tp')
    {
        document.getElementById('hasilktp').value = (stp1 + stp2 + stp3 + " cm");
    }
    if(pilihan=='luas tp')
    {
        document.getElementById('hasilltp').value = (1/2 * stp3 *  ttp + " cm2");
    }
}

function hitunglr(pilihan)
{
    var r= document.getElementById('r').value;
    spersegi = parseFloat(spersegi)
    if(pilihan=='keliling lr')
    {
        document.getElementById('hasilklr').value = (2 * 22/7 * r + " cm");
    }
    if(pilihan=='luas lr')
    {
        document.getElementById('hasilllr').value = (22/7 * r * r + " cm2");
    }
}