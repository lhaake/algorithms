// Sentences should start with capital letters.

// From codewars 7kyu. https://www.codewars.com/kata/5bf774a81505a7413400006a

// You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the first word of each sentence.
    // For example,
    // input: "hello. my name is inigo montoya. you killed my father. prepare to die."
    // output: "Hello. My name is inigo montoya. You killed my father. Prepare to die"

// You may assume:
// - there will be no punctuation besides full stops and spaces

// - all but the last full stop will be followed by a space and at least one word


const fix = (paragraph) => {

    paragraph = paragraph.split(". ")

    console.log(paragraph)

    for(let i = 0; i < paragraph.length; i += 1) {
        paragraph[i] = paragraph[i][0].toUpperCase() + paragraph[i].slice(1)
    }

 return paragraph.join(". ")

}

console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."))