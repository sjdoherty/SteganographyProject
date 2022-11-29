// Variable to store image data uri.
var imagedatauri;

// Function to read image file
function readUrl(input, selector){
    var reader = new FileReader(); // reader variable to read the file.

    // Onload function fires when the file is loaded.
    reader.onload = function(e){

        imagedatauri = e.target.result; // Store the image data uri.

        // Remove hidden attribute when the image is loaded so that the image is shown on the screen.
        document.getElementById(selector).removeAttribute("hidden");
        // Update the image tag with loaded image.
        document.getElementById(selector).src = imagedatauri;
        // console.log(e.target.result);
    }

    // Read the image URL.
    reader.readAsDataURL(input.files[0]);
}

// Function to hide the text.
function hideText(){
    // console.log(steg.encode(document.querySelector("#text").value, imagedatauri));

    // Store all the value in the variable.
    referee_name = document.querySelector("#referee_name").value;
    competition = document.querySelector("#competition").value;
    grade = document.querySelector("#grade").value;
    venue = document.querySelector("#venue").value;
    date = document.querySelector("#date").value;
    time = document.querySelector("#time").value;
    yellow_card = document.querySelector("#yellow_card").value;
    notes = document.querySelector("#notes").value;

    // Variable to hold the message.
    encoded_text = referee_name + "&" + competition + "&" + grade + "&" + venue + "&" + date + "&" + time + "&" + yellow_card + "&" + notes;

    // Remove the hidden attributes tags.
    document.getElementById("encoded_label").removeAttribute("hidden");
    document.getElementById("encoded_img").removeAttribute("hidden");

    // Encode the data into the image and update the html image tag.
    document.querySelector("#encoded_img").src = steg.encode(encoded_text, imagedatauri);
    // document.querySelector("#image2").src = steg.encode(document.querySelector('#text').value, imgdatauri);
}


// Function to decode the image and print the message to the screen.
function decode(input){
    // Log messages for testing purposes.
    console.log(input);
    console.log(input.files[0]);

    var reader = new FileReader(); // Read the file.

    var decoded_text; // Variable to hold decoded message.


    reader.onload = function(e) {
        // Print decoded uri to the console. For testing purposes only.
        console.log(steg.decode(e.target.result));
        document.querySelector("#decoded_img").src = e.target.result;

        // Split the decoded text.
        decoded_text = steg.decode(e.target.result).split("&");

        // Check if there are 8 parts.
        if(decoded_text.length === 8){
            document.getElementById("report").removeAttribute("hidden");

        }

        console.log(decoded_text[7]);

        // Update all the fields with the decoded messages.
        document.querySelector("#referee_name").innerText = decoded_text[0];
        document.querySelector("#competition").innerText = decoded_text[1];
        document.querySelector("#grade").innerText = decoded_text[2];
        document.querySelector("#venue").innerText = decoded_text[3];
        document.querySelector("#date").innerText = decoded_text[4];
        document.querySelector("#time").innerText = decoded_text[5];
        document.querySelector("#yellow_card").innerText = decoded_text[6];
        document.querySelector("#notes").innerText = decoded_text[7];
    }

    reader.readAsDataURL(input.files[0]);
}

var test = "I&am&here&&with&you";

console.log(test.split("&"));