import './styles/styles.css';
import { renderFooter } from './common';

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footerContainer');
    footerContainer.innerHTML = renderFooter();
});