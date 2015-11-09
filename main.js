var $cube = $('.container');
var currentState = [0,0,0];
var frontPanel = 'front';
var cubeMap = {
    'front': {
        up: 'top',
        down: 'bottom',
        left: 'left',
        right: 'right'
    },
    'left': {
        up: 'top',
        down: 'bottom',
        left: 'left',
        right: 'right'
    },
    'right': {
        up: 'top',
        down: 'bottom',
        left: 'left',
        right: 'right'
    },
    'back': {
        up: 'top',
        down: 'bottom',
        left: 'left',
        right: 'right'
    },
    'top': {
        up: 'top',
        down: 'bottom',
        left: 'left',
        right: 'right'
    },
    'bottom': {
        up: 'top',
        down: 'bottom',
        left: 'left',
        right: 'right'
    }

}

function rUp () {
    var state = currentState[1] % 180 === 0 || currentState[1] % 180 === -0 ? 0 : 2;
    currentState[state] -= 90;
    applyCss();
}
function rDown () {
    var state = currentState[1] % 180 === 0 || currentState[1] % 180 === -0 ? 0 : 2;
    currentState[state] += 90;
    applyCss();
}
function rLeft () {
    currentState[1] += 90;
    applyCss();
}
function rRight () {
    currentState[1] -= 90;
    applyCss();
}

function applyCss() {
    $cube.css({
        transform: 'rotateY(' + currentState[1] + 'deg) rotateX(' + currentState[0] + 'deg) rotateZ(' + currentState[2] + 'deg)'
    })
    console.log(currentState);
}

$('#btn-left').click(rLeft);
$('#btn-right').click(rRight);
$('#btn-down').click(rDown);
$('#btn-up').click(rUp);

