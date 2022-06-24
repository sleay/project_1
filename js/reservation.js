

const elBtnAd =document.querySelectorAll('.ad  a');
const elBtnKd =document.querySelectorAll('.kd  a');
const elBtnBa =document.querySelectorAll('.ba  a');
const elPt = document.querySelectorAll('.btn  p');
const elPcode1 = document.querySelector('.pcode1');
const elPcode2 = document.querySelector('.pcode2');

let i=0

let num1=2,
num2=0,
num3=0;
let total = 0;

let pay1 = 20000,
    pay2 = 10000;

let disC = 20000;

let paytotal = 0;
let defaultpay = 100000;

elPcode1.textContent = defaultpay;





function Per1(a){
    if(a==0){
        if(num1 > 2){
            num1--;
                    defaultpay-=pay1;
        }
    }
    else{
        if(total==6){
            num1;
        }
        else if(num1 >= 0 && num1 <6){
            num1++;
                defaultpay+=pay1;
            }
    }
    event.preventDefault(); 
    total = num1+num2+num3;
    elPt[0].textContent = num1;
    elPcode1.textContent = defaultpay;
    elPcode2.textContent = defaultpay - disC;
    

};
function Per2(a){
    if(a==0){
        if(num2 > 0){
            num2--;
            defaultpay-=pay1;
            }
    }
    else {
        
        if(total==6){
            num2;
        }
        else if(num2 >= 0 && num2 <6){
            num2++;
            defaultpay+=pay1;
            }
    }
    event.preventDefault(); 
    total = num1+num2+num3;
    elPt[1].textContent = num2;
    elPcode1.textContent = defaultpay;
    elPcode2.textContent = defaultpay - disC;
};
function Per3(a){
    if(a==0){
        if(num3 > 0){
            num3--;
            defaultpay-=pay2;
            }
    }
    else{

        if(total==6){
            num3;
        }
        else if(num3 >= 0 && num3 <6){
            num3++;
            defaultpay+=pay2;
            }
    }
    event.preventDefault(); 
    total = num1+num2+num3;
    elPt[2].textContent = num3;

    elPcode1.textContent = defaultpay;
    elPcode2.textContent = defaultpay - disC;
};







elBtnAd[0].addEventListener('click',function(){
    Per1(0)
    
});
elBtnAd[1].addEventListener('click',function(){
    Per1(1)
    
});

elBtnKd[0].addEventListener('click',function(){
    Per2(0)
});
elBtnKd[1].addEventListener('click',function(){
    Per2(1)
});


elBtnBa[0].addEventListener('click',function(){
    Per3(0)
});
elBtnBa[1].addEventListener('click',function(){
    Per3(1)
});




