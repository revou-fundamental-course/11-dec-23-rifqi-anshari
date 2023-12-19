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