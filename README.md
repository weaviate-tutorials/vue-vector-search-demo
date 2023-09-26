# vue-vector-search-demo

This repo should help get you started developing with Weaviate and Vue 3.


## Installation 

1. Clone the repo with the following command

```
git clone https://github.com/malgamves/vue-vector-search-demo
```

2. Install the necessary project dependencies with the following command

```
yarn install
```
3. Create a Weaviate instance as described in [this guide](https://weaviate.io/developers/weaviate/quickstart#step-2-create-an-instance)

4. Create a `.env` file and add the following keys
    - your Open AI API key as `VITE_OPENAI_KEY` (you can get this in your [Open AI settings](https://platform.openai.com/account/api-keys))
    - your Weaviate API key as `VITE_WEAVIATE_API_KEY` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)
    - your Weaviate host URL as `VITE_WEAVIATE_HOST_URL` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)
  

5. Start your Vue.js app with the following command

```
yarn dev
```

6. Go through the steps to use the app i.e. Initialize, Import Data and Search 💫

   

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).


### Type-Check, Compile and Minify for Production

```sh
npm run build
```
