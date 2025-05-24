// switch case

const day = 'monday';

switch(day){
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare therory videos');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log('Write code Exmaples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default : 
        console.log('Not a valid day');
        break;
}

// please note that switch does a strict comparision
// day === 'monday'


// lets create the same swtich case logic with if-elseif-else ladder.
if (day === 'monday'){
    console.log("Plane course structure")
    console.log("Go to coding meetup");
} else if ( day === "tuesday") {
    console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thrusday") {
    console.log("Write code exmaples");
} else if( day === "friday") {
    console.log("record videos");
} else if( day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend :D");
} else 
    console.log("Not a valid day");