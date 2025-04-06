document.querySelector('#check').addEventListener('click',getPal);


    function getPal(){
        let word = document.querySelector('#word').value;
        let wordCase = word.toLowerCase('')
            fetch(`/api?entry=${wordCase}`)
                .then (res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.result){
                        document.querySelector('#answer').innerHTML = `${word} is a palindrome`
                    }else{
                        `${word} is not a palindrome, dont play yourself.`
                    }
                })
            }
            