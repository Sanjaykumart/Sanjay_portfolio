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
emailjs.init("ZP7T3n10n3qbWYhx7");
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    emailjs.sendForm("service_69fan3h", "template_iteig2p", this)
    .then(() => alert("Email sent successfully!"))
    .catch(() => alert("Failed to send email. Try again."));
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
