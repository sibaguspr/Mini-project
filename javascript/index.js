function luassegitiga(){
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    
    luas = 0.5 * alas * tinggi;
    const result =`L = 1/2 x ${alas} x ${tinggi} = ${luas}`;

    document.getElementById("show-resultluassegitiga").textContent = result;
    return false;
}

function clearluassegitiga(){
    document.getElementById("myformluassegitiga").textContent=""();
}
function kelilingsegitiga(){
    const sisiA = parseFloat(document.getElementById('s1').value);
    const sisiB = parseFloat(document.getElementById('s2').value);
    const sisiC = parseFloat(document.getElementById('s3').value);
    
    kel = sisiA + sisiB + sisiC;
    const result =`K =   ${sisiA} + ${sisiB} + ${sisiC}= ${kel}`;

    document.getElementById("show-resultkelsegitiga").textContent = result;
    return false;
}

function clearkelsegitiga(){
    document.getElementById("myformkelilingsegitiga").textContent=""();
}

function luasjajargenjang(){
    const alas = parseFloat(document.getElementById('alasjajargenjang').value);
    const tinggi = parseFloat(document.getElementById('tinggijajargenjang').value);
    
    luas = alas * tinggi;
    const result =`L = ${alas} x ${tinggi} = ${luas}`;

    document.getElementById("show-resultluasjajargenjang").textContent = result;
    return false;
}

function clearkelsegitiga(){
    document.getElementById("myformluasjajargenjang").textContent=""();
}

function keljajargenjang(){
    const alasjajar = parseFloat(document.getElementById('pedestaljajargenjang').value);
    const sisi = parseFloat(document.getElementById('sisimiringjajargenjang').value);
    
    kel = 2 * (alasjajar + sisi);
    const result =`K = 2 x ( ${alasjajar} + ${sisi} ) = ${kel}`;

    document.getElementById("show-resultkeljajargenjang").textContent = result;
    return false;
}

function clearkelsegitiga(){
    document.getElementById("myformkeljajargenjang").textContent=""();
}

