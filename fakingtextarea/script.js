let array = ["a", "b", "c", "d", "e", "f"];
let str = "";

function fake() {
    let text = document.getElementById("txt").value;
    let j = text.length;
    if (j > 0) {
        for (let i = 0; i < j; i++) {
            str = str + array[i];
            if (i === 6) {
                document.getElementById("txt").value = "";
                str = "";
            }
        }
    }
    document.getElementById("txt").value = str;
    str = "";
    setTimeout("fake()", 1);
}
