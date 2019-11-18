// define a string literal
type SwitchStatus = "on" | "off";

// show an example of usage
class Room {

    // a switch in class room
    lightSwitch: boolean;

    toggleSwitch (light: SwitchStatus): void {
        if (light === "on") {
            // turn the switch on
            this.lightSwitch = true;
        } else {
            // turn the switch off
            this.lightSwitch = false;
        }
    }
}

// type usage a class instance
// create a instance of the room class, enforce / define Room class type
const livingRoom: Room = new Room();

// show an example of successful

// set light switch to on console out results
livingRoom.toggleSwitch("on");
console.log(livingRoom.lightSwitch);

// set light switch to off console out results
livingRoom.toggleSwitch("off");
console.log(livingRoom.lightSwitch);

// show an example  of compilation error
// comment out the below to run code without error
livingRoom.toggleSwitch("up");


// type usage with a function
function myLight (turnSwitch: SwitchStatus): boolean  {
    let light: boolean;

    if (status === "on") {
        light = true;
    } else {
        light = false;
    }
    return light;
}

// turn the switch on
console.log(myLight("on"));

// turn the switch off ;
console.log(myLight("off"));

// show an example of compilation error
// comment out the below to run code without error
myLight("Down")




