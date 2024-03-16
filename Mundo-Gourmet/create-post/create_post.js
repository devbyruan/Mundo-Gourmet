function updatePreview(input) {
    const preview = document.querySelector('.image-preview');
    preview.innerHTML = ''; // Limpa a prévia anterior

    const files = input.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                preview.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    }
}


const textarea = document.getElementById("captionInput");


textarea.addEventListener("input", function() {
    
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});

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

