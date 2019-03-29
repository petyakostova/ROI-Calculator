function conversion() {
    var formulaUSOdds,
        euro_odds = document.getElementById('euro-odds').value;

    if (euro_odds < 2) {
        formulaUSOdds = '-100 / (euro_odds - 1)';
    } else {
        formulaUSOdds = '(euro_odds - 1) * 100';
    }

    document.getElementById('us-odds').innerHTML = eval(formulaUSOdds).toFixed(2) + ' US';
}

function calculate() {
    var euro_odds = document.getElementById('euro-odds').value;
    var winning_probability = document.getElementById('winning-probability').value;

    var formulaROI = '(euro_odds * winning_probability / 100 - 1) * 100';

    if (euro_odds !== '' && winning_probability !== '') {
        document.getElementById('roi').innerHTML = eval(formulaROI).toFixed(2);
    }
}

function refresh() {
    location.reload();

    document.getElementById('euro-odds').value = '';
    document.getElementById('winning-probability').value = '';
}
