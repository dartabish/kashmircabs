function toggleContent() {
    var moreContent = document.getElementById("moreContent");

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}