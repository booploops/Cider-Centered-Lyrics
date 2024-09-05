import { defineCustomElement } from "./CustomElement/apiCustomElement";
import { PluginAPI } from "./api/PluginAPI";
import { customElementName } from "./utils";
import config from './plugin.config.ts'
import PluginSettings from "./components/PluginSettings.vue";
import { addImmersiveLayout } from "./api/ImmersiveLayout.ts";
import CustomImmersiveLayout from "./components/CustomImmersiveLayout.vue";

/**
 * Custom Elements that will be registered in the app
 */
export const CustomElements
    = {
    'plugin-settings':
        defineCustomElement(PluginSettings, {
            shadowRoot: false,
        }),
    'immersive-layout': defineCustomElement(CustomImmersiveLayout, {
        shadowRoot: false,
    })
}

export default {
    name: 'Centered Immersive Lyrics',
    identifier: config.identifier,
    /**
     * Defining our custom settings panel element
     */
    SettingsElement: customElementName('plugin-settings'),
    /**
     * Initial setup function that is executed when the plugin is loaded
     */
    setup() {
        for (const [key, value] of Object.entries(CustomElements)) {
            const _key = key as keyof typeof CustomElements;
            customElements.define(customElementName(_key), value)
        }
        addImmersiveLayout({
            name: "Centered Lyrics",
            identifier: "booploops-centered-lyrics",
            component: customElementName('immersive-layout'),
            type: 'normal',
        })
    },
} as PluginAPI
