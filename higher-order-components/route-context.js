import React from 'react';

const RouteContext = React.createContext({});

export function Provider(props) {
  return (
    <RouteContext.Provider value={props.route}>
      {props.children}
    </RouteContext.Provider>
  );
}

export function connect(mapContextToProps) {
  return (Component) => {
    return (props) => {
      return (
        <RouteContext.Consumer>
          {context => {
            return <Component {...props} {...mapContextToProps(context)} />
          }}
        </RouteContext.Consumer>
      );
    };
  }
}

export default RouteContext;
