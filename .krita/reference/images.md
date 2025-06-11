
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


