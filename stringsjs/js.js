var list = [6, 3, 2, 5, 4, 1, 7, 8, 9, 10];
alert(list);
list.sort(function (e1, e2) {
    return e2 - e1;
});
alert(list);

var list2 = list.slice(0, 5);
alert(list2);
var list3 = list.slice(5);
alert(list3);

function sum() {
    for (var i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            var sum = 0;
            sum += i;
        }
    }
}

