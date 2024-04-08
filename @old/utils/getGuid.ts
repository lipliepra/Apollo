import { v4 as guid } from 'uuid';
import { TFunc } from '../types';

export const getGuid: TFunc<[], string> = () => guid();
