const hash = require('hash.js');
/**
 * main denticon creator function
 * @param {String} selector - jquery selector where to place
 * @param {String} username - username used to create the denticon
 * @param {Object} options - specific options for denticon
 */
window.denticon = function(selector, username, options) {
    $('#default1').addClass('test');
    // defaults
    let defaults = {
        colour: 'default',
        pixels: 'few',
        pixelShape: 'square',
        strokeColor: '#ffffff',
        strokeWidth: 0,
        size: 50,
        containerShape: 'rounded',
        borderWidth: 5,
        borderColour: '#ffffff',
        backgroundColour: '#ffffff',
    };
    let actual = Object.assign({}, defaults, options);

    //  hash username
    const usernameHash = hash.sha256().update(username).digest('hex');

    // style denticon
    $(selector).width(actual.size).height(actual.size);
    if (actual.containerShape == 'rounded') {
        $(selector).css({
            'overflow': 'hidden',
            'border-radius': '5px',
            'border-width': actual.borderWidth,
            'border-color': actual.borderColour,
            'border-style': 'solid',
            'width': actual.size,
            'height': actual.size,
            'background-color': actual.backgroundColour,
        });
    } else if (actual.containerShape == 'circle') {
        $(selector).css({
            'overflow': 'hidden',
            'border-radius': actual.size,
            'border-width': actual.borderWidth,
            'border-color': actual.borderColour,
            'border-style': 'solid',
            'width': actual.size,
            'height': actual.size,
            'background-color': actual.backgroundColour,
        });
    } else if (actual.containerShape == 'square') {
        $(selector).css({
            'overflow': 'hidden',
            'border-width': actual.borderWidth,
            'border-color': actual.borderColour,
            'border-style': 'solid',
            'width': actual.size,
            'height': actual.size,
            'background-color': actual.backgroundColour,
        });
    }

    // construct type
    if (actual.pixelShape == 'square' && actual.pixels == 'many') {
        manySquare(usernameHash);
    } else if (actual.pixelShape == 'square' && actual.pixels == 'few') {
        fewSquare(usernameHash);
    } else if (actual.pixelShape == 'circle' && actual.pixels == 'many') {
        manyCircle(usernameHash);
    } else if (actual.pixelShape == 'circle' && actual.pixels == 'few') {
        fewCircle(usernameHash);
    }

    /**
     * construction of the svg
     * @param {String} usernameHash  - username hashed
     */
    function manySquare(usernameHash) {
        const regexPat = /[02468ace]/g;
        let svgConstruct = '';
        svgConstruct += `<svg version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns: xlink="http://www.w3.org/1999/xlink" 
                        x="0px" 
                        y="0px"
                        viewBox="0 0 50 50" 
                        xml: space="preserve">`;
        let y = 0;
        for (let j = 0; j < 10; j++) {
            let x = 0;
            for (let i = 0; i < 5; i++) {
                let charNo = (j * 5) + i;
                let colour = colourPicker(usernameHash, actual.colour);
                if (regexPat.test(usernameHash[charNo])) {
                    colour = actual.backgroundColour;
                }
                svgConstruct += `<rect 
                x="${x}"
                y="${y}" 
                width="5" 
                height="5" 
                style="fill: ${colour};
                stroke-width:${actual.strokeWidth};
                stroke:${actual.strokeColor};"/>`;
                // mirror
                svgConstruct += `<rect 
                x="${45 - x}"
                y="${y}" 
                width="5" 
                height="5" 
                style="fill: ${colour};
                stroke-width:${actual.strokeWidth};
                stroke:${actual.strokeColor};"/>`;
                x += 5;
            }
        y += 5;
        }
        svgConstruct += `</svg>`;
        $(selector).append(svgConstruct);
    }

    /**
     * construction of the svg
     * @param {String} usernameHash  - username hashed
     */
    function manyCircle(usernameHash) {
        const regexPat = /[02468ace]/g;
        let svgConstruct = '';
        svgConstruct += `<svg version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns: xlink="http://www.w3.org/1999/xlink" 
                        x="0px" 
                        y="0px"
                        viewBox="0 0 50 50" 
                        xml: space="preserve">`;
        let y = 0;
        for (let j = 0; j < 10; j++) {
            let x = 0;
            for (let i = 0; i < 5; i++) {
                let charNo = (j * 5) + i;
                let colour = colourPicker(usernameHash, actual.colour);
                if (regexPat.test(usernameHash[charNo])) {
                    colour = actual.backgroundColour;
                }
                svgConstruct += `<circle 
                cx="${x + 2.5}"
                cy="${y + 2.5}" 
                r="2.5"  
                style="fill: ${colour};
                stroke-width:${actual.strokeWidth};
                stroke:${actual.strokeColor};"/>`;
                // mirror
                svgConstruct += `<circle 
                cx="${45 - x + 2.5}"
                cy="${y + 2.5}" 
                r="2.5"  
                style="fill: ${colour};
                stroke-width:${actual.strokeWidth};
                stroke:${actual.strokeColor};"/>`;
                x += 5;
            }
        y += 5;
        }
        svgConstruct += `</svg>`;
        $(selector).append(svgConstruct);
    }

    /**
     * construction of the svg
     * @param {String} usernameHash  - username hashed
     */
    function fewSquare(usernameHash) {
        const regexPat = /[02468ace]/g;
        let svgConstruct = '';
        svgConstruct += `<svg version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns: xlink="http://www.w3.org/1999/xlink" 
                        x="0px" 
                        y="0px"
                        viewBox="0 0 50 50" 
                        xml: space="preserve">`;
        let y = 0;
        for (let j = 0; j < 5; j++) {
            let x = 0;
            for (let i = 0; i < 3; i++) {
                let charNo = (j * 3) + i;
                let colour = colourPicker(usernameHash, actual.colour);
                if (regexPat.test(usernameHash[charNo])) {
                    colour = actual.backgroundColour;
                }
                svgConstruct += `<rect 
                                x="${x}"
                                y="${y}" 
                                width="10" 
                                height="10" 
                                style="fill: ${colour};
                                stroke-width:${actual.strokeWidth};
                                stroke:${actual.strokeColor};"/>`;
                // mirror
                svgConstruct += `<rect 
                                x="${40 - x}"
                                y="${y}" 
                                width="10" 
                                height="10" 
                                style="fill: ${colour};
                                stroke-width:${actual.strokeWidth};
                                stroke:${actual.strokeColor};"/>`;
                x += 10;
            }
            y += 10;
        }
        svgConstruct += `</svg>`;
        $(selector).append(svgConstruct);
    }

    /**
     * construction of the svg
     * @param {String} usernameHash  - username hashed
     */
    function fewCircle(usernameHash) {
        const regexPat = /[02468ace]/g;
        let svgConstruct = '';
        svgConstruct += `<svg version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns: xlink="http://www.w3.org/1999/xlink" 
                        x="0px" 
                        y="0px"
                        viewBox="0 0 50 50" 
                        xml: space="preserve">`;
        let y = 0;
        for (let j = 0; j < 5; j++) {
            let x = 0;
            for (let i = 0; i < 3; i++) {
                let charNo = (j * 3) + i;
                let colour = colourPicker(usernameHash, actual.colour);
                if (regexPat.test(usernameHash[charNo])) {
                    colour = actual.backgroundColour;
                }
                svgConstruct += `<circle 
                                cx="${x + 5}"
                                cy="${y + 5}" 
                                r="5" 
                                style="fill: ${colour};
                                stroke-width:${actual.strokeWidth};
                                stroke:${actual.strokeColor};"/>`;
                // // mirror
                svgConstruct += `<circle 
                                cx="${40 - x + 5}"
                                cy="${y + 5}" 
                                r="5" 
                                style="fill: ${colour};
                                stroke-width:${actual.strokeWidth};
                                stroke:${actual.strokeColor};"/>`;
                x += 10;
            }
            y += 10;
        }
        svgConstruct += `</svg>`;
        $(selector).append(svgConstruct);
    }

    /**
     * Chooses colour from 16 predefined
     * @param {String} usernameHash - first char of hash to pick colour
     * @param {String} colourOveride - overides random coolour selection
     * @return {String} - returns a hex colour
     */
    function colourPicker(usernameHash, colourOveride) {
        if (colourOveride != 'default') {
            return colourOveride;
        }
        const picker = usernameHash[0];
        switch (picker) {
            case '0':
                return '#1ABC9C';
                break;
            case '1':
                return '#2ECC71';
                break;
            case '2':
                return '#3498DB';
                break;
            case '3':
                return '#9B59B6';
                break;
            case '4':
                return '#34495E';
                break;
            case '5':
                return '#F1C40F';
                break;
            case '6':
                return '#E67E22';
                break;
            case '7':
                return '#E74C3C';
                break;
            case '8':
                return '#16A085';
                break;
            case '9':
                return '#27AE60';
                break;
            case 'a':
                return '#2980B9';
                break;
            case 'b':
                return '#8E44AD';
                break;
            case 'c':
                return '#2C3E50';
                break;
            case 'd':
                return '#F39C12';
                break;
            case 'e':
                return '#D35400';
                break;
            case 'f':
                return '#C0392B';
                break;
            default:
                break;
                return '#C0392B';
        }
    }
};

module.exports = {denticon: denticon};
