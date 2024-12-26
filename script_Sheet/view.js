/* --- ## -- Download Code -- ## --- */
function downloadPDF() {
    let link = document.createElement("a");
    link.href = "pdf/SANJAYKUMAR T_B.TECH - IT_2023 -1+year_CV.pdf";
    link.download = "SANJAYKUMAR T_B.TECH - IT_2023 -1+year_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById("downloadButton").addEventListener("click", downloadPDF);

/* --- ## -- Mail Send Code -- ## --- */
emailjs.init("your_public_key");
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("your_service_id", "your_template_id", this)
        .then(function (response) {
            alert("Email sent successfully!");
        }, function (error) {
            alert("Failed to send email. Please try again.");
        });
});


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
scrollReveal.reveal('.featured-image', { delay: 300 })
