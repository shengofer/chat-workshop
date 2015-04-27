module.exports = {
    SOCKET_CLIENT: {
        NEW_USER_ONLINE: 'app/socket/new-user',
        LOGGED_IN: 'new user logged',
        MSG_RECEIVED: 'new mes from server',
        MSG_SENT: 'client io send message'
    },
    SOCKET_SERVER: {
        MSG_SENT: 'server io send message',
        MSG_RECEIVED: 'new mes from server',
        NEW_USER_ONLINE: 'new user appeared online'
    },
    APP: {
        LOGGED: 'user login success',
        NEW_MSG: 'received msg from server',
        MSG_RECEIVED: 'new message received from socket',
        MSG_SUBMITTED: 'new message mediated by controller',
        INIT_ROOM_CONTROLLER: 'init room controller',
        AUTH: 'init auth controller',
        RENDER_LAYOUT: 'app/render-layout'
    },
    FB: {
        LOGGED: 'successfully logged via fb'
    },
    AUTH: {
        LOGGED: 'user logged'
    },
    VIEW: {
        MSG_SUBMITTED: 'new message submited',
        LOGIN: 'login name submitted'
    },
    ROOM: {
        MSG_SUBMITTED: 'client entered a message'
    },
    LAYOUT: {
        RENDERED: 'app/layout/rendered'
    },
    SEL: {
        PAGE: '.page',
        PROFILE: '.profile',
        ROOM: '.room',
        ROOMS_PARENT: '.rooms-container',
        ROOM_FORM: '.room-form',
        ROOM_MSGS: '.room-messages',
        LOGIN: '.login',
        USERS_ONLINE: '.users-online',
        USERS_ONLINE_LI: '.users-online-li'
    }
};
