function submitInfo() {
    const info = document.getElementById("infoTextArea").value;
  
    // Add the info to the submittedInfos array (simulate storage)
    submittedInfos.push(info);
  
    // Save the updated submittedInfos to localStorage
    localStorage.setItem("submittedInfos", JSON.stringify(submittedInfos));
  
    // Display an alert or confirmation message to the user
    alert("Info submitted successfully!");
  
    // Clear the text area after submission
    document.getElementById("infoTextArea").value = "";
  }
  
  // Array to simulate storage of submitted infos
  const submittedInfos = getSubmittedInfos();
  
  function getSubmittedInfos() {
    // Retrieve submittedInfos data from localStorage
    return JSON.parse(localStorage.getItem("submittedInfos")) || [];
  }
  
  // Update the submittedInfos on the submitted.html page
  document.addEventListener("DOMContentLoaded", () => {
    const submittedInfosContainer = document.getElementById("submittedInfos");
  
    // Display each submitted info in the list
    submittedInfos.forEach((info, index) => {
      const infoItem = document.createElement("div");
      infoItem.textContent = `${index + 1}. ${info}`;
      submittedInfosContainer.appendChild(infoItem);
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.delete-button');
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        deleteInfo(button);
      });
    });
  
    function deleteInfo(button) {
      // Prompt the user for the deletion code (optional)
      const userInput = prompt('Enter the deletion code:');
  
      // Check if the entered code is correct (you can add your own validation logic here)
      if (userInput && userInput.trim() === 'yourDeletionCode') {
        // Code is correct, remove the corresponding info from the page
        const infoElement = button.closest('.info');
        if (infoElement) {
          infoElement.remove();
          alert('Info deleted successfully!');
          // Here, you might want to update the server/database to permanently remove the info.
        } else {
          alert('Info not found. Deletion canceled.');
        }
      } else {
        // Code is incorrect or user canceled
        alert('Incorrect code. Deletion canceled.');
      }
    }
  });
  