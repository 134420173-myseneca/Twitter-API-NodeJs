//1  get() request -> search by hastag,by location,by user
//   give me all tweet about rainbow etc give me 50 tweets
//2  post() -> tweeting post to twitter , post this for me etc
//3  stream() -> lets be connected through api , lets just be one 
//4  @mention trigger a event and replies back

console.log('The bot is starting');

// input the library or package or module
var Twit = require('twit');
var config = require('./config');
console.log(config);
//var T = new Twit({
  
  //});
  //new twit obeject with config
  var T = new Twit(config);

  //  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
var params = {
   q: '#kashmirbleeds', // search for 
   count:5 // 2 tweets back 
  };

T.get('search/tweets', params, gotData); // get is searching on twitter
function gotData(err, data, response) {
  var tweets = data.statuses;
  for(var i = 0; i < tweets.length;i++){
console.log(tweets[i].text);
  }
   // console.log(data)
  }
  // call back function trigger when data return from api

