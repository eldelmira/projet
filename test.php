<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $commentaire = htmlspecialchars($_POST['Commentaire']);
    echo $commentaire;
}

?>