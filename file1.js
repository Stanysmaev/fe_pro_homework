const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}













































const age = 30
let firstName = "Stanislav"
var lastName = "Kamaiev"
console.log(age)

//comment








/* string - строка
number - число
bool - true\false
true = 1
false = 0
undefined
null 
*/

const stringNumber = '33'
/* const stringNumber = 'alex' */
const b = 2;
/* '2' + '33' \233/ */

/* const d = b + stringNumber;
*/
const d = b + Number(stringNumber);
console.log('newString', String(b))
console.log('string', d)

const c = Number(false);
console.log('number', c)
const a = true
/* const b = 2; */

if(a == b){
console.log('yes')
}
else{
console.log('no')
}






const isMember = prompt('Are you a team member?')
const isShowMessage = confirm('show?')
if(isMember === "yes"){
console.log("the discount is $20.00")
}
else{
console.log("the discount is $1.00")
}

const ternOperator = isMember === 'yes' && isShowMessage ? "$20.00" : "$1.00"

const result = 2 === 2 ? 'ok' : 'not ok';
console.log('result', result)

console.log('The discount is ' + ternOperator)