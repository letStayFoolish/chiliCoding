/*
**********************************************************************************************************
TITLE:
**********************************************************************************************************
7 kyu Two fighters, one winner.
**********************************************************************************************************
DESCRIPTION:
**********************************************************************************************************
Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
  *
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}


*********************************************************************************************************/
const kataLink =
  'https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript';
// Type your code:
function declareWinner(fighter1, fighter2, firstAttacker) {
  // Damage
  let damage1 = Math.ceil(fighter1.health / fighte2.damagePerAttack),
    damage2 = Math.ceil(fighter2.health / fighte1.damagePerAttack)

  if (damage1 > damage2) {
    return fighter1.name
  } else if (damage1 < damage2) {
    return fighter2.name
  }
  return firstAttacker

}


console.log((declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))) // "Lew"

/*********************************************************************************************************/

// Using loop:
/*
function sumTo(n) {
  let sum = 0;

  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));
*/

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1:
/*
function sumTo(n) {
  if(n === 1) {
    return n;
  } else {
    return n + sumTo(n - 1);
  }
}

console.log(sumTo(100));
*/

// Fibonacci numbers
/*
function fib(n) {
  // Solution 1 (slower one):

  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);

  // Solution 2 (speed):

  function fib(n) {
    let a = 0, b = 1, c = n

    for (let i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
}
}

console.log(fib(7)) // 13
*/
const heading = document.querySelector('h1');
const headingLink = heading.querySelector('a');
heading.addEventListener('click', () => {
  headingLink.setAttribute('href', kataLink);
  headingLink.setAttribute('target', '_blank');
});
const subheading = document.querySelector('h2');
const subheadingLink = subheading.querySelector('a');
subheading.addEventListener('click', () => {
  subheadingLink.setAttribute('href', 'https://www.codewars.com/dashboard');
  subheadingLink.setAttribute('target', '_blank');
});

window.addEventListener('DOMContentLoaded', () => {
  headingLink.removeEventListener('click', () => {
    headingLink.setAttribute('href', kataLink);
    headingLink.setAttribute('target', '_blank');
  });
  subheading.removeEventListener('click', () => {
    subheadingLink.setAttribute('href', 'https://www.codewars.com/dashboard');
    subheadingLink.setAttribute('target', '_blank');
  });
});
