# Clickable Thumbnail Guide

## Overview

This site now includes a clickable thumbnail feature that allows you to display small preview images that enlarge when clicked. Thumbnails appear directly on the blog page with text wrapping support - no need to click through to see them!

## Usage in Posts

### Basic Syntax (Centered)

```liquid
{% include thumbnail.html 
  image="images/your-image.jpg" 
  caption="Click to view full size" 
%}
```

### Floating Thumbnail - Text on Left (Float Right)

```liquid
{% include thumbnail.html 
  image="images/your-image.jpg" 
  caption="Optional caption" 
  width="200px"
  float="right"
%}

Your text goes here and will wrap around the left side of the image.
```

### Floating Thumbnail - Text on Right (Float Left)

```liquid
{% include thumbnail.html 
  image="images/your-image.jpg" 
  width="200px"
  float="left"
%}

Your text goes here and will wrap around the right side of the image.
```

### With Custom Size (No Float)

```liquid
{% include thumbnail.html 
  image="images/your-image.jpg" 
  caption="My image caption" 
  width="250px"
%}
```

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `image` | Yes | - | Path to image (relative to site root) |
| `caption` | No | - | Text displayed below thumbnail |
| `width` | No | `300px` | Width of thumbnail |
| `height` | No | `auto` | Height of thumbnail |
| `float` | No | - | Float direction: `right` (text on left) or `left` (text on right) |

## File Organization

### Recommended Structure

Store post images in an organized manner:

```
images/
  posts/
    2024-01-29-shiftr-diagram.png
    2024-01-29-results.jpg
    2024-09-28-award-ceremony.jpg
```

### Example Post

```markdown
---
title: Our Latest Research
---

Check out our new findings!

{% include thumbnail.html 
  image="images/posts/2024-01-29-results.jpg" 
  caption="Experimental results showing..." 
  width="400px"
%}

The results demonstrate...
```

## Features

- **Hover Effect**: Magnifying glass icon appears on hover with subtle zoom
- **Lightbox**: Click opens full-screen overlay
- **Multiple Close Options**: 
  - Click the X button
  - Press Escape key
  - Click outside the image
- **Smooth Animations**: Professional zoom and fade effects
- **Text Wrapping**: Float thumbnails left or right with text wrapping around them
- **Inline Display**: Thumbnails appear directly on the blog page
- **Responsive**: Works on all screen sizes
- **Keyboard Accessible**: Full keyboard navigation support

## Tips

1. **Thumbnail Size**: 
   - Floating thumbnails: 100-200px works well for text wrapping
   - Centered thumbnails: 200-400px for standalone display
2. **Image Quality**: Use high-resolution images since they'll be viewed full-screen
3. **Multiple Images**: You can place multiple thumbnails side-by-side
4. **Captions**: Always include descriptive captions for accessibility
5. **Float Placement**: Put the thumbnail include BEFORE your text for proper wrapping
6. **Blog Display**: All thumbnails appear directly on the blog/news page

## Examples

### Example 1: Job Posting with Floating Image

```markdown
---
title: Open Position - Postdoc
external_link: https://example.com/job
---

{% include thumbnail.html 
  image="images/posts/job-poster.jpg" 
  width="150px"
  float="right"
%}

The Munschauer Lab is seeking a highly motivated postdoctoral scientist 
to carry out a collaborative research project at the intersection of 
computational biology and systems virology.

We offer an exciting research environment and cutting-edge facilities...
```

### Example 2: Single Large Thumbnail (Centered)
```liquid
{% include thumbnail.html 
  image="images/research_schema.png" 
  caption="Our research workflow" 
  width="400px"
%}
```

### Example 3: Multiple Small Thumbnails (Side by Side)
```liquid
{% include thumbnail.html image="images/step1.jpg" caption="Step 1" width="200px" %}
{% include thumbnail.html image="images/step2.jpg" caption="Step 2" width="200px" %}
{% include thumbnail.html image="images/step3.jpg" caption="Step 3" width="200px" %}
```

### Example 4: Floating Left with Text on Right
```liquid
{% include thumbnail.html 
  image="images/lab-photo.jpg" 
  width="180px"
  float="left"
%}

Our team consists of interdisciplinary researchers passionate about 
understanding RNA biology and viral infections. We combine experimental 
and computational approaches to tackle challenging problems in molecular virology.
```

## Technical Details

The thumbnail feature consists of three files:

- `_includes/thumbnail.html` - HTML template
- `_styles/thumbnail.scss` - Styling
- `_scripts/thumbnail.js` - Lightbox functionality

These are automatically included in all pages.
