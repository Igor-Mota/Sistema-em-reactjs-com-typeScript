const axios = require("axios");
const Dev = require("../models/Dev")

module.exports = {
    async index(req,res){
        const devs = await Dev.find();

        return res.json(devs)
    },
    async store (req, res) {
        try{
           const {github_username, techs, latitude, longitude} = req.body;
           
           const user = await Dev.findOne({github_username});
            
            if(!user){

                const response = await axios.get(`https://api.github.com/users/${github_username}`);
          
                const { login,  avatar_url, bio, html_url} = await response.data;
           
                const techsArray = techs.split(',').map(tech =>  tech.trim( ));
           
                const location = {
                    type: "Point",
                    coordinates: [longitude, latitude],
                }
                const dev = await Dev.create({
                    github_username,
                    name: login,
                    avatarUrl:avatar_url,
                    html_url:html_url,
                    bio,
                    techs: techsArray,
                    location
                });
                res.json(dev)
            }else{

                res.json(user)
            }
            
        }catch(err){
       
           res.json({erro: err})
       }

    }
};