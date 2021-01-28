7## About


> Project: "Contacts Manager || React + FeatherJS"
> This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.
> The code allows you to add new contacts to your Contact Manager.

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
    Verify NodeJS Installation: ``` node --version ```

2. Install your dependencies

    From root of project (/react-crud-contacts-manager-featherjs)

    ``` 
    npm install or yarn install 
    
    ```
    ^ This will insall all required technologies for the Frontend in a new node_modules folder.

    ```
    cd path/to/backend
    npm install
    ```

3. Start your MongoDB connection
   - Open a new terminal / cmd prompt & type:

    ```
    mongod
    ```

4. Start your app
  
    ```
    npm start (or yarn start)
    ```
    - Navigate to: http://localhost:3000/contacts/new   (if localhost:3000 doesn't automatically open in a browser tab)



## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
