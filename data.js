let question = [
    ["Je me place toujours devant vous, tout le jours a tout heure et a chaque minute", "L'avenir"],
    ["Je suis l'aine de mes 25 freres, J'ai fait 3 fois le tour du Canada, 3 fois le tour du Sahara. Qui suis-je ?", "Lettre A"],
    ["Quand tu marche je parle et quand tu t'arret je me tais", "Dia tongotra"],
    ["3 chats sont frere et soeur Moulu, Souki et Louki, Quelle est le prenom de la mere", "Quelle"],
    ["Je suis blanc, peit et fait pleurer", "don't know"],
    ['A quelle question est-ce que vous ne pourrez jamais répondre "oui"?', 'Es-tu déjà endormi ?'],
    ["Je me brise lorsque l'on me nomme.", 'Le silence'],
    ["Une personne sûre d'elle dit qu'elle répond à tout…ujours la vérité.\nComment pouvez-vous la piéger ?", 'Est-ce que le prochain mot que tu vas dire est "non"']
    ,['Avez-vous remarquez que si vous faites tomber un v…l se casse toujours au dernier rebond.\nPourquoi ?', "C'est logique, une fois cassé, il ne peut plus rebondir"]
    ,['Un berger possède 27 brebis. Toutes meurent sauf 8.\n\nCombien en reste-t-il ?', "8...  Si vous avez répondu 19 c'est que vous vous … première fois que j'ai entendu cette devinette"]
    ,["La population mondiale est de 8 milliards d'humain…nète les uns par les autres.\nCombien obtient-on ?", "0"]
    ,['Deux enseignes vendant le même produit se font fac…e font pas concurrence.\nComment est-ce possible ?', "Ce sont deux stations services sur l'autoroute"]
    ,["Qu'est ce qui vous appartient bien que les gens l'utilisent plus que vous ?", 'Votre prénom']
    ,['Vous pouvez me trouver dans décembre mais pas dans les autres mois.\nQue suis-je ?', 'La lettre D']
    ,['Durant quel mois on dort le moins ?', "Février, car c'est celui qui a le moins de jours"]
    ,["Qu'est ce qui a 13 cœurs mais aucun autre organe ?", 'Un jeu de carte.']
    ,['Dans quelle situation le chiffre deux est égale à dix ?', "Lorsqu'on lit les minutes sur une montre à aiguille"]
    ,["Qu'est ce que vous pouvez attraper mais pas jeter ?", 'Un rhume.']
    ,["Qu'est ce que l'on doit casser avant de l'utiliser? (Attention, ce n'est pas votre ordinateur!!!)", 'Un œuf']
    ,['Qui se lève sans faire de bruit ?', 'Le jour']
    ,["Qu'est ce qui réfléchit sans réfléchir ?", 'Un miroir']
    ,["Qu'est-ce qu'une éclipse ?", "C'est une sombre histoire entre la lune et le soleil"]
    ,["Qu'est ce que du ciment dans un pot ?\n\n", 'De la confiture de mur']
    ,['Quel est le mode de transport préféré des vampires ?', 'Le vaisseau sanguin']
    ,['Combien font 3 et 3 ?', 'Match nul']
    ,["Un éléphant rentre dans un bar, que prend t'il ?", 'De la place']
    ,["Qu'est-ce qui a deux aiguilles mais qui ne pique pas ?", 'Une montre']
    ,["Quelle est l'expression que les vampires répètent souvent ?", 'Bon sang']
    ,["qu'est ce qui a 2 branches mais pas de feuille ?", 'Des lunettes']
    ,['Quel est le numéro préféré du vampire ?', 'Le 100']
    ,["Qu'est-ce qui est jaune avec une cape ?", 'Une banane qui essaie d’imiter super tomate']
    ,["C'est le fils de ma mère mais c'est pas mon frère, qui est-ce ?", "C'est moi"]
    ,['Où sont les poissons sportifs ?', 'Dans une mare à thon. (marathon)']
    ,["Quel est l' animal le plus collant ?", 'Le dromadaire... parce que le drom adhère']
    ,['Quel est le fruit préféré des militaires ?', 'La grenade']
    ,['Pourquoi Mickey Mousse ?', 'Parce-que Mario Brosse']
    ,["On m'entend mais on ne me voit pas.\nQui suis-je ?", 'La voix']
    ,['Quel est le plat préféré des pompiers ?', 'Le pot au feu']
    ,["Qu'est-ce qui peut faire le tour d'une maison sans bouger ?", 'Le mur']
    ,['Quand je mange je grandis et quand je bois je meurs.\nQui suis je ?', 'Le feu']
    ,['Que dit une virgule à un point ?', 'Arrête de me couper la parole ou je te mets entre parenthèses']
    ,['Je peux faire le tour du monde tout en restant dans mon coin.', 'Un timbre']
    ,["Qu'est-ce qui est né grand, et qui meurt petit ?", 'Une Bougie']
    ,['Qui tombe sans se faire mal ?', 'La nuit']
    ,['Sans moi, Paris serait pris.', 'La lettre A']

]


let score = 0
let tentative = 3
let animateIndex=0;

function finder(n, arr){
    let ch = false
    arr.forEach(ar => {
        if (ar==n){
            ch = true
        }
    })
    return ch
}
function letter(l){
    //console.log(question[l][0].length)
    setTimeout(()=>{
        if (animateIndex<question[l][0].length){
                container.childNodes[3].textContent += question[l][0][animateIndex]
                animateIndex++
                letter(l)
            }
        else{
            animateIndex = 0
        }
        }, 10)
}
    
    

function start(){
    let index = Math.round(Math.random()*(question.length))
    while(finder(index, used)){
        index=Math.round(Math.random()*(question.length))
    }
    container.childNodes[3].textContent = ""
    letter(index)

    return index
}

/* Section score de l'utilisateur */

const scoreUser = document.querySelector(".score p")
const tente = document.querySelector(".tentative p")
scoreUser.textContent=score
tente.textContent = tentative
function scoreRef(){
    scoreUser.textContent=score
    tente.textContent = tentative
}


/* FIn du section score */

const container = document.querySelector("#question-contain")
const form = document.querySelector("form")
const overlay_resp = document.querySelector(".overlay-contain")
const score_final_container = document.querySelector(".resp-final-container")
let used = []
let passage = []
let ind = start()

form.addEventListener("submit", (e)=>{
    if (tentative>1){
        if (form.childNodes[1].value.toLocaleLowerCase()==question[ind][1].toLocaleLowerCase()){
            //console.log("Bravo")
            tentative=3
            score+=1
            used.push(ind)
            ind = start()
        }
        else{
            tentative--;
            //console.log("Echec")
        }
        if (!finder(ind, passage)){
            passage.push(ind)
        }
    }
    else{
        console.log(passage)
        overlay_resp.classList.remove("remover")
        overlay_resp.childNodes[3].childNodes[3].children[0].textContent=score
        score_final_container.innerHTML = ""
        for (j=0;j<passage.length;j++){
            score_final_container.innerHTML += '<div class="card-score"><h3>'+ question[passage[j]][0] +'</h3>'+ '<p>- Reponse : '+question[passage[j]][1]+'</p>'+'</div>'
        }
        passage = []
        used = []
        ind = start()
        score = 0;
        tentative = 3
    }
    scoreRef()
    form.childNodes[1].value=""
    e.preventDefault();
})

document.querySelector(".overlay").addEventListener("click", ()=>{
    overlay_resp.classList.add("remover")
})