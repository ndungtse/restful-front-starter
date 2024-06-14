import React, { ReactNode } from 'react';

interface GenericProps<T> {
   data: T;
   children: (data: T) => ReactNode;
}

function GenericComponent<T>({ data, children }: GenericProps<T>) {
   return <>{children(data)}</>;
}

// Usage
const _App = () => {
   return <GenericComponent data="Hello, world!">{(data) => <h1>{data}</h1>}</GenericComponent>;
};
