/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const createTweetElement = function(tweetData) {
    let $tweet = $(`
        <article class="tweets-container">
          <header class="tweets-header">
            <div>
              <img src="${tweetData.user.avatars}"/>
              <span>${tweetData.user.name}</span>
            </div>
            <div class="tweets-handler">
              <span>${tweetData.user.handle}</span>
            </div>
          </header>
          <main class="tweets-main">
            <span>${escape(tweetData.content.text)}</span>
          </main>
          <footer class="tweets-footer">
            <span>${timeago.format(tweetData.created_at)}</span>
              <div class="tweets-icons">
                <span>
                  <i class="fa-solid fa-flag"></i>
                  <i class="fa-solid fa-retweet"></i>
                  <i class="fa-solid fa-heart"></i>
                </span>
              </div>
          </footer>
        </article>
      `);
    return $tweet;
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function(tweets) {
    $('.tweets-border').empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-border').append($tweet);
    }
  };

  $('form').submit(function(e) {
    e.preventDefault();
    const tweets = $('textarea').val().length;

    if (tweets === 0) {
      return alert("You must enter text before submitting a tweet!");
    } else if (tweets - 140 > 0) {
      return alert("Your tweet has exceeded the maximum character count! Please try again.");
    } else {
      const newTweet = $('form').serialize();
      $.post('/tweets', newTweet, () => {
        loadTweets();
      });
    }
  });

  const loadTweets = function() {
    $.ajax('/tweets', {method: "GET", dataType: "json"})
      .then((newTweet) => {
        renderTweets(newTweet.reverse());
      });
    $('textarea').val("")
  };
  
  loadTweets();

});