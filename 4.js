function  Electricaldevices(name, power, ){
  this.name = name
  this.power = power
  this.Enabling = false

}


Electricaldevices.prototype.plugIn = function(){
  console.log(this.name + " is plugged")
  this.isPlugged = true;
}

Electricaldevices.prototype.getpower = function() {
  return this.isPlugged ? this.power : 0
}




const lamp = new Electricaldevices('lamp', 220)
const fridge = new Electricaldevices('fridge', 320)
const TV = new Electricaldevices('TV', 320)

console.log(lamp.getpower() + fridge.getpower() + TV.getpower()) 
  lamp.plugIn() 
  console.log(lamp.getpower() + fridge.getpower() + TV.getpower()) 
  fridge.plugIn()  
  console.log(lamp.getpower() + fridge.getpower() + TV.getpower()) 
  TV.plugIn()
  console.log(lamp.getpower() + fridge.getpower() + TV.getpower())