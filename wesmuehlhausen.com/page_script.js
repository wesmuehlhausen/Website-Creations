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

/////////////////////////////////////////////////////////////////////////////

document.onmousemove = handleMouseMove;

function handleMouseMove(event) {
  const height = window.innerHeight;
  const width = window.innerWidth;
  // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
  const yAxisDegree = event.pageX / width * 40 - 20;
  const xAxisDegree = event.pageY / height * -1 * 40 + 20;
  target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
  // Set the sheen position
  setSheenPosition(event.pageX / width, event.pageY / width);
}

function setSheenPosition(xRatio, yRatio) {
  // This creates a "distance" up to 400px each direction to offset the sheen
  const xOffset = 1 - (xRatio - 0.5) * 800;
  const yOffset = 1 - (yRatio - 0.5) * 800;
  target.style.setProperty('--sheenX', `${xOffset}px`)
  target.style.setProperty('--sheenY', `${yOffset}px`)
}