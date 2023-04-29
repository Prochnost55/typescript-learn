### Basic Setup
1. Create a folder
2. open terminal and navigate to the created folder.
3. In terminal, execute 'tsc --init'. You will see a tsconfig.json getting created
4. In terminal, execute 'npm init'. You will see a package.json getting created
5. In terminal, execute 'mkdir src dist'. You will see dist and src folders getting created
6. In terminal, execute 'touch index.html'. You will see index.html getting created. Alternatively, you can create it yourself. Setup index.html to execute index.js from dist
7. Go inside src folder and create a index.ts file

### Setting up Typescript
1. Open tsconfig.json and search for "outDir". Uncomment it and give path of dist folder and save.
2. Now you can run Typescript in watch mode and all your code will get saved in dist folder. To run typescript in watch mode use "tsc -w"

