


function round(value, exp) {
    if (typeof exp === 'undefined' || +exp === 0)
        return Math.round(value);

    value = +value;
    exp = +exp;

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
        return NaN;

    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}


function nonEffective(n) {
    console.log(n);
    return n === undefined || n == null;
}


function isBlank(text) {
    return text == null || text === undefined || !text || /^\s*$/.test(text);
}



function drawTable(divId, data) {

    var div = document.getElementById(divId);
    var table = document.createElement("table");

    var headerRow = document.createElement("tr");
    var headerData = data[0];
    for (var i = 0; i < headerData.length; i++) {
        var cell = document.createElement("th");
        var cellText = document.createTextNode(headerData[i]);
        cell.appendChild(cellText);
        headerRow.appendChild(cell);
    }
    table.appendChild(headerRow);

    for (var r = 1; r < data.length; r++) {
        var row = document.createElement("tr");

        var rowData = data[r];
        for (var i = 0; i < rowData.length; i++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(rowData[i]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    div.appendChild(table);
}

