const express = require('express');
const Joi = require('joi');
const app = express();
// const villains = require('./data.json')

const villains = [
    {
        id: 1,
        name: "Cruella de Vil",
        movie: "101 Dalmations",
        archnemesis: "Dalmations",
        description: "She’s a nasty piece of work throughout the movie and hunts down puppies like the predator she is. I guess when a woman loves fur that much there’s not much she won’t do for it."
    },
    {
        id: 2,
        name: "Ursula",
        movie: "The Little Mermaid",
        archnemesis: "Ariel",
        description: "Ursula is a villainous sea witch who tricks that mermaid princess named Ariel into trading her voice for a pair of human legs."
    },
    {
        id: 3,
        name: "Queen of Hearts",
        movie: "Alice in Wonderland",
        archnemesis: "Alice",
        description: "Queen of Hearts wants to behead just about everyone when she loses her temper, which is more often than not. She's not interested in reason or kindness nor is she interested in being fair."
    },
    {
        id: 4,
        name: "Scar",
        movie: "Lion King",
        archnemesis: "Simba and Mufasa",
        description: "Everything about this lion is dastardly and wicked. He wants to be the King and nothing, not his older brother or his nephew will stop him from that."
    },
    {
        id: 5,
        name: "Gaston",
        movie: "Beauty and the Beast",
        archnemesis: "Beast",
        description: "Gaston's a rude, vain, shallow hunter who doesn’t like taking ‘no’ for an answer. Worst of all is his jealous streak, which is when he goes for the jugular. He tried to have Maurice, Belle’s father, committed to an insane asylum unless she married him. "
    },
    {
        id: 6,
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

app.get('/villains/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const villain = villains.find(v => v.id === id)
    if(!villain) {
        return res.send(404, "Oh no! That's not a villain!")
    }
    return res.send([villain])
})

app.post('/villains', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    const movie = req.body.movie
    const archnemesis = req.body.archnemesis
    const description = req.body.description

    const villain = {id: id, name: name, movie: movie, archnemesis: archnemesis, description: description}
    villains.push(villain)

    return res.send(villain)
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})

