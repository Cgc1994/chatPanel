## Intro
Hi! This chat is a technical test, using several technologies such as Vue 3, Vite or Pinia among others, and Jest for testing. In it you can see the conversation between a student and her teacher.

## How it works
The chat comes with preloaded messages stored in the Pinia global store, but it is not interactive as it does not connect to any external API. It contains two hyperlinks to external PDFs (not real paths) and html tags embedded inside the literals that are interpreted and rendered by the component template.

## Instructions for local setup

    ## Npm dependencies
    ```
    npm install
    ```

    ### Compiles and hot-reloads for development
    ```
    npm run serve
    ```

    ### Compiles and minifies for production
    ```
    npm run build
    ```


## Features implemented
- Component-oriented structure
- Test class for view rendering
- Handle on type event and on message submit
- Custom style (CSS)