/* This file should reflect closely to the structure in foundation/App.tsx */
import React from 'react';
import {AlpaQLProvider} from '@shopify/alpaql';
import {AlpaQLTestClient} from '@shopify/alpaql/testing';
import {I18nUniversalProvider} from '@shopify/react-i18n-universal-provider';
import {AppProvider as PolarisProvider} from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

interface Props {
  children: React.ReactElement<any>;
  graphQL: AlpaQLTestClient;
}

const DEFAULT_LOCALE = 'en';

export function AppContext({children, graphQL, ...childrenProps}: Props) {
  const finalChildren =
    Object.keys(childrenProps).length > 0
      ? React.cloneElement(children, childrenProps)
      : children;

  return (
    <AlpaQLProvider client={graphQL}>
      <I18nUniversalProvider locale={DEFAULT_LOCALE}>
        <PolarisProvider i18n={enTranslations}>{finalChildren}</PolarisProvider>
      </I18nUniversalProvider>
    </AlpaQLProvider>
  );
}
