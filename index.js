/**
 * @file mofron-comp-form-login/index.js
 * @author simpart
 */
let mf = require('mofron');
let Form  = require('mofron-comp-form');
let Input = require('mofron-comp-input');
/**
 * @class LoginForm
 * @brief login form component for mofron
 */
mf.comp.LoginForm = class extends Form {
    constructor (po) {
        try {
            super();
            this.name('LoginForm');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            this.addChild(
                new Input({
                    label   : 'Username',
                    sendKey : 'username',
                    require : true
                })
            );
           
            this.addChild(
                new Input({
                    label   : 'Password',
                    sendKey : 'password',
                    require : true,
                    secret  : true
                })
            );
            
            this.submitComp().text('Login');
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            let inp = this.theme().component('mofron-comp-input');
            if (null !== inp) {
                //this.input(inp);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.LoginForm;
/* end of file */
