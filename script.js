function showTab(weapon, tabName) 
{
    // Declare all variables
    var i, tabcontent, tablinks, temp;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementById(weapon).getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    console.log(i);
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementById(weapon).getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    temp = weapon + "-" + tabName;

    // Show the current tab, and add an "active" class to the button that opened the tab
    if (tabName == "specs" || tabName == "loc"){
        document.getElementById(temp).style.setProperty("display", "flex");
        event.target.className += " active";
    } else {
        document.getElementById(temp).style.setProperty("display", "block");
        event.target.className += " active";
    }
}

function showIcon(weapon, level) 
{

    // Declare all variables
    var i, weaponicon, tablinks, temp;
  
    // Get all elements with class="weapon-icon" and hide them
    for (i = 1; i <= 4; i++) {
        temp = weapon + "-icon-" + i;
        document.getElementById(temp).style.setProperty("display", "none");
    }

    temp = weapon + "-icon-" + level;

    // Show the current tab, and add an "active" class to the button that opened the tab
   
    document.getElementById(temp).style.setProperty("display", "block");
   
}


function showSpec(weapon, level) 
{

    // Declare all variables
    var i, weaponicon, tablinks, temp;
  
    // Get all elements with class="weapon-icon" and hide them
    for (i = 1; i <= 4; i++) {
        temp = weapon + "-specs-" + i;
        document.getElementById(temp).style.setProperty("display", "none");
        temp = weapon + "-magic-" + i;
        document.getElementById(temp).style.setProperty("display", "none");
    }

    // Get all elements with class="spec-tabs" and remove the class "active"
    tablinks = document.getElementById(weapon).getElementsByClassName("spec-tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    //turn on correct levels.
    temp = weapon + "-specs-" + level;   
    document.getElementById(temp).style.setProperty("display", "block");
    temp = weapon + "-magic-" + level;   
    document.getElementById(temp).style.setProperty("display", "block");

    showIcon(weapon, level);
    // Show the current tab, and add an "active" class to the button that opened the tab
    event.target.className += " active";
   
}

function check(weapon) {
    if (document.getElementById(weapon).classList.contains('marked')) {
        document.getElementById(weapon).className = document.getElementById(weapon).className.replace(" marked", "");
        event.target.className = event.target.className.replace(" checked", "");
    } else {
        document.getElementById(weapon).className += " marked";
        event.target.className += " checked";
    }
    
}