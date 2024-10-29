
function couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "red"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="red"       
    }

    else if (couleur == "lightblue"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightblue"
    } 

    else if (couleur == "lightgreen"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightgreen"

    } 

    else if (couleur == "lightpink"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="lightpink"
    } 

    else if (couleur == "teal"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="teal"
    } 
    else if (couleur == "black"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="black"
    }
    else if (couleur == "yellow"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="yellow"
    } 
    else if (couleur == "violet"){ 
        document.querySelector('.calculatrice').style.backgroundColor ="mediumslateblue"
    }  
    else
    {
        document.write("Couleur non comprise")
        document.write("<body style='background-color: red; text-align:center; font-size:px;180'>")
    }
}

function couleur1(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "red"){ 
        document.querySelectorAll(".bouton").style.backgroundColor ="red"       
    }

    else if (couleur == "lightblue"){ 
        document.querySelectorAll(".bouton").style.backgroundColor ="lightblue"
    } 

    else if (couleur == "lightgreen"){ 
        document.querySelectorAll('.bouton').style.backgroundColor ="lightgreen"

    } 

    else if (couleur == "lightpink"){ 
        document.querySelectorAll('.bouton').style.backgroundColor ="lightpink"
    } 

    else if (couleur == "teal"){ 
        document.querySelectorAll('.bouton').style.backgroundColor ="teal"
    } 
    else if (couleur == "black"){ 
        document.querySelectorAll('.bouton').style.backgroundColor ="black"
    }
    else if (couleur == "yellow"){ 
        document.querySelectorAll('.bouton').style.backgroundColor ="yellow"
    } 
    else if (couleur == "violet"){ 
        document.querySelectorAll('.bouton').style.backgroundColor ="mediumslateblue"
    }  
    else
    {
        document.write("Couleur non comprise")
        document.write("<body style='background-color: red; text-align:center; font-size:px;180'>")
    }
}

const touches = [...document.querySelectorAll('.bouton')];
const listKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');


document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
    //console.log(values, typeof values)//
})


document.addEventListener('click',(e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)
})


const calculer = (valeur) =>{
    if (listKeycode.includes(valeur)){
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
            
            break;

            case '46': 
                ecran.textContent = ecran.textContent.slice(0, -1);
            
            break
            
              
            default:
                const indexKeyCode = listKeycode.indexOf(values);
                const touche = touches[indexKeyCode];
                ecran.textContent += touche.innerHTML;
                break;
        } 
    }
}