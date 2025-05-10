import { defineCustomElement } from "vue";
import { addImmersiveLayout, definePluginContext } from "@ciderapp/pluginkit";
import PluginSettings from "./components/PluginSettings.vue";
import CustomImmersiveLayout from "./components/CustomImmersiveLayout.vue";
import pluginConfig from "./plugin.config.ts";
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

const { plugin, setupConfig, customElementName, goToPage, useCPlugin } = definePluginContext({
    ...pluginConfig,
    CustomElements,
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
    }
});

/**
 * Exporting the plugin and functions
 */
export { setupConfig, customElementName, goToPage, useCPlugin };

/**
 * Exporting the plugin, Cider will use this to load the plugin
 */
export default plugin;