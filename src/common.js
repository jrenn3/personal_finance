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

        const databasePath = modalId === 'userModal' 
            ? 'FUNds-downloads/' 
            : modalId === 'userModal-Receipt' 
            ? 'ReceiptSplitter-downloads/' 
            : 'downloads/';

        try {
            await push(ref(database, databasePath), {
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

export const renderHeader = () => {
    return `
        <header id="header" class="fixed top-0 left-0 w-full bg-white z-50 shadow-sm transition-all duration-300">
            <div class="container mx-auto flex justify-center items-center px-6 py-4">
                <div class="logo mr-auto">
                    <a href="#" class="text-lg font-giaza text-primary tracking-tighter">FUNds</a>  
                </div>  
                <!-- Navigation Menu -->
                <nav class="md:flex space-x-8">
                    <a href="../../index.html" class="text-neutral-dark hover:text-primary">Home</a>
                    <a href="../../src/pages/more.html" class="text-neutral-dark hover:text-primary">More</a>
                    <a href="../../src/pages/release-notes.html" class="text-neutral-dark hover:text-primary">Release Notes</a>
                </nav>
            </div>
        </header>
    `;
}

export const renderFooter = () => {
    return `
        <footer class="py-4 bg-primary text-white text-center">
            <p>Website and Excel model created from scratch by Joseph M. Renner.</p> 
            <div class="flex justify-center space-x-6 my-2">
                <a href="https://github.com/jrenn3" target="_blank" aria-label="GitHub">
                    <i class="fab fa-github text-2xl hover:text-support-gold"></i>
                </a>
                <a href="https://linkedin.com/in/j-renner" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin text-2xl hover:text-support-gold"></i>
                </a>
            </div>
            <p>&copy; 2025 By Moe. All Rights Reserved. Not financial advice.</p>
        </footer>
    `;
};