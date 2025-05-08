
Krita
=====
A sketching and painting program for digi-artists.
Vision for developing Krita is as follows.
- free and open source
- offers an end-to-end solution for creating digi-art files from scratch
- optimized for frequent, prolonged and focussed use
- Supported fields of painting include: illustrations, concept art, matte painting, textures, comics and animations
- Supports needs and workflow of users first, and is developed alongside them.
- Open standards are supported and interoperates with other applications
Not intended as a replacement for Photoshop
Tools in Krita are best suited for digi-paint, concept-art, illustration, and texturing.

Starting Krita
==============
By default, no canvas or new document will be open.
*The same holds if a document is not specified when opening Krita via CLI*
User will be greeted by welcome screen, which will contain options to create a new file or open an existing document.
The [Welcome Screen](https://docs.krita.org/en/reference_manual/welcome_screen.html#welcome-screen)
- Creating a new document:
    - via `File` menu
    - via `New File` under start-section of welcome screen
- Open existing document:
    - `File` > `Open`
    - Drag image from PC into Krita window

Creating a new document
-----------------------
1. Click on `File` from application menu-bar at top.
2. Click on `New`; alternatively, use ==<C-n>: Open New Document== shortcut.
3. Cick on `Custom Document` section.
    - In `Dimensions` tab choose A4 (300PPI) or any size you prefer from `Predefined` drop-down menu.
More info about [document creation interface](https://docs.krita.org/en/reference_manual/create_new_document.html#create-new-document).
Color profile should ideally be RGB, with depth set to 8-bit integer. More info about [color](https://docs.krita.org/en/general_concepts/colors.html#general-concept-color)

How to use brushes
------------------
The brush tool should be selected by default upon starting Krita.
Therefore all one must do to brush the canvas is to either left-click or press with the tablet stylus.
If for some reason it is not selcted, select this icon: ![Brush icon](https://docs.krita.org/en/_images/freehand_brush_tool.svg)
At times, the user will want to use different brushes.
On the right, there is a docker called `Brush Presets`.
- Alternatively, use the shortcut ==F6: Brush Presets==; it's got all the squares with pens and crayons.
If for some reason the brush presets do not suffice, tweak a given preset via the `Brush Editor` in the toolbar.
- Alternatively, access the `Brush Editor`via the shortcut ==F5: Brush Editor==.
Tick any square to choose a brush, then draw on the canvas.
Click the triangle in the `Advanced Color Selector` docker to change the color.

Erasing
-------
Brush presets exist for erasing purposes.
Often it is faster to use the eraser toggle.
Use the shortcut ==E: Erase== to toggle the current brush from brush-mode to eraser-mode.
This erasing method works with most tools.
- line tool.
- rectangle tool.
- gradient tool.

Saving and opening files
------------------------
In order to save a document:
1. In the top menu-bar, select `File`.
2. In the drop-down menu, select `Save`.
3. Select the folder in which to save the file.
4. Hit `Save`.
[Article](https://docs.krita.org/en/tutorials/saving-for-the-web.html#saving-for-the-web) on how to save images into a 'Net-friendly format.

Navigation
==========

Interface
---------
Interface is flexible; it allows artist to arrange elements of the workspace.
One can *snap* and arrange elements, like putting together LEGO blocks.
Parts of the interface are modularized into `Dockers` and `Toolbars`.
Every set of elements can be shown, hidden, moved, and rearranged.

Tour of Krita Interface
-----------------------
![Krita default user-interface](https://docs.krita.org/en/_images/Interface-tour.svg)
A (Top Menu-Bar)
: Traditional `File` or action menu quintessential in most windowed applications.
B (Toolbar)
: Where one can choose brushes and set parameters and other settings.
C (Sidebars for Dockers)
: Known in some applications as 'Dockable' areas. `Dockers` can be moved at either the top or bottom as well.
D (Status Bar)
: Shows preferred mode for showing selection (e.g. marching ants or mask-mode), selected brush-preset, [Color Space](https://docs.krita.org/en/general_concepts/colors/color_managed_workflow.html#color-managed-workflow), image size, and zoom control.
E (Floating Docker)
: Can be popped in and out of docks at any time to view greater range of options. Exemplary: [Preset Docker](https://docs.krita.org/en/reference_manual/dockers/brush_preset_docker.html#brush-preset-docker) or [Palette Docker](https://docs.krita.org/en/reference_manual/dockers/palette_docker.html#palette-docker)
The canvas sits in the middle of the application.
Krita provides artist with a scrolling canvas of infinite size, unlike most digi-art applications.

Navigating the Canvas
---------------------
Panning
: Middle-Button or <Space> + Left-Button + <[Directional]-Key>
Zooming
: <+> or <->, <C-Space> or <C-MiddleButton> for direct zooming via stylus.
Mirroring
: <m>, <Alt-m> to use cursor position as center to mirror around instead of middle of view. `Mirror Canvas` available in [Shortcut Settings](https://docs.krita.org/en/reference_manual/preferences/shortcut_settings.html#shortcut-settings) also
Rotating
: (Direction1) <C-[> or <4>; (Direction2) <C-]> or 6; (Mouse-Based) <S-Space> and <S-MiddleButton>; (ResetRotation) <5>

Dockers
-------
Many options are subdivided into functional panels called `Dockers` (or `Docks`)
`Dockers` are small windows containing the layer stack, the `Color Palette`, or a list of `Brush Presets`.
Can be activated by the following:
1. In the top menu-bar, `Setting`.
2. In the sub-menu, `Dockers`.
`Dockers` can be removed by clicking the `x` in the upper-right of the docker-window.
Can be docked onto the main interface
- done by dragging the docker to the sides of the canvas (top and bottom as preferred)
Any configuration of Dockers can be saved as `Workspaces`.
Dockers can be prevented from docking by pressing the `Ctrl` key prior to dragging the Docker.

Slider
------
Used to control values like brush size, opacity, flow, etc.
Total range is represented rom left to right.
Blue bar gives indication of where in possible range current value lies.
Clicking anywhere to the left or right of slider will shift the value
*To input a specific number, hold either <LeftClick> or <RightClick> on the slider; input desired number.*
1. Holding <Shift> while dragging the slider changes the value at a smaller increment.
> As of 5.1, this will also enable `relative mode`, which means the cursor can be dragged outside the slider area.
2. Holding <Ctrl> while dragging changes the value in increments of either whole numbers or multiples of 5.

Toolbars
--------
Contain important actions and menus for ready access for artist.
More information about `Toolbars` can be found [here](https://docs.krita.org/en/reference_manual/main_menu/settings_menu.html#configure-toolbars).
Leveraging Toolbars can speed up an artist's workflow especially for artists who use tablets.
Shortcut key for Toolbar actions: ==<Ctrl-Enter>: Search through all actions via action search-bar==
### Workspace Chooser
The button on the very right of the Toolbar is the workspace chooser.
Workspace chooser allows one to load and save common UI configurations.
Krita is equipped with a few common workspaces.
![Workspace chooser button, on the very right of toolbar](https://docs.krita.org/en/_images/workspace-chooser-button.svg)

Pop-Up Palette
--------------
A feature unique to Krita, designed to increase productivity.
A circular menu for quickly choosing brushes, foreground and background colors, recent colors while painting.
Access via shortcut: ==<RightClick>==
Palette will spawn at mouse cursor.
Tagging brush presets will allow one to add particular sets of brushes to this palette.
e.g. Adding inking brush presets to 'inking tag' will let you change tags to 'inking' in pop-up palette.
One can [tag](https://docs.krita.org/en/user_manual/tag_management.html#tag-management) brush presets via [Preset Docker](https://docs.krita.org/en/reference_manual/dockers/brush_preset_docker.html#brush-preset-docker). More information on [tagging](https://docs.krita.org/en/reference_manual/resource_management.html#resource-management)
For more than ten brush presets:
1. `Settings`
2. `Configure Krita`
3. `General`
4. `Miscellaneous`
5. `Number of Palette Presets`
More information can be found [here](https://docs.krita.org/en/reference_manual/popup-palette.html#pop-up-palette)

Basic Concepts
==============
[Link to source](https://docs.krita.org/en/user_manual/getting_started/basic_concepts.html#basic-concepts)

Raster and Vector
-----------------
Raster
: A graphics type where an image is defined by the color of the pixels that compose it; quality is reduced upon zooming in.
Vector
: A graphics type where an image is defined by mathematical formulae and the like; quality stays constant even upon zoom-in.
Krita is regarded mostly as a raster-based application.
That's not to say it's not got vector-editing capabilities also.
Pixel
: The atom of an image. The image itself is some ridiculously big molecule that comprises a number of atoms. Each atom has an atomic number, which can be expressed via RGB, HSV, and a bunch of other color models I can't be arsed to list.
Raster editing is tantamount to manipulating and editing these pixels.
Painting a raster image amounts to changing the color of the pixels it comprises
Zooming in reveals a pixelated thing.
Vectors are generated via mathematical expressions.
They are independent of pixels.
On vector editing
> When drawing a rectangle on a [vector layer](https://docs.krita.org/en/reference_manual/layers_and_masks/vector_layers.html#vector-layers), you are actually drawing paths through points called 'nodes', which are located on specific coordinates on the xy-plane. Moving or resizing these points makes the computer calculate and redraw the path on the backend, displaying the newly formed shape once it's finished processing. One can re-size the vector shape to any extent without any depreciation in quality. The set of all vector images complements the set of all rasters wrt all images that can be edited in Krita.

Images, Views, and Windows
--------------------------
Your workspace comprises three major containers.

### Image
This --- this is the most pertinent one, see.
This is an individual copy of the image that can be opened or created via file dialog.
What it contains:
- layers
- color-space of image and layers
- canvas-size
- metadata (e.g. creator, date created, [DPI](https://en.wikipedia.org/wiki/Dots_per_inch))
#### The `File` Menu
`New`
: Allocates a new buffer whereby one can edit an image.
`Open...`
: Creates buffer for existing image; *hitting `Save` on the UI will overwrite the original!*
`Open existing Document as Untitled Document`
: Creates buffer for existing image under a blank alias; `Save` will prompt you to specify an image.
`Create Copy From Current Image`
: Same as `Open existing...`, except with the currently selected image.
`Save Incremental Version`
: Saves snapshot of current version complete with appended version number. The most crude VCS, am I wrong? Crude yet expedient.
Krita implements file backup system in the form of auto-saves, backup files and crash recovery. These options can be configured in the general settings.
### View
Allows the user to view the image.
Krita allows user to have multiple views.
Views can be manipulated to:
- be zoomed in on
- be rotated
- be mirrored
- have the color of it be altered without changing the image itself.
These features make it easier for artists to debug the image.
Shortcut key: ==<m>: Mirror the image==
Create multiple views by selecting these menu options:
1. `Window`
2. `New view`
3. `(image name)`
Switch between views via `Window` menu or the shortcut ==<Ctrl-Tab>: switch between views==
Alternatively, keep them in the same area when the `subwindow` mode is active in the [settings](https://docs.krita.org/en/reference_manual/preferences/general_settings.html#general-settings)
1. Window
2. Tile
### Dockers
Subwindows in [Krita's UI](https://docs.krita.org/en/user_manual/getting_started/navigation.html#navigation)
Useful tools are contained here.
- color selector
- layer stack
- tool options
[Examples of dockers](https://docs.krita.org/en/_images/Dockers.png)
*Views and dockers are contained within `Windows`*
### Windows
Big containers for your programs (duh)
Krita enables its users to have multiple windows open
1. `Window`
2. `New Window`

Canvas in Krita
---------------
When creating a new document in Krita, a rectangular area will appear. This area is called a **canvas**.
Saving this painting as a JPG, PNG (etc) file or taking a print from this painting will tell Krita to consider only the bits within the **canvas**.
Everything beyond is ignored.
Information about the area beyond the **canvas** is stored, but invisible.
This data is stored in `Layers`.

Layers and Compositing
----------------------
[Source](https://docs.krita.org/en/user_manual/getting_started/basic_concepts.html#layers-and-compositing)
______________________
The layer stack is a means whereby one can segregate different elements of a drawing, thereby manipulating the drawing order.
> e.g. If you want to draw the background first, then the foreground, you can simply arrange the bg- and fg-layers so that the latter precedes the former on the layer-stack.
**Drawing Order**
: In which the furthest elements are drawn first, followed by the second-furthest and so on.
The layer-stack allows one to show you which layers are drawn when.
It allows you to change the order in which they appear and apply other effects also.
This is called **Compositing**.
> One can think of it as a way of 'modularizing' your art.
Many layer types exist in Krita:
### Paint Layers
Raster layers which are to be painted on.
### Vector Layers
On which you draw vector graphics, which are more simple than raster graphics.
Have the benefit that they can be deformed with less blurriness.
### Group Layers
Enable user to group layers for:
- organizational purposes
- transformational purposes
- and other ones also.
### Clone Layers
Copies of the layers selected when you created them.
Auto-update when original is changed.
### File Layers
Refer to an image outside Krita.
Are updated as the outside image updates.
Useful for logos and emblems that change frequently.
### Fill Layers
To be filled with colors or patterns; things which Krita can readily manifest.
### Filter Layers
Help one to apply filters to affect a composite image made from all layers beneath.
Contents of layers may be manipulated by `Tools`.

Tools
-----
Help user manipulate image data.
Five types of tools exist in Krita:
### Paint Tools
For painting on paint-layers
Describe shapes like rectangles, circles, and straight lines; freehand paths also.
The aforementioned shapes are then used by the `Brush Engine` to make shapes and drawing effects.
### Vector Tools
Upper row of tools.
Used in order to edit vectors.
All paint tools save for freehand brush allow one to draw shapes on vector layers
Resultant object shan't use brush preset for outline unlike objects made with paint tools.
### Selection Tools.
Enable one to edit a specific area of a layer without affecting the others.
Allow one to draw or modify current selection.
### Guide Tools
Grids
Assistants
### Transform Tools
Allow users to transform layer / object on canvas
_________________________________________________
All tools can be found in the toolbox
Information about each tool can be found in the [tools section](https://docs.krita.org/en/reference_manual/tools.html#cat-tools)

Brush Engines
-------------
These accept a path and tablet info in tandem, and dope it, and thus this a stroke makes. 
`Engine` is a term used to refer to a complex interacting set of code.
: This code is the core for certain functionality and can be customized.
The Brush Engine drives the look and feel of one's v-brush
Each Engine has a different look and feel from the next.
Explore Brush Engines [here](https://docs.krita.org/en/reference_manual/brushes/brush_engines.html#category-brush-engines)
### Pixel-Brush Engine
Simple
Allows one to do most basic work.
### Color Smudge Engine
Geared more towards painting.
Slower than Pixel-Brush
Mixing of colors allows for a faster workflow that involves blending and mixing colors.
### Sketch Brush Engine
Helps with making messy lines.
### Shape Brush Engine
Allows one to make big flats quickly.
_____________________________________
Effects can be configured via `Brush Settings` dropdown ==<F5>: Brush Settings==.
Any configuration can be saved into presets, accessible by:
- ==<F6>: Engine Configuration==
- Brush Presets docker.


