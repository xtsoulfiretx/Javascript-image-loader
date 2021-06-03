//

let displayedImg;
let prevDisplayImg;

// Image Details for displayedImg and LinkedImgs
const ImageDetails = class {
    constructor(id, author,url, download_url,) {
        this.id = id,
        this.author = author,
        this.url = url,
        this.download_url = download_url
    }
}

// Fetches a random image

function getImages(){
    const randomPage = Math.floor(Math.random() * (10) + 1)
    axios.get(`https://picsum.photos/v2/list?page=${randomPage}&limit=10`)
            .then(function(response) {
                pickRandomImage(response.data)
                console.log(response.data);
            })
            // }) .catch(err => errorHandler(err))

}

// Picks a random image from the fetched data
const pickRandomImage = array => {
    const randomImage = Math.floor(Math.random() * (array.length - 1))
    const chosenImage = array[randomImage]
    // const chosenImageLinks = checkLinks(chosenImage)
    displayedImg = new ImageDetails(
        chosenImage.id,
        chosenImage.author,
        chosenImage.url,
        chosenImage.download_url,
        // chosenImageLinks
    )
    loadImage()
    loadImageDetails()
}

function saveOldImage(){
    prevDisplayImg = displayedImg;
    console.log("SOI function: ",prevDisplayImg);
}

function loadImage(){
    console.log(displayedImg);
    $(".image-box").attr("src", displayedImg.download_url);
}

function loadImageDetails(){
    $(".image-url").text(`URL: ${displayedImg.url}`);
    $(".image-id").text(`ID: ${displayedImg.id}`);
    $(".image-author").text(`Author: ${displayedImg.author}`)
}
//need checklinks function

$(document).ready(getImages());

$("#call-test").click(function(){
    saveOldImage();
    getImages();
});


