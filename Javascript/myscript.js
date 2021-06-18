function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Global Variables
var displayedImg;
var prevDisplayImg; // Image Details for displayedImg and LinkedImgs

var ImageDetails = function ImageDetails(id, author, url, download_url) {
  "use strict";

  _classCallCheck(this, ImageDetails);

  this.id = id, this.author = author, this.url = url, this.download_url = download_url;
}; // Fetches a random image


function getImages() {
  var randomPage = Math.floor(Math.random() * 10 + 1);
  axios.get("https://picsum.photos/v2/list?page=".concat(randomPage, "&limit=100")).then(function (response) {
    pickRandomImage(response.data);
    console.log(response.data);
  }); // }) .catch(err => errorHandler(err))
} // Picks a random image from the fetched data


var pickRandomImage = function pickRandomImage(array) {
  var randomImage = Math.floor(Math.random() * (array.length - 1));
  var chosenImage = array[randomImage]; // const chosenImageLinks = checkLinks(chosenImage)

  displayedImg = new ImageDetails(chosenImage.id, chosenImage.author, chosenImage.url, chosenImage.download_url);
  loadImage();
  loadImageDetails();
}; // this loads the image into my display box


function loadImage() {
  $(".image-box").attr("src", displayedImg.download_url);
} // this loads the image details into my image details container


function loadImageDetails() {
  $(".image-url").text("URL: ".concat(displayedImg.url));
  $(".image-id").text("ID: ".concat(displayedImg.id));
  $(".image-author").text("Author: ".concat(displayedImg.author));
} // This will load an image and put it on display the moment the page gets loaded 


$(document).ready(getImages()); // These 2 functions handle cycling through the downloaded images

$(".next").click(function () {
  prevDisplayImg = displayedImg;
  getImages();
});
$("#prev-img").click(function () {
  displayedImg = prevDisplayImg;
  loadImage();
  loadImageDetails();
}); // Email Section

var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var savedEmails = []; // This function will return a true or flase variable depending on if it's compared email matches the regex 

var validateEmail = function validateEmail(email) {
  if (email.match(EmailRegex) && email.length > 0) {
    return true;
  } else {
    return false;
  }
}; // This function will tell the user if their email is valid or not in the input field


$("#email").on('input', function () {
  var isValid = validateEmail($("#email").val());

  if (isValid) {
    $("#email").css("border", "3px solid green");
    $("#link-button").css("background-color", "#191a1c");
  } else {
    $("#email").css("border", "3px solid red");
    $("#link-button").css("background-color", "#5c5d5e");
  }
}); // This function will stop the user from clicking the link button if their email is not valid

$("#link-button").click(function () {
  var isValid = validateEmail($("#email").val());

  if (isValid) {
    $(".email-show").css("display", "none");
    $(".email-container").css("display", "flex");
    linkEmail($("#email").val());
  } else {
    $(".warning-msg").css("color", "#a3a3a3");
    setTimeout(function () {
      $(".warning-msg").css("color", "#191a1c");
    }, 3000);
  }
}); // This function will save the email that has been validated and save it with an image. It also handles a majority of the gallery functions.

var linkEmail = function linkEmail(email) {
  var isNewEmail = true;
  var alreadyLinked = false;

  for (var savedEmail in savedEmails) {
    if (savedEmail === email) {
      isNewEmail = false;
      break;
    }
  }

  if (isNewEmail) {
    savedEmails[email] = [displayedImg];
    var vis_Email = $("<p></p>").text(email).addClass("gallery-btn");
    $(".saved-emails").append(vis_Email); // This function is here due to the issue that you can not target a Dom element that does not exist on page load

    $(".gallery-btn").off("click");
    $(".gallery-btn").on("click", function () {
      $(".gallery-loader-head").css("display", "flex");
      $("#gallery-loader").css("display", "flex");
      $(".gallery-container").css("display", "flex");
      $(".image-loader-head").css("display", "none");
      $("#image-loader").css("display", "none");
      $(".image-loader-info").css("display", "none");
      $(".image-info-forms").css("display", "none"); // this function will create a new image container and display the saved images 

      $(".gallery-image-container").remove();

      for (var a = 0; a < savedEmails[email].length; a++) {
        var imageCollectionContainer = $("<div></div>").addClass("gallery-image-container");
        imageCollectionContainer.append($("<img>").addClass("gallery-image-box").attr("src", savedEmails[email][a].download_url));
        $(".gallery-container").append(imageCollectionContainer);
      }
    });
    var vis_Indicator = $("<h4></h4>").text(savedEmails[email].length);
    $(".saved-emails").append(vis_Indicator);
    console.log("email added");
  } else {
    for (var i = 0; i < savedEmails[email].length; i++) {
      if (savedEmails[email][i].id === displayedImg.id) {
        alreadLinked = true;
        break;
      }
    }

    if (!alreadyLinked) {
      savedEmails[email].push(displayedImg);

      var _vis_Indicator = $("<h4></h4>").text(savedEmails[email].length);

      $("p:contains(\"".concat(email, "\")")).next().replaceWith(_vis_Indicator); // This function is repeated here so that the gallery will update when an email is linked twice or more

      $(".gallery-btn").on("click", function () {
        $(".gallery-image-container").remove();

        for (var a = 0; a < savedEmails[email].length; a++) {
          var imageCollectionContainer = $("<div></div>").addClass("gallery-image-container");
          imageCollectionContainer.append($("<img>").addClass("gallery-image-box").attr("src", savedEmails[email][a].download_url));
          $(".gallery-container").append(imageCollectionContainer);
        }
      });
      console.log("will update emails");
    } else {
      console.log("email already added");
    }
  }

  return alreadyLinked;
};

$(".email-show").click(function () {
  $(".email-show").css("display", "none");
  $(".email-container").css("display", "flex");
});
$(".email-head").click(function () {
  $(".email-show").css("display", "flex");
  $(".email-container").css("display", "none");
}); //Return from gallery to image loader

$(".back-to").click(function () {
  $(".gallery-loader-head").css("display", "none");
  $("#gallery-loader").css("display", "none");
  $(".image-loader-head").css("display", "flex");
  $("#image-loader").css("display", "flex");
  $(".image-loader-info").css("display", "flex");
  $(".image-info-forms").css("display", "flex");
  $(".gallery-container").css("display", "none");
  $(".gallery-image-container").remove();
});