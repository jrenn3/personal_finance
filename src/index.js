import './styles/styles.css';
import { setupModal, showDownloadPopup, setupShowModalBtns, setupDownloadCount, renderFooter } from './common';

document.addEventListener('DOMContentLoaded', () => {
    setupDownloadCount();

    const modelURL = '/files/FUNdsForecastModel_v5.zip';
    const showModalBtns = document.querySelectorAll('.showModalBtn');  
    setupShowModalBtns(showModalBtns, 'userModal');
    setupModal('userModal', 'userForm', modelURL);

    const copyLinkBtn = document.getElementById('copyLinkBtn');
    copyLinkBtn.addEventListener('click', async () => {
        const urlToCopy = window.location.href;

        try {
            await navigator.clipboard.writeText(urlToCopy);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy link: ', err);
        }
    });

    const downloadButton = document.querySelector('.downloadButton'); // Updated selector
    downloadButton.addEventListener('click', () => {
        showDownloadPopup();
    });

    const footerContainer = document.getElementById('footerContainer');
    footerContainer.innerHTML = renderFooter();
});