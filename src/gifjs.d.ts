// Local typings for gif.js and its worker build, mirrored from bmdgif/src/gifjs.d.ts

// Main library
declare module 'gif.js' {
  const GIF: any;
  export default GIF;
}

// Worker URL for bundlers (Vite) via ?url
declare module 'gif.js/dist/gif.worker.js?url' {
  const src: string;
  export default src;
}
