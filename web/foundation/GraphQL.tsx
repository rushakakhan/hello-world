import React from 'react';
import {createAlpaQLClient, createAlpaQLFetch} from '@shopify/alpaql';
import {AlpaQLUniversalProvider} from '@shopify/alpaql/ssr';
import {useRequestHeader} from '@shopify/react-network';
import '@shopify/polyfills/fetch';

export function GraphQL({
  url,
  children,
}: {
  url: URL;
  children?: React.ReactNode;
}) {
  const cookie = useRequestHeader('cookie')!;

  const fetch = createAlpaQLFetch({
    uri: `${url.origin}/graphql`,
    headers: {
      cookie,
    },
  });

  const client = createAlpaQLClient({fetch});

  return (
    <AlpaQLUniversalProvider client={client}>
      {children}
    </AlpaQLUniversalProvider>
  );
}
