var slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk menampilkan slide berikutnya atau sebelumnya
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Fungsi untuk menampilkan slide tertentu
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Fungsi untuk menampilkan slide
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      setTimeout(showSlides, 2000); // Waktu pergantian slide dalam milidetik
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function submit(){ 
    const date = new Date();
    var name=document.getElementById("name").value; 
    var birthdate=document.getElementById("birthdate").value; 
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var message=document.getElementById("message").value;

    var 
    time      ="<strong >Current Time : </strong> "+date;
    name      ="<strong>Nama : </strong>"+name;
    birthdate ="<strong >Tanggal Lahir : </strong>"+birthdate;
    gender    ="<strong>Jenis Kelamin : </strong>"+gender;
    message   ="<strong>Pesan : </strong>"+message;
    
    document.getElementById("waktu")    .innerHTML = time;
    document.getElementById("nama")     .innerHTML = name;
    document.getElementById("lahir")    .innerHTML = birthdate;
    document.getElementById("kelamin")  .innerHTML = gender;
    document.getElementById("pesan")    .innerHTML = message;
}