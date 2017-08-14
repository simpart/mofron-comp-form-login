/**
 * @file mofron-comp-form-login/index.js
 * @author simpart
 */
let Form = require('mofron-comp-form');
require('mofron-comp-input');

/**
 * @class LoginForm
 * @brief login form component for mofron
 */
mofron.comp.LoginForm = class extends Form {
    
    constructor (opt) {
        try {
            super();
            this.name('LoginForm');
            this.prmOpt(opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            let Input = this.theme().component('mofron-comp-input');
            this.child([
                new Input({
                    label   : 'Username',
                    require : true
                }),
                new Input({
                    label   : 'Password',
                    require : true,
                    secret  : true
                })
            ]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addChild (chd, disp, idx) {
        try {
            if (true === mofron.func.isInclude(this, 'LoginForm')) {
                this.initFormComp();
            }
            super.addChild(chd, disp, idx);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
mofron.comp.loginform = {};
module.exports = mofron.comp.LoginForm;
