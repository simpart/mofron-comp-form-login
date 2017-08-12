/**
 * @file mofron-comp-form-login/index.js
 * @author simpart
 */
require('mofron-comp-form');
require('mofron-comp-input');

/**
 * @class Login
 * @brief login form component for mofron
 */
mofron.comp.form.Login = class extends mofron.comp.Form {
    
    constructor (opt) {
        try {
            super();
            this.name('Login');
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
            if (true === mofron.func.isInclude(this, ['Form', 'Login'])) {
                if (0 === this.layout().length) {
                    /* set default layout */
                    this.layout([
                        new mofron.layout.Margin('top', 25),
                        new mofron.layout.HrzCenter({ rate : 70 })
                    ]);
                }
                
                if (false === this.m_setbtn) {
                    this.m_setbtn = true;
                    let sub       = this.submitComp();
                    super.addChild(sub.parent().parent());
                }
                
                if (false === this.m_setmsg) {
                    this.m_setmsg = true;
                    super.addChild(this.message(), false, 0);
                }
            }
            super.addChild(chd, disp, (undefined === idx) ? this.child().length-1 : idx);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

}
mofron.comp.form.login = {};
module.exports = mofron.comp.form.Login;
