const {Schema, Types } = require('mongoose');

const reactionSchema = new Schema (
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {

        type: String,
        required:true,
        maxLength: 280
      },
      username: {

      },
      createdAt: {

      }
    }
)