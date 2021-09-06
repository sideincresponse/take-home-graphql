import { gql } from 'apollo-server-express';
import { types } from './types.js';
import { queries } from './queries.js';
import { mutations } from './mutations.js';
import { responses } from './responses.js';

export const typeDefs = gql`
    ${queries}
    ${types}
    ${mutations}
    ${responses}
    `;