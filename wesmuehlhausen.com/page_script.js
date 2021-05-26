function tab_clicked(page_id, element, color){
    // init variables
    var index, tab_content, tab_link;

    // hide the contents of the other pages
    tab_content = document.getElementsByClassName("tab_content");
    for(index = 0; index < tab_content.length; index++){
        tab_content[index].style.display = "none";
    }

    //clear other tabs background color
    tab_link = document.getElementsByClassName("tab_link");
    for(index = 0; index < tab_content.length; index++){
        tab_link[index].style.backgroundColor = "";
    }

    //Show content of only the selected tab
    document.getElementById(page_id).style.display = "block";

    //Add Background to selected tab
    element.style.backgroundColor = color;

    //Default open
    document.getElementById("defaultOpen").click();

}