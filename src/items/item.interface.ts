import {Document} from 'mongoose';

export default interface IBaseItem extends Document {
    name: string;
    price: number;
    description: string;
    image: string;
  }