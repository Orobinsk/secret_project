declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  import * as React from 'react';

  // Экспорт React-компонента (если вы хотите использовать его как компонент)
  export const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  // Экспорт как строка (если вы хотите использовать его как URL)
  const src: string;
  export default src;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
