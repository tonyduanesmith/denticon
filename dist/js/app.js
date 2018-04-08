'use strict';

denticon('#default1', 'sam');
denticon('#default2', 'james');
denticon('#default3', 'penman');
denticon('#default4', 'sedge');
denticon('#default5', 'jason');
denticon('#default6', 'harry');
denticon('#default7', 'bez');
denticon('#default8', 'joe');

var options = {
    pixels: 'many',
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
denticon('#squareMany1', 'tonyd', options);
denticon('#squareMany2', 'james', options);
denticon('#squareMany3', 'penman', options);
denticon('#squareMany4', 'sedge', options);
denticon('#squareMany5', 'jason', options);
denticon('#squareMany6', 'harry', options);
denticon('#squareMany7', 'bez', options);
denticon('#squareMany8', 'joe', options);

var options2 = {
    pixels: 'few',
    pixelShape: 'circle',
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
denticon('#circleFew1', 'tonyd', options2);
denticon('#circleFew2', 'james', options2);
denticon('#circleFew3', 'penman', options2);
denticon('#circleFew4', 'sedge', options2);
denticon('#circleFew5', 'jason', options2);
denticon('#circleFew6', 'harry', options2);
denticon('#circleFew7', 'bez', options2);
denticon('#circleFew8', 'joe', options2);

var options3 = {
    pixels: 'many',
    pixelShape: 'circle',
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
denticon('#circleMany1', 'tonyd', options3);
denticon('#circleMany2', 'james', options3);
denticon('#circleMany3', 'penman', options3);
denticon('#circleMany4', 'sedge', options3);
denticon('#circleMany5', 'jason', options3);
denticon('#circleMany6', 'harry', options3);
denticon('#circleMany7', 'bez', options3);
denticon('#circleMany8', 'joe', options3);

var options4 = {
    containerShape: 'circle',
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
var options5 = {
    containerShape: 'rounded',
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
var options6 = {
    containerShape: 'square',
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};

denticon('#containerShape1', 'tonyd', options5);
denticon('#containerShape2', 'james', options5);
denticon('#containerShape3', 'penman', options5);
denticon('#containerShape4', 'sedge', options4);
denticon('#containerShape5', 'jason', options4);
denticon('#containerShape6', 'harry', options4);
denticon('#containerShape7', 'bez', options6);
denticon('#containerShape8', 'joe', options6);

var options7 = {
    size: 25,
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
var options8 = {
    size: 45,
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
var options9 = {
    size: 60,
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};
var options10 = {
    size: 70,
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};

denticon('#size1', 'tonyd', options7);
denticon('#size2', 'james', options8);
denticon('#size3', 'penman', options9);
denticon('#size4', 'sedge', options10);
denticon('#size5', 'jason', options10);
denticon('#size6', 'harry', options9);
denticon('#size7', 'bez', options8);
denticon('#size8', 'joe', options7);

var headerDenticonOptions = {
    size: 55,
    borderColour: '#eeeeee',
    backgroundColour: '#eeeeee'
};

denticon('#headerDenticon', 'denticon', headerDenticonOptions);