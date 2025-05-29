# Online Text Tools

[![Action Status](https://github.com/duggavamshidhar/online-text-tools/actions/workflows/build.yml/badge.svg)](https://github.com/duggavamshidhar/online-text-tools/actions/workflows/build.yml)
[![Action Status](https://github.com/duggavamshidhar/online-text-tools/actions/workflows/deploy.yml/badge.svg)](https://github.com/duggavamshidhar/online-text-tools/actions/workflows/deploy.yml)

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
  - Capitalized case conversion
  - Alternating case conversion
  - Inverse case conversion (Toggle case)
  - Download the converted text as a text file

- **Base64 Encode and Decode**: Convert text to and from Base64 encoding:

  - Encode text to Base64
  - Decode Base64 to text
  - Copy encoded/decoded text to clipboard
  - Download the encoded/decoded text as a text file

- **Word Frequency**: Analyze the frequency of words in a text:

  - Count occurrences of each word in the text
  - Display word frequency in a sortable list
  - Character count, word count, sentence count, and line count
  - Copy text to clipboard
  - Cut text to clipboard
  - Download word frequency data as a CSV file
  - Download text as a text file
  - Reset text area

## Tech Stack

- [Next.js](https://nextjs.org) - React framework (version 15.3.1)
- [React](https://react.dev) - UI library (version 19.0.0)
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework (version 4)
- [Radix UI](https://www.radix-ui.com) - Unstyled, accessible UI components
- [Lucide React](https://lucide.dev) - Icon library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management for Next.js
- [Sonner](https://sonner.emilkowal.ski) - Toast notifications for React
- [@vercel/speed-insights](https://vercel.com/docs/speed-insights) - Performance monitoring

## Getting Started

### Prerequisites

- Node.js (version 18 or higher, Docker configuration uses Node.js 22)
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

## Request a Tool or Report an Issue

We're always looking to improve and expand our text tools. If you have a suggestion for a new tool or have found an
issue with an existing one:

- **Request a Tool**: If you have an idea for a new text tool that would be
  useful, [create a new issue](https://github.com/duggavamshidhar/online-text-tools/issues/new) with the tag "
  enhancement" and describe the tool you'd like to see.

- **Report an Issue**: If you've found a bug or have a problem with an existing
  tool, [create a new issue](https://github.com/duggavamshidhar/online-text-tools/issues/new) with the tag "bug" and
  provide details about the issue.

## Repository

- GitHub: [https://github.com/duggavamshidhar/online-text-tools/](https://github.com/duggavamshidhar/online-text-tools/)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [React Documentation](https://react.dev) - learn about React.
- [TypeScript Documentation](https://www.typescriptlang.org/) - learn about TypeScript.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS.
- [Radix UI Documentation](https://www.radix-ui.com/themes/docs/overview/getting-started) - learn about Radix UI
  components.
- [Lucide Documentation](https://lucide.dev/guide) - learn about Lucide icons.
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights/overview) - learn about performance monitoring.
- [Docker Documentation](https://docs.docker.com/) - learn about Docker and containerization.
- [Node.js Documentation](https://nodejs.org/en/docs) - learn about Node.js.
