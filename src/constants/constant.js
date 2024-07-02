const quotes = [
    "You're the most beautiful women I've ever seen.",
    "You are so beautiful that it is hard to believe you are even real.",
    "You light up any room you walk into",
    "There is nothing more beautiful than your smile.",
    "You are the light at the end of my tunnel.",
    "You look the cutest when you laugh.",
    "I can simply not keep my eyes off of you.",
    "I could just look at you for hours without ever getting bored.",
    "You look so irresistible when you blush.",
    "I'm enchanted by your eyes; they're so expressive and beautiful."
    ]

export const generateRandomQuotes = () => {
    const index = Math.floor((Math.random()* quotes.length));
    return quotes[index];
}
