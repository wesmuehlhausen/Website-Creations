function click_tab(val, rgb){
    
    var tab = document.getElementById(val);
    // tab.innerHTML = "haha";

    //color all otherr tabs white
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.backgroundColor = "white";
      tabcontent[i].style.color = "black";
    }



    //set color of selected tab
    tab.style.backgroundColor = rgb;
    tab.style.color = "white";
    document.body.style.backgroundColor = rgb;
    
}




  

document.getElementById("home_tab").click();