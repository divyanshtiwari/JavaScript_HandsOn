// switch case

const day = 'monday';

switch(day){
    case 'monday':
        console.log('Plan corse Structre');
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