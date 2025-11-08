const repeatString = function(string , num) {
    let userWord = ""
    if(num < 0){
        return "ERROR"
    }else if(num >= 0){
        for (let i = 0; i < num; i++){
            userWord += string

            
        }
    }
    return userWord

};



console.log(repeatString("goodbye" , -1))

// Do not edit below this line
module.exports = repeatString;
