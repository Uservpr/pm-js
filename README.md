# pm-js

**pm-js** is a minimalist library designed to simplify CRUD (Create, Read, Update, Delete) operations using HTTP requests in Node.js. Built as a lightweight alternative to Postman, this library allows you to interact with APIs using concise and clear code.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [CLI Mode](#cli-mode)
  - [GET Request](#get-request)
  - [POST Request](#post-request)
  - [PUT Request](#put-request)
  - [DELETE Request](#delete-request)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Simplicity**: Reduces boilerplate code for CRUD operations.
- **Lightweight**: Built on top of Axios for fast performance.
- **CLI Mode**: Execute HTTP requests directly from the terminal.
- **Save Response**: Save the request results to a JSON file using `-s file.json`.
- **Pretty Response**: Output the request results in a more readable format.

## Installation

Install pm-js via npm:

```bash
npm install @danydev/pm-js
```

## Usage

### CLI Mode

Now pm-js can be used directly from the terminal!

#### Display Help

```bash
node cli_mode/index.js -help
```

#### Perform GET Request

```bash
node cli_mode/index.js -get https://jsonplaceholder.typicode.com/posts/1
```

#### Perform POST Request

```bash
node cli_mode/index.js -post https://jsonplaceholder.typicode.com/posts -d '{"title": "Hello", "body": "World"}'
```

#### Perform PUT Request

```bash
node cli_mode/index.js -put https://jsonplaceholder.typicode.com/posts/1 -d '{"title": "Updated"}'
```

#### Perform DELETE Request

```bash
node cli_mode/index.js -del https://jsonplaceholder.typicode.com/posts/1
```

#### Save Response to JSON File

```bash
node cli_mode/index.js -get https://jsonplaceholder.typicode.com/posts/1 -s result.json
```

---

### GET Request (In JavaScript Code)

```javascript
const pm = require('@danydev/pm-js');

pm.get('https://jsonplaceholder.typicode.com/todos/1', (data) => {
  console.log('GET Response:', data);
});
```

### POST Request

```javascript
const pm = require('@danydev/pm-js');

const newPost = {
  title: 'Hello World',
  body: 'This is a test post',
  userId: 1
};

pm.post('https://jsonplaceholder.typicode.com/posts', newPost, (data, res) => {
  console.log('POST Response:', data);
});
```

## API Documentation

### `pm.get(url, callback)`

**Parameters:**

- `url` (String): The URL to send the GET request to.
- `callback` (Function): A callback function that receives the response data.

### `pm.post(url, data, callback)`

**Parameters:**

- `url` (String): The URL to send the POST request to.
- `data` (Object): The payload sent to the server.
- `callback` (Function): A callback function that receives the data and response.

### `pm.put(url, data, callback)`

**Parameters:**

- `url` (String): The URL to send the PUT request to.
- `data` (Object): The data to be updated.
- `callback` (Function): A callback function that receives an error (if any) and the response data.

### `pm.del(url, callback)`

**Parameters:**

- `url` (String): The URL to send the DELETE request to.
- `callback` (Function): A callback function that receives an error (if any) and the response data.

## Contributing

Contributions are welcome! If you have suggestions, bug fixes, or want to add new features, please create an issue or pull request.

## License

This project is licensed under the ISC License.