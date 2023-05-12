

function sendemail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mess = document.getElementById("message").value;

    let subject = "Protfolio message from Name: "+ name;
    let body = "Email: "+ email + "<p>"+ mess +"<p/>";

    Email.send({
        SecureToken : "bdf87eef-7ab7-4032-aa2d-c1d27920d9a9",
        To : 'koleyz1965@gmail.com',
        From : "koleyz1965@gmail.com",
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
}

