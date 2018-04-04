const denticon = require('./denticon');

denticon.denticon('#default1', 'sam');
denticon.denticon('#default2', 'james');
denticon.denticon('#default3', 'penman');
denticon.denticon('#default4', 'sedge');
denticon.denticon('#default5', 'jason');
denticon.denticon('#default6', 'harry');
denticon.denticon('#default7', 'bez');
denticon.denticon('#default8', 'joe');

let options = {
    pixels: 'many',
};
denticon.denticon('#squareMany1', 'tonyd', options);
denticon.denticon('#squareMany2', 'james', options);
denticon.denticon('#squareMany3', 'penman', options);
denticon.denticon('#squareMany4', 'sedge', options);
denticon.denticon('#squareMany5', 'jason', options);
denticon.denticon('#squareMany6', 'harry', options);
denticon.denticon('#squareMany7', 'bez', options);
denticon.denticon('#squareMany8', 'joe', options);

let options2 = {
    pixels: 'few',
    pixelShape: 'circle',
};
denticon.denticon('#circleFew1', 'tonyd', options2);
denticon.denticon('#circleFew2', 'james', options2);
denticon.denticon('#circleFew3', 'penman', options2);
denticon.denticon('#circleFew4', 'sedge', options2);
denticon.denticon('#circleFew5', 'jason', options2);
denticon.denticon('#circleFew6', 'harry', options2);
denticon.denticon('#circleFew7', 'bez', options2);
denticon.denticon('#circleFew8', 'joe', options2);

let options3 = {
    pixels: 'many',
    pixelShape: 'circle',
};
denticon.denticon('#circleMany1', 'tonyd', options3);
denticon.denticon('#circleMany2', 'james', options3);
denticon.denticon('#circleMany3', 'penman', options3);
denticon.denticon('#circleMany4', 'sedge', options3);
denticon.denticon('#circleMany5', 'jason', options3);
denticon.denticon('#circleMany6', 'harry', options3);
denticon.denticon('#circleMany7', 'bez', options3);
denticon.denticon('#circleMany8', 'joe', options3);

let options4 = {
    containerShape: 'circle',
};
let options5 = {
    containerShape: 'rounded',
};
let options6 = {
    containerShape: 'square',
};

denticon.denticon('#containerShape1', 'tonyd', options5);
denticon.denticon('#containerShape2', 'james', options5);
denticon.denticon('#containerShape3', 'penman', options5);
denticon.denticon('#containerShape4', 'sedge', options4);
denticon.denticon('#containerShape5', 'jason', options4);
denticon.denticon('#containerShape6', 'harry', options4);
denticon.denticon('#containerShape7', 'bez', options6);
denticon.denticon('#containerShape8', 'joe', options6);

let options7 = {
    size: 20,
};
let options8 = {
    size: 30,
};
let options9 = {
    size: 40,
};
let options10 = {
    size: 50,
};

denticon.denticon('#size1', 'tonyd', options7);
denticon.denticon('#size2', 'james', options8);
denticon.denticon('#size3', 'penman', options9);
denticon.denticon('#size4', 'sedge', options10);
denticon.denticon('#size5', 'jason', options10);
denticon.denticon('#size6', 'harry', options9);
denticon.denticon('#size7', 'bez', options8);
denticon.denticon('#size8', 'joe', options7);

