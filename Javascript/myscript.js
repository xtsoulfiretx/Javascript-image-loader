//Global Variables

let displayedImg;
let prevDisplayImg;

// Image Details for displayedImg and LinkedImgs
class ImageDetails {
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

function loadImage(){
    $(".image-box").attr("src", displayedImg.download_url);
}

function loadImageDetails(){
    $(".image-url").text(`URL: ${displayedImg.url}`);
    $(".image-id").text(`ID: ${displayedImg.id}`);
    $(".image-author").text(`Author: ${displayedImg.author}`)
}
    
//need checklinks function

$(document).ready(getImages());

$(".next").click(function(){
    prevDisplayImg = displayedImg;
    getImages();
});

$("#prev-img").click(function(){
    displayedImg = prevDisplayImg;
    loadImage();
    loadImageDetails();
});


// Email Section
const EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

let savedEmails = [];

const validateEmail = function(email) {
    if (email.match(EmailRegex) && email.length > 0) {
        return true 
    } else {
        return false
    }
}

$("#email").on('input', function (){

    const isValid = validateEmail($("#email").val())

    if (isValid) {
        console.log("email valid");
        $("#email").css("border", "3px solid green");
        $("#link-button").css("background-color", "#191a1c");
    } 
    else {
        console.log("email not valid")
        $("#email").css("border", "3px solid red");
        $("#link-button").css("background-color", "#5c5d5e");
    }
});


$("#link-button").click(function (){

    const isValid = validateEmail($("#email").val())

    if (isValid) {
        $(".email-show").css("display", "none");
        $(".email-container").css("display", "flex");
        linkEmail($("#email").val())
    } 
    else {
        $(".warning-msg").css("color", "#a3a3a3");
        setTimeout(function() {
            $(".warning-msg").css("color", "#191a1c");
          }, 3000);
    }
});


const linkEmail = email => {
    let isNewEmail = true
    let alreadyLinked = false
    for (let savedEmail in savedEmails) {
        if (savedEmail === email) {
            isNewEmail = false
            break
        }
    }
    if (isNewEmail) {
        savedEmails[email] = [displayedImg]
        let vis_Email = $("<p></p>").text(email).addClass("gallery-btn");
        $(".saved-emails").append(vis_Email);
        $(".gallery-btn").off("click");
        $(".gallery-btn").on("click", function (){
            $(".gallery-loader-head").css("display", "flex");
            $("#gallery-loader").css("display", "flex");
            $(".image-loader-head").css("display", "none");
            $("#image-loader").css("display", "none");
            $(".image-loader-info").css("display", "none");
            $(".image-info-forms").css("display", "none");

            for (let a = 0; a < savedEmails[email].length; a++) {
                let imageCollectionContainer = $("<div></div>").addClass("gallery-image-container");
                imageCollectionContainer.append($("<img>").addClass("gallery-image-box").attr("src", savedEmails[email][a].download_url));
                $(".gallery-container").append(imageCollectionContainer);
            }
        });

        let vis_Indicator = $("<h4></h4>").text(savedEmails[email].length);
        $(".saved-emails").append(vis_Indicator);
        console.log("email added");
    } 
    else {
        for (let i = 0; i < savedEmails[email].length; i++) {
            if (savedEmails[email][i].id === displayedImg.id) {
                alreadLinked = true
                break
            }
        }
        if (!alreadyLinked) {
            savedEmails[email].push(displayedImg)
            let vis_Indicator = $("<h4></h4>").text(savedEmails[email].length)
            $(`p:contains("${email}")`).next().replaceWith(vis_Indicator);
            console.log("will update emails")
        } 
        else {
            console.log("email already added")
        }
    }
    return alreadyLinked
}

$(".email-show").click(function(){
    $(".email-show").css("display", "none");
    $(".email-container").css("display", "flex");
});

$(".email-head").click(function (){
    $(".email-show").css("display", "flex");
    $(".email-container").css("display", "none");
});

//Gallery Mode

$(".back-to").click(function (){
    $(".gallery-loader-head").css("display", "none");
    $("#gallery-loader").css("display", "none");
    $(".image-loader-head").css("display", "flex");
    $("#image-loader").css("display", "flex");
    $(".image-loader-info").css("display", "flex");
    $(".image-info-forms").css("display", "flex");

    $(".gallery-image-container").remove();
});

// $(".gallery-btn").click(function (){
//     $(".gallery-loader-head").css("display", "flex");
//     $("#gallery-loader").css("display", "flex");
//     $(".image-loader-head").css("display", "none");
//     $("#image-loader").css("display", "none");
//     $(".image-loader-info").css("display", "none");
//     $(".image-info-forms").css("display", "none");
//     console.log("clicked");
// });

$(".gallery-image-container").append(imageCollection);