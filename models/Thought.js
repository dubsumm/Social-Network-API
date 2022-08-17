const {Schema, model} = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughText: {
            type: String,
            maxLength: 280,
            minLength: 1,
            required: true,
        },
        createdAt: {
            type: Date,
            default: () => Date()
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;