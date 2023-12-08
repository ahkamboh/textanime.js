Sure, here's a simple guide on how to use the `TextAnime library`  in your projects:

# Text Anime

The `TextAnime library`  is a simple and flexible way to animate text in your web pages. It allows you to animate a list of words one letter at a time, giving a fade  typewriter-like effect,
 but you can change it according to your own.

## Usage

First, include the `TextAnime library cdn` in your JavaScript code:
``` CSS
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ahkamboh/textanime.js@main/TextAnime.js/textanime.css">
```
```javascript
<script src="https://cdn.jsdelivr.net/gh/ahkamboh/textanime.js@main/TextAnime.js/textanime.js"></script>
```

Then, create a new instance of `TextAnime`:

```javascript
const animator = new TextAnimator(['Courses', 'Programs', 'Features'], '.fade-text-class');
```

In this example, 'Courses', 'Programs', and 'Features' are the words that will be animated, and 'fade-text-class' is the class of the container where the animation will be displayed.

To start the animation, call the `start` method:

```javascript
animator.start();
```

The animation will start as soon as this line is executed.

## Options

The `TextAnime` class provides several options to customize the animation:

### Speed

You can adjust the speed of the animation by calling the `setSpeed` method:

```javascript
animator.setSpeed(3000); // Change speed to 3 seconds
```

In this example, the text will change every 3 seconds.

### Container

You can change the container where the animation is displayed by calling the `setContainer` method:

```javascript
animator.setContainer('new-container-class'); // Change container to elements with class 'new-container-class'
```

In this example, the animation will be moved to the elements with the class 'new-container-class'.

## Styles

The `TextAnime` class automatically applies a fade-in and fade-out animation to the text. You can customize this animation by modifying the `setAnimationStyle` method in the `TextAnime` class.

## Compatibility

The `TextAnime` class uses modern JavaScript features and should work in all modern browsers.

## License

The `TextAnime` class is open source and free to use in your projects.

Please note that this is a basic guide and might not cover all the features of the `TextAnime` class. For more information, please refer to the source code.
