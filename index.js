// Your code here

function saturdayFun(thing = 'roller-skate') {
    return(`This Saturday, I want to ${thing}!`);
}

function mondayWork(thing = 'go to the office') {
    return(`This Monday, I will ${thing}.`)
}

let wrapAdjective = function(style = "*") {
    return function(adjective = "special") {
        return `You are ${style}${adjective}${style}!`
    }
}