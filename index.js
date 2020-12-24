/**
 * @file mofron-comp-form-loginform/index.js
 * @brief login form component for mofron
 * @author simpart
 */
const Form    = require('mofron-comp-form');
const Input   = require('mofron-comp-input');
const HrzCent = require('mofron-layout-hrzcenter');
const Margin  = require('mofron-layout-margin');
const Relatv  = require('mofron-layout-relative');
const Click   = require('mofron-event-click');
const ConfArg = mofron.class.ConfArg;

module.exports = class extends Form {
    /**
     * initialize component
     *
     * @param (mixed) form initialize parameter
     *                object: component option
     * @param (prm) form initialize parameter 
     * @type private
     */
    constructor (p1,p2) {
        try {
            super();
            this.name('LoginForm');
	    this.shortForm('uri');
            
	    if (0 < arguments.length) {
                this.config(p1,p2);
            }
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
            this.layout([
	        new HrzCent(75),
		new Margin('top','0.2rem')
            ]);

	    /* add input form */
            this.child([
                new Input({
		    label:'Username', sendKey:'username', required:true, size:new ConfArg('100%','0.3rem')
		}),
		new Input({
		    label:'Password', sendKey:'password', required:true, secret:true, size:new ConfArg('100%','0.3rem')
		})
            ]);
            /* login button */
            this.submitComp().config({ text: 'Login' });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * component spacing size setter/getter
     * 
     * @param (string (size)) spacing size
     * @return (string (size)) spacing size
     * @type parameter
     */
    spacingSize (prm) {
        try {
            return this.layout({ modname: "Margin" }).value(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
