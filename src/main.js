import './styles/styles.css'; //ensures Vite bundles Tailwind CSS styles

import database from './firebase';
import { ref, push, onValue } from 'firebase/database';

// FUNds Forecast Model download modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('userModal');
    const form = document.getElementById('userForm');
    const showModalBtns = document.querySelectorAll('.showModalBtn');

    const modelURL =  '/personal_finance/files/FUNdsForecastModel_v5.zip'; // Path to your spreadsheet
    const modelName = modelURL.split('/').pop();

    // Iterate over all buttons and add event listeners
    showModalBtns.forEach((button) => {
        button.addEventListener('click', () => {

            // Open the modal
            modal.classList.remove('hidden');
        });
    });


    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const source = document.getElementById('source').value;
        const timestamp = new Date().toISOString();

        // Save user details to Firebase
        push(ref(database, 'downloads/'), {
            name,
            email,
            modelName,
            source,
            timestamp,
        })
        .then(() => {
            modal.classList.add('hidden'); // Hide the modal
            
            // Trigger the file download programmatically
            const link = document.createElement('a');
            link.href = modelURL;
            link.download;
            link.click();

            alert("Thank you! Your model should download now.\n\nWe will let you know via email when there are version updates to the model.");
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred. Please try again.');
        });
    });
    
    const cancelUserModal = document.getElementById('cancelUserModal');

    // Close modal when Cancel button is clicked
    cancelUserModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const downloadCountElement = document.getElementById('downloadCount');
    const downloadsRef = ref(database, 'downloads');

    // Listen for changes to the downloads node
    onValue(downloadsRef, (snapshot) => {
        const totalDownloads = snapshot.exists() ? snapshot.size : 0; // Get the count of child nodes
        downloadCountElement.textContent = `${totalDownloads} happy downloads`; // Update the count with text
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    
    copyLinkBtn.addEventListener('click', () => {
        // The URL to copy (can be the current page URL or a specific one)
        const urlToCopy = window.location.href;

        // Use the Clipboard API to copy the URL
        navigator.clipboard.writeText(urlToCopy)
            .then(() => {
                // Notify the user that the link has been copied
                alert('Link copied to clipboard!');
            })
            .catch((err) => {
                console.error('Failed to copy link: ', err);
            });
    });
});

// Receipt Splitter download modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('userModal-Receipt');
    const form = document.getElementById('userForm-Receipt');
    const showModalBtns = document.querySelectorAll('.showModalBtn-Receipt');

    const modelURL =  '/personal_finance/files/TEMPLATE_ReceiptSplitter_ByMoe_v5.xlsx'; // Path to your spreadsheet
    const modelName = modelURL.split('/').pop();

    // Iterate over all buttons and add event listeners
    showModalBtns.forEach((button) => {
        button.addEventListener('click', () => {

            // Open the modal
            modal.classList.remove('hidden');
        });
    });


    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const source = document.getElementById('source').value;
        const timestamp = new Date().toISOString();

        // Save user details to Firebase
        push(ref(database, 'downloads/'), {
            name,
            email,
            modelName,
            source,
            timestamp,
        })
        .then(() => {
            modal.classList.add('hidden'); // Hide the modal
            
            // Trigger the file download programmatically
            const link = document.createElement('a');
            link.href = modelURL;
            link.download;
            link.click();

            setTimeout(showDownloadPopup, 500);
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred. Please try again.');
        });
    });

    const cancelUserModal = document.getElementById('cancelUserModal');

    // Close modal when Cancel button is clicked
    cancelUserModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    });
});

function showDownloadPopup() {
    const popup = document.getElementById("downloadPopup");
    popup.classList.remove("hidden", "opacity-0", "scale-95");
    popup.classList.add("opacity-100", "scale-100");

    // Automatically hide after 5 seconds
    setTimeout(() => {
        closePopup();
    }, 5000);
}

function closePopup() {
    const popup = document.getElementById("downloadPopup");
    popup.classList.add("opacity-0", "scale-95");
    setTimeout(() => popup.classList.add("hidden"), 300);
}

// Example: Trigger when file is downloaded
document.getElementById("downloadButton").addEventListener("click", function () {
    // Simulate a download action (replace with actual download logic)
    setTimeout(showDownloadPopup, 500);
});