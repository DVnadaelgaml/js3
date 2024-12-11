// Array to store bookmarks
const bookmarks = [];

// Add Bookmark Function
function addBookmark() {
    const siteName = document.getElementById('siteName').value.trim();
    const siteUrl = document.getElementById('siteUrl').value.trim();

    // Validate inputs using Regular Expression
    const urlPattern = /^(https?:\/\/)?([\w\-])+(\.[\w\-]+)+[/#?]?.*$/;
    if (!siteName || !siteUrl || !urlPattern.test(siteUrl)) {
        alert('Please enter a valid name and URL!');
        return;
    }

    // Add to array
    bookmarks.push({ name: siteName, url: siteUrl });
    renderBookmarks();
    
    // Clear inputs
    document.getElementById('siteName').value = '';
    document.getElementById('siteUrl').value = '';
}

// Render Bookmarks
function renderBookmarks() {
    const bookmarksList = document.getElementById('bookmarksList');
    bookmarksList.innerHTML = '';

    bookmarks.forEach((bookmark, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${bookmark.name}</td>
                <td><a href="${bookmark.url}" target="_blank" class="btn btn-success btn-sm">Visit</a></td>
                <td><button class="btn btn-danger btn-sm" onclick="deleteBookmark(${index})">Delete</button></td>
            </tr>
        `;
        bookmarksList.innerHTML += row;
    });
}

// Delete Bookmark Function
function deleteBookmark(index) {
    bookmarks.splice(index, 1); // Remove bookmark from array
    renderBookmarks(); // Re-render the table
}
