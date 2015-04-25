module.exports = {
    SOCKET_CLIENT: {
        MSG_RECEIVED: 'new mes from server',
        MSG_SENT: 'client io send message'
    },
    SOCKET_SERVER: {
        MSG_SENT: 'server io send message',
        MSG_RECEIVED: 'new mes from server'
    },
    APP: {
        NEW_MSG: 'received msg from server',
        MSG_RECEIVED: 'new message received from socket',
        MSG_SUBMITTED: 'new message mediated by controller',
        INIT_ROOM_CONTROLLER: 'init room controller',
        AUTH: 'init auth controller'
    },
    AUTH: {
        SUCCESS: 'login successful'
    },
    VIEW: {
        MSG_SUBMITTED: 'new message submited',
        LOGIN: 'login name submitted'
    },
    SEL: {
        ROOM_PARENT: '.rooms-container',
        LOGIN_PARENT: '.page',
        MSG_SUBMIT_BTN: '.messageSubmit',
        LOGIN_SUBMIT_BTN: '.login-submit',
        MSGS: '.messages'
    }
};
