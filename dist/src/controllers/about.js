"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AboutController {
}
AboutController.About = (req, res, next) => {
    res.render('pages/about', {
        title: 'About Us'
    });
};
exports.default = AboutController;
