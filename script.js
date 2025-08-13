//DOM stands for Document Object Model

document.addEventListener("DOMContentLoaded", function()
{
    const tabLinks = document.querySelectorAll(".tab-link");
    const signUpForm = document.getElementById("sign-up-form");
    const loginForm = document.getElementById("login-form");

//function that switches the sign-up tab wiith thhe login tab vice versa
function switchTab(targetId){
   
    //hide both tabs

    signUpForm.style.display = "none";
    loginForm.style.display = "none";

    //remove active class from all tab links
    tabLinks.forEach(link => link.classList.remove("active"));

    document.getElementById(targetId).style.display = "block";

    document.querySelector(`.tab-link[data-target="${targetId}"]`)

}

tabLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
        switchTab(targetId);

    });

 });
 switchTab("sign-up-form")


});
