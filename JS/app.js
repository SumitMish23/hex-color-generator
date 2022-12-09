function changeColor() {
    const arr = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
    ];
    let array1 = [];
    for (let index = 0; index < 6; index++) {
        array1.push(arr[Math.floor(Math.random() * arr.length)]);
    }

    let str =
        "#" +
        array1.map((data) => {
            return data;
        });
    console.log(str);
    document.getElementById("parent").style.backgroundColor = str.replaceAll(
        ",",
        ""
    );
    document.getElementsByClassName("text")[0].innerHTML=str.replaceAll(
        ",",
        ""
    );;
}
document.getElementById("button").addEventListener("click", changeColor);
