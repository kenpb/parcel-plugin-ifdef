# parcel-plugin-ifdef

An opinionated Parcel plugin that runs TypeScript conditional compilation `(#if ... #elif ... #else ... #endif)` it's just a simple wrapper around the awesome [@nippur72/ifdef-loader](https://github.com/nippur72/ifdef-loader) for Webpack go check it out!.

# Installation
```sh
npm install @kenpb/parcel-plugin-ifdef --save-dev
# or with yarn
yarn add -D @kenpb/parcel-plugin-ifdef
```

# Usage

We supply the values for the expressions as environment variables to Parcel and the bundle will remove or add the code accordingly.

For quick reference I've borrowed a couple examples, assuming there's a variable called env passed at compilation time, e.g:

```sh
npm run dev # cross-env env=PRODUCTION parcel example.ts
```

```js
/// #if env == 'PRODUCTION'
/* Only this one will make it */
console.log('Production!');
/// #elif env == 'DEBUG'
/* This guy will be deleted */
console.log('Debug!');
/// #else
/* This one too */
console.log('Something else!');
/// #endif
```

You can check more advanced examples at the [ifdef-loader repo](https://github.com/nippur72/ifdef-loader)

# TODO

* Allow extra values to be passed from a js or config file, quite simple, didn't have need/time to.
