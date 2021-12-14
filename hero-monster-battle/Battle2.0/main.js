
let heroContainer = document.getElementsByClassName('hero-container');
let heroLife = document.querySelector('.hero-life');
let heroAttack = document.getElementById('hero-attack');
let heroHeal = document.getElementById('hero-heal');

let monsterContainer = document.getElementsByClassName('monster-container');
let monsterLife = document.querySelector('.monster-life');
let monsterAttack = document.getElementById('monster-attack');
let monsterSuper = document.getElementById('monster-super');

class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    checkHealth() {
        if(this.health <= 0) {
            this.health = 0;
            console.log(this.name + ' est mort !');
        }else {
            console.log(this.name + ' a ' + this.health + ' points de vie');
        }
    }

        attackEnnemy(character) {
        character.health -= this.attack;
        console.log(this.name + ' attaque ' + character.name + ' et lui cause ' + this.attack + ' dégâts');
        character.checkHealth();
    }
}

class Hero extends Character {
    constructor(name){
        super(name, 100, 15); 
    }

    heal() {
        if(this.health >= 100) {
            console.log("Vous êtes déjà full life")
        }
        else {

            console.log(this.name + ' se heal et gagne ' + (this.health += 20) + 'points de vie');
        }
    }
}

class Monster extends Character {
    constructor(name) {
        super(name, 100, 20);
    }

    specialAttack(character) {
        character.health -= (this.attack * 2);
        console.log(this.name + ' fait une attaque spéciale et cause ' + this.attack * 2 + ' dégâts ' + ' à ' + character.name);
        character.checkHealth();
    }
}

let hero = new Hero (
    "Emeric"
)

let monster = new Monster (
    "Candice"
)

heroLife.textContent = hero.health;
monsterLife.textContent = monster.health;

heroAttack.addEventListener('click', () => {
    hero.attackEnnemy(monster);
    monsterLife.textContent = monster.health;
    monsterLife.style.color = 'red';
    heroLife.style.color = 'black';
});

monsterAttack.addEventListener('click', () => {
    monster.attackEnnemy(hero);
    heroLife.textContent = hero.health;
    heroLife.style.color = 'red';
    monsterLife.style.color = 'black';
});

heroHeal.addEventListener('click', () => {
    hero.heal();
    heroLife.textContent = hero.health;
    heroLife.style.color = 'green';
});

monsterSuper.addEventListener('click', () => {
    monster.specialAttack(hero)
    heroLife.textContent = hero.health;
    heroLife.style.color = 'red';
    monsterLife.style.color = 'black';
});
