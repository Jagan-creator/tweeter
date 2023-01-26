/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

    const dataFormat = [
      {
        "user": {
          "name": "Newton",
          "avatars": "https://i.imgur.com/73hZDYK.png",
          "handle": "@SirIsaac"
        },
        "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1674521157251
      },
      {
        "user": {
          "name": "Descartes",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@rd"
        },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1674607557251
      }
    ]

    const renderTweets = function(tweets) {
      for (let tweet of tweets) {
        const $tweet = createTweetElement(tweet);
        console.log($tweet);
          $('#tweets-container').append($tweet);
      }
    }

    const createTweetElement = function(tweetData) {
      let $tweet = $(`
        <article class="tweets-container">
        <header class="tweets-header">
          <div>
            <i class="fa-solid fa-face-grin-beam src="${tweetData.user.avatars}"></i>
            <span>${tweetData.user.name}</span>
          </div>
          <div class="tweets-handler" src="${tweetData.user.handle}>
            <span>@JHagan</span>
          </div>
        </header>
        <main class="tweets-main">
          <span>${tweetData.content.text}</span>
        </main>
        <footer class="tweets-footer">
          <span>${tweetData.created_at}</span>
            <div class="tweets-icons">
              <span>
                <i class="fa-solid fa-flag"></i>
                <i class="fa-solid fa-retweet"></i>
                <i class="fa-solid fa-heart"></i>
              </span>
            </div>
        </footer>
      </article>
      `)
      return $tweet
    }

  renderTweets(dataFormat);

});