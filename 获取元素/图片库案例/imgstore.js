function WhichPic(element){
    let pic_href = element.getAttribute("href");
    let imgtarget = document.getElementById("imgtarget");
    imgtarget.setAttribute("src",pic_href);
}