// This function will NOT support form publishing, because the return is 'false'.
// An attached 'onsubmit' function needs to return 'true' or a truthy value.
// NOTE: The form itself can passed as the 'this' object from the HTML template
function validateFormOnSubmit(form) {
    let reason = "";
    console.log(form);
    reason += validateGuess(form.guess) + "\n";
    reason += validateUsername(form.username) + "\n";
    reason += validatePassword(form.password) + "\n";

    if (reason != "") {
        alert("Some fields need correction:\n" + reason);
    } else {
        // simpleCart.checkout();
    }
    return false;
}

function validateGuess(guess) {
    let guessNumber;
    try {
        guessNumber = parseInt(guess);
    } catch (error) {
        let errorString = "ERROR: Couldn't read 'guess' number input";

        console.log(errorString);
        console.log(error);
        alert(errorString);

        return errorString;
    }

    // NOTE: While checks like this one are usually not needed, because the HTML 'form' already validates input,
    //       it is better to keep them in case of client-side HTML tampering
    if (guessNumber < 1 && guessNumber > 10) {
        return "Number too small or too big! Number: " + guessNumber;
    }

    return "";
}

function validateUsername(username) {
    const regexPattern = new RegExp("[a-zA-Z0-9]+");

    if (regexPattern.test(username)) {
        return "";
    }

    const errorString = `ERROR: Username '${username}' doesn't match expected format: ${regexPattern}`;
    console.log(errorString);
    alert(errorString);

    return errorString;
}

function validatePassword(password) {
    return "";
}