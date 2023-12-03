var hourNow;
var greeting;

try {
    hourNow = new Date().getHours();

    if (hourNow < 12) {
        greeting = 'Good morning!';
    }
    else if (hourNow < 18) {
        greeting = 'Good afternoon!';
    }else if (hourNow <= 24){
        greeting = 'Good evening!';
    } else {
        greeting = 'Welcome';
    }
}
catch (error) {
    console.error('Error occurred while getting the current hour:', error);
}

document.write('<h3>' + greeting + '</h3>');
