import './styles/styles.css'; //ensures Vite bundles Tailwind CSS styles

import database from './firebase';
import { ref, push, onValue } from 'firebase/database';

document.addEventListener('DOMContentLoaded', () => {
    // Combine modal and form elements
    const modals = {
        funds: {
            modal: document.getElementById('userModal'),
            form: document.getElementById('userForm'),
            modelURL: '/personal_finance/files/FUNdsForecastModel_v5.zip',
            showModalBtns: document.querySelectorAll('.showModalBtn')
        },
        receipt: {
            modal: document.getElementById('userModal-Receipt'),
            form: document.getElementById('userForm-Receipt'),
            modelURL: '/personal_finance/files/TEMPLATE_ReceiptSplitter_ByMoe_v5.xlsx',
            showModalBtns: document.querySelectorAll('.showModalBtn-Receipt')
        }
    };

    // Iterate over modals and add event listeners
    Object.values(modals).forEach(({ modal, form, modelURL, showModalBtns }) => {
        showModalBtns.forEach((button) => {
            button.addEventListener('click', () => {
                toggleModal(modal, true);
                console.log('modal open')} //TESTING
            );
        });
        handleFormSubmission(form, modelURL);
    });

    // Close modal when Cancel button is clicked
    document.querySelectorAll('.closePopUp').forEach((button) => {
        console.log('popup close found');
        button.addEventListener('click', () => {
            toggleModal(button.closest('.modal'), false);
            console.log('Modal closed'); //TESTING
        });
    });

    // Handle download count
    const downloadCountElement = document.getElementById('downloadCount');
    const downloadsRef = ref(database, 'downloads');

    onValue(downloadsRef, (snapshot) => {
        const totalDownloads = snapshot.exists() ? snapshot.size : 0; // Get the count of child nodes
        console.log(totalDownloads);
        downloadCountElement.textContent = `12 happy downloads`; // TEST
        // downloadCountElement.textContent = `${totalDownloads} happy downloads`; // Update the count with text
    });

    // Handle copy link button
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    copyLinkBtn.addEventListener('click', () => {
        const urlToCopy = window.location.href;

        navigator.clipboard.writeText(urlToCopy)
            .then(() => alert('Link copied to clipboard!'))
            .catch((err) => console.error('Failed to copy link: ', err));
    });

    // Example: Trigger when file is downloaded
    document.getElementById("downloadButton").addEventListener("click", function () {
        setTimeout(showDownloadPopup, 500);
    });
});

// Function to handle modal visibility
function toggleModal(modal, show) {
    modal.classList.toggle('hidden', !show);
}

// Function to handle form submission
function handleFormSubmission(form, modelURL) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const source = document.getElementById('source').value;
        const timestamp = new Date().toISOString();
        const modelName = modelURL.split('/').pop();

        // Save user details to Firebase
        push(ref(database, 'downloads/'), {
            name,
            email,
            modelName,
            source,
            timestamp,
        })
        .then(() => {
            toggleModal(form.closest('.modal'), false); // Hide the modal
            
            // Trigger the file download programmatically
            const link = document.createElement('a');
            link.href = modelURL;
            link.download;
            link.click();

            showDownloadPopup();
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred.');
        });
    });
}

function showDownloadPopup() {
    const popup = document.getElementById("downloadPopup");
    popup.classList.remove("hidden");

    const closeDownloadPopup = document.getElementById('closeDownloadPopup');
    closeDownloadPopup.addEventListener('click', () => {
        popup.classList.add('hidden');  
    });
}

function closePopup() {
    const popup = document.getElementById("downloadPopup");
    popup.classList.add("opacity-0", "scale-95");
    setTimeout(() => popup.classList.add("hidden"), 300);
}