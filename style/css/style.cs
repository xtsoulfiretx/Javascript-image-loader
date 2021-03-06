#header {
  width: 100%;
  height: 15%;
  background-color: #191a1c;
}
#header .header-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 10px;
}
#header .header-wrap .header-title {
  margin-top: 20px;
  color: #fff;
}

#body-image-loader {
  background-color: #191a1c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
#body-image-loader .image-loader-head {
  display: none;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  border-bottom: 2px solid #fff;
  border-top: 2px solid #fff;
}
#body-image-loader .image-button {
  height: 100%;
  background-color: #191a1c;
  font-size: 1rem;
  color: #fff;
  border: none;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  padding: 5px;
  cursor: pointer;
  transition: 0.5s;
}
#body-image-loader .image-button:hover {
  background-color: #5c5d5e;
}
#body-image-loader .image-loader-title {
  padding: 20px;
}
#body-image-loader #image-loader {
  display: hidden;
  flex-direction: row;
  justify-content: center;
  width: 60%;
  margin: 30px;
}
#body-image-loader #image-loader .image-container {
  border: 2px solid #fff;
}
#body-image-loader #image-loader .image-box {
  width: 100%;
  height: 100%;
}

.image-loader-info {
  width: 100%;
  background-color: #191a1c;
  padding: 30px;
}

.image-info-forms {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
  margin: auto;
}
.image-info-forms .image-details {
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: 10px;
  width: 50%;
}
.image-info-forms .image-details h3 {
  font-size: 1.5rem;
  margin-top: 10px;
  padding-bottom: 5px;
  padding-left: 5px;
  border-bottom: 2px solid #fff;
}
.image-info-forms .image-details h4 {
  font-size: 1.25rem;
  margin: 5px;
}
.image-info-forms #email-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  margin-left: 20px;
}
.image-info-forms #email-form #email {
  width: 100%;
  padding-left: 5px;
  border: 1px solid grey;
  height: 40px;
}
.image-info-forms #email-form h2 {
  height: 2rem;
}
.image-info-forms #email-form button {
  width: 100px;
  font-size: 1rem;
  background-color: #5c5d5e;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  transition: 1s;
}
.image-info-forms #email-form .warning-msg {
  color: #191a1c;
  transition: 0.5s;
  font-weight: 300;
}

#email-section {
  display: block;
  position: absolute;
  top: 200px;
  right: 0px;
  background-color: #191a1c;
  z-index: 3;
}
#email-section .email-show {
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 2px solid #fff;
  border-right: none;
  border-radius: 10px 0 0 10px;
  width: 200px;
  transition: 0.5s;
  cursor: pointer;
}
#email-section .email-show i {
  font-size: 1.5rem;
  margin-right: 5px;
}
#email-section .email-container {
  display: none;
  flex-direction: column;
  border: 2px solid #fff;
  border-radius: 10px 0 0 10px;
  border-right: none;
  width: 300px;
  padding: 10px;
}
#email-section .email-container .email-head {
  border-bottom: 2px solid #fff;
  padding-bottom: 5px;
  cursor: pointer;
}
#email-section .email-container .email-head i {
  font-size: 1.5rem;
  margin-right: 5px;
}
#email-section .email-container .saved-emails {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#email-section .email-container .saved-emails i {
  margin-top: 10px;
  margin-right: 10px;
  font-size: 1.25rem;
}
#email-section .email-container .saved-emails p {
  padding-top: 10px;
}
#email-section .email-container .saved-emails h4 {
  padding-top: 10px;
  margin-left: 10px;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
}

#body-main {
  height: 100%;
}

/*# sourceMappingURL=style.cs.map */
