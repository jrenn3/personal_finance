import './styles/styles.css'; //ensures Vite bundles Tailwind CSS styles

import database from './firebase';
import { ref, push } from 'firebase/database';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('userModal');
    const form = document.getElementById('userForm');
    const showModalBtns = document.querySelectorAll('.showModalBtn');

    const modelURL =  '/personal_finance/files/Funds_Forecast_Model_EXAMPLEv4.xlsm'; // Path to your spreadsheet
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
        const timestamp = new Date().toISOString();

        // Save user details to Firebase
        push(ref(database, 'downloads/'), {
            name,
            email,
            modelName,
            timestamp,
        })
        .then(() => {
            modal.classList.add('hidden'); // Hide the modal
            
            // Trigger the file download programmatically
            const link = document.createElement('a');
            link.href = modelURL;
            link.download;
            link.click();

            alert('Thank you! Your model should be downloading.');
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
