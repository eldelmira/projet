function test_age(){
    let age = prompt("Quelle est votre age ?");
    if (age<18)
        {
            document.write("Attention accès refusé, vous êtes Mineur")
            document.body.style.backgroundColor="red";
        } 
        
        else
        {
            document.write("Ok, vous êtes Majeur");
            document.body.style.backgroundColor = "green"
        }



}

function affiche(){

    let prenom = prompt("Saissisez votre prénom");
    let nom = prompt("Saissisez votre nom");
    let age = prompt("Saississez votre age ?");
    document.write("<div style='border:5px solid blue; width:auto; height:300px; margin:auto; font-size:2em; text-align:center; background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,253,107,1) 50%, rgba(252,176,69,1) 100%);'>")
    document.write("Bonjour  "+ prenom+ "   "+nom+ ".  "+"Vous avez"+ "   "+age+"  "+ "ans");
    document.write("</div>");
}
