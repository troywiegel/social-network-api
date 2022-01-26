const connection = require('../config/connection')
const { User, Thought } = require('../models')

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({})
    await Thought.deleteMany({})

    // user array to populate User collection
    const users = [
        {
            username: 'karri',
            email: 'karri@test.com'
        },
        {
            username: 'avery',
            email: 'avery@test.com'
        }
    ]

    const thoughts = [
        {
            thoughtText: 'The wheels on the bus go round and round..',
            username: 'Larry'
        },
        {
            thoughtText: 'Dont believe me? Just watch..',
            username: 'Bruno'
        }
    ]

    // waiting for users to be inserted into the database
    await User.collection.insertMany(users)
    await Thought.collection.insertMany(thoughts)

    console.table(users)
    console.table(thoughts)
    process.exit(0)
})