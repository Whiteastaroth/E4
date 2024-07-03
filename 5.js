class Electricaldevices {
    constructor (name, power, connect){
        this.name = name;
        this.power = power;
        this.connect = connect;
        this.volt = '400';
    }

    OnOff = function() {
        if (this.connect === true){
            this.connect = false;
        } else if (this.connect === false){
            this.connect = true;
        }
    }
}

class Device extends Electricaldevices {
    constructor(name, power, connect, appointment,){
        super (name, power, connect);
        this.appointment = appointment;
    
    }

}

class Instrumentation extends Electricaldevices{
    constructor(name, power, connect,appointment, volt){
        super(name, power, connect);
        this.appointment = appointment;
        this.volt = volt;
    }
    Showvolt = function(){
        console.log( `Электро-прибор ${this.name} подключено к сети 320 В` )
    }
}

function prototype (){
    drill.Showvolt();
}

function start () {

    console.log(array);

    array.forEach(device => device.OnOff());

    const On = array.filter(device => device.connect);

    On.forEach(device => console.log(`Подключён ${device.name} с мощьностью ${device.name} Вт.`));

    const SumPower = On.reduce((sum, device) => sum + device.power, 0);

    console.log(`Общая мощность подключенных приборов вместе равна ${SumPower} Вт`);

    
    prototype()
}


const lamp = new Device('lamp', true, 390);
const TV = new Device('TV', false, 340);
const chainsaw = new Instrumentation('chainsaw', true, 350);
const drill = new Instrumentation('drill', true, 1400);

const array = [lamp, TV, chainsaw, drill];

start()