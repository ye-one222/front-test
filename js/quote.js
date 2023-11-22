const quotes = [
    {
        quote : "Always let your conscience be your guide.",
        author : "Pinocchio",
    },
    {
        quote : "Life is a journey to be experienced, not a problem to be solved.",
        author : "Winnie the Pooh",
    },
    {
        quote : "The best moment suddenly comes.",
        author : "Finding Nemo",
    },
    {
        quote : "Anyone can be anything.",
        author : "Zootopia",
    },
    {
        quote : "I'll live all the time of my life.",
        author : "Soul",
    },
    {
        quote : "Life is full of possibilities",
        author : "Soul",
    },
    {
        quote : "Venture outside your comfort zone.",
        author : "Rapunzel",
    },
    {
        quote : "A spark is not a soul's purpose.",
        author : "Soul",
    },
    {
        quote : "There are a lot of things to be happy about.",
        author : "Inside Out",
    },
    {
        quote : "You just need to believe in yourself.",
        author : "Toystory",
    },
    {
        quote : "It distracts from the now.",
        author : "Incredible",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author + " -";