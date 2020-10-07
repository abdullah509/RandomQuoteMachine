$(document).ready(function(){
  var arr;
  var authors;
  var randomNum;
  var randomQuotes;
  var randomAuthor;
  function getQuote(){
    
    arr = ["It's not whether you get knocked down; it's whether you get up." , 
           "Champions keep playing until they get it right.", 
           "One man can be a crucial ingredient on a team, but one man cannot make a team." , 
           "What do do with a mistake: recognize it, admit it, learn from it, forget it.", 
           "I hated every minute of training, but I said, Don’t quit. Suffer now and live the rest of your life as a champion.", 
           "Number one is just to gain a passion for running. To love the morning, to love the trail, to love the pace on the track. And if some kid gets really good at it, that’s cool too.",
           "I’ve failed over and over again in my life. And that is why I succeed.", 
           "The only way to prove you are a good sport is to lose.", 
           "Never give up, never give in, and when the upper hand is ours, may we have the ability to handle the win with the dignity that we absorbed the loss.", 
           "How you respond to the challenge in the second half will determine what you become after the game, whether you are a winner or a loser."];
    
    authors = ["—Vince Lombardi", "-Billie Jean King", "-Lou Holtz", "–Dean Smith", "–Muhammad Ali", "–Pat Tyson", "–Michael Jordan", "–Mark Spitz", "–Doug Williams" ];
    
    randomNum = Math.floor(Math.random()*arr.length) //Math.floor rounds number
    
    randomQuotes = arr[randomNum];
    randomAuthor = authors[randomNum];
    
    $("#text").text(randomQuotes);
    $("#author").text(randomAuthor);
  }
  
  $("#tweet-quote").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+randomQuotes + " " + randomAuthor);
});
  
$("#new-quote").on("click", function(){
  getQuote();
});

});