// notification (password)

document.getElementById("info").addEventListener("click", function (){
    let notice = document.getElementById("notice");  
    if(notice.style.display == "block"){
        notice.style.display = "none";
    }
    else{
        notice.style.display = "block";
    }
});

// form validation

document.getElementById("form").addEventListener("submit", (e) => {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementsByName("gender");
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var confirmPass = document.getElementById("confirm").value;
    var genre = document.getElementById("genre").value;
    var news = document.getElementsByName("news");

    if(firstName == ""){
        e.preventDefault(); 
        alert("First name must be filled out!");
        return;
    }

    for(let i = 0; i < firstName.length; i++){
        if(!isAlpha(firstName[i])){
            e.preventDefault(); 
            alert("First name must consist of alphabets only!");
            return;
        }
    }

    for(let i = 0; i < lastName.length; i++){
        if(!isAlpha(lastName[i])){
            e.preventDefault(); 
            alert("Last name must consist of alphabets only!");
            return;
        }
    }

    if(email == ""){
        e.preventDefault(); 
        alert("Email must be filled out!");
        return;
    }

    if(!(email.indexOf("@") != -1 && (email.endsWith(".com") || email.endsWith(".co.id")))){
        e.preventDefault(); 
        alert("Email must follow standard email address format!");
        return;
    }

    if(phone == ""){
        e.preventDefault(); 
        alert("Phone must be filled out!");
        return;
    }

    if(phone.length != 14){
        e.preventDefault(); 
        alert("Phone must follow the format of: XXXX-XXXX-XXXX, where X is a digit (0 to 9)");
        return;
    }

    for(let i = 0; i < 14; i++){
        if(i == 4 || i == 9){
            if(phone[i] != "-"){
                e.preventDefault(); 
                alert("Phone must follow the format of: XXXX-XXXX-XXXX, where X is a digit (0 to 9)");
                return;
            }
        }
        else{
            if(!(0 <= phone[i] && phone[i] <= 9)){
                e.preventDefault(); 
                alert("Phone must follow the format of: XXXX-XXXX-XXXX, where X is a digit (0 to 9)");
                return;
            }
        }
    }

    if(!gender[0].checked && !gender[1].checked && !gender[2].checked){
        e.preventDefault(); 
        alert("Gender must be filled out!");
        return;
    }

    if(password == ""){
        e.preventDefault(); 
        alert("Password must be filled out!");
        return;
    }

    if(password.length < 8){
        e.preventDefault(); 
        alert("Password must be at least 8 characters long!");
        return;
    }

    var upper = 0;
    var lower = 0;
    var num = 0;

    for(let i = 0; i < password.length; i++){
        if(0 <= password[i] && password[i] <= 9){
            num++;
        }
        if("a" <= password[i] && password[i] <= "z"){
            lower++;
        }
        if("A" <= password[i] && password[i] <= "Z"){
            upper++;
        }
    }

    if(!(upper >= 1 && lower >= 1 && num >= 1)){
        e.preventDefault(); 
        alert("Password must consist of one uppercase letter, lowercase letter, and number each!");
        return;
    }

    if(address == ""){
        e.preventDefault(); 
        alert("Address must be filled out!");
        return;
    }

    if(address.indexOf(",") == -1){
        e.preventDefault(); 
        alert("Address must follow the format: Address, City!");
        return;
    }

    if(confirmPass == ""){
        e.preventDefault(); 
        alert("Confirm password must be filled out!");
        return;
    }

    if(password != confirmPass){
        e.preventDefault(); 
        alert("Password and confirm password must be the same!");
        return;
    }

    if(genre == ""){
        e.preventDefault(); 
        alert("Genre must be filled out!");
        return;
    }

    var confirmForm = confirm("Are you sure you want to register?");

    if(confirmForm){
        alert("You have successfully joined Tanaka Guitar’s membership");
    }
    else{
        e.preventDefault(); 
        alert("Submit Cancelled");
    }
});

function isAlpha(char){
    return(char >= "a" && char <= "z" || char >= "A" && char <= "Z");
}