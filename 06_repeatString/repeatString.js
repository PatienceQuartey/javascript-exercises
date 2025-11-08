const repeatString = function(string , num) {
    let userWord = ""
    if(num < 0){
        return "Please input number 0 and over!"
    }else if(num >= 0){
        for (let i = 0; i < num; i++){
            userWord += string

            
        }
    }
    return userWord

};



console.log(repeatString("bye" , 0))

// Do not edit below this line
module.exports = repeatString;
