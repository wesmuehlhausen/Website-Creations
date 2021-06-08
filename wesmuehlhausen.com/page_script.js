function openTab(tab_id, content) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.color = "white";
    }
    document.getElementById(tab_id).style.color = "rgb(150, 12, 12)";
    document.getElementById(content).style.display = "block";
}











// function click_tab(tab_id), rgb){
    
//     var tab = document.getElementById(tab_id);
//     // tab.innerHTML = "haha";

//     //color all otherr tabs white
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabs");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.backgroundColor = "white";
//       tabcontent[i].style.color = "black";
//     }

    

//     //set color of selected tab
//     tab.style.backgroundColor = rgb;
//     tab.style.color = "white";
//     document.body.style.backgroundColor = rgb;
    
// }



  

// document.getElementById("home_tab").click();