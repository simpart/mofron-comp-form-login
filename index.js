/**
 * @file mofron-comp-form-loginform/index.js
 * @brief login form component for mofron
 * @author simpart
 */
const mf      = require('mofron');
const Form    = require('mofron-comp-form');
const Input   = require('mofron-comp-input');
const HrzCent = require('mofron-layout-hrzcenter');
const Margin  = require('mofron-layout-margin');
const Relatv  = require('mofron-layout-relative');
const Click   = require('mofron-event-click');

mf.comp.LoginForm = class extends Form {
    /**
     * initialize component
     *
     * @param (mixed) form initialize parameter
     *                object: component option
     * @param (prm) form initialize parameter 
     * @type private
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
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.layout(new HrzCent(75));
            /* username input */
            this.addChild(
                new Input({
                    label: 'Username', sendKey: 'username',
                    require: true, height: '0.3rem'
                })
            );
            /* passowrd input */
            this.addChild(
                new Input({
                    label: 'Password', sendKey: 'password',
                    require: true, secret: true, height: '0.3rem'
                })
            );
            /* login button */
            this.submitConts().option({ text: 'Login' });
            
	    /* reset height */
            this.message().closeComp().event(
	        new Click(
		    (p1,p2,p3) => {
                        try { this.height(this.height()); } catch (e) {
                            console.error(e.stack);
	                    throw e;
			}
		    },
		    this
		)
	    );
	    this.marginTop("0.2rem");
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.LoginForm;
/* end of file */
