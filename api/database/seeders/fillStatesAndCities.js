const mongoose = require('mongoose');
const State = require('../../models/state');
const City = require('../../models/city');
const fs = require('fs');
const state_and_ids = [];
mongoose.connect('mongodb://localhost:27017/cars_app', { useNewUrlParser: true })
.then(db => {
    console.log('db connected')
    fs.readFile(`${__dirname}/states.json`, (err, data) => {
        if(!err){
            const states = JSON.parse(data);
            states.forEach(element => {
                const state = new State({
                    name: element.name
                })
                state.save()
                .then(result => {
                    state_and_ids.push({
                        id: state._id,
                        number: element.id
                    })
                    console.log('state saved' )
                })
                
            });
        }
        else {
            console.log(err)
        }
    })
    console.log('STATES', state_and_ids)
    fs.readFile(`${__dirname}/cities.json`, (err, data) => {
        if(!err){
            console.log('readed cities')
            const cities = JSON.parse(data);
            cities.forEach(element => {
                const stateId = state_and_ids.find( s => s.number == element.state_id )
                if(stateId){
                    const city = new City({
                        name: element.name,
                        state: stateId.id
                    })
                    city.save()
                    .then(result => {
                        console.log('city saved')
                    })
                }
                else {
                    console.log('state id not found')
                }
            });
        }
        else {
            console.log(err)
        }
    })
})


