import { Schema, model, models } from 'mongoose';

const logSchema = new Schema({
  level: { type: String, required: true }, // e.g., 'info', 'error', etc.
  message: { type: String, required: true },
  meta: { type: Schema.Types.Mixed }, // additional data
  timestamp: { type: Date, default: Date.now },
});

export const Log = models.Log || model('Log', logSchema);