<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!empty($_POST['message'])) {  // Check if the 'message' field is provided
        $commentaire = htmlspecialchars($_POST['message']);
        echo $commentaire;
    } else {
        echo "Le champ 'message' est vide.";
    }
} else {
    echo "La valeur n'existe pas";
}

