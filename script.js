// start js


// function constractor to create 2 object "marwan , osama"

function Character (name , strength , health){
   this.name = name;
   this.strength = strength;
   this.health = health;

   this.attackBtn = document.querySelector(`#${this.name}-attack`);
   this.healthBtn = document.querySelector(`#${this.name}-make-health`);
   this.progress = document.querySelector(`.${this.name}-health span`);
   this.alive = document.querySelector(`#${this.name}-alive`);

}

// method for attacking

Character.prototype.attack = function (opponent){
  
    if(opponent.health > 0){
        opponent.health -= this.strength;
        opponent.progress.style.width = `${opponent.health}%`

    }else {
        opponent.attackBtn.remove()
        opponent.healthBtn.remove()
        opponent.alive.innerHTML = `${opponent.name} is died`
    }
    
    
}

// method for knowing status of marwan and osama

Character.prototype.status = function (){
    
}

// method for make health

Character.prototype.makeHealth = function (){
    if(this.health < 100){
        this.health += 10
        this.progress.style.width =`${this.health}%`

    }

    if (this.health > 100){
        this.health = 100
    }
 }



let marwan = new Character ("marwan" , 10 , 100)
let osama = new Character ("osama" , 5 , 100)

marwan.attackBtn.addEventListener("click" , function (){
    marwan.attack(osama);

})

osama.attackBtn.addEventListener("click" , function (){
    osama.attack(marwan);

})

marwan.healthBtn.addEventListener("click" , function(){
    marwan.makeHealth()
} )

osama.healthBtn.addEventListener("click" , function(){
    osama.makeHealth()
} )
