import React from 'react';

const Villains = () => {
    const villains = [
        {
            id: 1,
            name: "Cruella de Vil",
            movie: "101 Dalmations",
            archnemesis: "Dalmations",
            description: "She’s a nasty piece of work throughout the movie and hunts down puppies like the predator she is. I guess when a woman loves fur that much there’s not much she won’t do for it.",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d81opt4-3aac30ef-e2aa-4fd1-86f4-a684fc855e53.jpg/v1/fill/w_894,h_894,q_70,strp/cruella_de_vil_by_mariooscargabriele_d81opt4-pre.jpg"
        },
        {
            id: 2,
            name: "Ursula",
            movie: "The Little Mermaid",
            archnemesis: "Ariel",
            description: "Ursula is a villainous sea witch who tricks that mermaid princess named Ariel into trading her voice for a pair of human legs.",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d80u6bf-83c550f4-d9f3-43c8-b8cf-dc8ad54cb6ce.jpg/v1/fill/w_894,h_894,q_70,strp/ursula_by_mariooscargabriele_d80u6bf-pre.jpg"
        },
        {
            id: 3,
            name: "Queen of Hearts",
            movie: "Alice in Wonderland",
            archnemesis: "Alice",
            description: "Queen of Hearts wants to behead just about everyone when she loses her temper, which is more often than not. She's not interested in reason or kindness nor is she interested in being fair.",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d858bnq-a58eedcd-f210-4b29-9eed-0b0ed22344fe.jpg/v1/fill/w_894,h_894,q_70,strp/queen_of_hearts_by_mariooscargabriele_d858bnq-pre.jpg"
        },
        {
            id: 4,
            name: "Scar",
            movie: "Lion King",
            archnemesis: "Simba and Mufasa",
            description: "Everything about this lion is dastardly and wicked. He wants to be the King and nothing, not his older brother or his nephew will stop him from that.",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d81tua8-d86f68aa-d07d-4abf-9b62-8a7a4f337288.jpg/v1/fill/w_894,h_894,q_70,strp/scar_by_mariooscargabriele_d81tua8-pre.jpg"
        },
        {
            id: 5,
            name: "Gaston",
            movie: "Beauty and the Beast",
            archnemesis: "Beast",
            description: "Gaston's a rude, vain, shallow hunter who doesn’t like taking ‘no’ for an answer. Worst of all is his jealous streak, which is when he goes for the jugular. He tried to have Maurice, Belle’s father, committed to an insane asylum unless she married him. ",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d84bynd-4605be55-ae36-44be-8bc9-571aea40d484.jpg/v1/fill/w_894,h_894,q_70,strp/gaston_by_mariooscargabriele_d84bynd-pre.jpg"
        },
        {
            id: 6,
            name: "Jafar",
            movie: "Aladdin",
            archnemesis: "Aladdin",
            description: "Jafar craves power and will do just about anything for it.",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d80klfr-2123d623-d335-44c0-911d-422145c798fc.jpg/v1/fill/w_894,h_894,q_70,strp/jafar_by_mariooscargabriele_d80klfr-pre.jpg"
        },
        {
            id: 7,
            name: "Yzma",
            movie: "Emperor's New Groove",
            archnemesis: "Kuzco",
            description: "The main villain of the Emperor's New Groove franchise, Yzma is malicious and power hungry. When Kuzco abruptly and callously fires her that she turns on him, deciding to kill him, then fill the power vacuum left in his wake and become empress.",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d83n3k7-826057cb-c749-4ca0-8df1-4727de51012d.jpg/v1/fill/w_894,h_894,q_70,strp/yzma_by_mariooscargabriele_d83n3k7-pre.jpg"
        },
        {
            id: 8,
            name: "Maleficent",
            movie: "Sleeping Beauty",
            archnemesis: "Aurora",
            description: "Maleficent is an evil fairy and the main antagonist of Disney's animated classic, Sleeping Beauty. Maleficent refers to herself as the Mistress of All Evil, a title that few, if any, could dispute. She is cold, calculating, ruthless and spiteful; often she has performed despicable acts of cruelty simply because she can rather than for any real purpose. ",
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6956dbc5-c031-4b1c-93c4-f312a6a0158f/d7zutqo-fcac860a-4520-4503-97b9-8d9c6e2df82b.jpg/v1/fill/w_894,h_894,q_70,strp/maleficent_by_mariooscargabriele_d7zutqo-pre.jpg"
        }
    ]


    return (
        villains.map(vill => 
            <div id="each-villain">
                    <img src={vill.image}></img>
                    <h2>{vill.name}</h2>
                    <h3>{vill.movie}</h3>
                    <h4>Archnemesis: <em>{vill.archnemesis}</em></h4>
                    <p>{vill.description}</p>
            </div>
        )
    )
};

export default Villains;