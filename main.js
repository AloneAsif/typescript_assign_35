"use strict";
// Question no 37 T-shirt (differnet sizes of shirz with messages..)
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'i reallly love typescript..');
