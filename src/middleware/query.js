// Read https://github.com/saltas888/react-router-query-middleware
// For some reason this code won't work when it is in its package
// "react-router-query-middleware" so I just copied this file into the project

import queryString from 'query-string'; // used to be querystring which does not strip the leading ?
import set from 'lodash.set';

const get = (obj, path, defaultValue) => path.split(".").reduce((a, c) => (a && a[c] ? a[c] : (defaultValue || null)), obj)

const DEFAULT_LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export default function queryMiddleware({
  actionName = DEFAULT_LOCATION_CHANGE,
  actionLocationPath = 'payload.location'
} = {}) {
    return store => next => action => {
        switch (action.type) {
            case actionName:
                const q = queryString.parse(get(action, `${actionLocationPath}.search`, ''));
                // This will parse the query string and then add it to the location object
                // so that you can see it later on.
                const newLocation = {
                    ...get(action, actionLocationPath),
                    query: q
                };

                // Copy everything from action to newAction
                // then put newLocation into the object at payload.location
                // lodash creates things that dont exist or overwrites them if they do I think...
                const newAction = { ...action };
                set(newAction, actionLocationPath, newLocation);

                console.log("queryMiddleware newAction=",newAction);
                return next(newAction);

            default:
                console.log("queryMiddleware ?? action=", action.type, ' ignored');
                return next(action);
        }
    };
}
