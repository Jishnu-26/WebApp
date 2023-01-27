const { v4: uuidv4, stringify } = require('uuid');
const ROLE = {
    CHAIRMAN: 'chairman',
    MANAGER: 'manager',
    BASIC: 'basic'
}

module.exports   = {
    users:[
        {id:uuidv4(),name:'Adam', email:'adam@gmail', password:'hello', role: ROLE.BASIC},
        {id:uuidv4(),name:'Steve',email:'steve@gmail', password:'nopenoway',role: ROLE.CHAIRMAN},
        {id:uuidv4(),name:'Tom',email:'tom@gmail', password:'yayayaya',role: ROLE.MANAGER}
    ],
    managers:[
        {id:uuidv4(),name:'Tom',exp:'5',branch:'Coimbatore',age:'25'},
        {id:uuidv4(),name:'Tory',exp:'7',branch:'Mumbai',age:'35'},
        {id:uuidv4(),name:'Sam',exp:'15',branch:'Bangalore',age:'45'}

    ],
    userinfo:[
        {id:uuidv4(),name:'Adam', ecard:'Lifelong', branch:'Bangalore',totalsave:'54'},
        {id:uuidv4(),name:'Eleven', ecard:'Lifelong', branch:'Bangalore',totalsave:'500'},
        {id:uuidv4(),name:'Max', ecard:'Twoyear', branch:'Coimbatore',totalsave:'800'},
        {id:uuidv4(),name:'Wednesday', ecard:'Oneyear', branch:'Mumbai',totalsave:'0'},
        {id:uuidv4(),name:'Robert', ecard:'Lifelong', branch:'Coimbatore',totalsave:'5000'},
    ]
}