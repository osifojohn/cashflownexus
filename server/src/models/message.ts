import mongoose, { Schema, InferSchemaType, model } from 'mongoose';

const MessageSchema = new Schema(
  {
    orgId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organisation',
      required: true,
    },
    mailSubject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

type MessageType = InferSchemaType<typeof MessageSchema>;
const Message = model<MessageType>('Message', MessageSchema);

export { Message, MessageType };
