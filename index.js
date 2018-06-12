// allows you to make http requests from node  
const rp = require('request-promise');

// allow you to work with the data you get back from the web server using syntax similar to jquery. work with the document using selectors
const cheerio = require('cheerio');


const URL = 'https://news.ycombinator.com/';

const options = {
    uri: URL,
    transform: (body) => {
        return cheerio.load(body);
    }
}


rp(options)
    .then(($) => {
        $('.storylink').each( (i, element) => {
            console.log($(element).text());
        });
        // the code will looks very much like
        // jQuery code
    })
    .catch((err) =>{
        console.log(err);
    });