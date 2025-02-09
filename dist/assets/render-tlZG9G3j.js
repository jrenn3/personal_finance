(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function n(){return`
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
    `}function l(){return`
        <footer class="py-4 bg-primary text-white text-center">
            <p>Website and Excel model created from scratch by Joseph M. Renner.</p> 
            <div class="flex justify-center space-x-6 mb-2">
                <a href="https://github.com/jrenn3" target="_blank" aria-label="GitHub">
                    <i class="fab fa-github text-2xl hover:text-support-gold"></i>
                </a>
                <a href="https://linkedin.com/in/j-renner" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-linkedin text-2xl hover:text-support-gold"></i>
                </a>
            </div>
            <p>&copy; 2025 By Moe. All Rights Reserved. Not financial advice.</p>
        </footer>
    `}function s(){return`
        <div id="userModal" class="hidden fixed inset-0 bg-neutral-dark bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 w-full max-w-sm">
                <h2 class="text-xl font-bold mb-4 text-primary">Enter Your Details</h2>
                <form id="userForm">
                    <!-- Name Field -->
                    <div class="mb-4">
                        <label for="name" class="block text-neutral-dark">Name</label>
                        <input type="text" id="name" class="w-full px-3 py-2 border rounded" required />
                    </div>
                    <!-- Email field -->
                    <div class="mb-4">
                        <label for="email" class="block text-neutral-dark">Email</label>
                        <input type="email" id="email" class="w-full px-3 py-2 border rounded" required />
                    </div>
                    <!-- Source of Discovery Input -->
                    <div class="mb-4">
                        <label for="source" class="block text-gray-700">How did you find us?</label>
                        <textarea id="source" class="w-full px-3 py-2 border rounded" rows="3" placeholder="e.g., friend's name, Google, social media" required></textarea>
                    </div>
                    <div class="flex justify-between">
                        <!-- Submit button -->
                        <button type="submit" class="downloadButton bg-primary text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-light flex items-center justify-center mx-auto space-x-3">
                            <i class="fas fa-file-excel text-white text-xl"></i>
                            <span>Download Excel</span>
                        </button>
                        <!-- Cancel Button -->
                        <button type="button" id="cancelUserModal" class="text-gray-500 hover:text-gray-700">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `}function d(){return`
        <div id="downloadPopup" class="hidden fixed inset-0 bg-neutral-dark bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 w-full max-w-sm">
                <p>Thank you! Your model should download now.</p>
                <br>
                <p>We will let you know via email when there are version updates to the model.</p>
                <br>
                <button type="button" id="closeDownloadPopup" class="text-gray-500 hover:text-gray-700">
                    Close
                </button>
            </div>
        </div>
    `}function c(){document.body.insertAdjacentHTML("afterbegin",n()),document.body.insertAdjacentHTML("beforeend",l()),document.body.insertAdjacentHTML("beforeend",s()),document.body.insertAdjacentHTML("beforeend",d())}c();
