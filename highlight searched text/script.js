function search() {
    let textToSearch = document.getElementById("text-to-search").value;
    
    //let paragraph = document.getElementById("paragraph");
    let paragraph = document.getElementById("randomText");

    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
    let pattern = new RegExp(`${textToSearch}`,"gi");
    paragraph.innerHTML = paragraph.textContent.
    replace(pattern, match => `<mark>${match}</mark>`);
}


const loremWords = [
    "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
    "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
    "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
    "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", 
    "commodo", "consequat", "duis", "aute", "irure", "dolor", "in", "reprehenderit", 
    "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", 
    "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", 
    "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", 
    "est", "laborum"
];

function generateRandomLorem(length) {
    let result = [];
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * loremWords.length);
        result.push(loremWords[randomIndex]);
    }
    return result.join(" ");
}

function updateRandomText() {
    const randomTextElement = document.getElementById('randomText');
    randomTextElement.textContent = generateRandomLorem(30); 
}

updateRandomText();

