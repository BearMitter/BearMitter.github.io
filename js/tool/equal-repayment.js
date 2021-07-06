





function loadRpa(principal, termRate, terms, roundingScale) {

    var a = Math.pow(1 + termRate, terms);
    return round(principal * termRate * a / (a - 1), roundingScale);

}

function getTermRate(annualRate, durationCount, durationUnit) {
    return round(annualRate * durationCount /
        (durationUnit == 'M' ? 12 : 360), 12);
}

function getAmortizationBills(principal, annualRate, terms, roundingScale, durationUnit, durationCount) {


    if (nonEffective(roundingScale)) {
        roundingScale = 2;
    }

    if (nonEffective(durationUnit)) {
        durationUnit = 'M';
        durationCount = 1;
    }

    var termRate = getTermRate(annualRate, durationCount, durationUnit);
    var rpa = loadRpa(principal, termRate, terms, 2);
    var remainingP = principal;

    var termDetails = [];
    for (var i = 1; i <= terms; i++) {
        var interetInThatTerm = round(remainingP * termRate, roundingScale);
        var principalInThatTerm = round(i == terms ? remainingP : rpa - interetInThatTerm, roundingScale);
        remainingP = round(remainingP - principalInThatTerm, roundingScale);
        termDetails.push(new Map([
            ['p', principalInThatTerm],
            ['i', interetInThatTerm],
            ['remainP', remainingP]

        ]));
    }

    return termDetails;


}



