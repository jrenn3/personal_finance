import './styles/styles.css';
import { setupModal, showDownloadPopup, setupShowModalBtns, setupDownloadCount } from './common';

document.addEventListener('DOMContentLoaded', () => {
    const modelURL = '/files/FUNdsForecastModel_v5.zip';
    const showModalBtns = document.querySelectorAll('.showModalBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const downloadButton = document.querySelector('.downloadButton'); // Updated selector

    setupShowModalBtns(showModalBtns, 'userModal');
    setupModal('userModal', 'userForm', modelURL);
    setupDownloadCount();

    copyLinkBtn.addEventListener('click', async () => {
        const urlToCopy = window.location.href;

        try {
            await navigator.clipboard.writeText(urlToCopy);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy link: ', err);
        }
    });

    downloadButton.addEventListener('click', () => {
        showDownloadPopup();
    });
});