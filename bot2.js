//1  get() request -> search by hastag,by location,by user
//   give me all tweet about rainbow etc give me 50 tweets
//2  post() -> tweeting post to twitter , post this for me etc
//3  stream() -> lets be connected through api , lets just be one 
//4  @mention trigger a event and replies back

console.log('The follow bot is starting');

// input the library or package or module
var Twit = require('twit');
var config = require('./config');
//T is reference to twit api package
var T = new Twit(config);
// setting up user stream 
var stream = T.stream('user');
//Anytime someone follows me
stream.on('follow',followed);
// followed function is callback event callback e.g mouse pressed event happens
// handle follow event for this stream 
//anybody follows me this event would happens
function followed(eventMsg){
    console.log(" follow event ");

var name = eventMsg.source.name;
var screenName = eventMsg.source.screen_name;
  tweetIt('@' +  screenName + ' do you like my twitter profile' );
}
  //tweetIt();
  // 1000 milisecond would be 1 second
//setInterval(tweetIt, 1000*20); // tweets after 20 seconds
  function tweetIt(txt){
      
  //var r = Math.floor(Math.random()*100);
  var tweet = {
       //status: 'Here is a random number ' + r + ' #coding from node.js' 
   status: txt
    };
T.post('statuses/update', tweet, tweeted);

 function tweeted(err, data, response) {
     if(err){
         console.log("Something went wrong");
        // console.log(err);
     }else{
         console.log("it worked");

     }
    //console.log(data);
  }
}
// stream 