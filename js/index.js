function UpdatecaseNumber(Isincrease){
    const btnPlusefield = document.getElementById('case-number-bottom');
    const btnPluseNumber = btnPlusefield.value;
    const previousBtnPluseNumber = parseInt(btnPluseNumber);

    let newpreviousBtnNumber;

    if(Isincrease){
        newpreviousBtnNumber = previousBtnPluseNumber + 1;
    }
    else{
        newpreviousBtnNumber = previousBtnPluseNumber - 1;
    }

    btnPlusefield.value = newpreviousBtnNumber;
}

document.getElementById('btn-plus').addEventListener('click', function(){
    const newpreviousBtnNumber =  UpdatecaseNumber(true);

})

document.getElementById('btn-nimus').addEventListener('click', function(){
    const newpreviousBtnNumber = UpdatecaseNumber(false)

})




// ====================================================

// document.getElementById('btn-plus').addEventListener('click', function(){
//     const btnPlusefield = document.getElementById('case-number-bottom');
//     const btnPluseNumber = btnPlusefield.value;
//     const previousBtnPluseNumber = parseInt(btnPluseNumber);

//     const newpreviousBtnNumber = previousBtnPluseNumber+1;
//     btnPlusefield.value = newpreviousBtnNumber;
// })

// document.getElementById('btn-nimus').addEventListener('click', function(){
//     const btnPlusefield = document.getElementById('case-number-bottom');
//     const btnPluseNumber = btnPlusefield.value;
//     const previousBtnPluseNumber = parseInt(btnPluseNumber);

//     const newpreviousBtnNumber = previousBtnPluseNumber-1;
//     btnPlusefield.value = newpreviousBtnNumber;
// })



// ===============================================


// document.getElementById('ubtn-plus').addEventListener('click', function(){
//     const btnplus = document.getElementById('case-number-upper');
//     const butpluseString = btnplus.value;
//     const previousbtnNumber = parseInt(butpluseString);

//     const uprice = document.getElementById('uprice');
//     const upriceValue = uprice.innerText;
//     const upriceValueNumber = parseInt(upriceValue);

//     // const newbtnNumber = ;
//     btnplus.value = previousbtnNumber + 1;
//     uprice.innerText = upriceValueNumber +1219;
// })
// document.getElementById('ubtn-nimus').addEventListener('click', function(){
//     const btnplus = document.getElementById('case-number-upper');
//     const butpluseString = btnplus.value;
//     const previousbtnNumber = parseInt(butpluseString);

//     const uprice = document.getElementById('uprice');
//     const upriceValue = uprice.innerText;
//     const upriceValueNumber = parseInt(upriceValue);
//     // const newbtnNumber = ;
//     btnplus.value = previousbtnNumber - 1;
//     uprice.innerText = upriceValueNumber -1219;

//     if(btnplus.value<0)
//     {
//         btnplus.value=0;
//         uprice.innerText=0;
//     }
// })





// document.getElementById('btn-plus').addEventListener('click', function(){
//     const btnplus = document.getElementById('case-number-bottom');
//     const butpluseString = btnplus.value;
//     const previousbtnNumber = parseInt(butpluseString);

//     // const newbtnNumber = ;
//     btnplus.value = previousbtnNumber + 1;
// })
// document.getElementById('btn-nimus').addEventListener('click', function(){
//     const btnplus = document.getElementById('case-number-bottom');
//     const butpluseString = btnplus.value;
//     const previousbtnNumber = parseInt(butpluseString);

//     // const newbtnNumber = ;
//     btnplus.value = previousbtnNumber - 1;
//     if(btnplus.value<0)
//     {
//         btnplus.value=0;
//     }
// })