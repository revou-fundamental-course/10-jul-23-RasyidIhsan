const btn = document.getElementById('hitung');

btn.addEventListener('click',function(){
  
    let Tinggi = document.querySelector('#Tinggi').value;
    let Berat = document.querySelector('#Berat').value;

    if (Tinggi == '' || Berat == ''){
        alert('Harap diisi terlebih dahulu!');
        return;
    }

    // BMI = Berat in KG / ( Tinggi in m * Tinggi in m )
    
    Tinggi = Tinggi / 100

    let BMI = (Berat / (Tinggi * Tinggi));

    BMI = BMI.toFixed(2);

    document.querySelector('#hasil').innerHTML = BMI;

    let status = '';

    if(BMI < 18.5){
        status = "Underweight"
    }
    if(BMI >=18.5 && BMI < 25){
        status = "Ideal"
    }
    if(BMI >=25 && BMI < 30){
        status = "Overweight"
    }
    if(BMI >=30){
        status = "Obesitas"
    }
    document.querySelector('.comment').innerHTML = `Hasil : <span
                    id="comment">${status}</span>`;
})