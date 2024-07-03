const str = 'name'
const obj = {
    name: 'Steam',
    creator:'Gabe Newell',

}
function func(str, obj){
    if (str in obj){
        return true
      } else {
        return false
      }
}
console.log(func(str, obj));