# Connected React Router Example

Based on the connected-react-router 'basic' example,
rewritten for parcel instead of webpack, and with the addition
of persistance in local storage.

## Install
```bash
npm install
```

## Run
```bash
npm start
```

You can try changing counter value and editing some components. Components will be updated while preserving counter state.

In Hello link, you will see that the HelloChild component can access router state (URL path) without passing as props via its parent.

Likewise in the map screen you will be able to type lat,lon values into a form that's a component
embedded in the map page. The values are pushed into the URL and also updated in the map component.
