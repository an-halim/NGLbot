import axios from "axios";
import Chance from "chance";
import UserAgents from "user-agents";

const chance = new Chance();
const userAgent = new UserAgents();

export default class NGL {
  /**
   *
   * @param {*} username
   * @param {*} {random: false: text: 'okee'}
   * fill random true to sent message randomize
   */
  constructor(username, { random = false, text }) {
    this.random = random;
    this.text = text;
    this.username = username;
  }

  /**
   *
   * @param {*} count
   */

  sent = ({ count = 1 }) => {
    const randomQuestions = [
      "a secret you kept from your parents 👀",
      "ain't no way",
      "any pets?",
      "are you a back seat driver?",
      "are you close with your parents?",
      "are you gonna get a tat",
      "are you judgemental",
      "are you looking to date someone rn",
      "are you straight?",
      "are you talking to anyone?",
      "Biggest red flags for a girl?",
      "biggest red flags in a guy?",
      "biggest regret?",
      "body count 😳?",
      "can we be besties",
      "craziest pickup line that worked?",
      "did you have an imaginary friend?",
      "did you watch game of thrones?",
      "do u have a dog?",
      "do u use pronouns",
      "do you even like school?",
      "do you have a middle name?",
      "do you have any cute friends for me lmao",
      "do you have any piercings?",
      "do you have trust issues?",
      "do you love ur life? x",
      "do you snore?",
      "do you speak another language?",
      "do you want kids evenutally?",
      "dogs or cats?",
      "dont leave me on opened",
      "dream job?",
      "ever gone skinny dipping?",
      "everything ok?",
      "favorite food?",
      "favorite movie?",
      "Favorite movie/ tv series rn",
      "favorite show rn?",
      "have any netflix recomendations??",
      "have any netlix recomendations?",
      "have u seen breaking bad",
      "have you done drugs 🍃",
      "Have you ever been fired from a job?",
      "have you ever cheated, you gotta be honest lol",
      "have you ever cried during a movie 🤷",
      "have you ever given a hickey?",
      "have you ever gotten in a fist fight?",
      "have you ever had any surgery",
      "have you ever thought about being bi",
      "have you ever watched harry potter?",
      "hottest sport? 🥵",
      "how are you feeling today :)",
      "How are you today ❤️‍🩹",
      "how big of nerd are you 1 to 10",
      "how many exes do you have?",
      "how many hours of sleep you get last night?",
      "how many kids do you want to have",
      "how many selfies do you take a day?",
      "how many stuffed animals you own?",
      "how old are you again?",
      "how old do u wanna be whe u get married?",
      "how tall are u",
      "how tall are you??",
      "how tall r u",
      "How's you day going ??!",
      "I have a crush on you",
      "I have covid, any show recomendations?",
      "I know what you did",
      "i love uuuuuu!!",
      "i miss you",
      "i really like you",
      "insta?",
      "introvert or extrovert?",
      "is it true???",
      "is ngl the best app tho :)",
      "kanye is the best 😤 change my mind",
      "name all your exes",
      "netflix and chill? 👀",
      "not gonna judge but why...",
      "one friend ur thankful for...",
      "one thing you can't survive without?",
      "opinion on birds?",
      "personality or looks?",
      "please give me pickup lines that always work",
      "should i be honest with you on here?",
      "shout me out",
      "single?",
      "spill some tea",
      "spill the tea on your first kiss.",
      "tell me a funny joke",
      "tell me a random fact",
      "the longest time you've ever gone without showering?",
      "the most embarrassing thing you've ever done?",
      "the weirdest place you've ever gone to the bathroom?",
      "the weirdest thing you've ever eaten?",
      "The weirdest trend you've done",
      "the worst advice you've ever given?",
      "the worst date you've ever been on?",
      "the worst food you ever eaten?",
      "the worst pick up line you've ever heard?",
      "the worst trouble you go into as a kid?",
      "u busy this weekend?",
      "uh what did you eat for breakfast?",
      "we should talk more",
      "what are ur plans this weekend?",
      "what are you wearing?",
      "what color is your room?",
      "what did you dream about last night?",
      "what have you gotten detention for?",
      "What is your shoe size?",
      "what music do you listen to",
      "what phone do you have?",
      "what time did you fall asleep last night?",
      "what time do you usually go to bed?",
      "what was the best day so far this year?",
      "what was ur worst day ever",
      "what was your favorite show when you were a kid?",
      "What's ur fav brand?? <3",
      "whats in ur spotify top songs",
      "whats the last thing you ate?",
      "whats the stupidest thing you thought as a kid?",
      "whats ur fav book",
      "whats ur fav drink",
      "whats ur fav food",
      "whats ur fav movie",
      "whats ur fav song",
      "whats ur fav tv show",
      "whats ur favorite food?",
      "whats ur oritenation",
      "whats your biggest insecurity 🤔",
      "whats your dream house",
      "whats your fav sport?",
      "whats your number one song on spotify",
      "whats your sign",
      "when was the last time you cried?",
      "when was the last time you lied?",
      "when was the last time you wet the bed?",
      "when was your first kiss?",
      "where are you from...?",
      "where are your parents from?",
      "who are your best girl friends",
      "who do you have pinned on imessage",
      "who do you miss the most",
      "who do you text the most?",
      "who was the last dude you texted?",
      "who was the last girl you texted?",
      "who was your crush in middle school lmao",
      "who was your first kiss?",
      "who you tryna get with 👀",
      "who you tryna vote for in 2024 👀",
      "whos the last person you texted?",
      "whos ur best friend",
      "whos ur crush?",
      "whos ur worst enemy 😈",
      "whos your last ig search?",
      "whos your last snap from?",
      "why doesnt my crush like me back 😭",
      "worst movie youve ever watched?",
      "would you ever be fwb",
      "would you ever get with me? ~ N",
      "would you leave your SO for a celeb",
      "would you say yes if i asked you out - A",
      "wyd",
      "wyd tomorrow",
      "yo stop leaving me on read",
      "you a homie",
      "you ever think about having the ability to teleport?",
      "you got a sneaky link?",
      "you have good style",
      "you lit",
      "you should get a tattoo",
      "you should post more selfies 💕",
      "you wild for what you did",
      "you're best friend",
      "Your biggest fear?",
      "your biggest insecurity?",
      "your celeb crush?",
      "your favorite hobby?",
      "your favorite part of your body?",
      "your last song on your spotify?",
      "your really attractive",
      "your worst habit?",
      "your worst personality characteristic?",
      "youre cute",
    ];

    for (let i = 0; i < count; i++) {
      let data = {
        username: this.username,
        question: this.random
          ? randomQuestions[Math.floor(Math.random() * randomQuestions.length)]
          : this.text,
        deviceId: chance.guid({ version: 5 }),
        gameSlug: "",
        referrer: "",
      };

      let response = (status) => {
        return status === 200
          ? "\x1b[92mMessage sent!\x1b[89m"
          : "\x1b[91mFailed sent!\x1b[89m";
      };

      let url = `https://ngl.link/api/submit`;
      let headers = {
        accept: "*/*",
        "accept-language": "id-ID,id;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua":
          '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
      };

      axios
        .post(url, data, headers)
        .then((res) => {
          console.log(response(res?.status));
        })
        .catch((e) => {
          console.log(response(e?.response?.status));
        });
    }
  };
}
