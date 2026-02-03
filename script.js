function showResult() {
    const hallticket = document.getElementById("hallticket").value;
    const robotChecked = document.getElementById("robotCheck").checked;

    // Validate 12-digit number
    if (!/^\d{12}$/.test(hallticket)) {
        alert("Please enter a valid 12-digit hall ticket number");
        return;
    }

    // Check "I am not a robot"
    if (!robotChecked) {
        alert("Please confirm you are not a robot");
        return;
    }

    // Hall ticket to image mapping
    const students = {
        "123456789012": "images/student1.jpg"
        // Add more if needed
    };

    if (students[hallticket]) {
        // Hide search interface
        document.getElementById("searchPage").style.display = "none";
        document.getElementById("photoPage").style.display = "block";

        // Show full-screen photo
        document.getElementById("photoPage").innerHTML = `
            <img src="${students[hallticket]}" alt="Student Photo">
        `;
    } else {
        alert("No result found");
    }
}
