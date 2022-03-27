import chai from 'chai';
import axios from 'axios';

const should = chai.should()

describe('Testeamos la base de datos', ()=>{
    it('DFake person register', async ()=>{
        const response = await axios.post('http://localhost:3000/api',{
            fullName: "John Doe",
            education: [{institution:"Krowdy Academy", description:"Full Stack bootcamp"}]
        })
        console.log(response)
        response.status.should.equal(200)
    })
})