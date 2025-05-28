PROJECTS
========
6: Simple landscale illustration
7: Axe
8: Skull
9: Clifftop tree

On Drawing Tablets
==================

Mouse vs. Drawing Tablet
------------------------
Mouse
- Width of each stroke made is uniform
Drawing tablet
- User can control width and shape of stroke by applying just the right pressure.
- User can also control other attributes, such as opacity.

Setting Up the Drawing Tablet
-----------------------------
Most drawing tablets have complementary software for configuration.
Teacher's preference:
- Up-Button: Right-Click
- Down-Button: Middle-Click
It is recommended to set absolute mode to have access to all areas of the screen.
If the user wants the stylus to act as a mouse, set relative mode.

Performance
===========

Workstations
------------
Ideal: Graphics
Sufficient: Gaming

Optimization
------------

### Display Driver
Settings > Configure Krita… > Display > Canvas Architecture
Current Renderer:
- OpenGL: Krita was originally designed to support only this.
- Direct3D: Reportedly has less brush lag than others.
- Auto: Krita automatically scans the system and determines the most optimal renderer
### Scaling mode
Settings > Configure Krita… > Display > Canvas Architecture
Located under the “renderer” parameter
- Default: “High Quality Filtering”
- Ideal: “Bilinear Filtering”
- Lowest Quality: “Nearest Neighbor”
_Original data is unaffected by setting these options._
### Memory limit
Settings > Configure Krita... > Performance > General
System memory capacity is displayed here.
The amount of memory Krita is allowed to consume can be adjusted here.
More memory => Better performance for Krita; potentially worse performance for other programs.
### FPS limit
i.e. Frames per second while painting
Optimal: Minimum of 30 FPS
Suboptimal: Less than 30 FPS (induces nausea)
### Canvas size
Positive correlation between resolution and loss in performance.
Check RAM consumed:
- Click on button on the bottom of screen (displays resolution dimensions)
Suppose image is already initialized and the dimensions are too large.
- In order to resize: Image > Resize Canvas > Constrain Proportions (LOCK) > OK
### Brush smoothing
Keyboard shortcut: \<b\> (brush tool)
Tool Options > “Brush smoothing”
- optimal for drawing line art.
- otherwise, optimal to set to “None”
Having this on all the time will strain the PC, making the brush strokes lag too far behind the mouse
Less than ideal for sketching or coloring, because you want the strokes to appear instantly.

\*EXERCISE\*
------------
> Configure Krita such that performance is optimal.

Computer Graphics Images
========================

Raster and vector images
------------------------

### Raster
Almost all digital images are raster (e.g. PNG, JPG, GIF, TIFF, HDR).
These images consist of many small squares, each of which has a color
Zooming in on images of this type will enable the user to see the color of each individual square (i.e. pixelated)
A pixel (Picture Element) is the smallest element of a raster image with a coordinate and attributes that together represent a single color
Quality depends on resolution (i.e. number of pixels, as determined by width and height)
High-resolution images can store more info, but they cost more to store.
The larger an image is, the more resources it costs.
#### Summary of raster images.
- Dependent on resolution
- Larger file size
- Harder to edit
- More ubiquitous
- Computationally less demanding

### Vector
Images of this type are rare on the Web
They are usually converted to raster via software beforehand
Vector image types include but are not limited to: SVG, DWG, CDR, AI
A vector image is made up of points and lines that are stored as mathematical values
Image quality is independent of resolution.
Images can be scaled and edited freely; one can reselect it, change its shape and so forth.
Not all images can be represented viably as vectors.
Vectors are more resource-intensive than rasters
Not ideal for complex images
Smaller file size

### Summary
Raster: Complex images that have many different colors without any specific pattern (e.g. photos)
Vector: Images with limited colors or with gradations that have certain patterns (e.g. logo, cartoon)
Krita is raster-based, and focuses on digi-paint
New features related to vector editing have been added to Krita since its inception
Vector features of Krita are better than those of Photoshop.
Vector features of AdobeIllustrator are better than those of Krita.

Color Models
============
Understanding colors is important in developing technologies to represent and render them.
Colors can be broken down into their most basic components (i.e. key colors).
A color model is a means to define colors via a combination of key colors and parameters.
Light-based color models use lights to produce color.
Pigment-based color models use inks or paints to produce color.
The main models for digi-paint in Krita are RGB and HSV.

RGB
---
RGB is a light-based model.
- R: Red
- G: Green
- B: Blue
Using a combination of these three colors with specified intensity will yield a new color.
Setting all pigments to 0 will yield black.
Setting all pigments to MAX will yield white.
Each of the key colors is equivalent to a color channel.
The minimum value for each color channel is 0, while the maximum value is 255.

HSV
---
H: Hue
- type of color
- measured in degrees
S: Saturation
- presence of colors
- measured in percentage
V: Value
- strength of light emitted by color
- measured in percentage
Apparently, it's easier to select colors using this color model.

CMYK
----
This is the color model typically used in printers.
Generally it's impossible to produce all colors via RGB.
In theory, all colors are encompassed by CMYK.
C: Cyan
M: Magenta
Y: Yellow
K: "Black"
Brown cannot be represented in RGB; the “K” component of this color model amends this flaw.

LAB
---
L: Lightness
- Controls how light / dark a color is.
A: Green to Red
- Controls how green vs red a color is.
B: Blue to Yellow
- Controls how blue vs yellow a color is.
This color model is apparently based on 'human perception'.
It's useful for converting colors from one model to another.
It's used by 'spectrophotometers'

YCrCb
-----
Y: Luminosity
- a.k.a. brightness
Cr: Chroma red
- same as 'Red to Green' in LAB
Cb: Chroma blue (Blue to Yellow)
- similar to 'B' in LAB color model
- used primarily by JPEG compression algorithm to process data

XYZ
---
X: Like red
Y: Exactly like green
Z: Like blue
First developed in 1931. Deprecated.

Technicalities of Color
=======================

Defining the color model of a document
--------------------------------------
TOP: File > New Document > Custom Document > Color > Model
You should always use the RGB model for the document; it encompasses HSV also.
- Not all features work well with other color models.
- Not all blending modes can be used.
- Other color models have a narrower gamut (range) than RGB
- Not many file formats can store colors in models other than RGB
If one planned on printing the image, one might think it ideal to use CMYK.
But this is a specious claim, since the print-shop will convert the file to CMYK or another color model that suits their machine.

Bit Per Channel
---------------
A raster image is a collection of squares called 'pixels'.
This is important to know when either saving or exporting images.
Each pixel can store a single color.
In an RGB model, a pixel has three pieces of information (i.e. RGB, and the values for those three).
The information for the key colors, RGB, is stored in "channels".
There is also a channel called the "alpha" channel, which determines level of transparency.
The PNG file format supports transparency.
Other formats, like JPEG, do not support transparency.

8-bit per channel
-----------------
Depth
- almost all images use 8 bits
- one may also specify 16, 32, etc.
For each channel in the RGB model, there are eight slots.
Each slot can be filled in with either one or zero (i.e. binary).
Each channel is limited to 256 values (i.e. 2^8), because each channel is allotted 8 bits.
The alpha channel costs 8 bits also.
- at alpha-0, the pixel is transparent
- at alpha-255, it is opaque.
- a pixel without transparency will have 24 bits.
- a pixel with transparency will have 32 bits.
Graphics applications have different ways of displaying image parameters.
- e.g. 24-bit, short-text, abbreviation (e.g. RGB, RGBA).

High-range images
-----------------
Almost all digital images have a bit-depth of 8 bits per channel.
But what of 16-bit or 32-bit images?
Case study:
- Suppose we want to model light via computer.
- Theoretically, the brightness of a light can range from 0 to infinity.
- We have only a limited number of bits (e.g. 8-bit for a pixel that represents a part of a light source).
- Thus we can store only a limited number of brightness-levels of a light.
- In order to model light, we must compress the information pertaining to it.
- \*This kind of technique is known as **tone-mapping**.
- This allows one to capture a wider range of light info and store it in an 8-bit channel image.
- Lots of visual info is lost in the process.
- For the layperson, the loss is minimal.
- For graphics professional, the loss is too limiting.
High-range image formats were developed to this effect.
- e.g. HDRI, EXR, PNG, RAW.
- These can store more than 8-bits per channel.
- RAW formats are not standard; they vary by device.
- File formats vary depending on the specific camera used.
- To get a picture with a higher bit-depth, one must in theory take the same picture multiple times with different exposure levels (i.e. brightness). Number of times * 8 = bit-depth of resulting image.

Hexadecimal Color Codes
-----------------------
Each hexadecimal number begins with a pound-sign.
Digits range from 0..9A..F
The first two digits are for the red channel.
The second pair are for the green channel.
The third pair are for the blue channel.
*#C74F37*
- \#: syntactic marker
- C7: value for red channel
- 4F: value for green channel
- 37: value for blue channel
Web-safe colors are commonly represented by a three-digit hex number.
- Example: #37A = #3377AA, a web-safe color.
- Web-safe colors are deprecated.

Creating a New Document
=======================
How to create a new document:
- Shortcut: ==Ctrl-N: Create New Document==
- Open `File` menu then `New`.
- In welcome-screen, click on `New File`
About the new-document menu:
- One can select templates here. A template is just a regular Krita document in a special folder.
- Size and pixel density can be specified.
    - Ideal to leave resolution at 100ppi.
- Orientation can be toggled here also.
- Presets can be selected and modified.
- \*Ideal to save image configurations for later\*

Color
-----
These settings are ideal:
- Color model: RGB
- Bit depth: 8-bit
- Profile: The [ICC](https://en.wikipedia.org/wiki/International_Color_Consortium) to use on the image; the set of data about color characteristics for both input and output of a particular device or standard.
Select `Color Space Browser` to learn more
Content (controls what content will appear)
- set document name
- default number of layers can be adjusted
- opacity can be tweaked

Create From Clipboard
---------------------
Select a subset of an image
Select `Create from Clipboard`
- Document size will be auto fitted to the clipboard contents
- Alert will show up if ICC is absent
  - Select ICC profile (as web)
- Image is placed on layer 1.
- Image is still in system memory.
- Pasting will make a new layer with the clipboard contents.
Native file format is `.kra`; always save projects in this format

Common file formats
-------------------
TIFF
- supports layers
- used to transfer files between Krita and other digital imaging software
PSD
- File format used by Adobe PhotoShop
- not all features in Krita are stored in this format
### For the internet
JPG: No alpha (i.e. transparency)
PNG: Alpha is present
WEBP: Implements modern animation
GIF: Implements antiquated animation

UI Basics
=========
In order to reset all custom configurations:
- `Settings`
- `Reset All Settings`
-  `Workspace` (dropdown list in the upper-right)
- select default preset in order to tare
The top-bar menu is common to all software
The area below the top-bar menu is the `toolbar`. Features include:
- new
- open
- save
- undo
- redo
- color settings
- brush settings
Panel on left is known as the `toolbox`; it is a placeholder for Krita tools.
Area in center is known as the `canvas`
- i.e. the document we've got open
- i.e. the buffer for our image
One can navigate between documents using the tabs
On the bottom of the GUI is the `status bar`
1. Select brush.
2. View name of active brush preset.
3. View color model info here.
4. View bits-per-channel.
5. View ICC profile size of document.
6. View amount of memory in use.
7. Access controls of canvas rotation.
8. Zoom in and out
On the right-hand side, we have the `Dockers`. These can consist of but are not limited to:
- `Advanced Color Selector`
- `Tool Options`
- `Layers`
- `Brush Presets`
To see the list of `Dockers`.
1. `Settings`
2. `Dockers`
3. `List of Dockers`
> `Toolbox` on left is a `Docker` also.
GUI has two modes:
- Canvas-Only: For if you don't want to be distracted by ... (==<Tab>: Switch to `Canvas-Only` Mode==)
- Full-Screen: Hide title bar and task-bar of OS (==<Ctrl-Shift-f>: Switch to `Full-Screen` Mode==)
> Access either via: `View` > {Canvas-Only,Full-Screen}
UI can be customized.
Suggestion: Do *not* hide the `Toolbar`, because it's got too many important settings.
One should hide specific components of the `Toolbar` as necessary.
1. `Settings`
2. `Toolbars Shown`
3. (desired component)
One can click-drag the `Toolbox` to make it float.
- Preferable by instructor to have it on top with `Toolbar`.
To hide the status bar:
1. `View`
2. `Show Status Bar`
If only one `Docker` is present, press 'float-docker' button until detached.
Put `ColorSelector` in with `Tool Options`
`Brush Preset` Docker isn't used often, so it should be stashed.

\*EXERCISE\*
------------
> Modify layout to mirror that of instructor.
### Instructor's Layout
|                | Toolbar |        |
| -------------- |-------- | ------ |
|                | Toolbox |        |
| -------------- |-------- | ------ |
| Palette        | Canvas  | Layers |
| Color Selector |         |        |
| Tool Options   |         |        |
To save as a workspace:
1. Upper-right corner: `Workspace`
2. Name workspace, then hit `Save`

Advanced UI settings
====================
In order to toggle `Instant Preview Mode`:
1. `View`
2. `Instant Preview Mode`
`Instant Preview Mode`:
- makes brushes feel more responsive
- produces low-resolution strokes on canvas
- actual brush-stroke process follows gradually on backend
Not ideal for performance, but it'll make brushing feel faster and smoother.
The `Color Selector`
- currently uses a triangular shape
- others prefer the rectangular display
- toggle via icon
Alternatively:
1. `Settings`
2. `Configure Krita`
`Color History`
- last used colors will be displayed in a cascading v-bar
- instructor's preference: h-alignment
Configure `Pop-Up Palette`
1. `Settings`
2. `Configure Krita`
3. `Pop-Up Palette`
Instructor's preference:
- palette size: 380
- selector shape: wide gamut selector
Increase visibility of mouse cursor:
1. `Settings`
2. `Configure Krita`
3. `General`
Cursor
- small circle indicator
- `cursor-shape = small circle`
Window
- black semi-transparent messages are shown on upper-left of canvas.
- Set `Show on-canvas pop-up message: false` to prevent this.
`Canvas-Only Mode`
- see document tab at top area
- canvas won't completely fill screen
Make Krita show multiple documents in multiple windows
- `Multiple Document Mode: Multiple Windows`
Not ideal to use scrollbars; hide!
1. `Display`
2. `Miscellaneous`
3. `Hide Canvas Scrollbars`
Disable `preview-upon-hover`
1. `Settings`
2. `Configure Krita`
3. `Display`
4. `Miscellaneous`
5. `Hide layer thumbnails`
Shade Selector (three bars)
- function is to shift active color in a certain direction
- set own mode for each slider
- hide by clicking on dropdown 'Type' -> Do not Show
\*EXERCISE\*
------------
> Modify UI to mirror that of instructor.

Main Navigation Methods
=======================
Navigation on the canvas entails:
- panning the canvas
- zooming in
- zooming out
- rotating the canvas
Methods are provided to this end:
- mouse
- spacebar
- drawing tablet
- Pop-Up palette
- keyboard
- tools
- ~~scrollbars~~
- status bar
- touch gestures
Navigation does not change the image, just how one sees it.

\*EXERCISE\*
------------
Canvas navigation.
1. Open a non-blank image.
2. Navigate via mouse with scroll-wheel.
    1. Press middle-button, then translate mouse about.
    2. Scroll the mouse wheel to zoom in or out.
    3. Rotate by holding <Shift>, then click-dragging with the middle button.
3. Navigate via spacebar methods.
    1. Press and hold space bar, then click-drag with left mouse button.
    2. Zoom in and out: Hold space bar and <Ctrl> together, then drag mouse back and forth
    3. Rotate: Hold spacebar and shift, then click-drag with left mouse button.
    4. Number pad:
        1. Num5: Reset rotation.
        2. Num1: Reset zoom to 100%.
        3. Num2: Zoom canvas s.t. entire image is visible in canvas.
        4. Num3: Autofit image width to canvas width.
4. Navigate via drawing tablet; identical to methods for either mouse or spacebar.
    1. See 'Mouse' section and figure it out.
5. Navigate via Pop-Up Palette.
    1. Must be using freehand brush tool.
    2. Right-click: Summon Pop-Up Palette.
    3. Drag slider as desired.
    4. Rotate via white circle. 
    5. Use (alt: ==<M>: Mirror==) shortcut to mirror view. Note: Mirroring is helpful in figuring out what's up with a drawing.
*First three navigational methods are most important to learn.*
Should the first three fail, be ready to use fallbacks.
6. Navigate via keyboard.
    1. Num5: Reset rotation.
    2. Num1: Reset zoom level to 100%.
    3. Num2: See whole image.
    4. Num3: Fit image width to canvas width.
    5. Num{4,6}: Counterclockwise and clockwise respectively.
    6. Ctrl-{[,]}: Counterclockwise and clockwise respectively.
    7. {=,-}: Zoom in and out.
7. Navigate via `Tools`.
    1. Tools: `Zoom Tool`, `Pan Tool`.
    2. Pan Tool: \<LeftButton\> and drag.
    3. Zoom Tool: \<LeftButton\> to zoom in, \<Ctrl-LeftButton\> to zoom out.
    4. One can focus zoom by creating selection box.
8. Navigate via scrollbar (SKIP!).
9. Navigate via status bar (SKIP!).
    1. `View`
    2. `Show Status Bar`
    3. Toggle little black circle next to dimensions.
    4. Directly input degree value.
10. Navigate via touch gestures. (Not all tablets are equipped with touch functionality).
    1. Enable touch rotation.
        1. Settings
        2. Configure Krita
        3. General
        4. Tools
        5. Enable touch rotation
    2. Think smartphone gestures for zooming.
    3. Pan with three fingers.
    4. Rotate with two fingers.

Managing brushes
================
==\<b: Activate Free-Brush\>==
==\<F6: Select Brush-Preset\>==
Always turn off `Brush Smoothing` when not making line-art or outlines.
Three methods exist for managing brush presets:
1. Search / Filter
2. Tag
3. Pop-Up Palette
Tags
: Defined named groups under which a collection of brush presets fall. Deleting a tag will not delete the brush presets associated with it, just the association.

Size, opacity and eraser
========================
Eraser mode: ==\<E: Toggle eraser mode\>==
Increase strength via opacity progress bar
Five methods for changing brush size exist:
1. toolbar
2. popup
3. keyboard
4. mouse
5. docker
### Toolbar
Drag the Progress Bar
### Keyboard
\[\]: For either reducing or increasing brush size
Shift-Click-Drag: Reduce or increase
### Docker.
Quick Settings Docker: Offers selection of preset sizes
Opacity: How opaque a brush is
IO: Toggle opacity

Flow and dirty preset
=====================
These are Brush Presets.
This section entails the basic size and shape of each of these two presets.
Flow
----
? Click on downward-facing chevrons
Can be used with opacity, but only one should be used.
==\<F5: Brush Editor\>==
Each brush stroke comprises a series of 'dabs'
Flow
: Determines the level of transparency per dab, rather than per brush stroke
Dirty preset
------------
A term used to describe a brush preset that deviates from the default
Pencil icon indicates cleanliness of brush preset

Color selecting basics
======================
==\<X: Toggle between the FG and BG colors\>==
Overview
1. Advanced color selector
1. FG and BG colors
1. Color History
1. Color List
1. Pop-Up Palette
1. Color Offsetting
1. Sampler Tool
1. Color Palette

Offsetting and sampling color
=============================
Making a color brighter or dimmer
Drag the circle down...
Use keyboard also
Toggle via shortcut ==\<K: Make the thing darker\>==
Lay down base color
Press K
Shade!
Press ==\<L: make thing lighter\>==
Shine!
Default step-intervals are usually sufficient.
If they aren't:
1. Settings
2. Color Selector Settings
3. Docker
4. Color Hotkeys
5. (figure out rest)
To make shortcuts for other settings:
1. Settings
2. Keyboard Shortcuts
3. search: 'make brush color'
Sampling color
--------------
==\<P: Activate color sampler\>==
==\<Ctrl: Activate color sampler while in Brush mode\>==

Color Palette
=============
Container where you store and organize colors
history and list are temporary repos for color.
Color palette configuration is more permanent
Each square representing a color is called a `swatch`
One can make a new palette by clicking on the rubix square in the 'Palette' Docker
One can make groups within the Palette

Resource folder
===============
Folder where various data used by Krita is stored
Where to locate it... It's OS dependent
$HOME/.local/share/krita/
1. Settings
2. Manage Resources
3. Open Resource Folder

Line tool
=========
Line tool detects pressure applied to stylus
==\<Shift-Drag: Open line tool\>==
==\<Alt: Mid-Drag, move line about\>==

Rectangle and ellipse tool
==========================
The two are similar, some would say
To make a perfect ellipse, set ratio=1, then lock it.
Alternatively, hold ==\<Shift while dragging\>==; ensure ratio=1
Hold ==\<Alt while dragging: Move shape elsewhere\>==
Hold ==\<Ctrl while dragging: Fix center of transformation\>==

Polygon and Polyline
====================
The two tools are similar, apparently
Exit polygon creation via one of three methods
- Shift-click
- Enter
- Double-click

Mirror and Multibrush
=====================
Located on upper-right of Toolbar
They look like paper airplanes
These tools will create additional strokes when you draw.
Sometimes they'll reflect yours on the other side of some virtual axis (mirror)
Multibrush
----------
Change number of brushes via Tool Options
Change type of reflection via:
1. Tool Options
2. Type
Translate to draw grass easily

Selection basics
================
Image selection is needed to limit editing area. e.g.
- transformations
- filters
Rectangular
-----------
==\<Ctrl-R: Rectangular selection\>==
To fill a selection with color: ==\<Shift-Backspace\>==
Hybrid selection:
1. Hold \<Ctrl\>
2. Release mouse button
3. Click-release for polygonal border

Intro to Layers
===============
Layers are images we can stack atop each other in a document.
Background layer included in every new document by default.
Recommended to draw background in bg-layer
Draw features closer to front in other layers
Layer properties: \<F3\>
==\<Del: Change color of bg-layer to white\>==

Basic layer properties
======================
Visible
Locked
Inherit Alpha
- prereq: Layer grouping.
Alpha Locked
- Function is to lock the layer.
- Only alpha channel gets locked, while others are not.
- makes sure that one can draw only existing pixels of an alpha-locked layer.
- useful for shading and shining.
One can also change the color of the layers

Group layer
===========
Type of layer that contains other layers
i.e. directory in a file-system
Put layers in group
- Select all layers to be grouped
- \<Ctrl+G: Group layer\>
Clicking on arrows also ungroups layers
So does \<Ctrl+Alt+G\>
Nested groups
To group layers:
1. Select
2. ==\<Ctrl+Alt+G\>==

Inherit Alpha
=============
Similar to `alpha lock`
Locks condition of alpha layer
Contrast:
- `Alpha lock`: Uses alpha data in layer itself
- `Inherit alpha`: uses alpha condition from all layers below
Select `inherit alpha` on layer whose canvas is to be constrained by layers below
Wrap in group layers to restrict the `constraining layers` to just the ones in the group layer

Image Composition Practice
==========================
\*EXERCISE\*
------------
**Creating the landscape illustration.**
Using paint layers, group layer, and 'inherit alpha' feature.
alt='rock jutting out of the grass surrounded by a blue featureless landscape surrounded by fog'
1. Creating the sky.
    1. Start with one layer: the background layer.
    1. Unlock this layer.
    1. Add blue-sky to this background layer.
    1. Once color is selected, press \<Shift-Backspace\> to fill the canvas.
    1. Create paint layer by pressing \<Insert\>.
    1. Select darker shade of blue.
    1. Aim for texture-type brush (e.g. 'Texture Random Particles'@'Krita_4_Default_Resources.bundle')
    1. Create circular brush strokes around the center of the canvas, in the shape of a cloud.
    1. Offset color to a lighter version by pressing \<L\>.
    1. Draw brush strokes in the center area of previous strokes.
1. Creating the soil.
    1. Choose Brush Preset for the ground (e.g. 'Stamp Floor', right after 'stamp bubble')
    1. Choose a brown color.
    1. Set opacity to around 50%.
    1. Draw brush strokes across lower half of circle (create new layer?).
1. Creating the grass.
    1. Choose Brush Preset for grass (e.g. 'Stamp Grass Patch', two after 'Stamp Floor')
    1. Choose green color.
    1. Make brush strokes over ground.
    1. If color is too uniform, put in variations of color.
    1. Opt for one that isn't too dark.
    1. Once finished, opt for darker shade of green.
    1. Set opacity to around 70%.
    1. Note: Light source in top-left area.
    1. Dark brushes are for shadow of rock.
    1. Use darker colors for color variations.
    1. Note: Color is fixed, while saturation and hue are not.
1. Drawing the rock.
    1. Insert new layer.
    1. Use polygonal selection tool.
    1. Make shape of rock according to liking.
    1. Make base circular.
    1. Select grey color, a bit blue to reflect the sky around it.
    1. \<Shift-Backspace\>: Fill the specified region.
    1. \<Ctrl-Shift-A\>: Clear the selection.
    1. Sculpt it if unsatisfied: Make selection on desired area, then press delete.
    1. Add more shapes via \<Shift-Backspace\>.
    1. Polish as needed.
    1. Make bottom area seem like it's sitting on grass.
    1. Activate Brush tool \<B\>.
    1. Check that Brush Preset for 'stamp grass patch' is still active.
    1. Set opacity to 100%.
    1. Activate eraser mode \<E\>.
    1. Swap drawing pen with mouse; alternatively draw really hard, or disable pressure center in opacity parameters.
    1. Return to stylus.
1. Shading and shining.
    1. Create new layer for shading.
    1. Check 'inherit alpha' option for new layer.
    1. Toggle 'inherit alpha' for current layer.
    1. Group top two layers.
    1. Select texture-big preset.
    1. Toggle brush size as needed to about 195.
    1. Select darker color than current \<K\>.
    1. Commence shading.
    1. Ease pressure around center area.
    1. Make edge darker; press \<K\>, then brush.
    1. Highlight color on top-left \<L\>.
1. Revise: Edit shape of rock again.
    1. Eraser mode.
    1. Select rock-layer.
    1. Erase as desired, to smooth out edges.

Move tool
=========
Move layers or images inside selection regions.
\<T: Activate `Move` tool\>.
Select layer, then click-drag to change position.
Moving multiple layers is also possible.
Move Modes
----------
### Move layer with content.
Toggle in `Tool Options`.
Krita auto-detects pixel under cursor and allows user to move the layer to which that pixel belongs.
### Move the whole group
Should only be used for a layer inside a group.
Move all layers inside group.
Every layer in a Krita document is implicitly inside a group layer.
### Move with selction.
Create selection.
Press \<T\>
Select `Move current layer` (i.e. default)
Only selected pixels are moved.
==\<Ctrl-Shift-A\> to clear selection==
### Moving via arrow keys
Toggle step-size via `Move Shortcut` in `Tool Options`.
Select layer.
Press arrow-keys.
\<Shift-Drag\>: Constrain direction to strictly cardinal directions
Must hold down \<Shift\> while translating selected area, even though mode is `Move current layer`

Opacity and Blending Modes
==========================
Opacity and blending modes
- Accessible from the 'layers' docker.
- drop-down: blending mode
- progress-bar: opacity
Both also accessible from 'layer properties' window.
#### Opacity
layer opacity != brush opacity
layer opacity controls how opaque a layer is
both properties are contextual (i.e. display values of active layer)
### Blending Modes
Mathematical algorithm that control how colors in a certain layer mix with colors from the layers below.
By default, blending mode is set to normal
Krita supports many blending modes
Most frequently used:
- normal
- mutiply
- screen
- overlay
- color dodge
- lighten
#### Multiply
Moving layer over another darkens it
White will appear completely transparent
Black will appear otherwise.
Ideal for adding shadows to a drawing
#### Screen
Opposite of multiply
Moving layer over another brigtens it.
White becomes opaque.
Black becomes transparent.
Adds lighter colors or highlights areas.
#### Overlay
Combines effects of Multiply and Screen
Dark colors have multiply effect, making colors below darker.
Bright colors have screen effect, brightening colors (spotlighting them)
Perfectly 50% grey colors will be transparent
#### Lighten
Colors beneath will seem brighter
Of the same family with 'Screen' mode
Suitable for:
- fog
- mist
- air particles
#### Color dodge
Stronger than Screen
Used for visual light effects
- lasers
- lightning
- lens flares
### Brush blending modes
Blending modes are available on brushes also
To access these modes, activate brush tool or any other tools based on it
*Note: Destructive feature*
Must use same layer as target
Make sure layer with star image is active

--------------------------------
\* EXERCISE: AXE ILLUSTRATION \*
--------------------------------

Drawing a Sketch
================
Recommended resolution: (1920, 1080)
- said to be HD-size
Larger image is okay also
May need to adjust pixel settings (e.g. brush size)
Fill the background with a color
Create a different layer to put the sketch on
Make sure tags are enabled tag in the Pop-Up Palette
Select `Pencil-4-Soft` Brush Preset
- Thumbnail looks like pencil
*Avoid black for sketch!*
- later the outline will be drawn in black
- try to select another color, like brown
Make axe have four elements
- metal 
- wood
- cloth or fabric
- crystal or gem thing
blah all on one fucking layer whoopdeedoo
after basic shape is done
add details
tidy up and determine which parts of fabri ar top and nedr
put in more details like wood etchings
draw in sharp part of axe
in center insert gemstone
put some bloody carvinfd fa bout gemstone
put in some element designs and junk
no references used
everyhting came from imgaf df s
always do research and use refimages in reallife stuff
laerre lesson coer how to do the tskf kls s  
save file in the thin fkd 

Brush smoothing
===============
sometimes needed to smal fds smoth lone or outline
this is called inking
lots of tools and features fo t spurpose
basic, weighted, stabilizer, dynbrush tool, assistant tool, vector otols
must select feebrsh tool
basic
-----
mode has no parameters
basic useful only for budget drawing tablets and older such blah blah blah
most drawing tablets already have a basic smoothing feature of brush etc
brush smoothing > (none, basic, ...)
\exists basic \implies tablet has one already
weighted smoothing
------------------
- has got paremeters and unk
distance, stroke ending, mooth pressure, scale fl dfdistance
distance is not in pixels
it is the number oevre ts ki krita programming terms
storke ending paramter
i sfor how aggressively krita draws a line to curser lst locaton
increasing the thing causes the thing to further distance the blah blah blah
smooth pressure
will change out changes in pen pressure autom klsfkl r
diff in brsu fdsize opacity along stroekk
more gradual natural
sclabdf distance
corresponds to distance value listed above
stabilizer
----------
shut the fucking hell up
ajdfs brush troke ed of t g
five prameers
turne of f delay t osee difference
sample count
value high means more lag
delay active means hera wlays agap between blah bah
finish line means not nti llast cursoe locarkjl
sats sensor
dynamic brush tool
------------------
brush tsmoothing technique
separate tool
looking like aorbit and shit
mass, drag
physcdal imsulation
heavy pendulum
focus
heavy mass mbwa nsdf slow

Drawing a Sketch
================
Document used is at full HD size (1920, 1080).
Larger dimensions can be used if desired.
- But as one progresses, the pixel settings may need to be adjusted to accommodate for the extra size. 
Using white for the illustration will lead one to choose colors that are too bright for the illustration.
> Use \<Shift-Backspace\> to fill a layer.
Use a separate layer for the sketch; rename it to `sketch`.
Sketch
------
Select **Pencil-4-Soft** Brush Preset (resembles a mechanical pencil)
For the sketch, avoid using black as the fg-color.
It will be hard to tell if the sketch lines are also in black.
Try to make the axe have four different elements:
- A metal element
- A wooden element
- A cloth or fabric element
- A gemstone or crystal-like element
*Instructor took fewer than six minutes to sketch.*
After basic shape of head and handle is complete, zoom in and add details.
- Bandages atop and below the axe-head, along the axe-head.
- Decide which parts of the fabric are on top, and which are under.
- Put in the sharp part (i.e. edge) of the axe-head.
- Put a gemstone in the axe-head.
- Surround it with carvings related to natural elements.
*Instructor used no references.*
For real projects, one should research first and use _reference images_.

Brush Smoothing
===============
Sometimes, we must draw smooth lines or outlines when making line-art.
This is known also as 'inking'.
Krita has Freebrush Tool Options to aid with inking.
- basic
- weighted
- stabilizer
Krita also has specialized Tools to aid with inking.
- Dynamic-Brush Tool
- Assistant Tool
- vector tools
Basic Brush Smoothing
---------------------
Activate Freehand Brush tool.
In the Tool Options docker, there will be a dropdown for `Brush Smoothing`.
This feature should always be turned off (i.e. set to 'None') whenever you're not inking or making line-art.
The most basic type of brush-smoothing is the 'basic' mode.
This mode is designed for budget drawing tablets.
If there is no difference, then the drawing tablet's already got a basic brush smoothing feature.
Weighted Brush Smoothing
------------------------
Provides stronger effect than that of Basic Brush Smoothing
Many parameters are provided:
### Distance
Sets how far brush tip is from actual mouse position.
Is measured in number of 'events', as defined by Krita.
### Stroke Ending
Determines how aggressively a line is drawn to the cursor's last position.
If the value is higher, then the stroke will be farther from the cursor's last position.
Ideal to set to 0.5 for all occasions, per instructor's advice.
### Smooth Pressure
Instructor's recommendation to have this enabled always.
This evens out the changes in pen pressure as you stroke automatically.
Difference in brush stroke and opacity will be more gradual, and look more natural.
### Scalable Distance
Corresponds to `Distance` value above.
Makes `Distance` value takes into account current zoom-value.
Instructor's recommendation: Have this on
Stabilizer
----------
Brush stroke can be adjusted to end up at cursor position.
### Sample Count
Works similarly to `Distance` in weighted brush mode.
If the value is low, the brush strokes will be closer to the cursor.
If the value is high...
No matter how much the brush stroke lags, the brush strokes will eventually follow and end in cursor location, provided that delay option is on.
### Delay
The value determines distance from cursor to brush stroke.
### Finish line
Similar to stroke ending found in weighted mode.
Turning this off will make it so that the brush-stroke will terminate at the last cursor location.
### Stabilize
Same as in weighted mode
Dynamic Brush Tool
------------------
This is a tool for smooth line artworks.
Click on icon that looks like part of ellipse with one of its foci.
Functions in accordance with following physics analogy:
> Pulling on a pendulum with a bit of string or rubber
### Mass
Determines the weight of the pendulum being pulled
The heavier it is, the more slowly it will move.
Recommended value: 0.02
### Drag
Determines how elastic the string or rubber is.
The smaller this is, the faster the pendulum will move.

Assistant Tool Basics
=====================
A collection of the different type of rulers we find in the real world.
Icon looks like crosshairs.
After that, the user must select the desired assistant to create.
Choose via the Tool Options docker.
To hide assistants:
1. View
1. Show Painting Assistants
Ruler
-----
Used in order to make straight lines.
Click to define one point, then click again to define the second.
Snap to Assistants while freebrushing.
Infinite Ruler
--------------
Similar to regular ruler
Difference is that when using the freebrush tool, the line is going to be extended infinitely.
Parallel Ruler
--------------
Limit to assistant
When using `Snap to Assistants`, all other assistants are ignored.

Advanced Assistant Tool
=======================
Three types.
1. Perspective
1. Circle
1. Spline
Perspective effects. Three assistants can help with this:
- Two-point perspective
- Perspective
- Vanishing point
Vanishing Point
---------------
(skipped)
Perspective
-----------
Must define four points that make up the perspective plane
Two-point perspective
---------------------
This type supports the 'Limit assistant to area' option.
To create:
1. Click thrice on the canvas
1. Select two points to determine vanishing point / horizontal line.
1. Select the last point: this will determine the center line.
1. To make the second point(?) perfectly straight, hold \<Shift\>.
1. Lastly determine where the center line is.
Once done, one can adjust the shape of the assistant by playing with the vertices.
Dragging the horizon point will create a new assistant; it's really psychedelic.
With the freebrush tool one can create straight vertical lines with great ease.
One can draw lines that lead to the first vanishing point, and lines that lead to the second.
Ellipse / Concentric Ellipse
----------------------------
These help you draw ellipses or circles.
1. Click thrice on the canvas.
1. Define the base diameter by clicking once, then again.
1. Define the second diameter by clicking once more.
*For a perfect circle, hold \<Shift\> while selecting point three.*
What if one needs to draw multiple circles centered on a single point?
> Use Concentric Ellipse Tool! It is identical to the method for the Ellipse Tool. The difference: when you use the brush tool, one can draw multiple circles around the same point provided you do it in one brush stroke.
Spline
------
The one that's most often relied on, the instructor purports.
Useful for drawing curves.
Must define four points first.
1. First two points specify end-points of curve.
1. Third and fourth points control the curvature. Same as how Bezier handles work in other graphics programs.
Note: Spline can function as a way to practice vector editing.
If the vertices are blocked out by the box, remember the control boxes are zoom-independent.
- i.e. zooming in and out will not change their size, and thus the vertices can be retrieved.
Color and External File
-----------------------
The default color of assistants is light grey.
This can be problematic if background is light grey also.
Choose a color via:
1. 'Tool Options'
1. 'Global Color'
Opacity can be changed also with the progress-bar widget.
Note: Assistants are not bound to a specific layer.
How to save the assistants data into an external file: Press the floppy-disk button.
How to load assistants data: via the manila-folder button (for importing)

Drawing the Outline
===================
Previously we have made the sketch.
After learning about brush smoothing and assistant tools, we can now ink properly.
The Handle
----------
Create a new layer; call it 'outline'.
Use `Basic-5-Size` brush preset that was put on Pop-up Palette.
Default brush size is larger compared to sketch lines.
One can reduce size of brush via slider above.
One can also hold down \<Shift\> and click-drag to left or right.
Make brush size at least two to three times as large as sketch lines.
15px suffices for instructor.
Set 'brush smoothing' to 'weighted'.
Set 'distance' to 75.
Set 'stroke ending' to 0.50.
Smooth pressure and scalable distance are on.
Use black for foreground color.
Follow previous sketch and trace over.
Start from the top of the pole and continue down to below the axe-head.
Continue down the length of the pole.
Hide the sketch part, then inspect the outline.
Inspect for any holes, then patch as necessary.
The Axe-Head
------------
Should use 'Assistant' and 'Mirror' tools
Brush strokes must be mirrored vertically (i.e. around an x-axis).
Activate 'Mirror Tool', then set the axis of reflection s.t. it is perpendicular to the pole and intersects the jewel part also.
For the curved lines, use the `Spline Assistant` Tool.
First, note the assistant color and bg-color are too similar.
Change assistant color to something like 'red'.
Reduce the opacity also, for subtelty.
Create curved line on top.
Select end-points.
Determine control points for curvature.
If still this does not prove sufficient, create more instances of the `Spline Assistant`.
e.g. along inner curve of axe edge, along outer curve, and the back of it also.
Press \<B\> to activate the freebrush tool.
Set 'Snap to Assistants' option.
- Use alongside 'brush smoothing' option also.
- Must snap to multiple assistants at once.
- Turn off 'snap single'.
Draw lines along assistants in-place.
Don't fret if the brushstroke jumps; we can zoom in and fix it later.
Review lines again and repair them as needed.
To this end one may need to switch off the 'snap to assistants' option and then hide all assistants.
Evaluate work thus far.
Mend anything that ought to be mended.
e.g. Erase any mis-stroked ink.
One does not need assistants for the carvings; just trace along the existing sketch.
Note: Mirror-mode must still be in effect.
Draw circles in the middle for the gemstone, and for the surrounding carvings also.
Show all assistants again.
Delete all existing assistants.
Concentric ellipse assistant time!
Hold \<Shift\> for a perfect circle.
Assistant must be centered on mirror-line.
Lines can be smoothed out also.
Any strokes can be erased also.
e.g. Finalizing here.

Basic Coloring Techniques
=========================
Coloring methods include:
Basic
-----
Manual Brush Strokes
Fill Tool
Shapes Fill (Brush Preset)
Polygon (Tool)
Advanced
--------
Contiguous Selection (Tool)
Polygon Selection (Tool)
Freehand Selection (Tool)
Colorize Mask (most advanced)
Starting
--------
Must create non-destructive workflow.
Want colors on separate layer.
Colors can't mix in with either outline or sketch.
Create new paint-layer beneath outline; rename to 'color'.
### Manual Brush Stroke
Use regular brush tool.
Use brush preset with hard border (e.g. Basic-5-Size)
Choose wood color.
Adjust brush size by holding down \<Shift\> and click-drag to left to make it smaller.
Use no 'brush smoothing' this time.
Draw directly on canvas to add wood color to correct area.
Activate eraser-mode to remove excess strokes, then erase areas that were colored by mistake.
Set brush size to be smaller for a smaller area.
This method requires much hard work and is error-prone also.
### Fill Tool
Choose the icon that resembles a paint-bucket.
Layer with line artwork must be selected.
Drawbacks:
- area must be either closed or already filled for it to work
- this method is **destructive**; it will break the existing pixels
- doesn't look good on semitransparent outlines or color areas.
Note: Semi-transparent pixels aren't completely filled in.
To circumvent this:
1. Keep using 'color' layer below.
1. `Tool Options`
1. `Sample`
1. `All Layers`
Note: Krita considers outline layer as though it exists in same layer as color layer
To cover more semi-transparent pixels, increase 'threshold' value
- This will cause Krita to be more tolerant of differences in the color of its target.
Recommended: ~32
One can also force the resulting color area to be wider or narrower.
Use negative value to shrink the resulting area also.
'Feathering radius' parameter is useful to make borders of color area degraded towards transparent.
e.g. Setting the parameter to 10px and clicking on the canvas will make it look like someone used a can of spray-paint.
### Shapes Fill brush preset
The icon looks like a chemical flask.
Click-drag on canvas to define closed area.
Similar to usage of freehand selection tool.
Area will be filled with foreground color.
Note: This preset has an eraser-mode, like all the others
### Polygon Tool
Similar to `Shapes Fill`
Check notes: This was covered already.
Change 'fill' parameter to 'foreground color'
Set 'outline' to 'None'.
Click and release to define the area to be filled.
Terminate selection either by selecting start-point, double-clicking, or holding down \<Shift\> then clicking.

TODO: Refine and revise

Coloring with Selection
=======================
Now we discuss these lot:
Advanced
--------
Contiguous Selection (Tool)
Polygon Selection (Tool)
Freehand Selection (Tool)
~~Colorize Mask (most advanced)~~
The most basic technique entails creating a selection then filling it with color.
Polygon Selection
-----------------
Select polygonal selection tool
Make selection on canvas
Select desired color.
Press \<Shift-Backspace\> to fill.
Press \<Backspace\> to fill with bakcground-color.
Open 'Edit' menu in top menu-bar in case you forget any shortcuts.
### The Uniqueness of the Selection Method
We can combine it with the brush tool
The resulting color can be varied consequently.
Note: Not just a single uniform color as with the previous method.
e.g.
Create selection near bottom of pole of axe
Right-click, then select Airbrush-Soft brush preset
Try to make the brushes prefer a certain side.
One can add shade or highlight to an image this way.
One can also fill colors with a hue variation.
e.g. Creating a flame.
Freeform Selection Tool
Draw a flame.
Select yellow color.
Shift-Backspace to fill.
Use the Freebrush tool with the Airbrush Preset.
Choose an orange color.
Make brush strokes that prefer the boundaries of the flame.
Process can be continued with red.
Clear selection once done.
To further refine the drawing, use the Brush Preset we've prepared before: blender-smear. ???
Mix and push pixels around until you're happy with the result.
Contiguous Selection Tool
-------------------------
Used in order to make a selection based on the existing color chosen.
Icon looks like a sparkly wand
Click on a point on the canvas
Krita will analyze the color at that point, then try to select the surrounding area whose color is similar to the selected color.
Control the level of chromatic tolerance via 'fuzziness' parameter.
The higher the value, the more tolerant Krita will be (i.e. direct relation); and so the bigger the resulting selection will be.
'grow/shrink selection': ...Should this not be self-explanatory? This manually resizes the currently selected area. Positive values expand, negative values do the other thing to the selection.
'feathering' parameter... This makes the edges of the selection region more subtle / transparent.
These options are similar to those in the fill tool
Whereas the latter fills the thing in instantly, the continguous selection tool allows you to manually brush in the fillings.
Drawing silhouettes can be done via this tool also.
1. Clean the color layer by pressing the \<Del\> key.
1. Make sure the 'contiguous selection tool' is still active.
1. Set the fuzziness to 8.
1. Use the 'all layers' mode, accessible via Tool Options.
1. Must be in the outline layer for this to work.
1. Click on empty area => whole canvas is selected save for axe.
1. To fix selections that fall slightly outside the outline, increase the 'grow-shrink value' a bit (e.g. +2).
1. Border of selection region is much deeper into the outline.
1. Select 'color' layer once again.
1. Invert the selection via ==\<Ctrl-Shift-i\>==. Select > Invert Selection.
1. Press \<Shift-Backspace\>.
1. Use 'alpha lock' to lock the transparency area.
1. Use brush tool with a solid brush preset.
1. Dope with colors as needed.
1. Combine this technique with others as needed.

Colorize Mask
=============
What is a 'mask'?
A mask is additional information or a set of features that can be affixed to a layer.
1. Select 'outline' layer.
1. Click on small arrow icon next to plus button near button, then select the Colorize Mask from the pop-up menu. (third from bottom)
*Now a mask appears beneath the layer it's attached to, sort of like the latter's a group layer. On its own, it cannot exist.*
1. Create colorize mask also by right-clicking...
1. The icons on the right are different from icons on a regular layer.
One can also add in a colorize mask via the tool itself. (colorize mask editing tool)
click on layer that hasn't got a colorize mask yet.
krita will add the thing to that layer automatically.
If you're on a colorize mask or a layer with a colorize mask already, the button will have no effect.
This mode makes the ink look blurry.
To exit / enter the edit-mode: check 'edit key strokes' in the Tool Options.
Alternatively press the pencil icon in the colorize mask in the layers docker.
Basic technique
---------------
Colorize mask works similar to the fill tool
must be applied to an outline image.
All color areas should be enclosed without leaks.
Differentiating color mask from the fill tool is that it uses a more advanced algorithm to detect outlines
As a result the result is very clean
Another difference is that the colorize mask is non-destructive
The color can always be revised as needed
Before you start coloring with a 'colorize mask', use a solid bruhs preset and in normal condition ; not eraser mode.
Colorize mask will use the brush tool and its settings to register the colors.
Make sure the 'colorize mask editing tool' is active
Editing mode must be active also.
Select color.
Set brush size to be smaller as necesary.
Add some strokes to desired area, uncaring for the outlines.
This is much easier than the fill tool, where you have to click on each area one by one.
Choose a yellow color for the fabric.
The background should also be colored even if you plan on making it transparent later on.
Right-most icon in layer-row of colorize mask commences colorization
Revising the Colors
-------------------
Must return to 'colorize mask' editing mode.
Add wood color for bottom bit.
Mark it with color.
Remove blue color and replace with purple.
- Use eraser mode.
- Erase strokes manually.
Note: lower-left.
- Here, the blue color is gone.
To remove all brush strokes of a specific color, select color directly in palette, then select 'remove' button (lower-right)
To replace with another color:
- Select color
- Reapply the stroke
Let Krita update the colors.
- Select 'Update' in Tool Options.
Convert to Paint-Layer
----------------------
This step is naecessary to adding shading or highlighting above the bae color but still below the outline layer.
Before conversion, if you wish to keep the original mask as a backup, duplicate the layer and mask by the usual means.
\<Ctrl-J\> = Duplicate layer. In this case, the colorize layer.
Right-click layer.
Select 'Convert' > 'Convert to Paint Layer'
Rename layer to 'Color'
Hide the colorize mask as it's no longer needd.
Click small arrow button on outline layer to keep things simple.

Shading
=======
Must add darker colors to image.
To revise any colors, recreate color with brush tool.
Filter feature... will be discussed more in-depth in Advanced course.
Focus only on how to darken via filter.
Use selection tool to limit area to be affected.
Use polygonal selection tool.
Select area to be changed.
Filter > Adjust > HSV Adjustment
Select 'lightness' parameter.
Lower value until you're satisfied with the brightness level of the color.
Clear selection.
Must make sure that color layer is safe from unwanted changes.
Lock the thing in the layer docker
To make bg look more interesting, add random brush strokes.
Select: A bristle-brush preset
Round value to 150px
For uniformity, use assistants tool
Parallel rules.
Make it tilt
Press B to make another parallel rule.
Make brush strokes in uniform direction
Do not use eraser mode.
Use the normal brush mode to erase.
Hold control, then click on color ti siphon.
Draw some more brush strokes of different colors to reduce excess blue.
Preparing the Layers
--------------------
Use 'delete all' to remove assistant.
Return to brush tool by pressing B.
Reuse paintbrush preset
Protect bg-layer from changes via layer-lock.
Create new layer above 'Color' layer.
Rename layer to 'shading'
To add shadows, use 'multiply' blending mode.
To add highlights, use 'screen'.
Constrain shading to just two layers
Lock 'alpha inheritance' for 'shading' layer. (middle)
Shading Colors
--------------
Begin with wooden top.
Hold down Ctrl-key and click on wooden area to siphon color
Press \<K\> to shift color to darker variant.
Make brush strokes to define shadow.
Same process for red color.
Make sure to shade the area around the axe-head carvings also.
Gemstone and Reflection
-----------------------
Shading the gem area is different from shading the rest.
Must use smooth color transition
Use airbrush preset, accordingly.
Make the thing smaller via express dial on tablet
Limit brush strokes inside circle area
Must create skeleton first.
Sample selection via 'all layer' option.
A shortcut to move layer's selection
Suppose the lading layer is already complex.
As such  one must sample from color layer.
Page-Up/Down to move the layer's selection up and down.
Make sure color layer is selected.
Use contiguous selection tool
Click in center area of circle.
Once we have that selection, press page-up until we're back in the shading layer.
Press B, then hold Ctrl and click to siphon the purple oclor
First we need a darker version of this purple color (K)
Draw circular strokes at top, left, and right
For bottom center, add lighter color.
Lighten bottom area somewhat.
Draw spiral via solid brush preset
Add a 'specular' color layer.
Add fake reflection on main metallic part of axe-head.

Highlighting
============
Make the shading colors in the handle darker.
Use filter techniques as in previous lesson.
Use airbrush preset
Adjust size until it's as big as the axe handle.
Lower opacity to around 50%
To make brush strokes darken existing colors, use multiply blending mode.
Apply brush to only pixels on the shading layer.
Turn on alpha lock icon. (rightmost)
Focus on top handle first.
Apply brush strokes.
Extreme highlighting style
--------------------------
Create new paint layer.
Enable alpha inheritance option
Rename layer to 'highlight'
Make selection
Aribrush preset
Reset blending mode to normal
Choose color of wood; brighten it.
Apply using 50% opacity.
Axe head highlight colors
-------------------------
Sample color
Lighten starting from center.
Adjust brush size via keyboard
Lighten carvings.
### Specular effect to gemstone
Use highlight layer
Use solid brush preset
Use white color.
Draw circles on top left of gem area
### Reflecting darker versoin of sheen
Put in lighter brush strokes near middle.
Backlight effect
----------------
Must simulate strong light source from behind object or background
Light should shine on darkest part of axe object.
One should use color that matches background.
Put in brush strokes that imply light is coming from behind.

Brush Presets Preparation
=========================
The Preparation Process
-----------------------
Various brush presets that will be used in the next paintin process.
Previously learnt about managing brush presets via tags.
Brush presets can be selected via tags.
Tags can be activated in the PUP.
Lower-left: Icon that looks like a tag.
Every artist has a preference, style, and workflow.
The instructor's way is not the only way.
By inspecting workflow and understanding the concepts, one will gain the means to develop one own's workflow.
Brush presets needed:
- sketching
- blocking
- shading
- smearing
- blurring
- detailing
- erasing
Need a brush for sketching:
Generally one does so with a pencil.
This is why the Pencil4Soft preset was invented.
Need a brush for blocking:
Quickly creating a solid area to add a base color or create a silhouette
This is why the Basic4Size brush preset exists.
Brush preset for shading and highlights:
Essentially a brush that can genrate color gradations quickly
Hence the Aribrush Preset
Smearing:
Process of pulling and mixing pixels
Blender smear brush preset exists for this purpose.
Blurring:
A brush hereby one can blend colors
This is why the blender blur exists
Detailing:
Usually, we want the pen pressure to control only a single aspect of the brush (eg size, opacity)
This brush will control both the size and opacity.
Basic5SizeOpacity exists to this end.
One of the more challenging bits.
This can speed up the process of detailing / fine-tuning.
Erasing:
Any brush preset can erase.
But also we sometimes we need a special preset with a fixed brush size.
Eraser circle preset exists for this purpose

Custom Shortcuts
================
Continuing preparations.
Focussing on creating custom shortcuts
Basic strategy
--------------
Most of these tools and features have shortcuts already.
To accelerate workflow, leverage custom shortcuts.
Place tools and commands most frequently used as close as possible to fingers.
Something something choose keys on left side of keyboard.
Creating Custom Shortcuts
-------------------------
Use the letter Q to clear the selection, because \<Ctrl-Shift-A\> is a pain in the hassle.
By default, the Q key is used for the multibrush tool.
To create a custom shortcut:
1. Settings
1. Configure Krita
1. Keyboard Shortcuts
1. Search: 'Deselect'
1. Configure 'Alternate' field.
1. 'Custom': \<Q\>
\<Z\>: Freehand selection tool.
Alternatively click on 'Shortcut' field.
Reset and Save
--------------
Use the damn buttons.

The Basics of Shading
=====================
Light Direction
---------------
Most light sources are above our heads.
We're used to seeing highlights in the upper area
We're used to seeing shadows in the lower area.
Artificial light sources are no different.
Dark on top && light on bottom => object is a hole
Position of highlight and shadow is critical, as it defines the orientation of the surface
If it is aligned towards the light source, the surface will be perceived as convex.
Conversely, the surface shall be seen as concave.
Shadow Color Value
------------------
Concerning the brighntess of a color and how it implies how deep a surface is.
Darker holes look deeper.
In truth, though holes with lower opacities look more shallow.
Shading Border Smoothness
-------------------------
Sharp versus smooth
Sharp shadows suggest a steep change in altitude
Smooth shadows imply a less steep change
Shading plays a role in defining the shape of objects in an illustration
Real world: Shape of object dettermines shape of shadow
Painting: Craft shadow to define the shape
Three things to note:
- light direction => concavity
- shadow color value => surface depth
- shadow border movements => steepness of slope
'Light study'
: Painting various forms of real-world objects and their shadows.

Shading Techniques
==================
Different methods for applying shading colors onto a base flat color.
Three methods at our disposal
- blurring
- airbrush
- tradigital
Use paint layer separate from bg layer
Use ellipse tool to draw circle.
Make selection first using elliptical selection tool.
Click-drag and hold down \<Shift\> s.t. perfect circle is formed.
Grey must be formed.
Choose from color palette
\<Shift-Backspace\> to fill selection.
Clear the selection.
\<Ctrl-J\> to duplicate layer of paint.
Rename all those three layers s.t. they're numerical.
Select 01 layer, then move it.
Hold down \<Shift\> to make sure it does not stray vertically.
Blurring
--------
Refine using 'blurring' brush preset
Must make sure color does not bleed.
Should activate 'alpha lock' of layer
Do same for two layers above.
Currently using Basic5Size brush preset
Make sure base color is on.
Press \<K\> to darken grey color.
Shade the thing.
Press \<K\> again to make the thing darker.
Use brush preset called 'blender blur' to smooth out colors.
Adjust brush size as needed.
If the size is small, gradation area formed will be small also.
To affect larger area, larger brush is needed.
Pressure of pen will also affect blurring effect.
Airbrush Method
---------------
Get aribrush preset
Reduce the brush until it's almost as big as circle.
Hold down \<Ctrl\> and choose base color
Press \<K\> twice s.t. color becomes dark
Use light brush strokes
Circular motions in bottom area.
Ensure alpha lock is active.
Once finished, add highlight colors.
Process is same as shading process.
Choose base color.
Press \<L\> twice.
Draw brush strokes.
Make brush strokes while gradually decreasing brush size.
Decrease brush size by pressing open bracket key.
Tradigital Method
-----------------
A lot of practice is needed for it.
We must imitate shading process of real world paintings.
==Tradigital method==
: Attempts to mimic painting process in real world.
This technique is more suitable for painterly styles and not suitable for clean styles that try to achieve smooth color gradations.
Use brush presets that look natural or simulate real brush bristles.
Select a brush preset with an appropriate thuimbnail
Dry Bristles preset works
Select base color
\<K\> twice
Make strokes with light pen pressure first in middle area
As we go to border area we add more pressure to pen.
Make pen strokes with light pen pressure first in middle area.
As we got to border area we can add more pressure.
For highlight, process is identical.
Choose base color
\<L\> twice.
Make light strokes first.
Closer we get to center, the more we can press the pen.
Stage 1 Complete!
Stage 2: refine existing strokes.
Do NOT make colors perfectly smooth.
Avoid using blurring brush
Do all color blending manually.
Look for areas where two contrasting colors meet
Choose color in middle
Make light strokes a few times on that area so that colors are more blended.
Lowering opacity of brush can help get more subtle strokes.
Repeat process until satisfaction is attained!
In case 'blurring' is absolutely necessary:
STILL AVOID REGULAR 'BLENDER BLUR' preset.
Use preset called 'blender textured soft'; more natural.
Using excessively can remove all unique brush strokes already present.
==The 'tradigital shading method' will be discussed more in-depth in the advanced level course.==

/* EXERCISE */

Sketching, Base Color, and Layer Composition
============================================
Making a skull illustration.
Skull has only one type of color on the surfae.
Whereas the shape is complex
Complekx enough to practice shading on it.
Workflow
--------
Similar to how we created axe illustration
No line art will be drawn
We must use smooth shading techniques.
Not just flat colors.
We make use of blending modes also.
### The process
- sketching
- add base color
- layer composition
- shading using:
- - basic method
- - advanced method with selection
- add highlights
- add details and textures
### UI differences
This was recorded in Krita4
1. Settings
1. Dockers
1. Palette
Stick to defaults
### Sketching process
Make paint layer above bg layer
Brush preset is called pencil4soft
Previously this was placed in the PUP
No line art will be made
Draw sketch
Large ellipse as the back of the head.
Kinda looks like a peach.
Put a mask-sort of thing near the 'crack' of the peach.
Make like four teeth
Put in them there angry brows, my mna.
Do not aim for realism.
A simple drawing will suffice
Smaller version of peach to connect mask and big peach
Erase as necessary if it's too big.
Darken outline of the skull.
Rename sketch layer to 'sketch' if desired.
Rename bottom layer to background
Press \<Shift-Backspace\> to fill bg layer
### Base Color
Create new paint layer below sketch layer but above bg layer.
Rename layer 'b' for the layer that has got the base color.
reduce opacity of sketch to 20%
Use freehand selection tool to add base color.
Custom shortcut for this: \<Z\>
Follow silhouette of skull, holding down Ctrl to create straight lines for selection shape.
Once selection is complete, choose light-brown color.
Fill selection via \<Shift-Backspace\>.
Clear selection.
BG color from earlier has a brightness / value similar to base color of skull.
Darken bg layer by normal means.
Lock bg layer to protect it from further changes
### Layer composition
Separate shading layer from base color layer.
Create new layer above 'base color layer'
Use alpha inheritance feature later to make alpha condition not affected by bg layer.
Place shading and base color layer in one group
To make new group layer, select layers, then \<Ctrl-Shift-G\>
Right-click on base color layer.
'Quick clipping group'
New paint layer is created and it's got the alpha inheritance switched on already.
Change blending mode of this layer to 'multiply' (the mask layer; rename this to 's' for shading).
Multiply blending mode will make color below darker.
Suitable for shading or shadow areas.
For group layer, rename to 'skull'.

Shading With Selection
======================
Global shading with basic technique
-----------------------------------
Must first determine where light source is.
Set light source at center up above.
Make light source slightly tilted from top right
Use blurrind technique.
Hold down Ctrl and pick base color
Press Kt odarken color
Choose solid brush preset
Set opacity to 100
Reduce it to 20% via \<I\>
Put shadow over majority of skull save for up and right.
Gradually apply shading over again until satisfied.
Use blurring brush preset
Make strokes to soften all contrasting lines.
Shading with Selection
----------------------
Must add more etaild shading
Use selection tool in conjunction wtih airbrush preset
Start from right temple
Select base to make it darker.
Use manual method first.
Hide shading layer.
Ctrl+Click on base color
Press K twice for much darker color
Unhide shading layer again.
Use airbrush preset.
Lower opacity of brush to 50%
This ensures effect of airbrush is not so strong.
Hold down Ctrl to make it function similarly to polygonal selection tool.
Select area.
Shade.
Use smearing brush to make edges seem smoother.
Lighten some line that connects mask of skull to back.
unhide outline.
Outline mask around eyes.
Shade gaps between teeth.
Darken bits beneath teeth for texture.

Highlights and Textures
=======================
Adding highlight colors and more details to skull illustration.
Highlight Colors
----------------
Need new paint layer above shading layer.
Activate 'alpha inheritance' option (middle on layer-row).
This way we can draw on the layer without worrying the strokes wil bleed out from the base color area
Unlike shading layer, for highlight layer, set blending mode to 'screen'.
- Screen: brightens colors underneath.
Coloring techniques similar to how we add shading colors
Only difference is that we choose lighter not darker colors.
For example we want to add a highlight color above the eyebrows.
Create a selection.
Press \<B\> for brush tool.
Hold down Ctrl and select base color.
Press \<L\> to lighten color.
Brush to lighten.
Do the same for the eyebrow on the ohter side.
Use brush tool with airbrush preset.
Try making center area lighter
Repeat process of top of head.
Use 'blurring brush' to refine color gradation.
For sharp gradation, use 'smear' preset.
Adding Textures
---------------
Many ways to add details to texture
Simplest way: create directly on base layer.
Choosing this approach mandates you turn on alpha lock.
Many brush presets exist for applying texture
Texture brushes are very conditional.
Place texture brushes can be plcaed in PUP if desired.
Use brush preset window to search for texture brush windows.
Choose dark color already in image.
Reduce brush opacity to around 30%
Make light strokes where you wish to add texture.
Cracks and Holes
----------------
Create directly on base color layer.
Do not make opacity uniform.
Finishing Touches
-----------------
???

The Workflow
============
Creating an illustration of a clifftop tree.
This one has one more color area.
Workflow to make this illustration will be outlined.
### Workflow
- Reference images
: Find reference images and place them on side; helps us stay focussed on what we wanna make
- Sketching
: Process where a pencil brush preset is used to draw out basic ideas onto canvas
- Composition
: Prepare composition by creating layers, masks, groups, etc. Must determine which object belongs to which composition group. (three groups: bg, midground, foreground)
- Base coloring
: Must choose base color palette for each of objects inside illustration.
- Local shading
: i.e. ambient occlusion. Use different layer above base; add subtle shadows that appear in corners, crevices, intersections, etc.
- Global Shading
: Put shadows emitted by one object onto the other.
- Highlight
: Adding lighter colors to areas that are facing the light source.
- Details and Textures
: Free to create new layer to add color variations, textures, scratches, bumps, etc.

Using reference images
======================
A tool called the 'Reference Images Tool'.
Compile images from the internet in order to help you figure out what effect you wish to achieve.
Click on the icon that looks like a push pin
Click on the plus in the Tool Options to add a reference image.
The image is never distorted
- The 'keep aspect ratio' option is always on by default
One can also mirror these things
One can also lower opacity
One can lower saturation to sap color.
Trace over reference images as desired
1. View
1. Show Reference Images
Save Location:
- Embed to .KRA
- Link to Image
Export reference images as .krf by clicking on floppy disk icon.

Sketching
=========
Circular Frame
--------------
We want to limit the drawing to a circular area. Why?
It takes little time to complete.
Create a new layer for a circle
Rename layer to 'frame'.
Select 'elliptical selection tool'.
Click-drag while holding shift-key to make perfect circle.
If you reach the end of the canvas but the circle is not centered,  hold Alt and drag the thing.
It is alright if it's not exactly at the center.
Inner area should be void, while outer area should be filled with bg color.
Invert selection via Ctrl-Shift-I
Fill with dark grey
The thing should look like a window (or you know the screen before James Bond shoots ya).
Lock the frame layer to prevent it from being changeed.
Must draw rough sketch on layer 2
Use pencil brush (metallic aglet with black tip)
Use blue for rough sketch (light-blue, lt sky blue)
Draw the tree
Draw top side of grassy cliff, per reference pictures.
Draw rocky side of cliff (reference picture is beneath it)
Final sketch
------------
Create paint layer above previous
Draw tidier sketch with black color.
Press D on keyboard.
Trace and perfect previous sketch (think of it as a rough draft)
Rename to 'sketch final'
Rename other to 'sketch rough'

Layer Composition and Base Colors
=================================
Sort layers and add base colors to tree illustration
Divide illustration into several main groups
First: background (the sky)
Midground: trees and hills
Foreground: Make no group for this yet.
Change name to 'mg'.
Rename background to 'bg'.
Move layer1 into bg group layer.
rename layer1 to 'b'
focus on midground group layer.
Make each area of base color a separate group layer.
cliff is its own subroup
so is grass
tree trunks and branches are also subgroups
leaves are yet another subgroup.
This will make it so that there are too many layers to manage apparently
Other solutions are available.
Make everything in one layer.
Split base colors into two subgroup layers
One for grass and leaves
Other for tree trunks and rocky cliff.
These are non-contiguous.
We use multiple groups for base colors to avoid areas of different colors being directly in contact.
Midground should have 2 subgroups
Use arrow buttons to shift group layers up a level
Name one subgroup grass and leaves.
Make another group: tree trunk and cliff
Base Coloring
-------------
Add paint layer inside group layers.
Select grass and leaves
Make new paint layer inside it.
Freeform select grass; okay to cross over tree trunk and cliff 
Better to choose base that isn't too close to black or white or whose saturation is too strong
Useful when later we must perform Color Correction
When brush tool is in eraser state, using 'Fill Color' command will delete pixels.
Now add colors for bark and cliff
Adding Sky Color
----------------
Choose cyan or light-blue; must be bright
Choose airbrush preset
Make brush size bigger
Draw brush strokes in top half of bg
Choose next a darker color.
Make some strokes in the bottom area.

Local Shading
=============
Hide reference images:
1. View
1. Show Reference Images
Ambient Occlusion
-----------------
i.e. local shading
A type of shadow that is very subtle
Seen in crevasses, cracks, corners, areas where objects intersect.
Result of ambient light being blocked.
Ambient light
: environmental lighting in which comes from all directions with uniform strength.
We're focussing only on one base color area at a time.
Add layer for 'local shading'; rename to 'L'.
Enable alpha inheritance s.t. color does not bleed outside base color.
Activate selection
Create shadow.
Press \<D\> to use the black color.
Brush
Use smear brush preset to smooth out shadows and base
Use blur brush.

Global Shading
==============
Term for shadows with these characteristics:
1. Large size
1. Shadows of objects that fall on other objects.
One can create on local shading layer.
If the shading layer is complex as-is, create separate layer for global shading.
Rename such a layer to 's' above the local-shading layer
No need for freeform selection this time.
Emitted shadows
---------------
Can also create dedicated layer for this
Instructor uses existing 's' layer
Draw shadow over the tree to represent the copse's.
Refine via smear or blush preset
Make shadows on grass via freeform selection tool and usual shift-backspace

Details and Textures
====================
Add highlights on glossy surfaces
e.g. wet, oily, metal, glass
Should create highlight layer above 's' layer and name it 'h'
For highlights, use 'screen' not 'multiply' blending mode.
Use airbrush preset.
Details
-------
Leaving 'blending mode' at normal.
Textures
--------

Workflow Flexibility
====================
To make winter version of color.
Replace background with wintry color.
Preserve alpha condition by locking base color layer.
Apply brush as desired
Fill tool is also constrained by alpha lock.
Backlights
----------
Additional lights intentionally placed on dark areas serving to emphasize silhouette of main objects.
Rim Lights
----------
Fake lighting effects placed on border of object's silhouette, to emphasize shape of object or to gain attention.
Adding too many rim lights can cause the drawing to look unrealistic
Treat it like purple prose --- if you were a normal writer. >\_>
Put it on its own layer, above 'shading' as 'v'.
Overlaying Sketch
-----------------
Adjust opacity of sketch as desired.
Instructor's preference: 50%

About 30% of Krita has been covered.
