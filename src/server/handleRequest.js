const fetch=require('node-fetch')
const dotenv = require('dotenv');
dotenv.config();

const getSentiment =async(article)=>{
    const params = new URLSearchParams();
    params.append('key', process.env.MEANING_CLOUD_KEY);
    params.append('txt', article);
    
    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1',
     {method: 'POST', body: params})  
     const data = await response.json();
    console.log(data) 
    const scores={}
    scores["P+"]= "strong positive"
    scores["P"]= "positive"
    scores["NEU"] = "neutral"
    scores["N"]= "negative"
    scores["N+"]= "strong negative"
    scores["NONE"]= "without polarity"
    return {article:article,
      subjectivity:data.subjectivity,
      agreement:data.agreement,
      confidence:data.confidence,
      irony:data.irony,
      score_tag:scores[data.score_tag]};

  }

  module.exports =getSentiment 