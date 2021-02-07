
function myFunction() {
    let nameEntered  ='';
    let gradeStanding='';
    nameEntered = prompt("Please enter your name:", nameEntered);
    gradeStanding = prompt("Please enter number of units:", gradeStanding);

    switch(true) {
        case gradeStanding <= '30': 
            document.getElementById("lblMessage").innerHTML  = "Hello <i>" + nameEntered + '</i>. <br /> Your grade standing is a <i>Freshman</i>.';
            break;
        case gradeStanding >= 31 && gradeStanding <= 60:
            document.getElementById("lblMessage").innerHTML  = "Hello <i>" + nameEntered + '</i>. <br /> Your grade standing is a <i>Sophomore</i>.';
            break;
        case gradeStanding >= 61 && gradeStanding <= 90:
            document.getElementById("lblMessage").innerHTML  = "Hello <i>" + nameEntered + '</i>. <br /> Your grade standing is a <i>Junior</i>.';
            break;
        case gradeStanding >= 91:
            document.getElementById("lblMessage").innerHTML  = "Hello <i>" + nameEntered + '</i>. <br /> Your grade standing is a <i>Senior</i>.';
            break;
      } 
}
