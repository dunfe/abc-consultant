# ABC Consultant Portfolio

A single-page portfolio website built with Vite and Tailwind CSS for ABC Consultants.

## Features

- **Responsive Design**: Built with Tailwind CSS for a modern, responsive layout
- **About Me**: Profile section with image and personal summary
- **Skills**: Display of technical skills with logos
- **Projects**: Showcase of 3 portfolio projects
- **Recommendations**: Display existing recommendations and accept new ones
- **Interactive Form**: Add new recommendations with popup confirmation
- **Smooth Navigation**: Sticky header with smooth scrolling
- **Home Icon**: Floating button to return to top

## Technologies Used

- **Vite** (v7.2.7): Fast build tool and dev server
- **Tailwind CSS** (v4.1.18): Utility-first CSS framework
- **Vanilla JavaScript**: For interactivity
- **PostCSS**: CSS processing with autoprefixer

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173/`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
abc-consultant/
├── src/
│   ├── main.js          # Main JavaScript file
│   └── style.css        # Styles with Tailwind directives
├── public/
│   └── vite.svg         # Favicon
├── index.html           # Main HTML file
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Evaluation Criteria Met

All 9 tasks from the evaluation criteria have been implemented:

1. ✅ Styled name appears on top-left
2. ✅ Navigation bar with 4 options and hover effects
3. ✅ About Me section with profile image and text
4. ✅ Skills section with logos and text
5. ✅ 3 unique projects
6. ✅ 3 unique recommendations
7. ✅ New recommendations can be added dynamically
8. ✅ Home icon for back to top
9. ✅ Popup confirmation on recommendation submission

## License

This project is created for educational purposes as part of the ABC Consultants assignment.
