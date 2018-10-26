/**
 * @file   mofron-comp-form-login/index.js
 * @brief  login form component for mofron
 * @author simpart
 */
const mf    = require('mofron');
const Form  = require('mofron-comp-form');
const Input = require('mofron-comp-input');

mf.comp.LoginForm = class extends Form {
    /**
     * initialize login form
     *
     * @param p1 (object) component option
     * @param p1 (string) path to uri
     * @param p2 (component) form child component
     */
    constructor (po, p2) {
        try {
            super();
            this.name('LoginForm');
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     *
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
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
            this.submitConts('Login');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.LoginForm;
/* end of file */
