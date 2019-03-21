/**
 * @file   mofron-comp-form-loginform/index.js
 * @brief  login form component for mofron
 * @author simpart
 */
const mf      = require('mofron');
const Form    = require('mofron-comp-form');
const Input   = require('mofron-comp-input');
const HrzCent = require('mofron-layout-hrzcenter');
const Margin  = require('mofron-layout-margin');
const Relatv  = require('mofron-layout-relative');

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
            this.layout([
                new HrzCent(75),
                new Margin({ type: 'top', value: '0.2rem', tag: 'LoginForm' })
            ]);
            
            this.addChild(
                new Input({
                    label: 'Username', sendKey: 'username', require: true, height: '0.33rem'
                })
            );
           
            this.addChild(
                new Input({
                    label: 'Password', sendKey: 'password', require: true, secret: true, height: '0.33rem'
                })
            );
            
            this.submitConts().option({ text: 'Login', sizeValue: ['margin-top', '0.2rem'] });

            this.height('1.2rem');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * send post
     * change height when send was error
     */
    send (prm) {
        try {
            let msg = this.message().visible();
            super.send(prm);
            let hei = null;
            if (true === this.message().visible()) {
                if (true === msg) { 
                    return;
                }
                hei = mf.func.sizeSum(
                          this.height(),
                          this.message().height(),
                          this.layout(['Margin', 'LoginForm']).value()
                      );
            } else {
                if (false === msg) {
                    return;
                }
                hei = mf.func.sizeDiff(
                          this.height(),
                          this.message().height(), 
                          this.layout(['Margin', 'LoginForm']).value()
                      );
            }
            this.height(hei);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.LoginForm;
/* end of file */
