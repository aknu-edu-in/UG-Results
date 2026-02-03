function showResult() {
    const hallticket = document.getElementById("hallticket").value.trim();
    const robotCheck = document.getElementById("robotCheck").checked;
    const searchPage = document.getElementById("searchPage");
    const photoPage = document.getElementById("photoPage");

    // Validate 12-digit number
    if (!/^\d{12}$/.test(hallticket)) {
        alert("Please enter a valid 12-digit Hall Ticket Number");
        return;
    }

    // Robot check
    if (!robotCheck) {
        alert("Please confirm you are not a robot");
        return;
    }

    // Hide search section
    searchPage.style.display = "none";

    // Show photo
    photoPage.style.display = "block";
    photoPage.innerHTML = `
        <h2>Student Photo</h2>
        <p><strong>Hall Ticket No:</strong> ${hallticket}</p>
        <img src="images/student1.jpg" alt="Student Photo">
    `;
}
