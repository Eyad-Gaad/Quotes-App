// Creating objects for quotes descriping properties ("quote" , "author")
var quote0 = {
    quote : "Be yourself; everyone else is already taken.",
    author : "Oscar Wilde"
};
var quote1 = {
    quote : "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author : "Marilyn Monroe"
};
var quote2 = {
    quote : "So many books, so little time.",
    author : "Frank Zappa"
};
var quote3 = {
    quote : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author : "Albert Einstein"
};
var quote4 = {
    quote : "A room without books is like a body without a soul.",
    author : "Marcus Tullius Cicero"
};
var quote5 = {
    quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author : "Bernard M. Baruch"
};
var quote6 = {
    quote : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author : "Dr. Seuss"
};
var quote7 = {
    quote : "You only live once, but if you do it right, once is enough.",
    author : "Mae West"
};
var quote8 = {
    quote : "Be the change that you wish to see in the world.",
    author : "Mahatma Gandhi"
};
var quote9 = {
    quote : "In three words I can sum up everything I've learned about life: it goes on.",
    author : "Robert Frost"
};

// store the objects in array
var Quotes = [quote0,quote1,quote2,quote3,quote4,quote5,quote6,quote7,quote8,quote9]

// Generate Random Number based on the array length without repated it
var previousRandomNumber;
function randomNumber(length){
    var randomNumber;
    do{
        randomNumber = Math.floor(Math.random()*length);
    }while(previousRandomNumber===randomNumber);
        previousRandomNumber = randomNumber;
        console.log(randomNumber); // this statement proves that the random number not repated in the log console.
        return randomNumber;
}

// On click "button" function for generating a new random quote based on the random number 
function newQuote(){
    var random = randomNumber(Quotes.length)
    document.getElementById("quote").innerHTML = `<i class="fs-2 p-0 fa-solid fa-quote-left col-1 text-end"></i>
                    <p class="quoteFont fs-2 col-10 text-secondary">`+Quotes[random].quote+`</p>
                    <i class="fs-2 p-0 fa-solid fa-quote-right col-1 text-start"></i>
                    <h2 class="latoFont fw-bold fs-2 mb-5">`+Quotes[random].author+`</h2>`;
}
