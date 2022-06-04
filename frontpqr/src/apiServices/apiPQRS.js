import axios from 'axios';

export const APIGetPQRS = async () => {
    let pqrs = [];
    await axios.get('http://localhost:3001/api/pqr').then(result=>{
            pqrs = result.data
        
    }).catch(console.log);
    
    return pqrs;
};

export const APIPostPQR = async(data) => {
    await axios.post("http://localhost:3001/api/pqr", data)
        .then(resolve =>{
            
            console.log("USUARIO RESGISTRADO")
        })
}