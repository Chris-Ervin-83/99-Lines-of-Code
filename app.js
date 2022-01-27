const friends = ["Eric", "Paul", "Torrey", "Blake", "Greg"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  for (let count = 99; count > 0; count--){
    if (count > 2) {
       console.log(count + " lines of code in the file,") + count + " lines of code;" + friends[i] + "strikes one out, clears it all out," + (count -1) + "lines of code in the file"
    }
    else if (count == 2) {
        console.log(count + " lines of code in the file,") + count + " lines of code;" + friends[i] + "strikes one out, clears it all out," + (count -1) + "lines of code in the file"
    }
    else if (count == 1){
        console.log(count + " lines of code in the file,") + count + " lines of code;" + friends[i] + "strikes one out, clears it all out," + (count -1) + "lines of code in the file"
    }
}
}


  
