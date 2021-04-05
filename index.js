function shout(string) {
    return string.toUpperCase();
}


function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string))
}

function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
        let reply = "I can't hear you!";
        return reply;
    }
    else if (string === string.toUpperCase()) {
        let reply = "YES INDEED!";
        return reply;
    }
    else if (string === "I love you, Grandma.") {
        let reply = "I love you, too.";
        return reply;
    }
}
