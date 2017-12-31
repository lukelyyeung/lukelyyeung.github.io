# 1st individaul Accelerate Bootcamp
---
A single stand-alone page

## Library/Toolkit/webfont
---
1. **Bootstrap**
⋅⋅* Bootstrap.min.js (ver 3.3.7)
⋅⋅* Bootstrap.min.css (ver. 3.3.7)
2. **Jquery**
⋅⋅* Jquery.js (ver. 3.2.1)
3. **Font Awesome**
⋅⋅* font-awesome.min.css (ver. 4.7.0)
4. **Animate.css**

## Main design direction
---
**Artwork**
⋅⋅* Vintage and retrospective.
⋅⋅* Mainly grayscale, black and white color.
⋅⋅* Color `rgba(214,29,40,1)` to represent the element of crime.
**Layout**
⋅⋅* Utlizing bootstrap carousel to producing "Single Page 
⋅⋅⋅Application"-like page.
⋅⋅* Each section is set to be `height:100vh` to produce full-page ⋅⋅⋅effect.

### Vertical Carousel
---
1. Set the `transform` property of `.carousel-item` and its sub class to below value:
⋅⋅* `translate3d(0, 100% 0)` for the next and right carousel-item.
⋅⋅* `translate3d(0, -100% 0)` for the previous and left carousel-item.
⋅⋅* Set the `bottom` property of `.carousel-control-prev` and  
⋅⋅⋅ `top` property of `.carousel-control-prev` to `unset`.
⋅⋅* Also rotate the control icons by 90deg to produce a set of up and ⋅⋅⋅ down control button.
2. Stop the auto sliding 
⋅⋅* Auto slide can be paused by `carousel({interval:false})`.

### Navigation bar and logo
---
Ulitilize the toggler navigation bar of **bootstrap**.
⋅⋅* The `[href]` attribute of each `.nav-link` is connected to the 
⋅⋅⋅ carousel to achieve navigation.
⋅⋅* The toggle button is replaced by the logo which has 
⋅⋅⋅ `position: fixed` property in large screen and `position: static` ⋅⋅⋅ in small screen.


### Opening animation 
---
1. **loading bar**
⋅⋅* Use `setInterval()` to increase the width of the loading bar and 
⋅⋅⋅ replace the `html()` of the `<p>` inside. 
2. **Logo**
⋅⋅* Use the rotateIn animation provided by **Animate.css**.
⋅⋅* `.rotateIn` is overwritten to add value of `translate(-50%,-50%)` ⋅⋅⋅ to the `transform` property so the logo can rotate at the center ⋅⋅⋅ of the page.
3. **Text and color change of the background**
⋅⋅* Change the value of `opacity` of the text to `1.0` after the 
⋅⋅⋅ loading bar is done.
⋅⋅* Again, use `setInterval()` to achieve the gradual 'color refill' ⋅⋅⋅ of background. The same effect can be done with `transition` 
⋅⋅⋅ property of the background.

### "Click me" button
---
Another example of using `transition` to produce smooth animation.
⋅⋅* Define the overall and partial duration of the `transition` of the ⋅⋅⋅ `<button>` and `<span>`.

### About
---
1. **Use mediaquery to change the layout**
⋅⋅* The layout of text and image changes from column to row in 
⋅⋅⋅ smallscreen. The same effect is not likely to be achieved by grid ⋅⋅⋅ system of **bootstrap** as the latter provides a breakpoint to 
⋅⋅⋅ collapse only while we need the reversed.

2. **Use css nth-child selector to assign `transition-delay` value**
⋅⋅* It is how to achieve serial fade In of box without giving id to 
⋅⋅⋅ each box.

### Concepts
---
Use the fadeIn animation in different direction provided by the **Animate.css**.

### Gallery
---
1. **Why not use bootstrap carousel?**
⋅⋅* Carousel has serious problem when being wrapped in another 
⋅⋅⋅ bootstrap. It is somehow can be solved but in this case not
⋅⋅⋅ adopted due to time issue.
2. use addClass() to 'active' the slide
⋅⋅* Add self-defined classname `.gallery-active` to the target slide to ⋅⋅⋅ display it. The reason of not using `.active` is that it has been ⋅⋅⋅ used by carousel already.


### Progress
---
**Simple 3D object**
⋅⋅* Use `transform-style: preserve-3d` of `.card` and 
⋅⋅⋅ `transform: rotateY( 180deg)` of `<img>` to simulate double-sided ⋅⋅⋅ card.
⋅⋅* The outer `.cardBox` is the `relative` parent while the `.card` is ⋅⋅⋅ the absolute child. 
⋅⋅* `backface-visibility` of the `<img>` is set to be `hidden` so the ⋅⋅⋅ back side card won't be shown until the `.card` is rotated along Y ⋅⋅⋅ axis.

### Contact
---
**Animated color background**
⋅⋅* Use 400% enlarged and centered background with 45deg linear color ⋅⋅⋅ graident.
⋅⋅* @keyframe is defined to change the background-position along 
⋅⋅⋅ x-axis. The animation reverses at the 50% to create a 
⋅⋅⋅ 'tiding'-like animation.

### Built With

* Visual Studio Code

## Authors

* **Luke LY Yeung**