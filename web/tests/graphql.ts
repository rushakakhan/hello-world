import {readFileSync} from 'fs';
import {resolve} from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import {buildClientSchema} from 'graphql';
import {createFiller} from 'graphql-fixtures';
import {createAlpaQLTestClient} from '@shopify/alpaql/testing';

const basePath = resolve(__dirname, '../../build/graphql');

export const schema = buildClientSchema(
  JSON.parse(readFileSync(resolve(basePath, 'schema.json'), 'utf8')).data,
);

export const fillGraphQL = createFiller(schema);

export const createGraphQL = createAlpaQLTestClient;
