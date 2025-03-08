const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const main = document.getElementById("main");
let content = "";

// Render posts with data-index attributes on heart icons and main images
posts.forEach((post, index) => {
    content += `
        <section class="flex">
            <img src="${post.avatar}" class="avatar">
            <p><span class="bold name">${post.name}</span> ${post.location}</p>
        </section>
        <section>
            <!-- Add data-index to the post image for dblclick -->
            <img src="${post.post}" class="post-img" data-index="${index}">
        </section>
        <section class="flex">
            <!-- Add data-index to the heart icon -->
            <img src="/images/icon-heart.png" class="icon heart-icon" data-index="${index}">
            <img src="/images/icon-comment.png" class="icon">
            <img src="/images/icon-dm.png" class="icon">
        </section>
        <section>
            <!-- Give the likes element a unique id -->
            <p class="bold" id="likes-${index}">${post.likes} likes</p>
            <p><span class="bold">${post.username}</span> ${post.comment}</p>
        </section>
        <div class="divider"></div>
    `;
});

main.innerHTML = content;

// Function to increase likes and update the DOM for a given post index
function updateLikes(index) {
    posts[index].likes += 1;
    document.getElementById(`likes-${index}`).textContent = posts[index].likes + " likes";
}

// Attach click event listeners for heart icons
const heartIcons = document.querySelectorAll('.heart-icon');
heartIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        updateLikes(index);
    });
});

// Attach dblclick event listeners for main post images
const postImages = document.querySelectorAll('.post-img');
postImages.forEach(img => {
    img.addEventListener('dblclick', function() {
        const index = parseInt(this.getAttribute('data-index'));
        updateLikes(index);
    });
});
