# Denticon

Easy to use identicon library with lots options to style for your project.

## Quickstart

Clone the repository


```javascript
git clone https://github.com/tonyduanesmith/denticon.git
cd denticon
```
Add jQuery to the head of your html file.
```javascript
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous">
    </script>

```
Add denticon.js file just before the closing tag of your body from the dist/js directory and make sure to copy into your project.
```javascript
    <script src="js/denticon.js"></script>
```
You are now ready to use.

# Usage
Example default denticon

Argument 1 - The class or ID name where to append the Denticon

Argument 2 - The name to be hashed and used to create the Denticon

```javascript
denticon.denticon('#default1', 'tonyd');
```
Example with options

Argument 1 - The class or ID name where to append the Denticon

Argument 2 - The name to be hashed and used to create the Denticon

Argument 3 - Object with aditional options to style the Denticon

```javascript
let options = {
    pixelShape: 'circle',
    containerShape: 'circle',
}

denticon.denticon('#default1', 'tonyd', options);
```
The app.js file has some more example options to get you started.

# Options

An options object can be taken as a third argument in the denticon function

| Options  | Default | How to use | Type |
| -------- | ------- | ---------- | ---- |
| colour  | Random Colour | Default is a random colour based on hash but can be overidden with a hex colour eg. '#ffffff'  | String |
| pixels  | few | Accepts 'many' for a 10x10 grid or 'few' for a 5x5 grid denticon | String
| pixelShape | 'square' | Accepst 'square' for square pixels or 'circle' for cirular pixels | String
| strokeColour | '#ffffff' | Accepts hex colour code which chnages the colour of the stroke around each pixel | String
| strokeWidth | 0 | Changes the width of the stroke around each pixel | Number
| size | 50 | Changes the size of the denticon | Number 
| containerShape | 'rounded' | Accepts 'rounded', 'square' or 'circle' which changes the shape of the denticon | String
| borderWidth | 5 | Changes the width of the border surrounding the denticon | Number
| borderColour | '#ffffff' | Accepts hex colour code which chnages the colour of border surrounding the denticon |
| backgroundColour | '#ffffff' | Accepts hex colour code which chnages the colour of the background of the denticon |

An Example using all of the above options

```javascript
let options = {
    colour: '#333333',
    pixels: 'few',
    pixelShape: 'square',
    strokeColor: '#333333',
    strokeWidth: 1,
    size: 50,
    containerShape: 'circle',
    borderWidth: 5,
    borderColour: '#ffffff',
    backgroundColour: '#ffffff',
};

denticon.denticon('#default1', 'tonyd', options);
```


# Built With

* [hash.js](https://github.com/indutny/hash.js?utm_source=recordnotfound.com) - Used to hash the username


# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
