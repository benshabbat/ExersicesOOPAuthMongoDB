# Exercise 00 - Node.js Basics

## Objective
First introduction to Node.js, npm, and creating a basic project.

## What is Node.js?
Node.js allows you to run JavaScript outside the browser, on the server. This enables us to build API servers.

## What is npm?
npm (Node Package Manager) is Node.js's package manager. It allows us to install and manage external libraries.

## Step 1: Check Installation

Check if Node.js is installed on your computer:

```bash
node --version
```

Should print something like: `v18.x.x` or `v20.x.x`

Also check npm:

```bash
npm --version
```

> If you don't have Node.js, download from: https://nodejs.org

## Step 2: Create Project Directory

Create a new directory and navigate to it:

```bash
mkdir my-first-node-project
cd my-first-node-project
```

## Step 3: Initialize Project

Create a `package.json` file (contains project information):

```bash
npm init -y
```

This creates a `package.json` file with default values.

## Step 4: Write Your First JavaScript File

Create a file named `index.js` with the following content:

```javascript
// This is a regular JavaScript file
console.log('Hello from Node.js!');

// Node.js allows us to read system information
console.log('Node version:', process.version);
console.log('Platform:', process.platform);
```

## Step 5: Run the File

Run the file:

```bash
node index.js
```

Should print:
```
Hello from Node.js!
Node version: v18.x.x
Platform: win32
```

## Exercise: Write a Simple Program

Write a program in `index.js` that performs the following:

1. Print your name
2. Create a variable with your age
3. Calculate how many years until you're 100
4. Print the result

### Expected Output Example:
```
My name: John
My age: 25
Years left until 100: 75
```

## Concepts We Learned:
- ✅ Node.js - JavaScript runtime environment
- ✅ npm - Package manager
- ✅ package.json - Project configuration file
- ✅ node [filename] - Running JavaScript files

## Why is this Important?
This is the foundation for everything we'll do next. Every time we run a server or write server-side code, it will be with Node.js.

## Continue to Exercise 01 ←
