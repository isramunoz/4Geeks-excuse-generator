
window.onload = function() {
  //write your code here
  let who = ['The cat', 'My grandma', 'My dragon', 'My girlfriend', 'My mentor'];
  let action = ['ate', 'peed', 'burnt', 'crushed', 'broke'];
  let what = ['my homework', 'my bedroom', 'my lunch', 'my keys', 'the car', 'my wallet']
  let when = ['before the date', 'right on time', 'before the class', 'before I left'];
  let whoRandom = who[Math.floor(Math.random() * who.length)]; 
  console.log(whoRandom)
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];
  document.getElementById('excuse').textContent = whoRandom + ' ' + actionRandom + ' ' + whatRandom + ' ' + whenRandom;
  
};
console.log('Hello World')