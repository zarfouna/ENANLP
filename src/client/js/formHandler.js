async function handleSubmit(event) {
    event.preventDefault()
   //Subjectivity, Agreement, Confidence, irony and score_tag
   const artcleText = document.getElementById('article')
   const subjectivityText = document.getElementById('subjectivity')
   const agreementText = document.getElementById('agreement')
   const confidenceText = document.getElementById('confidence')
   const ironyText = document.getElementById('irony')
   const score_tagText = document.getElementById('score_tag')
    
    // check what text was put into the form field
    let formText = document.getElementById('articleInput').value    
    if(!Client.checkForArticle(formText)){
        console.log("::: Form Submitted :::")
        const response=await   fetch('http://localhost:8081/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({article: formText}) })
            const data=await response.json()
            artcleText.innerText =  `Article: ${formText} `
            subjectivityText.innerText = `Subjectivity: ${data.subjectivity} `
            agreementText.innerText=`Agreement: ${data.agreement} `
            confidenceText.innerText=`Confidence: ${data.confidence} `
            ironyText.innerText=`Irony: ${data.irony} `
            score_tagText.innerText=`Score tag: ${data.score_tag} `
    }else{
        
    }

     
       
     
}

export { handleSubmit }
