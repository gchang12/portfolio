
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

TODO: Brushes - which to use?
TODO: Clean up.

Offsetting and sampling color
=============================
Making a color brighter or dimmer
Drag the circle down...
Use keyboards also
Toggle via shortcut ==\<K: Make the thing darker\>==
Lay down base color
Press K
Shade!
Press ==\<L: make thing lighter\>==
Shine!
Step intervals are usually sufficient.
If they aren't:
Settings \> Color Selector Settings \> Docker \> Color Hotkeys \> (figure out rest)
To make shortcuts for other settings:
Settings \> Keyboard Shortcuts \> search: 'make brush color'
Sampling color
--------------
==\<P: Activate color sampler\>==
==\<Ctrl: Activate color sampler while in Brush mode\>==

Color Palette
=============
Container where you store and organize colors
history and list are temporary repos
Color palette configuration is more permanent
Each square representing a color is called a `swatch`
One can make a new palette by clicking on the rubix square in the 'Palette' Docker
One can make groups within the Palette

Resource folder
===============
Folder where various data used by Krita is stored
Where to locate it... It's OS dependent
$HOME/.local/share/krita/
Settings \> Manage Resources \> Open Resource Folder

Line tool
=========
Line tool detects pressure applied to stylus
==\<S-drag: Open line tool\>==
==\<Alt: Mid-drag, move line about\>==

Rectangle and ellipse tool
==========================
The two are similar, some would say
To make a perfect ellipse, set ratio=1, then lock it.
Alternatively, hold ==\<Shift while dragging: ensure ratio=1\>==
Hold ==\<Alt while dragging: Move shape elsewhere\>==
Hold ==\<Ctrl while dragging: Fix center of transformation\>==

Polygon and Polyline
====================
The two tools are similar, apparently
Exit polygon creation via one of three methods
Shift-click
Enter
Double-click

Mirror and Multibrush
=====================
Located on upper-right of Toolbar
They look like paper airplanes
These tools will create additional strokes when you draw.
Sometimes they'll reflect yours on the other side of some virtual axis (mirror)
Multibrush
----------
Change number of brushes via Tool Options
Change type of reflection via Tool Options \> Type
Translate to draw grass easily

Selection basics
================
Image selection is needed to limit editing area
- e.g. transformations, filters
Rectangular
-----------
==\<Ctrl-R: Rectangular selection\>==
To fill a selection with color: ==<Shift-Backspace>==
Hybrid selection:
1. Hold <Ctrl>
2. Release mouse button
3. Click-release for polygonal border

Intro to Layers
===============
Layers are images we can stack atop each other in a document.
Background layer included in every new document by default.
Recommended to draw background in bg-layer
Draw features closer to front in other layers
Layer properties: <F3>
==<Del: Change color of bg-layer to white>==

Basic layer properties
======================
Visible
Locked
Inherit Alpha
- prereq: Layer grouping.
Alpha Locked
- Alpha locked... Function is to lock the layer. Only alpha channel gets locked, while others are not. i.e. Alpha-locking a layer makes sure that one can draw only existing pixels of an alpha-locked layer.
- useful for shading and shining
One can also change the color of the layers

Group layer
===========
Type of layer that contains other layers
i.e. directory in a file-system
Put layers in group
- Select all layers to be grouped
- Ctrl+G: Group layer
Clickin on arrows also ungroups layers
So does \<Ctrl+Alt+G\>
Nested groups
To group layers: Select + ==\<Ctrl+Alt+G\>==

Inherit Alpha
=============
Similar to 'alpha lock'
Locks condition of alpha layer
Uses alpha data in layer itself
inherit alpha uses alpha condition from all layers below
Select 'inherit alpha' on layer whose canvas is to be constrained by below layers
Wrap in group layers to restrict the 'constraining layers' to just the ones in the group layer

TODO:

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
\<T: Activate Move tool\>.
Select layer, then click-drag to change position.
Moving multiple layers is also possible.
Modes
-----
### Move layer with content.
Toggle in 'Tool Options'.
Krita auto-detects pixel under cursor and allows user to move the layer to which that pixel belongs.
### Move the whole group
Should only be used for a layer inside a group.
Move all layers inside group.
Every layer in a Krita document is implicitly inside a group layer.
### Move with selction.
Create selection.
Press \<T\>
Select 'Move current layer' (i.e. default)
Only selected pixels are moved.
\<CtrlShiftA\> to clear selection
### Moving via arrow keys
Toggle step-size via 'Move Shortcut' in 'Tool Options'.
Select layer.
Press arrow-keys.
\<Shift-Drag\>: Constrain direction to strictly cardinal directions
Must hold down \<Shift\> while translating selected area, even though mode is 'Move current layer'

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
both properties are contextual
i.e. display values of active layer
### Blending Modes
mathematical algorithm that control how colors in a certain layer mix with colors from the layers below.
by default, blending mode is set to normal
Krita supports many blending modes
most frequently used: normal, mutiply, screen, overlay, color dodge, lighten
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
Suitable for fog, mist, or air particles
#### Color dodge
Stronger than Screen
Used for visual light effects
- lasers
- lightning
- lens flares
### Brush blending modes
Blending modes are available on brushes also
To access these modes, activate brush tool or any other tools based on it
Note: Destructive feature
Must use same layer as target
Make sure layer with star image is active


