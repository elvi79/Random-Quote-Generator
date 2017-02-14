//Array of objects to hold quotes, author and tags
var quotes = [
{ 
  quote: "Don\’t ever let someone tell you that you can\’t do something. You got a dream, you gotta protect it. When people can\’t do something themselves, they are going to tell you that you can\’t do it. You want something, go get it. Period.",
  author: "Will Smith",
  tag: "motivational"
},

{ quote: "Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma - which is living with the results of other people\'s thinking. Don\'t let the noise of others\' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. ",
  author: "Steve Jobs",
  tag: "motivational"},

{ quote: "One of the greatest things you have in life is that no one has the authority to tell you what you want to be. You\'re the one who\'ll decide what you want to be. Respect yourself and respect the integrity of others as well. The greatest thing you have is your self image, a positive opinion of yourself. You must never let anyone take it from you.",
  author: "Jaime Escalante",
  tag: "motivational"},

{ quote: "Dont\' worry about failures, worry about the chances you miss when you don\'t even try",
  author: "Jack Canfield",
  tag: "motivational"},

{ quote: "Your mind is a powerful thing.  When you fill it with positive thoughts your life will start to change.",
  author: "unkown",
  tag: "motivational"}, 

{ quote: "When you get angry take a breath and count to 10.  Throw a punch at 8.  Nobody expects that.",
  author: "unkown",
  tag: "humor"},

{ quote: "Humanity is losing its geniuses.  Aristotle died, Newton passed away, Einstein died, and I\'m not feeling well today...",
  author: "unkown",
  tag: "humor"},

{ quote: "The best way to predict the future is to create it.",
  author: "Abraham Lincoln",
  tag: "political"},

{ quote: "We have the best government money can buy.",
  author: "Mark Twain",
  tag: "political"
}    

];

var message='';
var rgbColor;
var viewedQuotes=[];



//Get random quote, remove from quotes array
//store removed array in viewed quotes
//quotes becomes viewed quotes, once all quotes have been loaded
function getRandomQuote(){
  var randomQuote= Math.floor(Math.random()*quotes.length);
  var splicedQuote=quotes.splice(randomQuote,1)[0];
  viewedQuotes.push(splicedQuote);
    if(quotes.length=== 0){
    quotes=viewedQuotes;
    viewedQuotes=[];
} 
  return splicedQuote;
}



function printQuote(){
  var randomQuotePosition=getRandomQuote();
  message='<p class="quote">' + randomQuotePosition.quote +'</p>';
  message+='<p class="author">' + randomQuotePosition.author + '</p>';
  message+='<p class="tag">' + randomQuotePosition.tag + '</p>';
  document.getElementById('quote-box').innerHTML=message;
  document.getElementById('bgcolor').style.backgroundColor=randomColor();
}




// function for random background color, which is called when you printQuote
function randomRGB(){
  return Math.floor(Math.random()* 256);
}

function randomColor(){
  var color ='rgb(';
  color+=randomRGB()+',';
  color+=randomRGB()+',';
  color+=randomRGB()+')';
  return color;
}





setInterval(printQuote,5000);







