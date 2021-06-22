import React from 'react';
import {createMount} from '@shopify/react-testing';
import {AlpaQLTestClient} from '@shopify/alpaql/testing';

import {AppContext} from './AppContext';
import {createGraphQL} from './graphql';

interface Options {
  graphQL?: AlpaQLTestClient;
  skipInitialGraphQL?: boolean;
  locale?: string;
}

interface Context {
  graphQL: AlpaQLTestClient;
}

export const mountWithAppContext = createMount<Options, Context, false>({
  context({graphQL = createGraphQL()}) {
    return {graphQL};
  },
  render(element, {graphQL}) {
    return <AppContext graphQL={graphQL}>{element}</AppContext>;
  },
  async afterMount(root, options) {
    const {graphQL} = root.context;

    if (options.skipInitialGraphQL) {
      return;
    }

    await root.act(() => graphQL.resolveAll());
  },
});
