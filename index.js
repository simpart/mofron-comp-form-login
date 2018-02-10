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
            if (null === po) {
                this.adom();
            } else {
                this.prmOpt(po);
            }
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
                    require : true
                })
            );
           
            this.addChild(
                new Input({
                    label   : 'Password',
                    require : true,
                    secret  : true
                })
            );
            this.size(this.size());
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
    
    size (siz) {
        try {
            if (undefined === siz) {
                /* getter */
                if (undefined === this.m_size) {
                    this.size(20);
                }
                return this.m_size;
            }
            /* setter */
            if ('number' !== typeof siz) {
                throw new Error('invalid paramter');
            }
            this.m_size = siz;
            
            let chd = this.child();
            for (let cidx in chd) {
                if ( ((this.child().length-1) == cidx) &&
                     (true === mf.func.isObject(chd[cidx], 'Component')) ) {
                    this.submitComp().height(siz-(siz/3));
                } else {
                    chd[cidx].height(siz);
                }
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height () {
        try {
            let hei = 0;
            let buf = null;
            let chd = this.child();
            for (let cidx in chd) {
                if ( (true === mf.func.isInclude(chd[cidx], 'Message')) &&
                     (true !== chd[cidx].visible()) ) {
                    /* noting to do */
                    continue;
                } else if ( ((this.child().length-1) == cidx) &&
                            (true === mf.func.isObject(chd[cidx], 'Component')) ) {
                    hei += this.submitComp().height();
                } else {
                    buf = null;
                    buf = chd[cidx].height();
                    if ('number' === typeof buf) {
                        hei += buf;
                    } 
                }
                hei += this.getConfig('layout', 'Margin').value();
            }
            hei += this.getConfig('layout', 'Margin').value();
            return hei;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.LoginForm;
/* end of file */
