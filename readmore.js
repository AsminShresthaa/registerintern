document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('paragraph');
    const readMoreBtn = document.getElementById('readMoreBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    const fullText = paragraph.innerText;
    const truncatedText = fullText.substring(0, 150) + '...';

    let isExpanded = false;

    // Initialize with truncated text
    paragraph.innerText = truncatedText;

    // Toggle paragraph text on Read More button click
    readMoreBtn.addEventListener('click', function() {
        if (isExpanded) {
            paragraph.innerText = truncatedText;
            readMoreBtn.innerText = 'Read More';
        } else {
            paragraph.innerText = fullText;
            readMoreBtn.innerText = 'Read Less';
        }
        isExpanded = !isExpanded;
    });

    // Redirect to registration page on Logout button click
    logoutBtn.addEventListener('click', function() {
        window.location.href = "index.html";
    });
});
