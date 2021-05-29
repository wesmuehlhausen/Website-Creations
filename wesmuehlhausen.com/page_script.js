function click_tab(val, rgb){
    
    var tab = document.getElementById(val);
    // tab.innerHTML = "haha";

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.backgroundColor = "white";
    }

    tab.style.backgroundColor = rgb;
    document.body.style.backgroundColor = rgb;
    

}

