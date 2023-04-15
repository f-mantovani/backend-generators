# MJS Backend Generator

## Introduction

Inspired by ironlauncher (ironhack generator for bootcamp students) I decided to create a backend generator with my preferred syntax dealing with asynchronous operations.

This generator uses async/await for those. Also the error handling is a little bit more global and can give you more hints when prints out information.

This uses the `.mjs` file extension so you can use the `import/export` syntax. But we need the `Babel` transpiller to run the tests with jest. 

## Installation

```cli
  npm i
```

You also need to create a `.env` file and provides the following values:

```env
TOKEN_SECRET = /// here it could be anything that you want
```
