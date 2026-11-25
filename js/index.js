const yearElement = document.getElementById("viti");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm && newsletterMessage) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        newsletterMessage.textContent = "Thanks for your interest! This signup form is a preview and is not connected to a mailing list yet.";
    });
}
