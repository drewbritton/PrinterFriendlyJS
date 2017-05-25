// Andrew Britton
// 08/16/16
// CPW 222 JavaScript
// Extra Credit Assignment


"use strict";

// global variables for HTML elements
var buttonDiv = document.getElementById("buttonprint");
var buttonPrint = document.getElementById("btnPrint");
var mainDiv = document.getElementById("main");
var adDiv = document.getElementById("ad");
var sidenavDiv = document.getElementById("sidenav");
var imageAd = document.getElementById("adimg");
var imageContent = document.getElementById("contentimg");
var imageFooter = document.getElementById("footerimg");
var bodySelector = document.querySelector("body");


// gets the page ready for printing
function preparePrint() {
    var currentUrl = location.href,
        windowOptions = "toolbar=yes,location=no,directories=yes,menubar=yes,scrollbars=yes,width=768,height=1024",
        mainHtml = document.getElementById("main").innerHTML;
        
    
    var printWindow = window.open(currentUrl, "", windowOptions);
    printWindow.document.open();
//    printWindow.document.write("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"Styles.css\" media=\"print\" /><title>Printer Friendly Page - Extra Credit</title><br /></head><body>");
    printWindow.document.write("<html><head><link rel=\"stylesheet\" type=\"text/css\" href=\"StylePrint.css\" media=\"print\" /><title>Printer Friendly Page - Extra Credit</title><br /></head><body>");
    printWindow.document.write(mainHtml);
    printWindow.document.write("<br /></body><br /></html>");
    
    var adImg = printWindow.document.getElementById("ad");
    adImg.innerHTML = "";
    var contentImg = printWindow.document.getElementById("contentimg"),
        footerImg = printWindow.document.getElementById("footerimg"),
        headerText = printWindow.document.getElementById("header"),
        btnPrint = printWindow.document.getElementById("btnPrint");
    contentImg.src = "Images/prog_grey.png";
    footerImg.src = "Images/footerimg_grey.jpg";
    btnPrint.parentNode.removeChild(btnPrint);

//    var bodyHTML = document.getElementById("body");
//    body.style.backgroundImage = "";
//    body.style.backgroundColor = "ffffff";
//    adDiv.innerHTML = "";
//    sidenavDiv.innerHTML = "";
//    sidenavDiv.style.display = "none";
//    bodySelector.style.backgroundColor = "#ffffff";
//    bodySelector.style.backgroundImage = "";
    imageContent.src = "Images/prog_grey.png";
    imageFooter.src = "Images/footerimg_grey.jpg";
    
    printWindow.document.close();
    
    window.blur();
    printPage(printWindow);
}

// prints the webpage
function printPage(newWindow) {
    newWindow.focus();
    newWindow.print();
    newWindow.close();
    
    location.reload();
}


// TODO: possibly make a new CSS file to adjust the format/styling of Index.hmtl,
//       when the user clicks the print button open up a new preview window that has          all of the adjustments for the page,
//       use window.innerWidth/innerHeight to get the dimensions of the new window,
//      