$(document).ready(function () {

        //  -----------------------Mr SMITH--------------
        const debutPhrase = ["Tien j'en ai une bonne,", "Ah je tes pas dit,", "Ca me fait penser a un truk,", "Ecoute bien ça,", "Allez encore une pour le plaisir,", "Celle la elle est pour toi,"];
        const milieuPhrase = [" j'ai croiser un alien et je lui ai dit", " lors d'une mission special je sors a l'agent K", " je vois un chien a coté d'un vieil homme et lui balance"];
        const finPhrase = [" \"On vous a pas dit qu’il pleuvait des blacks à New-York.\" ", " \"La différence entre toi et moi, c'est que moi j'ai la classe.\" ", " \"qu'est ce qu'il et merdique ton deguisement c'est evidant que t'en est un.\" ", " \"Le silence votre langue natale, vous ne faites plus parti du système, vous êtes au dessus du système.\" "];

        // ------------------------Mr johns--------------
        const debutPhrase2 = ["Je me rappel a mes debut,", "Ca remonte a longtemps,", "Vous savez,", "Il y a quelques siècles,", "Une fois n'est pas coutume,", "Lors d'un controle d'alien"];
        const milieuPhrase2 = [" l'agence ma dit ", " j'etais face a J et hurle", " j'observais un cafard droit dans ses antennes et dit", " Je sors mon neuralizeur et dit "];
        const finPhrase2 = [" \" Les MIB sont pas la pour rigoler\".", " \" Tu as vendu un carboniseur azimuté réverbérant à capacité accrue à un clandestin céphalopoïde espèce de trouduc\".", " \" Insecte à l’entrée, Bouillie à la sortie\".", " \" Edgar, t’as la peau qui flotte\".", "\" Vous pensez vraiment qu’un costume noir va résoudre tous vos problèmes ?\".", " \" Regarde la lumiere juste la\"."];

        // appelle de la methode genererPhrase()  au click pour generer citation via sweetAlert
        document.getElementById('generer').addEventListener('click', function () {
                myCitation.genererPhrase();
        });

        document.getElementById('generer2').addEventListener('click', function () {
                myCitation2.genererPhrase();
        });
        
        class Citation {
                constructor(debut, milieu, fin) {
                        this.debut = debut;
                        this.milieu = milieu;
                        this.fin = fin;
                }
                //methode
                genererPhrase() {
                        // recuperation selection
                        const select = document.getElementById("select");
                        const index = select.selectedIndex;
                        let selection = select.options[index].value;

                        const resultat = [];

                        // boucle for avec .push pour ajouter des citations
                        for (let i = 0; i < selection; i++) {

                                const uneCitation = this.debut[Math.floor(Math.random() * this.debut.length)] + this.milieu[Math.floor(Math.random() * this.milieu.length)] + this.fin[Math.floor(Math.random() * this.fin.length)] + '<br>' + '<br>';
                                resultat.push(uneCitation);
                        }

                        const contenu = document.createElement("p");
                        contenu.innerHTML = resultat;

                        Swal.fire({
                                title: "Citation chargée !",
                                icon: "success",
                                html: contenu, //contenu de la modal
                                showCloseButton: true, //croix en haut a droite
                                confirmButtonText: "Recommencer", //bouton en bas a gauche    
                        });

                        if (selection == 0) {
                                Swal.fire({
                                        title: "euu....choisi un nombre",
                                        icon: "error",
                                        showCloseButton: true, //croix en haut a droite
                                        imageUrl: ("funny.jpg"),
                                });

                        }
                }
        }
        // instance de ma classe Citation suivant quelle generateur on va utiliser

        let myCitation = new Citation(debutPhrase, milieuPhrase, finPhrase);
        let myCitation2 = new Citation(debutPhrase2, milieuPhrase2, finPhrase2);


});

//---------------------------function display none / block demander par mon mentor-----------------
function generateur2() {
        var bleu = true;

        if (true) {
                document.getElementById("container1").style.display = 'none';
                document.getElementById("contenu").style.display = 'block';
                document.getElementById("generer2").style.display = 'none';
                document.getElementById("generer").style.display = 'block';
        }
}
//-----------------------------function display none / block demander par mon mentor------------------
function generateur1() {

        var rouge = true;
        if (true) {
                document.getElementById("container1").style.display = 'none';
                document.getElementById("contenu").style.display = 'block';
                document.getElementById("generer2").style.display = 'block';
                document.getElementById("generer").style.display = 'none';
        }
}

//--------------- function pour recommencer/ quitter---------------
function reset() {
        Swal.fire({

                title: 'ah oui.... juste un moment.',
                imageUrl: 'https://media.giphy.com/media/65NO1TrKrJUT6/source.gif',
                imageWidth: 600,
                imageHeight: 400,
                backdrop: 'swal2-backdrop-hide',
                confirmButtonText: 'tu peux quitter maintenant',
                preConfirm: () => {
                        return [
                                window.location.reload(true)
                        ]
                }

        });
}


