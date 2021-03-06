
import { __XCOMPONENT__ } from '../constants';

export function globalFor(win) {

    if (!win[__XCOMPONENT__]) {
        win[__XCOMPONENT__] = {};
    }

    return win[__XCOMPONENT__];
}

export let global = globalFor(window);