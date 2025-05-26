# Online Text Tools

A modern web application built with Next.js that provides various text manipulation and analysis tools.

## Features

- **Notepad**: A text editor with the following capabilities:

  - Text editing with a clean interface
  - Character count (with and without spaces)
  - Word count
  - Sentence count
  - Line count
  - Copy text to clipboard
  - Cut text to clipboard
  - Download text as a text file
  - Reset text area

- **Case Converter**: Convert text between different cases:

  - Uppercase conversion
  - Lowercase conversion
  - Title Case conversion
  - Sentence case conversion
  - Toggle case conversion
  - Download the converted text as a text file

- **Base64 Encode and Decode**: Convert text to and from Base64 encoding:

  - Encode text to Base64
  - Decode Base64 to text
  - Copy encoded/decoded text to clipboard
  - Download the encoded/decoded text as a text file

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [React](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com) - Unstyled, accessible UI components

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Then, you can start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Docker Support

The application includes Docker support. To build and run using Docker:

```bash
# Build the Docker image
docker build -t online-text-tools .

# Run the container
docker run -p 3000:3000 online-text-tools
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Repository

- GitHub: [https://github.com/duggavamshidhar/online-text-tools/](https://github.com/duggavamshidhar/online-text-tools/)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React Documentation](https://react.dev) - learn about React.
- [TypeScript Documentation](https://www.typescriptlang.org/) - learn about TypeScript.
