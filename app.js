document.addEventListener("DOMContentLoaded", function () {
  const formInputs = document.querySelectorAll(".input_placeholder_text");
  const uploadBox = document.querySelector(".upload_box");
  const submitButton = document.querySelector(".submit_btn");
  const ticketContainer = document.querySelector(".ticket-container");
  let uploadedFile = null;

  uploadBox.addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/jpeg, image/png";
    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file && file.size <= 500 * 1024) {
        uploadedFile = URL.createObjectURL(file);
        uploadBox.innerHTML = `<p>${file.name} uploaded</p>`;
      } else {
        alert("File must be JPG or PNG and under 500KB");
      }
    });
    fileInput.click();
  });

  submitButton.addEventListener("click", function () {
    const fullName = formInputs[0].value.trim();
    const email = formInputs[1].value.trim();
    const github = formInputs[2].value.trim();

    if (!fullName || !email || !github) {
      alert("Please fill in all fields.");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    document.getElementById("ticket-name").textContent = fullName;
    document.getElementById("ticket-email").textContent = email;
    document.getElementById("ticket-username").textContent = fullName;
    document.getElementById("ticket-github").textContent = `@${github}`;

    if (uploadedFile) {
      document.getElementById("avatar-preview").src = uploadedFile;
    }

    document.querySelector(".container").style.display = "none";
    ticketContainer.style.display = "flex";
    ticketContainer.style.flexDirection = "column";
    ticketContainer.style.alignItems = "center";
    ticketContainer.style.justifyContent = "center";
    ticketContainer.style.padding = "20px";
    ticketContainer.style.background = "#1a1a2e";
    ticketContainer.style.color = "#fff";
    ticketContainer.style.borderRadius = "10px";
    ticketContainer.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.2)";
  });
});
