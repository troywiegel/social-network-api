const { Schema, model } = require('mongoose')
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'A valid email address is required'],
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

userSchema.virtual('friendCount')
    .get(function () {
        return this.friends.length
    })

const User = model('user', userSchema)

module.exports = User