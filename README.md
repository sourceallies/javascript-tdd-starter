##Welcome to the world of Test Driven JavaScript!

If you're new to Test Driven Development as a whole, you may be interested in the book [Clean Code](https://books.google.com/books/about/Clean_Code.html?id=hjEFCAAAQBAJ&hl=en) by Robert C. Martin, which details the importance of writing maintainable code by leveraging TDD.

Generally speaking, it's important to follow the [Three Laws of TDD](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html):

1. You must write a failing test before you write any production code.
2. You must not write more of a test than is sufficient to fail, or fail to compile.
3. You must not write more production code than is sufficient to make the currently failing test pass.

If you're new to JavaScript, you'll want to download and install the Node.JS runtime so you can use JavaScript without needing a browser to interpret the language for you.

If you use a *NIX system, [nvm](https://github.com/creationix/nvm) is a great tool that can be used to download and manage different versions of Node.  If you're on Windows, [there's a version manager for you too](https://github.com/coreybutler/nvm-windows), or you can just download the latest version of Node from the [official website](https://nodejs.org/en/download/).

##Tools used

If you look at the [package.json](https://github.com/sourceallies/javascript-tdd-starter/blob/master/package.json) file in this repository, you'll see the following dev-dependencies:

1. [Babel](https://babeljs.io/) - The ES6 Babel preset and require hook allows you to write next-generation JavaScript.  You certainly don't have to use this, but it is included for your convenience.
2. [Mocha](https://mochajs.org/) - One of the most popular testing frameworks in the JavaScript world, Mocha provides simple and flexible way to write your test suites.
3. [Chai](http://chaijs.com/) - This assertion library uses natural language chaining to provide BDD assertions that are easy to read and understand
4. [Chance](http://chancejs.com/) - A comprehensive library that can be used to easily generate random variables for testing purposes.

##Everything else

By default, Mocha looks in a folder called `test` for tests to run, so simply executing the `mocha` binary will execute all of the tests found here.  This project includes a npm script that allows you to do this easily, simply by running `npm run test`.  This repository includes a sample test and source file, so doing a `git clone`, `npm install`, and `npm run test` should result in one passing test.

## License

[Apache Public License v2.0](https://github.com/sourceallies/javascript-tdd-starter/blob/master/LICENSE)
