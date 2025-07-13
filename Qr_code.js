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
  function downloadQR() {
  if (qrText.value.length > 0) {
    const imageURL = qrImage.src;

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'qr-code.png'; // file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    alert("Please enter some text or URL to generate QR code first.");
  }
}
