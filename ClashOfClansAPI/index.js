const rp = require('request-promise');
const config = require('./config.json');

const clans = async name => {
    const nameUrl = `${config.baseLink}clans?name=${name}`;
    try{
        const options = {
            url: nameUrl,
            headers: {
              Accept: "application/json",
              authorization: `Bearer ${config.key}`
                },
            json: true
            };
            
     const clanNameResponse = await rp(options);
     return clanNameResponse.items

    }catch(error){
        console.log(`could not find ${name}`)
        console.log(error);
    }
}

const clanID = async id => {
    const nameUrl = `${config.baseLink}clans/%23${id}`;
    try{
        const options = {
            url: nameUrl,
            headers: {
              Accept: "application/json",
              authorization: `Bearer ${config.key}`
                },
            json: true
            };
     const clanNameResponse = await rp(options);
     return clanNameResponse

    }catch(error){
        console.log(`could not find ${id}`);
        console.log(error);
    }
}

module.exports ={
    clans,
    clanID
}