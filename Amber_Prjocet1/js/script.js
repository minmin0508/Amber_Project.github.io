/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/


// create quotes object 

let quote1 = {
    quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    ,source : "Steve Jobs"
    ,citation : "Stanford University commencement speeches"
    ,year: 2005

} 

let quote2 = {
    quote : "Life is what happens when you're busy making other plans."
    ,source: "John Lennon"
    ,citation : "BrainyQuote.com."
    

} 
let quote3 = {
    quote : "Experience is the name everyone gives to their mistakes."
    ,source: "Oscar Wilde"
    ,citation : ""
    ,year: 1980
} 
let quote4 = {
    quote : "Any fool can write code that a computer can understand. Good programmers write code that humans can understand"
    ,source: "Martin Fowler"
    ,citation : "Evolutionary Design: A Conversation with Martin Fowler"
    ,year: 2008 
} 
let quote5 = {
    quote : "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away."
    ,source: "David Peter Simon"
    ,citation : "UX Magazine"
    ,year: 2015
} 


// create a quotes array 
let quotes = []

// push data to qotes array
quotes.push(quote1, quote2, quote3, quote4, quote5)



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    
    //get radom number 

    let random = Math.floor(Math.random() * 4);
    return quotes[random]


}


/***
 * `printQuote` function
***/

function printQuote(){

    let RandomQuote = getRandomQuote()

    // create quote and source HTML string
    let PtoHTML1 = "<p class= 'quote' >" + RandomQuote.quote + "</p>" + "<p class='source'>" + RandomQuote.source;
    document.getElementsByClassName("quote")[0].innerText = getRandomQuote().quote


    let citation2HTML = ''
    let year2HTML = ''
    let finalprint=''


    // create citation HTML string
    if(RandomQuote.citation){

        citation2HTML = "<span class='citation'>" + RandomQuote.citation + "</span>"
        

    }

    // create year HTML string
    if(RandomQuote.year){
        
        year2HTML = "<span class='year'>" + RandomQuote.year + "</span>"
        
    }

   // combine all HTML string 
   finalprint = PtoHTML1+ citation2HTML + year2HTML + "</p>"

   // insert all HTML string to HTML
   document.getElementById('quote-box').innerHTML = finalprint; 

}



/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click",printQuote)