const Dev = require("../models/Dev")
const parseStringTechsArray = require("./util");

module.exports = {
    async index(req,res){
        
        const {latitute, longitude, techs} =  req.query
        
        const techsArray = parseStringTechsArray(techs);
        
        const devs = await Dev.find({
            techs:{
                $in:techsArray,
            },
            location:{
                $near: {         
                    $geometry:{
                        type: "Point",
                        coordinates: [longitude, latitute],
                    },
                $maxDistance: 10000,
                },
            },  
        });
        return res.json({devs})

    }
}