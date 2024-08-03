// function getQuotesFromUrl() {
//     let url = "https://api.quotable.io/quotes?limit=500"

//     return fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then(data => {
//             let quotes = data.results.map(quote => {
//                 return {
//                     content: quote.content,
//                     author: quote.author
//                 }
//             })
//             return quotes
//         })
//         .catch(error => {
//             console.log(error)
//             return []
//         })
// }

// getQuotesFromUrl().then(quotes => {
//     let index = Math.floor(Math.random() * 500)
//     let quote = quotes[index]    
//     console.log(quote)

//     document.querySelector('.quote').innerHTML = `"${quote.content}"`
//     document.querySelector('.author').innerHTML = `"${quote.author}"`
// }
// )

async function getQuotesFromUrl() {
    try {
        let url = "https://api.quotable.io/quotes?limit=500"
        const response = await fetch(url)
        const data = await response.json();
        if(response.ok) {
            const quotes = data.results.map(quote => {
                return {
                    content: quote.content,
                    author: quote.author
                }
            })
            return quotes
        } else {
            throw new Error("Error api")
        }
    } catch(error) {
        console.error(error);
        return [];
    }
}

async function renderQuote() {
    try {
        const quotes = await getQuotesFromUrl()
        let index = Math.floor(Math.random() * quotes.length)
        let quote = quotes[index]    
        document.querySelector('.quote').innerHTML = `"${quote.content}"`
        document.querySelector('.author').innerHTML = `${quote.author}`
    } catch(e) {
        console.error(e)
    }
}

renderQuote() 




