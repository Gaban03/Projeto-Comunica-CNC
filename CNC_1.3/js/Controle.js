let isSending = false;
let currentDirection = null;
let intervalId;
let pointIntervalId;

const events = {
    start: ['mousedown', 'touchstart'],
    end: ['mouseup', 'touchend']
};

const movementButtons = {
    'move-up': '2',
    'move-left': '4',
    'move-right': '3',
    'move-down': '1',
    'up': '6',
    'down': '5'
};

for (const [id, direction] of Object.entries(movementButtons)) {
    const button = document.getElementById(id);

    events.start.forEach(evt => {
        button.addEventListener(evt, () => handleMovement(direction));
    });

    events.end.forEach(evt => {
        button.addEventListener(evt, stopMovement);
    });
}

function handleMovement(direction) {
    clearInterval(pointIntervalId);

    if (currentDirection !== direction) {
        currentDirection = direction;
        updateStatus(`Movendo para ${direction}`);
        sendMovementData(direction);
        isSending = true;

        clearInterval(intervalId);
        intervalId = setInterval(() => {
            if (isSending) {
                sendMovementData(direction);
            }
        }, 500);
    }
}

function stopMovement() {
    currentDirection = null;
    isSending = false;
    clearInterval(intervalId);

    sendMovementData("0"); 
    updateStatus('Parado');

    startPointSending(); 
}

function startPointSending() {
    
    clearInterval(pointIntervalId);
    pointIntervalId = setInterval(() => {
        if (!isSending) { 
            sendMovementData('.');
            updateStatus('Esperando...');
        }
    }, 3000);
}

function updateStatus(message) {
    document.getElementById('machine-status').innerHTML = message;
}

function sendMovementData(direction) {
    const data = { movement: direction };

    fetch('http://192.168.43.108:1880/mensagem', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        if (direction !== '.') {
           
        }
    })
    .catch(error => {
        console.error('Error:', error);
        if (direction !== '.') {
            updateStatus('Erro ao enviar mensagem!');
        }
    });
}

startPointSending();

const toggleButton = document.getElementById('toggle-menu');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
});
