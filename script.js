const form = document.getElementById("registrationForm");
const participants = document.getElementById("participants");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const college = document.getElementById("college").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const eventName = document.getElementById("event").value;

    const participant = document.createElement("div");

    participant.className = "card";

    participant.innerHTML = `
        <h3>${name}</h3>
        <p><b>College:</b> ${college}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Event:</b> ${eventName}</p>
    `;

    participants.innerHTML = "";

    participants.appendChild(participant);

    form.reset();

    alert("Registration Successful! 🎉");
});