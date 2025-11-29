const reels = [
{
    ismuted: true,
    username: "Sandie Williams",
    likeCount: 14820,
    isLiked: false,
    commentCount: 423,
    shareCount: 92,
    isFollowed: false,
    caption: "New watercolor techniques to try this weekend!",
    video: "./reels/video1.mp4",
    userprofile: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
    ismuted: true,
    username: "James Anderson",
    likeCount: 9820,
    isLiked: true,
    commentCount: 184,
    shareCount: 41,
    isFollowed: true,
    caption: "UI tip: Padding is personality. Give your elements some space.",
    video: "./reels/video2.mp4",
    userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
},
{
    ismuted: true,
    username: "Micihael Scott",
    likeCount: 20340,
    isLiked: true,
    commentCount: 512,
    shareCount: 120,
    isFollowed: false,
    caption: "Just launched my new coding tutorial series! Check it out.",
    video: "./reels/video3.mp4",
    userprofile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
},
{
    ismuted: true,
    username: "Lana Rhoades",
    likeCount: 15760,
    isLiked: false,
    commentCount: 298,
    shareCount: 75,
    isFollowed: true,
    caption: "Exploring the mountains was an unforgettable experience!",
    video: "./reels/video4.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
},
{
    ismuted: true,
    username: "John Doe",
    likeCount: 11230,   
    isLiked: false,
    commentCount: 210,
    shareCount: 60,
    isFollowed: false,
    caption: "Check out my latest travel vlog!",
    video: "./reels/video5.mp4",
    userprofile: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
},
{
    ismuted: true,
    username: "Emma Stone",
    likeCount: 13450,
    isLiked: true,
    commentCount: 350,
    shareCount: 80,
    isFollowed: true,
    caption: "Delicious homemade pasta recipe!",
    video: "./reels/video6.mp4",
    userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
}
];

var allReel = document.querySelector('.all-reels')

function addData(){
    var sum = ''
reels.forEach(function(val,idx){
    sum = sum + `<div class="reels">
                    <video autoplay loop ${val.ismuted?'muted':''}muted src="${val.video}"></video>
                    <div class="mute" id=${idx}>
                    ${val.ismuted?'<i class="ri-volume-mute-line"></i>':'<i class="ri-volume-up-line"></i>'}
            </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${val.userprofile}" alt="">
                            <h4>${val.username}</h4>
                            <button id=${idx} class="follow">${val.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${val.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon icon">${val.isLiked?'<i class="love ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
                            <h6>${val.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${val.commentCount}</h6>
                        </div>    
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                            <h6>${val.shareCount}</h6>
                        </div>    
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
});

allReel.innerHTML = sum;

  applyVideoObserver();
}

addData();

allReel.addEventListener('click',function(val){
    if(val.target.className === 'like'){
        if(!reels[val.target.id].isLiked){
            reels[val.target.id].likeCount++
            reels[val.target.id].isLiked = true
        }else{
            reels[val.target.id].likeCount--
            reels[val.target.id].isLiked = false
        }
        addData();
    }

    if(val.target.className === 'follow'){
        if(!reels[val.target.id].isFollowed){
            reels[val.target.id].isFollowed = true
        }else{
            reels[val.target.id].isFollowed = false
        }
        addData();
    }

    if(val.target.className === 'mute'){
        if(!reels[val.target.id].ismuted){
            reels[val.target.id].ismuted = true
        }else{
            reels[val.target.id].ismuted = false
        }
        addData();
    }
});

function applyVideoObserver(){
    const videos = document.querySelectorAll(".reels video");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            let id = Array.from(document.querySelectorAll(".reels video")).indexOf(entry.target);

            if (entry.isIntersecting) {
                entry.target.play();
            entry.target.muted = reels[id].ismuted; 
            } else {
        entry.target.pause();
        entry.target.muted = true;
    }
});
    }, { threshold: 0.7 });
    videos.forEach(video => observer.observe(video));
}