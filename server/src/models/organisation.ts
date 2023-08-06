import { Schema, InferSchemaType, model } from 'mongoose';
import Joi from 'joi';
import { IOrganisation } from '../types';

const OrganisationSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    logoUrl: { type: String },
    phone: { type: String },
    address: { type: String },
    country: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

type Organisation = InferSchemaType<typeof OrganisationSchema>;

export default model<Organisation>('Organisation', OrganisationSchema);

export function validateOrganisation(org: IOrganisation) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(40).required(),
    logoUrl: Joi.string().min(2),
    email: Joi.string().min(5).max(255).email(),
    phone: Joi.string().min(10).max(14),
    address: Joi.string().min(4).max(50),
    country: Joi.string().min(2).max(40).required(),
  });

  return schema.validate(org, { abortEarly: false });
}