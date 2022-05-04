"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactController {
}
ContactController.Contact = (req, res, next) => {
    res.render('pages/contact', {
        title: 'Contact Us'
    });
};
exports.default = ContactController;
