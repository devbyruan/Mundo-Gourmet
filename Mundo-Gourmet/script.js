function toggleLike(element) {
    element.classList.toggle('clicked');
    var likeIcon = element.querySelector('.like-icon');
    var likeCount = element.querySelector('.like-count');
    
    var currentLikes = parseInt(likeCount.innerText, 10);
    likeCount.innerText = element.classList.contains('clicked') ? currentLikes + 1 : currentLikes - 1;

    var iconPath = element.classList.contains('clicked') ? 'icons/heart-fill.svg' : 'icons/heart.svg';
    likeIcon.src = iconPath;
}

function openShareModal() {
    var shareModalOverlay = document.getElementById('shareModalOverlay');
    shareModalOverlay.style.display = 'flex';
}

function closeShareModal() {
    var shareModalOverlay = document.getElementById('shareModalOverlay');
    shareModalOverlay.style.display = 'none';
}

function shareOnPlatform(platform) {
    alert('Compartilhando no ' + platform);
    closeShareModal();
}

function toggleLike(element) {
    element.classList.toggle('clicked');
    var likeIcon = element.querySelector('.like-icon');
    var likeCount = element.querySelector('.like-count');

    var currentLikes = parseInt(likeCount.innerText, 10);
    likeCount.innerText = element.classList.contains('clicked') ? currentLikes + 1 : currentLikes - 1;

    var iconPath = element.classList.contains('clicked') ? 'icons/heart-fill.svg' : 'icons/heart.svg';
    likeIcon.src = iconPath;
}


function redirectToCreatePost() {
    window.location.href = "create-post/create_post.html";
}

function createPost() {
    const mediaInput = document.getElementById("mediaInput");
    const captionInput = document.getElementById("captionInput").value;
    const categoryInput = document.getElementById("categoryInput").value;

    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const mediaPreview = document.createElement("div");
    mediaPreview.classList.add("media-preview");
    if (mediaInput.files && mediaInput.files[0]) {
        const file = mediaInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            if (file.type.startsWith("image")) {
                const img = document.createElement("img");
                img.src = e.target.result;
                mediaPreview.appendChild(img);
            } else if (file.type.startsWith("video")) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                mediaPreview.appendChild(video);
            }
        };
        reader.readAsDataURL(file);
    }
    postElement.appendChild(mediaPreview);

    const caption = document.createElement("p");
    caption.textContent = captionInput;
    postElement.appendChild(caption);

    const category = document.createElement("p");
    category.textContent = "Categoria: " + categoryInput;
    postElement.appendChild(category);
    const feed = document.getElementById("feed");
    feed.insertBefore(postElement, feed.firstChild);

    
    mediaInput.value = "";
    document.getElementById("captionInput").value = "";
}