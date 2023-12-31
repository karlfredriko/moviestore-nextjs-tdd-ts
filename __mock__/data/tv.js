const TV_SAMPLES = [
  {
    id: 94722,
    language: "de",
    title: "Tagesschau",
    releasedate: "1952-12-26",
    overview:
      "German daily news program, the oldest still existing program on German television.",
    poster: "https://image.tmdb.org/t/p/w500/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg",
    background:
      "https://image.tmdb.org/t/p/original/jWXrQstj7p3Wl5MfYWY6IHqRpDb.jpg",
  },
  {
    id: 216450,
    language: "zh",
    title: "Stand By Me",
    releasedate: "2023-09-16",
    overview:
      "Story of Luo Qiqi, is an ordinary girl in the 1990s, and her journey of growth, love and friendship.",
    poster: "https://image.tmdb.org/t/p/w500/9TIirRzPHsP2VoGgUBSUwbncF7Z.jpg",
    background:
      "https://image.tmdb.org/t/p/original/qIc1uEQCbhpRvJPhW5A82hSyulA.jpg",
  },
  {
    id: 61818,
    language: "en",
    title: "Late Night with Seth Meyers",
    releasedate: "2014-02-25",
    overview:
      "Seth Meyers, who is 'Saturday Night Live’s' longest serving anchor on the show’s wildly popular 'Weekend Update,' takes over as host of NBC’s 'Late Night' — home to A-list celebrity guests, memorable comedy and the best in musical talent. As the Emmy Award-winning head writer for 'SNL,' Meyers has established a reputation for sharp wit and perfectly timed comedy, and has gained fame for his spot-on jokes and satire. Meyers takes his departure from 'SNL' to his new post at 'Late Night,' as Jimmy Fallon moves to 'The Tonight Show'.",
    poster: "https://image.tmdb.org/t/p/w500/x5asOuPOjW21e0Ykkvkuzu1TGEl.jpg",
    background:
      "https://image.tmdb.org/t/p/original/5AkPhazx8F0Ht74CUdJU03vNzBi.jpg",
  },
  {
    id: 91759,
    language: "cn",
    title: "Come Home Love: Lo and Behold",
    releasedate: "2017-02-06",
    overview:
      "Hung Sue Gan starting from the bottom, established his own logistics company, which is now running smoothly. His only concern now are his three daughters. His eldest daughter has immigrated overseas. His second daughter Hung Yeuk Shui has reached the marriageable age, but has no hopes for marriage anytime soon. She is constantly bickering with her younger sister Hung Sum Yue, who is an honour student, over trivial matters, causing their father to not know whether to laugh or cry. Hung Sue Yan, Hung Sue Gan's brother, moves in with the family, temporarily ending his life as a nomadic photographer. He joins Hung Yeuk Shui's company and encounters Ko Pak Fei, the director of an online shop. The two appear to be former lovers, making for lots of laughter. Since Hung Sue Yan moved in, a series of strange events have occurred in the family. Upon investigation, the source is traced to Lung Ging Fung, a promising young man who is the son of department store mogul Lung Gam Wai.",
    poster: "https://image.tmdb.org/t/p/w500/lgD4j9gUGmMckZpWWRJjorWqGVT.jpg",
    background:
      "https://image.tmdb.org/t/p/original/ohJTnu93hJ0Uonl86Wn3mOSlWXN.jpg",
  },
  {
    id: 209265,
    language: "pt",
    title: "Land of Desire",
    releasedate: "2023-05-08",
    overview:
      "When her husband is killed in a land grabbing attempt, Aline takes charge of cultivating his land and protecting his family. Facing the powerful Antonio La Selva, responsible for the death of her husband and the largest landowner in the region, Aline is determined to keep possession of her land and invest in its production. However, she didn't expect that she would fall in love with Daniel, son of her rival, who is at odds with his rebellious half-brother, Caio, who, in turn, also falls in love with the girl. In the interior of Brazil, Aline will have to fight two battles: the dispute for her lands and for her heart.",
    poster: "https://image.tmdb.org/t/p/w500/33HrrOZQKRp7W3dNXPmKB0udA2m.jpg",
    background:
      "https://image.tmdb.org/t/p/original/aWPhMZ0P2DyfWB7k5NXhGHSZHGC.jpg",
  },
  {
    id: 59941,
    language: "en",
    title: "The Tonight Show Starring Jimmy Fallon",
    releasedate: "2014-02-17",
    overview:
      "After Jay Leno's second retirement from the program, Jimmy Fallon stepped in as his permanent replacement. After 42 years in Los Angeles the program was brought back to New York.",
    poster: "https://image.tmdb.org/t/p/w500/g4amxJvtpnY79J77xeamnAEUO8r.jpg",
    background:
      "https://image.tmdb.org/t/p/original/xl1wGwaPZInJo1JAnpKqnFozWBE.jpg",
  },
  {
    id: 233688,
    language: "zh",
    title: "Spy Game",
    releasedate: "2023-09-20",
    overview:
      "In Jinhai, China, a spy game has shot up to popularity among young people. As it turns out, the game is developed by an overseas intelligence organization known as 'Night Fog'. They are using players to engage in espionage activities without their knowledge and also seizing the opportunity to cultivate spies among them. The evil seeds of the game has been spreading silently throughout the city. At this time, Gao Tian Yang, the head of reconnaissance at Jinhai National Security Bureau works together with intelligence officer Wu Xi to dive deep into the game as they investigate a case surrounding laboratory secrets that have leaked. During their investigation, the two rescue from a conspiracy Huang Zi Cheng, who is like a little brother to Gao Tian Yang, and in turn, he becomes their informant thanks to his rich experience within the spy game.",
    poster: "https://image.tmdb.org/t/p/w500/hh9nlLlZSsAUb5cqzwGouWLTnwv.jpg",
    background:
      "https://image.tmdb.org/t/p/original/yC1rNZrhui8aKK4EdQOfojf1CoF.jpg",
  },
  {
    id: 215803,
    language: "tl",
    title: "Batang Quiapo",
    releasedate: "2023-02-13",
    overview:
      "A young man rises to be one of the biggest outlaws in the neighborhood while he navigates his way in life to survive in Quiapo. Hoping to earn the affection of his parents, his feat draws him closer to the truth about his identity.",
    poster: "https://image.tmdb.org/t/p/w500/9McqS8mgMf5NJCAKZIY6J1oOl8y.jpg",
    background:
      "https://image.tmdb.org/t/p/original/1Xm0WqoT0DjZm5JdG2V6YFabrOz.jpg",
  },
  {
    id: 13945,
    language: "de",
    title: "Gute Zeiten, schlechte Zeiten",
    releasedate: "1992-05-11",
    overview:
      "Gute Zeiten, schlechte Zeiten is a long-running German television soap opera, first broadcast on RTL in 1992. The programme concerns the lives of a fictional neighborhood in Germany's capital city Berlin. Over the years the soap opera tends to have an overhaul of young people in their late teens and early twenties; targeting a young viewership.",
    poster: "https://image.tmdb.org/t/p/w500/fNHBzjxsydcAssxXqb5IV2obDdU.jpg",
    background:
      "https://image.tmdb.org/t/p/original/ottT2Yt0OfHiHp3PHJTLNVV8JPE.jpg",
  },
  {
    id: 213026,
    language: "pt",
    title: "Fuzuê",
    releasedate: "2023-08-14",
    overview: "",
    poster: "https://image.tmdb.org/t/p/w500/zNNFg8z3z7uT817n6M0kHRcYwq1.jpg",
    background:
      "https://image.tmdb.org/t/p/original/yii7eIlaw1MRMfa7FTA6mW8hBUQ.jpg",
  },
  {
    id: 2261,
    language: "en",
    title: "The Tonight Show Starring Johnny Carson",
    releasedate: "1962-10-01",
    overview:
      "The Tonight Show Starring Johnny Carson is a talk show hosted by Johnny Carson under The Tonight Show franchise from 1962 to 1992. It originally aired during late-night. For its first ten years, Carson's Tonight Show was based in New York City with occasional trips to Burbank, California; in May 1972, the show moved permanently to Burbank, California. In 2002, The Tonight Show Starring Johnny Carson was ranked #12 on TV Guide's 50 Greatest TV Shows of All Time.",
    poster: "https://image.tmdb.org/t/p/w500/oA8QVTGlAN511uCAMDN60aVQUs1.jpg",
    background:
      "https://image.tmdb.org/t/p/original/qFfWFwfaEHzDLWLuttWiYq7Poy2.jpg",
  },
  {
    id: 72879,
    language: "fr",
    title: "Tomorrow is Ours",
    releasedate: "2017-07-17",
    overview:
      "The story revolves around the people of Sète, France. Their lives are punctuated by family rivalries, romance and scenes from daily life, but also by plots involving police investigations, secrets and betrayals.",
    poster: "https://image.tmdb.org/t/p/w500/3uU5uJzOX7xe7mn7YKpBM9oiEZO.jpg",
    background:
      "https://image.tmdb.org/t/p/original/9TXcHOeCsM8W3ZKKIKjdYUsRSeq.jpg",
  },
  {
    id: 101463,
    language: "es",
    title: "Al rojo vivo",
    releasedate: "2011-01-10",
    overview: "",
    poster: "https://image.tmdb.org/t/p/w500/ag6PmoBxkF2s1uY3An618NCEt3g.jpg",
    background:
      "https://image.tmdb.org/t/p/original/69Jblm3seQgiPuPQMrJqg9Nxhaz.jpg",
  },
  {
    id: 217216,
    language: "pt",
    title: "Flor Sem Tempo",
    releasedate: "2023-01-30",
    overview: "",
    poster: "https://image.tmdb.org/t/p/w500/bclnfDXvx7UydFSk83B258vRRvI.jpg",
    background:
      "https://image.tmdb.org/t/p/original/5MkBAawsj7O9zitVtzMXagyrIBw.jpg",
  },
  {
    id: 81329,
    language: "fr",
    title: "Chronicles of the Sun",
    releasedate: "2018-08-27",
    overview: "",
    poster: "https://image.tmdb.org/t/p/w500/t6jVlbPMtZOJoAOfeoR4yQmnjXM.jpg",
    background:
      "https://image.tmdb.org/t/p/original/rj3jBAZwPiOgkwAy1205MAgLahj.jpg",
  },
  {
    id: 225660,
    language: "tl",
    title: "Pira-Pirasong Paraiso",
    releasedate: "2023-07-25",
    overview:
      "A con artist takes on the job of pretending to be one of the long-lost sisters of a young and rich woman. As she navigates a world of cunning and lies, she learns about right and wrong, love and family, and spectacular truths about herself.",
    poster: "https://image.tmdb.org/t/p/w500/gELcO56G9EsUj6LSjaDq8VvI8De.jpg",
    background:
      "https://image.tmdb.org/t/p/original/2N4LXvTkUwPRkbvyzdmzvtnCHgR.jpg",
  },
  {
    id: 217510,
    language: "pt",
    title: "Queridos Papás",
    releasedate: "2023-03-13",
    overview: "",
    poster: "https://image.tmdb.org/t/p/w500/m1aGGAPvLpWF5cGhkQeZjbpu2nr.jpg",
    background:
      "https://image.tmdb.org/t/p/original/vW16JyrWiB1cW9wWzxhmjVHoqwJ.jpg",
  },
  {
    id: 2224,
    language: "en",
    title: "The Daily Show",
    releasedate: "1996-07-22",
    overview:
      "Trevor Noah and The World's Fakest News Team tackle the biggest stories in news, politics and pop culture.",
    poster: "https://image.tmdb.org/t/p/w500/nhZhgLYBNYDFRkDwljtrrAVtjop.jpg",
    background:
      "https://image.tmdb.org/t/p/original/zaavgcU6u6cfRx9lYZUxLagXMq2.jpg",
  },
  {
    id: 226411,
    language: "es",
    title: "Mía es la venganza",
    releasedate: "2023-06-12",
    overview: "",
    poster: "https://image.tmdb.org/t/p/w500/wysp5AcY9JpLjje5NunKYw7Mrtc.jpg",
    background:
      "https://image.tmdb.org/t/p/original/i4n8ZKmCUaxcGMkPhm12selZiff.jpg",
  },
  {
    id: 63770,
    language: "en",
    title: "The Late Show with Stephen Colbert",
    releasedate: "2015-09-08",
    overview:
      "Stephen Colbert brings his signature satire and comedy to The Late Show with Stephen Colbert, the #1 show in late night, where he talks with an eclectic mix of guests about what is new and relevant in the worlds of politics, entertainment, business, music, technology, and more. Featuring bandleader Jon Batiste with his band Stay Human, the Emmy Award-nominated show is broadcast from the historic Ed Sullivan Theater. Stephen Colbert, Chris Licht, Tom Purcell, and Jon Stewart are executive producers. Barry Julien and Denise Rehrig serve as co-executive producers.",
    poster: "https://image.tmdb.org/t/p/w500/9jkThAGYj2yp8jsS6Nriy5mzKFT.jpg",
    background:
      "https://image.tmdb.org/t/p/original/gMMnf8VRg3Z98WaFmOLr9Jk8pIs.jpg",
  },
];

export const getAllTVSeries = () => {
  return TV_SAMPLES;
};

export const getTVSerie = (id) => {
  return TV_SAMPLES.find((m) => m.id === id);
};
