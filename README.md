# MU Online BMD Viewer

A modern, web-based 3D model viewer for `.bmd` files, the format used in the game MU Online. This application is built with TypeScript, Three.js, and Vite, providing a smooth and interactive experience for inspecting game models and their animations.

## Features

- **BMD Model Loading**: Load `.bmd` files via a simple drag-and-drop interface.
- **Texture Support**: Apply various texture formats, including `.jpg`, `.png`, `.tga`, `.ozj`, and `.ozt`.
- **Animation Playback**: View all embedded animations with adjustable playback speed.
- **GLB Export**: Export models and their animations to the standard `.glb` format for use in other 3D software like Blender or Unity.
- **Texture Export**: Export all applied textures to `.png` format.
- **Interactive Controls**:
  - Orbit, pan, and zoom the camera.
  - Toggle wireframe and skeleton visibility.
  - Adjust model scale and scene brightness.
  - Auto-rotate the model.
  - Lock the animation on a specific frame.
- **Diagnostics Panel**: View real-time information about the loaded model, including mesh, bone, and animation counts, as well as FPS.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository or download the source code.
2.  Open a terminal in the project directory.
3.  Install the required dependencies:

    ```bash
    npm install
    ```

### Running the Development Server

To run the application locally with hot-reloading, use the following command:

```bash
npm run dev
```

This will start a development server, and you can view the application in your browser at the provided URL (usually `http://localhost:5173`).

### Building for Production

To create an optimized build for deployment, run:

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

## How to Use

1.  **Load a Model**: Drag and drop a `.bmd` file onto the designated area on the left panel, or click to open the file selector.
2.  **Apply Textures**: Once the model is loaded, the viewer will show which textures are required. Drag and drop the corresponding texture files onto the texture area.
3.  **Control Animations**: Use the buttons to play different animations and the slider to control the speed.
4.  **Export**: Use the export buttons to save the model as a `.glb` file or to save the textures as `.png` files.