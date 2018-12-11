const express = require('express');
const Joi = require('joi');
const app = express();
// const villains = require('./data.json')

const villains = [
    {
        name: "Cruella de Vil",
        movie: "101 Dalmations",
        archnemesis: "Dalmations",
        description: "She’s a nasty piece of work throughout the movie and hunts down puppies like the predator she is. I guess when a woman loves fur that much there’s not much she won’t do for it."
    },
    {
        name: "Ursula",
        movie: "The Little Mermaid",
        archnemesis: "Ariel",
        description: "Ursula is a villainous sea witch who tricks that mermaid princess named Ariel into trading her voice for a pair of human legs."
    },
    {
        name: "Queen of Hearts",
        movie: "Alice in Wonderland",
        archnemesis: "Alice",
        description: "Queen of Hearts wants to behead just about everyone when she loses her temper, which is more often than not. She's not interested in reason or kindness nor is she interested in being fair."
    },
    {
        name: "Scar",
        movie: "Lion King",
        archnemesis: "Simba and Mufasa",
        description: "Everything about this lion is dastardly and wicked. He wants to be the King and nothing, not his older brother or his nephew will stop him from that."
    },
    {
        name: "Gaston",
        movie: "Beauty and the Beast",
        archnemesis: "Beast",
        description: "Gaston's a rude, vain, shallow hunter who doesn’t like taking ‘no’ for an answer. Worst of all is his jealous streak, which is when he goes for the jugular. He tried to have Maurice, Belle’s father, committed to an insane asylum unless she married him. "
    },
    {
        name: "Jafar",
        movie: "Aladdin",
        archnemesis: "Aladdin",
        description: "Jafar craves power and will do just about anything for it."
    }
]


app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Hey there, looking for a villain? You\'ve come to the right place')
})

app.get('/villains', (req, res) => {
    return res.send(villains)
}) 

app.listen(5000, () => {
    console.log('listening on port 5000')
})

