import './styles/styles.css';
import { renderFooter, renderHeader } from './common';

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('footerContainer');
    footerContainer.innerHTML = renderFooter();

    const headerContainer = document.getElementById('headerContainer');
    headerContainer.innerHTML = renderHeader();
});