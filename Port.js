function Mail(){
    var subject="Message from : "+document.getElementById('inp1').value+" , "+"Mo Number : "+document.getElementById('inp3').value;
    var message=document.getElementById('message').value;
    const mailtoLink = `mailto:sadhasivam@gmail.com?subject=${subject}&body=${message}`;
    window.open(mailtoLink);
};