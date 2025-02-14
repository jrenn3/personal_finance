(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="/personal_finance/assets/window_NTM-Cgl8hPLy.png",o="/personal_finance/assets/window_Recurring-De4AyuFB.png",c="/personal_finance/assets/window_Balances%20_%20Actions-BO1o5T99.png";function d(){const a=window.location.pathname,n=a.includes("index.html")?"#":"/personal_finance/index.html",r=a.includes("more.html")?"#":"/personal_finance/src/pages/more.html",i=a.includes("release-notes.html")?"#":"/personal_finance/src/pages/release-notes.html";return`
        <header id="header" class="fixed top-0 left-0 w-full bg-white z-50 shadow-sm transition-all duration-300">
            <div class="container mx-auto flex justify-center items-center px-6 py-4">
                <div class="logo mr-auto">
                    <a href="#" class="text-lg font-giaza text-primary tracking-tighter">FUNds</a>  
                </div> 
                <!-- Navigation Menu -->
                <nav class="md:flex space-x-8">
                    <a href="${n}" class="text-neutral-dark hover:text-primary">Home</a>
                    <a href="${r}" class="text-neutral-dark hover:text-primary">More</a>
                    <a href="${i}" class="text-neutral-dark hover:text-primary">Release Notes</a>
                </nav>
            </div>
        </header>
    `}function u(){return`
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
    `}function f(){return`
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
    `}function m(a,n,r,i,e,t){return`
        <section id="${a}" class="min-h-screen flex items-center justify-center bg-neutral-light relative mt-20">
            <div class="container mx-auto flex flex-col lg:flex-row items-center px-8 space-y-12 lg:space-y-0">
                
                <!-- Left Side: Zoomed-in Excel Screenshot -->
                <div id="${a}-image" class="w-full lg:w-1/2 flex justify-center transform transition-all">
                    <img src="${i}" alt="${e}" class="w-full max-w-lg shadow-lg rounded-lg">
                </div>

                <!-- Right Side: Feature Callout -->
                <div class="w-full lg:w-1/2">
                    <h2 id="${a}-headline" class="text-4xl font-bold text-primary transition-all lg:ml-6">
                        ${n}
                    </h2>
                    <div id="${a}-callout" class="my-6 text-xl transform md:translate-y-10">
                        <p class="bg-white shadow-md rounded-lg p-6 lg:ml-6">
                            ${t}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `}function p(){document.body.insertAdjacentHTML("afterbegin",d()),document.body.insertAdjacentHTML("beforeend",u()),document.body.insertAdjacentHTML("beforeend",f());const a=[{id:"scene2",headline:"The FUNds Forecast is... future focused",subHeadline:"",imgSrc:l,imgAlt:"Excel NTM Tab",calloutText:"Sick of logging past transactions? Don’t. Review where you want to go, not where you’ve been."},{id:"scene3",headline:"The FUNds Forecast is... customizable",subHeadline:"",imgSrc:o,imgAlt:"Excel NTM Tab",calloutText:"Allows adaptation to fit your personal situation."},{id:"scene4",headline:"The FUNds Forecast is... action oriented",subHeadline:"",imgSrc:c,imgAlt:"Excel NTM Tab",calloutText:"Actions matter, not visuals. We minimize distracting, redundant graphics and show you what you need."},{id:"scene5",headline:"The FUNds Forecast is... not a b*dget",subHeadline:"",imgSrc:l,imgAlt:"Excel NTM Tab",calloutText:"We're all scared of budgeting because it means limiting yourself. Instead, give yourself the comfort to SPEND IT WELL."}],n=document.getElementById("scene1");a.forEach(r=>{n.insertAdjacentHTML("afterend",m(r.id,r.headline,r.subHeadline,r.imgSrc,r.imgAlt,r.calloutText))})}p();
