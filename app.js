const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
    let textHTML = '';
    for(i=1; i<=50; i++) {

        textHTML += '<p>' + i + ' Soy ' + (i%2==0 ? 'Soy Par!' : 'Soy Impar!') + '</p>';
    }
    res.send(textHTML);
});

app.listen(3000, () => console.log('Listening on port 3000!'));