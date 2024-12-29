import './styles/styles.css'; //ensures Vite bundles Tailwind CSS styles

import database from './firebase';
import { ref, push } from 'firebase/database';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('userModal');
    const form = document.getElementById('userForm');
    const downloadButton = document.querySelector('a[download]');

    // Show the modal when the download button is clicked
    downloadButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent direct download
        modal.classList.remove('hidden');
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
            timestamp,
        })
        .then(() => {
            modal.classList.add('hidden'); // Hide the modal
            alert('Thank you! Your download will start now.');

            // Trigger the file download
            downloadButton.click();
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred. Please try again.');
        });
    });
});
