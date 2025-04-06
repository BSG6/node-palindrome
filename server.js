const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
const page = url.parse(req.url).pathname;
const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });
    }

    else if (page == '/api') {
        console.log(req)
        if('entry' in params){
            let wordCase = params['entry'].toLowerCase('')
            // let split = wordCase.split('');
            // let reverse = split.reverse();
            // let join = reverse.join('');
            //figure out how to simplify these varibales so it only has to be called once
            let reverse = wordCase.split('').reverse().join('')
            if(wordCase == reverse){res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({result:true}));
                
        }else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({result:false}));
        }
        }
    }
    else if (page == '/css/style.css'){
        fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
        });
    }else if (page == '/js/main.js'){
        fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
        });
    }else{
        figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
        });
    }
    });

    server.listen(8000);
