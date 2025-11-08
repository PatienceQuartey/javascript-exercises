const reverseString = function(theWord) {
    let newWord =  theWord.split('');
    let backWardsArray = newWord.reverse('');
    let revWord = backWardsArray.join('')
    return revWord



};


console.log(
    reverseString("hello")
)

// Do not edit below this line
module.exports = reverseString;
