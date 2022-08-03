function shout(string){
    return string.toUpperCase()
}
 function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string){
    switch(string) {
        case `Let's have dinner together!`:
            return "I would love to!"
        case whisper(string):
            return `I can't hear you!`
        case shout(string):
            return `YES INDEED!`
    }
}
