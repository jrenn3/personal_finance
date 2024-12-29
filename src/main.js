import './styles/styles.css';

document.querySelectorAll('a[download]').forEach(button => {
    button.addEventListener('click', () => {
        alert('Your download will start shortly!');
    });
});