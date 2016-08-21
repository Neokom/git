

function discr() {
    var a = 1;
    var b = 2;
    var c = 3;
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        var x = -b / (2 * a);
        console.log("Корень : x = " + x);
    } else if (discriminant > 0) {
        var x3 = (-b + discriminant) / (2 * a);
        var x4 = (-b + discriminant) / (2 * a);
        console.log("Корень : x3 = " + x3)
        console.log("Корень : x4 = " + x4)
    } else {
        console.log("Нет корней");
    }
}