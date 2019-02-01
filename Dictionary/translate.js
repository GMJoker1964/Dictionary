var english = ["Hello","Morning","Key"];
var vietnam = ["Xin chào","Buổi sáng","Chìa khóa"];
var input = prompt("Input english: ");
for(var i = 0;i<english.length;i++){
    if(input == english[i]) {
        document.write("Translate: " + vietnam[i]);
        break;
    }
}