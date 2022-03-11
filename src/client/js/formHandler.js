async function handleSubmit(event) {
    event.preventDefault()
    console.log("clicked")
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log(Client.checkForArticle(formText))
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
            document.getElementById('results').innerHTML = `Article ${formText} and Sentiment ${data.sentiment} `
                   
    }else{
        
    }

     
       
     
}

export { handleSubmit }
