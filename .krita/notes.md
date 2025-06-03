Hardware
========
Most drawing tablets have complementary software for configuration.
- Check if [Wacom Intuos Small Graphics Drawing Tablet](https://www.amazon.com/dp/B079HL9YSF?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1) has such software.

Absolute mode
-------------
- recommended
- permits user access to all areas of screen

Relative mode
-------------
- for if user wants stylus to function as a mouse

*EXERCISE*
----------
Configure drawing tablet as follows:
- Up-Button -> Right-Click
- Down-Button -> Middle-Click

*EXERCISE*
----------
Optimize Krita.
### Display Driver
1. Settings
1. Configure Krita
1. Display
1. Canvas Architecture
#### Current Renderer:
- OpenGL: Krita was originally designed to support only this.
- Direct3D: Reportedly has less brush lag than others.
- Auto: Krita automatically scans the system and determines the most optimal renderer
### Scaling mode
1. Settings
1. Configure Krita
1. Display
1. Canvas Architecture
#### 'renderer' parameter
- High Quality Filtering: Default
- Bilinear Filtering: Ideal
- Nearest Neighbor: Lowest
_NOTE: Original data is unaffected by setting these options._
### Memory limit
1. Settings
1. Configure Krita
1. Performance
1. General
System memory capacity is displayed here.
#### Amount of memory Krita is allowed to consume can be adjusted here.
- More memory means better performance for Krita.
- Potentially worse performance for other programs.
_Just keep in mind that you can adjust this!_
### FPS Limit
Make sure that the FPS Limit is at least 30.
- Minimum of 30 FPS: Optimal
- Less than 30 FPS: Suboptimal; induces nausea
### Brush smoothing
1. Freebrush Tool
1. Tool Options
1. Brush Smoothing
1. 'None'

Color Models
============
Means by which to represent color, via parameters and key colors
*Light-based models* use lights to define color.
*Pigment-based models* use inks to define color.
Main models used by Krita are *RGB* and *HSV*.

RGB
---
Light-based model.
A color is defined by specifying three parameters:
- R: Red (0-255)
- G: Green (0-255)
- B: Blue (0-255)

HSV
---
Different representation of RGB.
Colors are defined by three parameters:
### *Hue*
- shade of color
- measured in degrees (i.e. position on the color-wheel)
### *Saturation*
- denotes the presence of color
- measured in percentage
### *Value*
- strength of light emitted by color
- measured in percentage
Color selection via this representation is easier.
Read more about it [here](https://en.wikipedia.org/wiki/HSL_and_HSV) and in [the Krita docs](https://en.wikipedia.org/wiki/HSL_and_HSV)

Computer Graphics Images
========================

Raster
------
- file formats: jpg, png, gif, tiff, hdr
- ideal for: pictures with complex detail
- description: is stored as collection of pixels
- flaw: quality is reduced upon zoom-in

Vector
------
- file formats: svg
- ideal for: pictures with abstract detail
- description: is stored as collection of math equations; quality is not reduced upon zoom-in
- flaw: more resource-intensive than raster

Color Model of Document
-----------------------
1. File
1. New Document
1. Custom Document
1. Color
1. Model
1. 'RGB'
One should always choose 'RGB', since it encompasses HSV also.

Channels
--------
e.g. in RGB: red, green, blue
There is also the alpha channel, which determines transparency
These are the 'parameters' that in conjunctiona define a given color that model represents
PNG format supports transparency
JPEG does not
An 8-bit color channel stores 2^8 enumeration variants.
A 16-bit color channel stores 2^16 enumeration variants.
Alpha-0: image is transparent
Alpha-MAX: image is opaque

Creating a New Document
=======================
\<Ctrl-N: Create new document
Method 1
1. \<Ctrl-N\>
Method 2
1. File
1. New
Method 3
1. Welcome Screen
1. New File

New-Document Menu
-----------------
Templates: Documents with set parameters for some purpose
Size: Width and Height
Pixel Density: Resolution
- Ideal: 100ppi
Orientation: See the nested rectangles
One can also save image size for later use.
Color:
- (Model) Ideal: RGB
- (Depth) Ideal: 8-Bit
### Create from Clipboard
Select subset of image
Document will be auto-fitted to clipboard contents
Alert will show up if ICC is absent
- Ideal: ICC profile (as web)
Image is placed on Layer 1.
Image is still in system memory.
Pasting will make new layer with clipboard contents
Always save projects in '.kra' format
### (Ideal Settings)
Color Model: RGB
Color Depth: 8-Bit
Pixel Density: 100 Pixels Per Inch (ppi)
ICC Profile: As Web

User Interface
==============
Reset All Custom Configurations
1. Settings
1. Reset All Setttings
Modes
-----
\<Tab: Canvas-Only
\<Ctrl-Shift-F: Full-Screen
Alternatively, access these modes via:
Hiding the Toolbar
------------------
Do _not_ ever hide the Toolbar in its entirety.
### Hiding Specific Components of the Toolbar
1. Settings
1. Toolbars Shown
1. (select component of choice)
Workspace
---------
In the bar that's second from the top
It's the rectangle.
Instant Preview Mode
--------------------
Toggle
1. View
1. Instant Preview Mode
Features
- brushes become more responsive
- produces low-res strokes
- brushing becomes smoother and faster

Navigation via Stylus
=====================
Append 'Drag' to each of these:
\<Space + Press: Translate
\<Middle-Button: Translate
\<Shift + Middle-Button: Rotate
\<Space + Shift: Rotate
\<Ctrl + Space: Zoom
\<Num:
- 1: Reset rotation to 100%
- 2: Zoom s.t. whole image is visible
- 3: Autofit image to canvas width
- 4: Rotate counterclockwise
- 5: Reset rotation
- 6: Rotate clockwise
\<Ctrl-[: Rotate counterclockwise
\<Ctrl-]: Rotate clockwise
\<=: Zoom in
\<-: Zoom out
Pop-Up Palette
- Right-Click: Summon PUP
- Drag bottom slider: Zoom in or out
- Rotate wheel: Rotate canvas

Freebrush Shortcuts
===================
\<B: Activate freebrush
\<F5: Brush Editor
\<F6: Select Brush-Preset
\<Ctrl + Press: Siphon color
\<Shift + Press + Drag: Increase brush size
\<E: Toggle eraser mode.
\<]: Increase brush size.
\<[: Decrease brush size.
\<O: Increase opacity
\<I: Decrease opacity
*Always turn off `Brush Smoothing` when not making line-art or outlines.*

Manage Tags
-----------
1. Open Brush-Preset Selection menu.
1. Drop-down second from the left.

Color Shortcuts
===============
\<X: Transpose foreground and background colors
\<K: Darken current color
\<L: Lighten current color
\<P: Activate color sampler

Brightness-Toggle Intervals
---------------------------
1. Settings
1. Configure Krita
1. Color Selector Settings
1. Docker
1. Color Hotkeys

Color Controls
==============

Color palette
-------------
Where one stores and organizes color
A more permanent repo for colors
One can make groups within the Palette
Resource folder containing color palettes and the like are at:
~~`\~/.local/share/krita/`~~
~~`~/.var/app/org.kde.krita/data/krita/`~~
Access this via:
1. Settings
1. Manage Resources
1. Open Resource Folder

History and list
----------------
Temporary repos for color
Each square representing a color is called a *swatch*

Paint Tools
===========

Line Tool
---------
\<V: Open while in freebrush mode
\<Drag-Alt: Move line about

Rectangle / Ellipse Tool
------------------------
Making a perfect square / circle:
- Hold Shift while dragging.
- Set 'ratio' parameter in Tool Options to 1.00, then lock it.
\<Drag-Alt: Move shape elsewhere
\<Drag-Ctrl: Fix center of shape

Polygon / Polyline Tool
------------------------
Exit polygon / polyline creation via one of two methods:
- \<Shift-Press
- \<Enter

Non-Paint Tools
===============

Mirror
------
Located on upper-right of Toolbar
Resembles paper airplanes
Allows one to create additional strokes when you draw.
Generally reflects user's strokes across a set of axes

Multibrush
----------
Change number of brushes via:
1. Tool Options
1. Brushes: #
Change type of reflection via:
1. Tool Options
1. Type: Symmetry
NOTE: Change reflection type to 'Translate' to draw grass easily

Layers
======
Images that we can stack atop each other in a document
Background layer included in every new document by default
Draw background in the appropriate layer
Draw features closer to front in other layers
Gradually draw towards the screen.
\<F3: Layer properties
\<Del: Change layer color to white

Basic properties
----------------
Visible: left of layer name
Locked: immediate right of layer name
Inherit alpha: second-from-right of bar
Alpha lock: right-most part of bar
### Alpha lock
- function: lock layer
- only alpha channel gets locked; others are not
- ensures one can draw only on existing pixels of alpha-locked layer
- useful for shading and shining
### Alpha Inheritance
- Ensures one can draw only on pixels from layers below

Group layers
------------
Contains other layers like a directory would files in a filesystem
One can nest group also
\<Ctrl-G: Group selected layers
\<Ctrl-Alt-G: Ungroup selected layers
\<Ctrl-Shift-G: Create 'clipping group', whatever that is

Inherit alpha
-------------
Similar to alpha lock
Locks condition of alpha layer
Contrast:
- Alpha Lock: Uses alpha data in layer itself
- Inherit Alpha: Uses alpha condition from all layers below
Select 'Inherit Alpha' on layer whose canvas is to be constrained by layers below
Wrap in group layers to restrict the constraining layers to the ones just in the group

Move Tool
=========
Allows one to move layers or parts of images within selection regions.
Moving multiple layers is possible also
\<T: Activate Move Tool
\<Ctrl-Shift-A: Clear selection
Modes
-----
Toggle in 'Tool Options'
### Move layer with content
Pixel under cursor is auto-detected
Layer to which pixel belongs is moved
### Move whole group
Shoulda only be used for layer inside group
All layers are implicitly inside a group layer
### Move with selection
This is the default
Create selection

Moving via Arrow Keys
---------------------
Toggle step-size via 'Move Shortcut' in 'Tool Options'
Declare either layer or selection
Press arrow-keys
\<Shift-Drag: Restrict movement to strictly cardinal directions

Opacity and Blending Modes
==========================
Accessible from Layers docker
- Blending Mode: drop-down menu
- Opacity: progress-bar toggle
Each is accessible also from the Layer Properties

Opacity
-------
Must make clear: layer opacity != brush opacity
Both properties are contextual
- layer opacity is the opacity of the pre-existing pixels on layer
- brush opacity is the opacity of the brush stroke on a layer
...I think?

Blending Modes
--------------
Mathematical algorithm that controls how colors in a layer mix in with colors from layers below.
By default, blending mode is set to `Normal`.
Most frequently used blending modes:
- Normal
- Mutiply
- Screen
- Overlay
- Lighten
- Color Dodge

### Multiply
Moving layer over another darkens the latter
White will appear completely transparent
Ideal for adding shadows to a drawing.

### Screen
Opposite of multiply:
'Moving Layer1 over Layer2 brightens Layer2'
Adds lighter colors and highlights areas.

### Overlay
Combines effects of Multiply and Screen
Dark colors have Multiply effect
Bright colors have Screen effect
Perfectly 50% grey colors will be transparent

### Lighten
Colors below will seem brighter
Of same family as Screen
Affects only layers below (personal observation), compared to Screen
Suitable for:
- fog
- mist
- other air particles

### Color Dodge
Stronger than Screen
For visual light effects
- lasers
- lightning
- lens flare

Brush Blending Mode
-------------------
*Note: Destructive feature*
Activate freebrush tool or any derivatives thereof to access.
Same layer as target must be used.
