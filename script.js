function showResult() {
    const hallticket = document.getElementById("hallticket").value;
    const robotCheck = document.getElementById("robotCheck").checked;
    const searchPage = document.getElementById("searchPage");
    const photoPage = document.getElementById("photoPage");

    // Validation
    if (hallticket.length !== 12 || isNaN(hallticket)) {
        alert("Please enter a valid 12-digit Hall Ticket Number");
        return;
    }

    if (!robotCheck) {
        alert("Please confirm you are not a robot");
        return;
    }

    // Hide search section
    searchPage.style.display = "none";

    // Show image (same image for any 12-digit number)
    photoPage.innerHTML = `
        <h2>Student Photo</h2>
        <p><strong>Hall Ticket No:</strong> ${hallticket}</p>
        <img src="student.jpg" alt="Student Photo" style="width:200px;border:2px solid #000;">
        <br><br>
        <button onclick="location.reload()">Search Again</button>
    `;
}
