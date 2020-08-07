const URL = "http://localhost:8000/search/";

getYoutubeDataUtil = (e) => {
    if(e.key == "Enter"){
        getYoutubeData();
    }
}

getYoutubeData = () => {
    const query = document.getElementById('search-input').value;
    if(!query){
        return;
    }
    const encodedQuery = encodeURIComponent(query);
    let fullUrl = `${URL}${encodedQuery}`;
    fetch(fullUrl)
    .then((response) => {
        return response.json();
    }).then((data) => {
        displayImageContents(data.items);
    })
}

displayImageContents = (videos) => {

    let imageContent = "";
    videos.map((video) => {
        imageContent += `
                            <div class="video-container">
                                <div class="video-thumbnail" style="background: url(${video.thumbHigh}); background-position: center;
                                background-size: cover;">
                                </div>
                                <div class="video-title">
                                    ${video.title}
                                </div>
                                <div class="channel-name">
                                    ${video.channelTitle}✅
                                </div>
                                <div class="upload-date">
                                    ${video.publishedAt}
                                </div>
                            </div>
                        `
    })
    document.querySelector('.videos-list').innerHTML = imageContent;
}