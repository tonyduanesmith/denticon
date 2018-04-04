# Denticon

Easy to use identicon library with lots options to style for your project.

## Quickstart

Clone the repository and npm install the dependencies


```
git clone https://github.com/tonyduanesmith/denticon.git
cd denticon
npm install
gulp
```

The app.js file has some example options to use but to create a default denticon.

Argument 1 - The class or ID name where to append the Denticon

Argument 2 - The name to be hashed and used to create the Denticon

```javascript
denticon.denticon('#default1', 'tonyd');
```
Example with options

```javascript
let options = {
    pixelShape: 'circle',
    containerShape: 'circle',
    
}

denticon.denticon('#default1', 'tonyd');
```

# Options

An options object can be taken as a third argument in the denticon function

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
