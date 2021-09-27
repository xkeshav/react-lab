import React, { ReactNode } from 'react';

/**
 * @description A utility of stylish console log in browser dev tool
 * it can be used
 * - within a react component ( in JSX )
 * - can be invoked as a method in javascript/typescript code
 *
 * @param what: the value which you need to console, use `{}` for verbose output of value with key name
 * in JSX this is children, data between <Watch>{{what}}</Watch>
 * @param String kind (optional): is property of console, default is `log`, other valid value are warn, table, debug, info, dir and trace
 * @param String from (optional): additional detail such as filename or time, default is some icon
 *
 * @example
 * ```typescript
 * watchThis({whatToSee});
 * watchThis({whatToSee}, "info", "file");
 * watchThis({whatToSee}, null, "app page");
 * watchThis(variable, "", __filename);
 * watchThis(variable, null, __filename);
 * watchThis(undefined, undefined);
 * ```
 * ```typescriptreact
 * <Watch>{{props}}</Watch>
 * <Watch from="AppComponent" kind="table">{{userData}}</Watch>
 * ```
 *
 * @todo
 *  - add support for more kind params such as `asset`, `clear`, `time` , `count` , `profile ( i.e. console utilities)
 *
 */

type Kind =
  | 'log'
  | 'warn'
  | 'info'
  | 'error'
  | 'debug'
  | 'table'
  | 'trace'
  | 'dir'
  | null;

const logStyle = `
 background-color: crimson;
 color: whitesmoke;
 font-size: larger;
 font-style: italic;
 padding: 0;
`;

export const watchThis = (what: any, from = '-->', kind?: Kind) => {
  console.groupCollapsed(`%c ===${from}===`, logStyle);
  console[kind || 'log'](what);
  console.groupEnd();
};

export type WatchParams = {
  readonly children: ReactNode;
  readonly kind?: Kind;
  readonly from?: string;
};

export const Watch = React.memo(
  ({ children, kind = 'log', from = '<--' }: WatchParams) => {
    watchThis(children, from, kind);
    return <></>;
  }
);
