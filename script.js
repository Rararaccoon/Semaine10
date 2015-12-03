$bouton = getElementById('bouton');
$multiplicateur = getElementById('multiplicateur');
$score = getElementById('score');
score = 0;
nbMultiplicateur = 1;

function affichageScore() {
	$score.innerHTML = 'Score : ' + score;
};

function affichageNbMultiplicateur() {
	$multiplicateur.innerHTML = 'Multiplicateur x' + nbMultiplicateur + ' (prix du prochain: ' + prix() + ')';
}

function clic() {
	score = score + nbMultiplicateur;
	afficherScore();
}

function prix () {
	return 20 * nbMultiplicateur * nbMultiplicateur;
}

function achatMultiplicateur() {
	if (score >= prix()) {
		score = score - prix();
		nbMultiplicateur = nbMultiplicateur + 1;
		affichageNbMultiplicateur();
		affichageScore();
	}
	else {
		alert('Votre score est insuffisant !');
	}
}

$bouton.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
affichageScore();
affichageNbMultiplicateur();






