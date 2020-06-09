function reverse() {
    let data = document.getElementById("dataIn");
    let dataString = data.value;
    let dataSplit = dataString.split("");
    let reverseArr = dataSplit.reverse();
    let reverseJoin = reverseArr.join("");

    return  document.getElementById("dataOut").innerHTML = reverseJoin;
}

document.getElementById("myButton").onclick = reverse;
