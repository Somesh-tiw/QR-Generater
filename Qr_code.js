let imgBox=document.querySelector('.imgBox')
let qrImage=document.getElementById('qrImage')
let qrText=document.getElementById('qrtext')
let button=document.querySelector('button')
  function generateQR(){
    if(qrText.value.length>0){
        qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img")
    }
  
  }