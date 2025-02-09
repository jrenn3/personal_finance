import database from './firebase';
import { ref, push, onValue } from 'firebase/database';

export const setupModal = (modalId, formId, modelURL) => {
    const modal = document.getElementById(modalId);
    const form = document.getElementById(formId);

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const source = document.getElementById('source').value;
        const timestamp = new Date().toISOString();
        const modelName = modelURL.split('/').pop();

        try {
            await push(ref(database, 'downloads/'), {
                name,
                email,
                modelName,
                source,
                timestamp,
            });

            modal.classList.add('hidden');

            const link = document.createElement('a');
            link.href = modelURL;
            link.download;
            link.click();
            
            showDownloadPopup();

        } catch (error) {
            console.error('Error saving data:', error);
            alert('An error occurred. Please try again.');
        }
        
    });

    document.getElementById('cancelUserModal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
};

export const showDownloadPopup = () => {
    const popup = document.getElementById("downloadPopup");
    popup.classList.remove("hidden");

    document.getElementById('closeDownloadPopup').addEventListener('click', () => {
        console.log('closeDownloadPopup');
        popup.classList.add('hidden');
    });
};

export const closePopup = () => {
    const popup = document.getElementById("downloadPopup");
    popup.classList.add("opacity-0", "scale-95");
    setTimeout(() => popup.classList.add("hidden"), 300);
};

export const setupShowModalBtns = (buttons, modalId) => {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            document.getElementById(modalId).classList.remove('hidden');
        });
    });
};

export const setupDownloadCount = () => {
    const downloadCountElement = document.getElementById('downloadCount');
    const downloadsRef = ref(database, 'downloads');

    onValue(downloadsRef, (snapshot) => {
        const totalDownloads = snapshot.exists() ? snapshot.size : 0;
        downloadCountElement.textContent = `${totalDownloads} happy downloads`;
    });
};