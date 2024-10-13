const movies = [
    {
        name: "Friday the 13th",
        diretores: [
            "Robert Downey Jr.",
            "Chris Evans",
            "Scarlett Johansson"
          ],
        genero: "Slasher",
        imagem: "https://upload.wikimedia.org/wikipedia/en/1/18/Friday_the_13th_The_Final_Chapter_poster.jpg",
        atores:[
            "Kirsten Baker",
            "Kevin Bacon",
            "Amy Steel"
        ]
    },

    {
        name: "Halloween",
        diretores:[
            "John Carpenter"
        ],
        genero: "Slasher",
        imagem: "https://www.movieposters.com/cdn/shop/files/halloween.24x36_480x.progressive.jpg?v=1708451691",
        atores:[
            "Donald Pleasence",
            "P. J. Soles",
            "Jamie Lee Curtis",
            "Charles Cyphers"
        ]
    },

    {
        name: "A Nigthmare on Elm Street",
        diretores:[
            "Wes Craven"
        ],
        genero: "Slasher",
        imagem: "https://www.movieposters.com/cdn/shop/files/NightmareElmStreet.24X36_17846e2f-8ff2-43e6-8264-72709d689415_480x.progressive.jpg?v=1708706013",
        atores:[
            "Robert Englund",
            "Heather Langenkamp",
            "Johnny Depp",
            "John Saxon"
        ]
    },

    {
        name: "Alien",
        diretores:[
            "Dan O'Bannon",
            "Ronald Shusett",
            "Ridley Scott"
        ],
        genero: "Sci-Fi",
        imagem: "https://www.movieposters.com/cdn/shop/files/alien_romulus_480x.progressive.jpg?v=1712854636",
        atores:[
            "Sigourney Weaver",
            "Tom Skerritt",
            "Veronica Cartwright",
            "Harry Dean Stanton",
            "Bolaji Badejo"
        ]
    },

    {
        name: "The Thing",
        diretores:[
            "John W. Campbell",
            "Bill Lancaster"
        ],
        genero: "Sci-Fi",
        imagem: "https://www.movieposters.com/cdn/shop/files/THING_5d1279a2-2e38-4ca0-8cb5-91f9b30b6ebb_480x.progressive.jpg?v=1693491676",
        atores:[
            "Kurt Russell",
            "Keith David",
            "Wilford Brimley",
            "David Clennon"
        ]
    },

    {
        name: "The Texas Chain Saw Massacre",
        diretores:[
            "Kim Henkel",
            "Tobe Hooper"
        ],
        genero: "Horror",
        imagem: "https://www.movieposters.com/cdn/shop/files/ItemN241523_jpg_480x.progressive.jpg?v=1721748568",
        atores:[
            "Marilyn Burns",
            "Gunnar Hansen",
            "Edwin Neal",
            "Teri McMinn"
        ]
    },

    {
        name: "Scream",
        diretores:[
            "Kevin Williamson",
            "James Vanderblit"
        ],
        genero: "Slasher",
        imagem: "https://www.movieposters.com/cdn/shop/files/scream.mpw.123570_480x.progressive.jpg?v=1709821180",
        atores:[
            "Neve Campbell",
            "Courteney Cox",
            "David Arquette",
            "Wes Craven",
            "Skeet Ulrich"
        ]
        
    },
    
    {
        name: "The Ring",
        diretores:[
            "Gore Verbinski"
        ],
        genero: "Psychological Horror",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/1/1c/The_Ring_%282002%29.jpg",
        atores:[
            "Naomi Watts",
            "Daveigh Chase",
            "David Dorfman",
            "Martin Henderson"
        ]
        
    },
    
    {
        name: "Hellraiser",
        diretores:[
            "Clive Barker"
        ],
        genero: "Supernatural",
        imagem: "https://www.movieposters.com/cdn/shop/files/hellraiser.mpw.125062_480x.progressive.jpg?v=1708452336",
        atores:[
            "Doug Bradley",
            "Ashley Laurence",
            "Clare Higgins",
            "Sean Chapman",
            "Andrew Robinson"
        ]
        
    },
    
    {
        name: "The Shining",
        diretores:[
            "Stanley Kubrick",
            "Diane Johnson",
            "Stephen King"
        ],
        genero: "Psychological Horror",
        imagem: "https://www.movieposters.com/cdn/shop/products/SHINING_SH103_1980_480x.progressive.jpg?v=1603988297",
        atores:[
            "Shelley Duvall",
            "Jack Nicholson",
            "Danny Lloyd",
            "Lia Beldam"
        ]
        
    },

    {
        name: "Night of the Living Dead",
        diretores:[
            "George A. Romero",
            "John Russo",
            "Russell Streiner",
            "Karl Hardman"
        ],
        genero: "Horror",
        imagem: "https://www.movieposters.com/cdn/shop/products/4c82629d80bd543f1da8e8e0c77d8067_331c2d78-b249-4d45-92e9-55b1e6be6213_480x.progressive.jpg?v=1573588779",
        atores:[
            "Duane Jones",
            "Judith O'Dea",
            "Karl Hardman",
            "Kyra Schon"
        ]
        
    },

    {
        name: "The Exorcist",
        diretores:[
            "William Friedkin",
            "William Peter Blatty",
        ],
        genero: "Supernatural",
        imagem: "https://www.movieposters.com/cdn/shop/products/51eadd844c8c362c58e30e3545936d1c_08f0d111-9fb3-4cc0-bca5-65446f37ea17_480x.progressive.jpg?v=1573616005",
        atores:[
            "Linda Blair",
            "Ellen Burstyn",
            "Jason Miller",
            "Max von Sydow"
        ]
        
    },

    {
        name: "Child's Play",
        diretores:[
            "Don Mancini",
            "John Lafia"
        ],
        genero: "Slasher",
        imagem: "https://br.web.img2.acsta.net/pictures/14/10/10/18/18/494547.jpg",
        atores:[
            "Alex Vincent",
            "Gabriel Bateman",
            "Brad Dourif",
            "Aubrey Plaza"
        ]
        
    },

    {
        name: "The Night Flier",
        diretores:[
            "Mark Pavia",
            "Stephen King"
        ],
        genero: "Horror",
        imagem: "https://upload.wikimedia.org/wikipedia/en/e/ed/Cover_of_The_Night_Flier.jpg",
        atores:[
            "Julie Entwisle",
            "Michael H. Moss",
            "Miguel Ferrer",
            "Dan Monahan"
        ]
        
    },

    {
        name: "Frankenstein",
        diretores:[
            "James Whale",
            "Carl Laemmle Jr",
            "Peggy Webling"
        ],
        genero: "Sci-Fi",
        imagem: "https://m.media-amazon.com/images/I/611h25Qnv5L._AC_UF894,1000_QL80_.jpg",
        atores:[
            "Boris Karloff",
            "Christian Bale",
            "Glenn Strange",
            "Javier Bardem"
        ]
        
    },

    {
        name: "Saw",
        diretores:[
            "Leigh Whannell",
            "James Wan"
        ],
        genero: "Slasher",
        imagem: "https://i.pinimg.com/originals/84/04/f2/8404f2fe6a0d220189ffadae35bfbf40.jpg",
        atores:[
            "Tobin Bell",
            "Cary Elwes",
            "Michael Emerson",
            "Shawnee Smith"
        ]
    }

];

export default movies;