let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/apikey=7035c60c&s=frozen
The uick brown fox jumps over the lalzy dog.
abbcccddddaaddd
http://localhost:1234
동해물과_백두산이 마르고 닿도록
`

console.log(
    str.match(/(?<=\@).{1,}/g)
)