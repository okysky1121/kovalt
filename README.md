# kovalt

Welcome to **kovalt**, the TypeScript wrapper for the powerful API provided by [cobalt.tools](https://cobalt.tools/). This repository aims to simplify the interaction with cobalt.tools' robust platform, allowing developers to easily integrate social and media platform downloads into their applications with minimal effort.

## Why kovalt?

While cobalt.tools offers a straightforward web interface, developers often need more flexibility and control when integrating such services into their applications. This is where kovalt comes in. By providing a clean and efficient TypeScript wrapper for the cobalt.tools API, kovalt allows developers to:

- **Streamline Integration**: Easily incorporate cobalt.tools' functionality into your TypeScript applications.
- **Enhance Productivity**: Focus on your application logic while kovalt handles the API interactions.
- **Maintain Clean Code**: Utilize TypeScript's type-checking and robust tooling to write maintainable and error-free code.

## Features

- **Simple Interface**: Intuitive methods to interact with cobalt.tools' API.
- **Comprehensive Documentation**: Detailed usage examples and API references.
- **Asynchronous Operations**: Built-in support for async/await, making it easy to handle asynchronous operations.
- **Error Handling**: Robust error handling to manage API errors gracefully.
- **Type Safety**: Leverage TypeScript's type system to catch errors at compile time.

## Example

Here's a basic example of how to use Kovalt in your TypeScript project:

```typescript
import kovalt from 'kovalt'

async function fetchDataFromUrl(url: string): Promise<string | null> {
  try {
    const data = await kovalt.getJSON(url)
    return data?.redirect || null
  } catch (e) {
    throw new Error('Failed to get data')
  }
}

fetchDataFromUrl(
  'https://www.tiktok.com/@csr.offcl/video/7376629063156354312',
).then(console.log) // "https://kityune.imput.net/api/stream?id=4JdAUb5X9M..."
```

## Contributing

Contributions are welcome! If you'd like to contribute to Kovalt, please follow these steps:

1.  Fork the repository.
2.  Create a new branch with a descriptive name.
3.  Make your changes.
4.  Submit a pull request.

Please make sure to follow the coding standards.
