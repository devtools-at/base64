# Base64 Encoder/Decoder

<p align="center">
  <a href="https://devtools.at/tools/base64"><img src="https://img.shields.io/badge/Try%20Online-DevTools.at-blue?style=for-the-badge" alt="Try Online"></a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript Ready">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
</p>

<p align="center">
  <b>Encode and decode Base64 strings with UTF-8 support</b>
</p>

<p align="center">
  <a href="https://devtools.at/tools/base64">Try Online</a> •
  <a href="#usage">Usage</a> •
  <a href="#api">API</a> •
  <a href="#license">License</a>
</p>

---

## Online Tool

**[Try Base64 Encoder/Decoder online at DevTools.at →](https://devtools.at/tools/base64)**

Use this tool directly in your browser - no installation required:
- No registration needed
- Works instantly in your browser
- Your data never leaves your device (100% client-side)
- Available in 20+ languages
- Free forever

---

## What is Base64 Encoder/Decoder?

Encode and decode Base64 strings with UTF-8 support. This is a standalone TypeScript/JavaScript implementation that you can use in your own projects.

## Features

- **Zero Dependencies** - Lightweight with no external dependencies
- **TypeScript Support** - Full type definitions included
- **Browser & Node.js** - Works in both environments
- **UTF-8 Support** - Handles international characters correctly

## Usage

```typescript
import { encode, decode } from '@devtools-at/base64';

// Encode text to Base64
const encoded = encode('Hello, World!');
console.log(encoded); // "SGVsbG8sIFdvcmxkIQ=="

// Decode Base64 back to text
const decoded = decode('SGVsbG8sIFdvcmxkIQ==');
console.log(decoded); // "Hello, World!"

// Works with UTF-8 characters
const emoji = encode('Hello 👋 World 🌍');
console.log(decode(emoji)); // "Hello 👋 World 🌍"
```

## API Reference

### Core Functions

The source code in `src/index.ts` contains the core implementation. You can copy and use these functions directly in your project.

---

## Related Tools

Check out our other free developer tools at [DevTools.at](https://devtools.at):

| Tool | Description |
|------|-------------|
| [JSON Formatter](https://devtools.at/tools/json-formatter) | Format and beautify JSON |
| [Base64 Encoder](https://devtools.at/tools/base64) | Encode/decode Base64 |
| [Hash Generator](https://devtools.at/tools/hash-generator) | Generate MD5, SHA hashes |
| [UUID Generator](https://devtools.at/tools/uuid-generator) | Generate random UUIDs |
| [Password Generator](https://devtools.at/tools/password-generator) | Create secure passwords |
| [JWT Decoder](https://devtools.at/tools/jwt-decoder) | Decode JSON Web Tokens |
| [URL Encoder](https://devtools.at/tools/url-encoder) | Encode URL parameters |
| [Regex Tester](https://devtools.at/tools/regex-tester) | Test regular expressions |

[**Browse all 100+ free developer tools →**](https://devtools.at)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <a href="https://devtools.at">
    <img src="https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-DevTools.at-blue?style=flat-square" alt="Made by DevTools.at">
  </a>
</p>

<p align="center">
  <sub><a href="https://devtools.at">DevTools.at</a> - Free Online Developer Tools - No Registration Required</sub>
</p>
