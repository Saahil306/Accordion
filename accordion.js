function accordion_toggle(sectionId) {
    console.log("open");
  
    var allSections = document.getElementsByClassName("accordion-section");
    var clickedSection = document.getElementById(sectionId);
  
    console.log("You clicked: " + sectionId);
  
    for (var i = 0; i < allSections.length; i++) {
      allSections[i].style.display = "none";
    }
  
    if (clickedSection.style.display === "block") {
      clickedSection.style.display = "none";
    } else {
      clickedSection.style.display = "block";
    }
  }   
  