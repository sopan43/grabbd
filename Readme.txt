App     : GRABBD-MOVIE APP
email   : sopanmittal43@gmail.com


url (Digital Ocean): http://142.93.223.14:3000
url (local path): http://127.0.0.1


1)url/user/signup (should be send as form data)
=========================FOR USER REGISTRATION==================
Request Type:- POST

user_email*
user_password*
user_firstname
user_lastname
user_gender
user_dob


Response
1) "User Registered"
2) "User Allready Exixt"
//END FOR USER REGISTRATION



2)url/user/login 
=========================FOR USER LOGIN======================
Request Type:- POST

user_email*
user_password*

Response
1) "User Login Successfully"
2) "Unexpeted Error"
//END FOR USER LOGIN



3)url/user/logout 
=========================FOR USER LOGOUT======================
Request Type:- GET

Response
1) 'User logout Successfully'
2) 'Unexpeted Error'
//END FOR USER LOGOUT

3)url/user/profile 
=========================FOR USER PROFIE=====================
Request Type:- GET

Response
{
    "user_id": 31,
    "user_email": "a@m.com",
    "user_firstname": "",
    "user_lastname": "",
    "user_gender": "",
    "user_dob": "",
    "likecount": 0,
    "dislikecount": 1
}

//END FOR USER PROFIE

4)url/search/:id 
=========================FOR SEARCH WITH ID=====================
Request Type:- GET
LOGIN REQUIRED
To search if ID is known

ex: http://142.93.223.14:3000/search/597

Response

{
    "adult": false,
    "backdrop_path": "/vFUI5obFtx4IdhP6k8Om5ezHTrk.jpg",
    "belongs_to_collection": null,
    "budget": 200000000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10749,
            "name": "Romance"
        },
        {
            "id": 53,
            "name": "Thriller"
        }
    ],
    "homepage": null,
    "id": 597,
    "imdb_id": "tt0120338",
    "original_language": "en",
    "original_title": "Titanic",
    "overview": "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
    "popularity": 22.705,
    "poster_path": "/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
    "production_companies": [
        {
            "id": 4,
            "logo_path": "/fycMZt242LVjagMByZOLUGbCvv3.png",
            "name": "Paramount",
            "origin_country": "US"
        },
        {
            "id": 574,
            "logo_path": "/iB6GjNVHs5hOqcEYt2rcjBqIjki.png",
            "name": "Lightstorm Entertainment",
            "origin_country": "US"
        },
        {
            "id": 25,
            "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
            "name": "20th Century Fox",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1997-11-18",
    "revenue": 1845034188,
    "runtime": 194,
    "spoken_languages": [
        {
            "iso_639_1": "en",
            "name": "English"
        },
        {
            "iso_639_1": "fr",
            "name": "Français"
        },
        {
            "iso_639_1": "de",
            "name": "Deutsch"
        },
        {
            "iso_639_1": "sv",
            "name": "svenska"
        },
        {
            "iso_639_1": "it",
            "name": "Italiano"
        },
        {
            "iso_639_1": "ru",
            "name": "Pусский"
        }
    ],
    "status": "Released",
    "tagline": "Nothing on Earth could come between them.",
    "title": "Titanic",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 11915
}
//END FOR SEARCH WITH ID

5)url/search/:id?option=like
=========================FOR LIKE =====================
Request Type:- GET
LOGIN REQUIRED
note:- if user has already liked then it will remove like, or if user had disliked then it will like and remove dislike
ex: http://142.93.223.14:3000/search/597?option=like

Response
{
    "success": 1,
    "message": "successfully"
}
//END FOR LIKE

6)url/search/:id?option=dislike
=========================FOR DISLIKE =====================
Request Type:- GET
LOGIN REQUIRED
note:- if user has already disliked then it will remove dislike, or if user had liked then it will dislike and remove like
ex: http://142.93.223.14:3000/search/597?option=dislike

Response
{
    "success": 1,
    "message": "successfully"
}
??END FOR DISLIKE

7)url/search/:id?option=dislike
=========================FOR SEARCH WITH NAME =====================
Request Type:- GET
LOGIN REQUIRED

ex: http://142.93.223.14:3000/search/?query=titanic

Response
{
    "page": 1,
    "total_results": 110,
    "total_pages": 6,
    "results": [
        {
            "vote_average": 7.7,
            "vote_count": 11915,
            "id": 597,
            "video": false,
            "media_type": "movie",
            "title": "Titanic",
            "popularity": 22.705,
            "poster_path": "/kHXEpyfl6zqn8a6YuozZUujufXf.jpg",
            "original_language": "en",
            "original_title": "Titanic",
            "genre_ids": [
                18,
                10749,
                53
            ],
            "backdrop_path": "/vFUI5obFtx4IdhP6k8Om5ezHTrk.jpg",
            "adult": false,
            "overview": "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
            "release_date": "1997-11-18"
        },
        {
            "original_name": "Titanic",
            "id": 20455,
            "media_type": "tv",
            "name": "Titanic",
            "vote_count": 58,
            "vote_average": 6.41,
            "poster_path": "/9INBUmvSVKzCfud7rRk8pkRa3ho.jpg",
            "first_air_date": "1996-01-17",
            "popularity": 2.267,
            "genre_ids": [
                18
            ],
            "original_language": "en",
            "backdrop_path": "/udi11sz1GzpVLTX2XavAWuqB9MW.jpg",
            "overview": "Titanic is a made-for-TV dramatization that premiered as a 2-part miniseries on CBS in 1996. Titanic follows several characters on board the RMS Titanic when she sinks on her maiden voyage in 1912. The miniseries was directed by Robert Lieberman. The original music score was composed by Lennie Niehaus. This is the first Titanic movie to show the ship breaking in two.",
            "origin_country": [
                "US"
            ]
        },
        {
            "original_name": "Titanic",
            "id": 39016,
            "media_type": "tv",
            "name": "Titanic",
            "vote_count": 23,
            "vote_average": 5.48,
            "poster_path": "/yX5dypRRUQ7tAUQOzfXhT8EW5Jw.jpg",
            "first_air_date": "2012-03-21",
            "popularity": 1.784,
            "genre_ids": [
                18
            ],
            "original_language": "en",
            "backdrop_path": "/pVB0jVHuemacwdxJl3iVQ9YTuRH.jpg",
            "overview": "A heart-wrenching journey through Titanic's last moments, featuring both fictional and historical characters, ranging from steerage passengers and crew to upper class guests and staff.",
            "origin_country": []
        },
        {
            "vote_average": 6.5,
            "vote_count": 38,
            "id": 16535,
            "video": false,
            "media_type": "movie",
            "title": "Titanic",
            "popularity": 2.568,
            "poster_path": "/l2ZkdW1zuOgTApWu8N5SdUkDtG6.jpg",
            "original_language": "en",
            "original_title": "Titanic",
            "genre_ids": [
                28,
                18,
                10749
            ],
            "backdrop_path": "/4MlLN6nPOZ6RDFhPcfj4OM1meyY.jpg",
            "adult": false,
            "overview": "Unhappily married, Julia Sturges decides to go to America with her two children on the unsinkable Titanic. Her husband, Richard also arranges passage on the luxury liner so as to have custody of their two children. All this fades to insignificance once the ship hits an iceberg.",
            "release_date": "1953-04-11"
        },
        {
            "vote_average": 6.2,
            "vote_count": 26,
            "id": 11021,
            "video": false,
            "media_type": "movie",
            "title": "Titanic",
            "popularity": 1.551,
            "poster_path": "/h0vUPTmuxzX6ZFHlV2gNXb18TbH.jpg",
            "original_language": "de",
            "original_title": "Titanic",
            "genre_ids": [
                28,
                18,
                36
            ],
            "backdrop_path": "/nZo554S2DtQiZhK59TSzrJItD6X.jpg",
            "adult": false,
            "overview": "This little-known German film retells the true story of the British ocean liner that met a tragic fate. Ernst Fritz Fürbringer plays the president of the White Star Line, who unwisely pressed the Titanic's captain (Otto Wernicke) to make the swiftest possible crossing to New York. Interestingly, director Herbert Selpin was arrested by the Gestapo during this film's production, and German censors banned the film for its scenes of panic and terror.",
            "release_date": "1943-11-10"
        },
        {
            "vote_average": 3.3,
            "vote_count": 75,
            "id": 44918,
            "video": false,
            "media_type": "movie",
            "title": "Titanic 2",
            "popularity": 4.104,
            "poster_path": "/tUSMxX60DGkTIoiDnUNNrJLtP3t.jpg",
            "original_language": "en",
            "original_title": "Titanic II",
            "genre_ids": [
                28,
                12,
                53
            ],
            "backdrop_path": "/9nost5nL1EaqgcGpOpC550M0x9A.jpg",
            "adult": false,
            "overview": "On the 100th anniversary of the original voyage, a modern luxury liner christened \"Titanic 2,\" follows the path of its namesake. But when a tsunami hurls an ice berg into the new ship's path, the passengers and crew must fight to avoid a similar fate.",
            "release_date": "2010-08-07"
        },
        {
            "vote_average": 0,
            "vote_count": 0,
            "id": 499371,
            "video": false,
            "media_type": "movie",
            "title": "Titanic",
            "popularity": 0.707,
            "poster_path": "/96HzElhMpJ1FxMNwWFULRiE49kX.jpg",
            "original_language": "ta",
            "original_title": "டைட்டானிக்",
            "genre_ids": [
                35,
                10749
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "Titanic is an upcoming Tamil-language romantic comedy film written and directed by M. Janakiraman and produced by C. V. Kumar.",
            "release_date": "2018-12-18"
        },
        {
            "original_name": "Cinematic Titanic",
            "id": 43313,
            "media_type": "tv",
            "name": "Cinematic Titanic",
            "vote_count": 0,
            "vote_average": 0,
            "poster_path": "/fgMWXrSYWZQtJAb740pDOKjYkV5.jpg",
            "first_air_date": "2007-12-21",
            "popularity": 1.478,
            "genre_ids": [
                35
            ],
            "original_language": "en",
            "backdrop_path": "/vKnmzPpKWwF7LRSD6MbUkURsGch.jpg",
            "overview": "Cinematic Titanic is a project by Mystery Science Theater 3000 creator and original host, Joel Hodgson. The project involves \"riffing\" B-movies, in a manner similar to that of MST3K. Joining Hodgson are many of the original MST3K cast, as well as some cast members who joined later in the show's run. These include Trace Beaulieu, J. Elvis Weinstein, Frank Conniff and Mary Jo Pehl. It was first performed live on December 7, 2007 and first aired on December 22, 2007.\n\nOn February 16, 2013, it was announced that the touring portion of Cinematic Titanic was going on an indefinite hiatus. According to an email sent out to members of the site, due to \"5 people living in 5 different cities with different lives and projects, it has become increasingly difficult to coordinate our schedules and give Cinematic Titanic the attention it requires to keep growing as a creative enterprise and a business.\" The final tour began on September 23, 2013.",
            "origin_country": []
        },
        {
            "vote_average": 3.1,
            "vote_count": 6,
            "id": 4240,
            "video": false,
            "media_type": "movie",
            "title": "Titanic 2000",
            "popularity": 1.929,
            "poster_path": "/fiEKal45vMDeGcxKXHBA4rNSWRy.jpg",
            "original_language": "en",
            "original_title": "Titanic 2000",
            "genre_ids": [
                35,
                27
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "The luxury liner Titanic 2000 has set sail on its maiden voyage, and one of the passengers is the vampire Vladamina. Vladamina is searching for a woman she can turn into a vampire queen, and frustrated rock groupie Shari looks to be a perfect target. As various people get seduced and/or killed as the liner continues on its doomed voyage, Shari must chose between eternity as a living dead sex slave or a frigid grave at the bottom of the ocean.",
            "release_date": "1999-01-01"
        },
        {
            "vote_average": 6.4,
            "vote_count": 12,
            "id": 86938,
            "video": false,
            "media_type": "movie",
            "title": "S.O.S. Titanic",
            "popularity": 1.229,
            "poster_path": "/bR49KAYEBHm0WNESSsHSxLhUkhx.jpg",
            "original_language": "en",
            "original_title": "S.O.S. Titanic",
            "genre_ids": [
                36,
                18,
                53
            ],
            "backdrop_path": "/wl2zUUC1OP8NkKgXcoNTZzvPIkn.jpg",
            "adult": false,
            "overview": "The Titanic disaster is depicted as seen through the eyes of one couple in each of the three classes on board.",
            "release_date": "1979-09-23"
        },
        {
            "vote_average": 6,
            "vote_count": 1,
            "id": 102370,
            "video": false,
            "media_type": "movie",
            "title": "Saving the Titanic",
            "popularity": 1.396,
            "poster_path": "/sAVXxt25jEHILAI3s9EGXWmY889.jpg",
            "original_language": "en",
            "original_title": "Saving the Titanic",
            "genre_ids": [
                10770,
                99,
                18
            ],
            "backdrop_path": "/2m6NspBEu2DyuF8M3qm2dSPNz1j.jpg",
            "adult": false,
            "overview": "In the hours after the Titanic struck an iceberg 100 years ago, a team of shipbuilders and engineers raced against time to save the stricken vessel.  Based on eye-witness accounts, this film reveals what went on below decks in the hours before the Titanic sank, telling the previously relatively unheralded stories of engineers who fought courageously to hold back the power of the sea and keep the power systems running, even when they learned that all was lost.  Most of these men died but their actions bought enough time to save many lives.  This drama-documentary tells a poignant story of self-sacrifice by the Titanic's engineers, stokers and firemen in the face of impending death.",
            "release_date": "2012-04-15"
        },
        {
            "vote_average": 1,
            "vote_count": 1,
            "id": 83036,
            "video": false,
            "media_type": "movie",
            "title": "Titanic Town",
            "popularity": 1.4,
            "poster_path": "/zfx8YMEG3sR9t4rKYgOD3O0FoPN.jpg",
            "original_language": "en",
            "original_title": "Titanic Town",
            "genre_ids": [
                18
            ],
            "backdrop_path": "/2fSn9K6Z22ngxQe3iyNyevZxdB2.jpg",
            "adult": false,
            "overview": "Belfast 1972: The politically naive Bernie is trying to bring up a normal family in less than normal surroundings. Her best friend is accidentally shot dead by the IRA, and her neighbours are constantly raided by the army. In this climate of fear she stands up and condemns the murders. Criticising both factions, her call for a ceasefire is interpreted as an attack against the IRA, and as her peace movement takes momentum, she and her family are placed in the frontline.",
            "release_date": "1998-08-08"
        },
        {
            "vote_average": 0,
            "vote_count": 0,
            "id": 357517,
            "video": false,
            "media_type": "movie",
            "title": "Titanic",
            "popularity": 0.6,
            "poster_path": "/yi73me6Jl3zDelS9pQK5jtMRhsc.jpg",
            "original_language": "de",
            "original_title": "Titanic",
            "genre_ids": [
                18
            ],
            "backdrop_path": "/dbWq9iawF1qGeWwoCNM6eeznovc.jpg",
            "adult": false,
            "overview": "",
            "release_date": "1984-01-01"
        },
        {
            "vote_average": 10,
            "vote_count": 1,
            "id": 455679,
            "video": false,
            "media_type": "movie",
            "title": "Titanic",
            "popularity": 0.6,
            "poster_path": null,
            "original_language": "pt",
            "original_title": "Titanic",
            "genre_ids": [],
            "backdrop_path": null,
            "adult": false,
            "overview": "",
            "release_date": ""
        },
        {
            "vote_average": 5.4,
            "vote_count": 31,
            "id": 24575,
            "video": false,
            "media_type": "movie",
            "title": "Raise the Titanic",
            "popularity": 1.775,
            "poster_path": "/7cahPJXA1fRXRwqqMVQkX3MTZy3.jpg",
            "original_language": "en",
            "original_title": "Raise the Titanic",
            "genre_ids": [
                28,
                18,
                53
            ],
            "backdrop_path": "/qH90VaspwmpCr4rVmIYn01h0rXM.jpg",
            "adult": false,
            "overview": "To obtain a supply of a rare mineral, a ship raising operation is conducted for the only known source, the Titanic.",
            "release_date": "1980-01-01"
        },
        {
            "vote_average": 5.6,
            "vote_count": 5,
            "id": 420341,
            "video": false,
            "media_type": "movie",
            "title": "Titanic Disaster",
            "popularity": 0.741,
            "poster_path": "/2c0dUpI8CSoQT5rsbsgNGjvVuFM.jpg",
            "original_language": "fr",
            "original_title": "Die Katastrophe der Titanic",
            "genre_ids": [],
            "backdrop_path": null,
            "adult": false,
            "overview": "Incredibly fascinating documentary short that is a truly historic film. We see the actual Titanic leaving for its last voyage and also all the aftermath of the tragedy. We get to view various interesting aspects including seeing Captain Smith minutes before the boat sails, the Mary Sculley and the Carpathia in action, the Carpathia returning to the shore with survivors, Captain Rostrum of the Carpathia, family members at the White Star Office in NY waiting for news and even some of the survivors pulled off the lifeboats. Anyone interested in this historic event would certainly find this film fascinating and it's pretty sad and spooky to watch it today.",
            "release_date": "1912-01-01"
        },
        {
            "vote_average": 7.7,
            "vote_count": 66,
            "id": 10971,
            "video": false,
            "media_type": "movie",
            "title": "A Night to Remember",
            "popularity": 3.422,
            "poster_path": "/6fDhJAz6AuYWj3hAnvUL42Xlxfj.jpg",
            "original_language": "en",
            "original_title": "A Night to Remember",
            "genre_ids": [
                18,
                28,
                36
            ],
            "backdrop_path": "/qNspd6ZNjMukB6BPIxCM8WAtCCk.jpg",
            "adult": false,
            "overview": "The sinking of the Titanic is presented in a highly realistic fashion in this tense British drama. The disaster is portrayed largely from the perspective of the ocean liner's second officer, Charles Lightoller. Despite numerous warnings about ice, the ship sails on, with Capt. Edward John Smith keeping it going at a steady clip. When the doomed vessel finally hits an iceberg, the crew and passengers discover that they lack enough lifeboats, and tragedy follows.",
            "release_date": "1958-12-16"
        },
        {
            "vote_average": 7.1,
            "vote_count": 51,
            "id": 24982,
            "video": false,
            "media_type": "movie",
            "title": "Ghosts of the Abyss",
            "popularity": 3.288,
            "poster_path": "/z8TwKAeNpbayP7iaR5iVlaOzB8k.jpg",
            "original_language": "en",
            "original_title": "Ghosts of the Abyss",
            "genre_ids": [
                99
            ],
            "backdrop_path": "/zvL04vovtDexuNj7kL8HD2GEVS1.jpg",
            "adult": false,
            "overview": "Academy Award® winning director and master storyteller James Cameron journeys back to the site of his greatest inspiration, the legendary wreck of the Titanic. With a team of the world's foremost historic and marine experts and friend Bill Paxton, he embarks on an unscripted adventure back to the final grave where nearly 1,500 souls lost their lives almost a century ago.",
            "release_date": "2003-04-10"
        },
        {
            "vote_average": 8,
            "vote_count": 1,
            "id": 428615,
            "video": true,
            "media_type": "movie",
            "title": "Titanic Waltz",
            "popularity": 0.6,
            "poster_path": "/sS1dGIxItLGw12fqO0LSArUwoa6.jpg",
            "original_language": "ro",
            "original_title": "Titanic vals",
            "genre_ids": [
                35
            ],
            "backdrop_path": null,
            "adult": false,
            "overview": "Based on a play by Tudor Mușatescu, Titanic Vals is the essence of Romanian genius in comedy, with amazing performances and the beautiful absurd of the quotidian.",
            "release_date": "1964-12-02"
        },
        {
            "vote_average": 5,
            "vote_count": 1,
            "id": 428950,
            "video": false,
            "media_type": "movie",
            "title": "Drain the Titanic",
            "popularity": 0.6,
            "poster_path": "/2A9OPQHztBsfFRMzintaOhn4Rry.jpg",
            "original_language": "en",
            "original_title": "Drain the Titanic",
            "genre_ids": [
                99
            ],
            "backdrop_path": "/xVhQ4DztrnLiBNcApQMnOOMALKE.jpg",
            "adult": false,
            "overview": "Computer-generated imagery and other visualization techniques reveal how it would look if all the water was removed from RMS Titanic's final resting place.",
            "release_date": "2016-05-05"
        }
    ]
}