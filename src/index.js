import fastify from 'fastify'
import { Person } from './schema/Person.js';
import { main } from './services/conexion.js';


const fast = fastify({logger:true})

main().catch(err => console.log(err));



fast.get('/', async (request, reply) => {
  return { hello: 'worldsasdasas' }
})

fast.post('/api',async (request, reply)=> {
  const {fullName,education} = request.body
  const person = new Person ({fullName, education})
  await person.save()
  return person
 
})

const start = async () => {
  try {
    await fast.listen(3000)
  } catch (err) {
    //fast.log.error(err)
    process.exit(1)
  }
}
start()