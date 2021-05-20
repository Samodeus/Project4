

function checkForm() {
    var fv = true
    var str = ""
    var str1 = ""
    var pat = ""
    str = document.getElementById("fullName").value;
    if (str == "" || str.length < 1) {
    document.getElementById("name_error").style.visibility = "visible";
    document.getElementById("formErrors").style.display = "block";
    document.getElementById("fullName").style.border = "3px solid red";
    fv = false;
    }
    
    else {
    document.getElementById("name_error").style.visibility = "hidden";
    if (fv != false)
    fv = true;
    }
    str = document.getElementById("email").value;
    pat = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pat.test(str)) {
    document.getElementById("email_error").style.visibility = "visible";
    document.getElementById("formErrors").style.display = "block";
    document.getElementById("email").style.border = "3px solid red";
    fv = false;
    }
    else {
    document.getElementById("email_error").style.visibility = "hidden";
    if (fv == true)
    fv = true;
    }

    str = document.getElementById("Phonenumber").value;
    if (str == "" || str.length < 1) {
    document.getElementById("Phonenumber_empty").style.visibility = "visible";
    document.getElementById("formErrors").style.display = "block";
    document.getElementById("Phonenumber").style.border = "3px solid red";
    fv = false;
    }
    
    else {
    document.getElementById("Phonenumber_empty").style.visibility = "hidden";
    if (fv != false)
    fv = true;
    }

    str = document.getElementById("Organization").value;
    if (str == "" || str.length < 1) {
    document.getElementById("Organization_empty").style.visibility = "visible";
    document.getElementById("formErrors").style.display = "block";
    document.getElementById("Organization").style.border = "3px solid red";
    fv = false;
    }
    
    else {
    document.getElementById("Oraganization_empty").style.visibility = "hidden";
    if (fv != false)
    fv = true;

document.getElementById("form").addEventListener("submit", formvalidation);
    function formvalidation() {

       let errors = [];
    
       if (Fullname.value == "") {
        errors.push({text: "Fullname", el: Fullname});
       }
       if (email.value == "") {
        errors.push({text: "email", el: email});
       } else if (!email_reg.test(email.value)) {
        errors.push({text: "email", el: email});
       }

       if (Phonenumber.value == "") {
          errors.push({text: "Phonenumber", el: Phonenumber});
         }
      
        if (Oraganization.value == "") {
          errors.push({text: "Organization", el: Oraganization});
         }
      
       if (errors.length = 0) {
           alert('SUBMITTED');
           return true;
        
       }}
   }}


   