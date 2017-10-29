/**
 * @file mofron-comp-form-login/index.js
 * @author simpart
 */
let Form  = require('mofron-comp-form');
let Input = require('mofron-comp-input');

/**
 * @class LoginForm
 * @brief login form component for mofron
 */
mofron.comp.LoginForm = class extends Form {
    
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
                        text    : 'test',
                        require : true
                })
            );
            this.addChild(
                new Input({
                        label   : 'Password',
                        text    : 'test',
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
                this.input(inp);
            }
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
    
    input (inp) {
        try {
            if (undefined === inp) {
                /* getter */
                if (undefined === this.m_input) {
                    this.input(new Input());
                }
                return this.m_input;
            }
            /* setter */
            if (true !== mf.func.isInclude(inp, 'Input')) {
                throw new Error('invalid parameter');
            }
            let fom_chd = this.child();
            if (0 !== fom_chd.length) {
                for (let fidx in fom_chd) {
                    if (true === mf.func.isInclude(fom_chd[fidx], 'Input')) {
                        inp.execOption(fom_chd[fidx].getOption());
                        fom_chd.updChild(fom_chd[fidx], inp);
                    }
                }
            }
            this.m_input = inp;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.comp.loginform = {};
module.exports = mofron.comp.LoginForm;
