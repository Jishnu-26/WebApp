const ROLE = {
    CHAIRMAN: 'chairman',
    MANAGER: 'manager',
    BASIC: 'basic'
}
module.exports = {
    users:[
        {id:1, name:'Adam', role: ROLE.BASIC},
        {id:2, name:'Steve', role: ROLE.CHAIRMAN},
        {id:3, name:'Tom', role: ROLE.MANAGER}
    ]
}