# QR Code Generator

A modern, responsive QR Code Generator built with Next.js and React. Generate QR codes from any URL or text with a beautiful, dark-themed interface.

## Features

- 🎨 **Modern UI**: Clean, dark-themed interface with responsive design
- ⚡ **Fast Generation**: Instant QR code generation from URLs or text
- 📱 **Mobile Friendly**: Fully responsive design that works on all devices
- 💾 **Download Support**: Download generated QR codes as PNG images
- 🎯 **Simple Interface**: Intuitive single-page application
- 🌙 **Dark Theme**: Eye-friendly dark mode design

## Demo

![QR Code Generator Screenshot](./demo/screenshot.png)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/qr-code-generator.git
cd qr-code-generator
```

2. Navigate to the frontend directory

```bash
cd frontend
```

3. Install dependencies

```bash
npm install
# or
yarn install
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. **Enter Text or URL**: Type any text or URL into the input field
2. **Generate QR Code**: Click the "Generate QR Code" button
3. **Download**: Click "Download QR Code" to save the generated image

### Supported Input Types

- URLs (https://example.com)
- Plain text
- Email addresses
- Phone numbers
- Any string content

## Technology Stack

- **Frontend Framework**: Next.js 14 with App Router
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **QR Code Generation**: qrcode library
- **Language**: TypeScript

## Project Structure

```
frontend/
├── src/
│   └── app/
│       ├── page.tsx          # Main QR generator component
│       ├── layout.tsx        # Root layout
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── package.json             # Dependencies and scripts
└── tailwind.config.js       # Tailwind configuration
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

#### QR Code Options

Modify the QR code generation options in `page.tsx`:

```typescript
const qrCodeDataUrl = await QRCode.toDataURL(link, {
  width: 256, // QR code size
  margin: 2, // Margin around QR code
  color: {
    dark: "#000000", // Dark color
    light: "#FFFFFF", // Light color
  },
});
```

#### Styling

The project uses Tailwind CSS. Modify classes in the JSX or extend the configuration in `tailwind.config.js`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [qrcode](https://github.com/soldair/node-qrcode) - QR code generation library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ using Next.js and React
