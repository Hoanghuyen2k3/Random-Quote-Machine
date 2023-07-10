import React from 'react';
import fb from "../images/fb-icon.png";
import insta from "../images/insta-icon.png";
import twitter from "../images/twitter-icon.png";
function Quote(props){
    const {quote, data} = props;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.quote + ' - ' + data.author)}`;
    const fbUrl =`https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(quote.data+' - ' + quote.author)}`;
    const instaUrl =`https://www.instagram.com?text=${encodeURIComponent(quote.data+' - ' + quote.author)}`;
    return(
        <figure className="quote-box">
            <blockquote id="text"><h2>{data.quote}</h2></blockquote>
            <figcaption id="author">__{data.author}__</figcaption>
            <div className="social">
                <div className="social-container">
                    <a id="fb-quote" href={fbUrl} target="_blank" rel="noopener noreferrer"><img src={fb} alt="fb icon" /></a>
                    <a id="tweet-quote" href={tweetUrl} target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter icon" /></a>
                    <a id="insta-quote" href={instaUrl} target="_blank" rel="noopener noreferrer"><img src={insta} alt="insta icon" /></a>
                </div>
                
                <button id="new-quote" onClick={quote}>New quote</button>
            </div>
            
        </figure>

    )
}
export default Quote;