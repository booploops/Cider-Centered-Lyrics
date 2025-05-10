/**
 * Example for how you may want to setup your configuration.
 */

import { setupConfig } from "./main";

export const cfg = setupConfig({

});

export function useConfig() {
    return cfg.value;
}