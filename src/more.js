import './styles/styles.css';
import { setupModal, showDownloadPopup, setupShowModalBtns, setupDownloadCount, renderFooter } from './common';

document.addEventListener('DOMContentLoaded', () => {
    const modelURL = '../../files/TEMPLATE_ReceiptSplitter_ByMoe_v5.xlsx';
    const showModalBtns = document.querySelectorAll('.showModalBtn-Receipt');
    const downloadButton = document.querySelector('.downloadButton'); // Updated selector

    setupShowModalBtns(showModalBtns, 'userModal-Receipt');
    setupModal('userModal-Receipt', 'userForm-Receipt', modelURL);

    downloadButton.addEventListener('click', () => {
        showDownloadPopup();
    });

    const footerContainer = document.getElementById('footerContainer');
    footerContainer.innerHTML = renderFooter();
});