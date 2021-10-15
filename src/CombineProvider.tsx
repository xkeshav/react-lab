import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';

type AnyProvider = ComponentType<typeof Provider>;

export interface CombineProviderProps {
  components?: Array<[AnyProvider, any]>;
  children: React.ReactNode;
}

export const CombineProvider = (props: CombineProviderProps) => {
  const { components = [], children } = props;

  return (
    <>
      {components.reduceRight((acc, curr) => {
        const [CurrentProvider, props = {}] = curr;
        return <CurrentProvider {...props}>{acc}</CurrentProvider>;
      }, children)}
    </>
  );
};

export const customProvider = (provider: any | typeof Provider, props: unknown) => [
  provider,
  props,
];
