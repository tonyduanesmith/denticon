const $ = require('jquery');
const hash = require('hash.js');
/**
 * main denticon creator function
 * @param {String} selector - jquery selector where to place
 * @param {String} username - username used to create the denticon
 * @param {Object} options - specific options for denticon
 */
function denticon(selector, username, options) {
    // defaults
    let defaults = {
        colour: 'default',
        pixels: 'many',
    };
    let actual = Object.assign({}, defaults, options);
    console.log(actual.colour);
    console.log('Building Denticon...');
    //  hash username
    const usernameHash = hash.sha256().update(username).digest('hex');
    console.log(usernameHash);
    // construct
    svgConstruct(usernameHash);


    /**
     * construction of the svg
     * @param {String} usernameHash  - username hashed
     * @param {String} colour - passed hex colour
     */
    function svgConstruct(usernameHash) {
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
                                        colour = '#ffffff';
                                    }
                                    svgConstruct += `<rect 
                                    x="${x}"
                                    y="${y}" 
                                    width="5" 
                                    height="5" 
                                    style="fill: ${colour};"/>`;
                                    // mirror
                                    svgConstruct += `<rect 
                                    x="${45 - x}"
                                    y="${y}" 
                                    width="5" 
                                    height="5" 
                                    style="fill: ${colour};"/>`;
                                    x += 5;
                                }
                            y += 5;
                          }


        svgConstruct += `</svg>`;

        $(selector).append(svgConstruct);
    }

    /**
     * Chooses colour from 16 predefined
     * @param {String} usernameHash - first char of hash to pick colour
     * @param {String} colourOveride - overides random coolour selection with user selected colour
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
