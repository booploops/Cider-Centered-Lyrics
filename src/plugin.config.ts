import { createId } from "@paralleldrive/cuid2"

export default {
    ce_prefix: createId(),
    identifier: 'dev.booploops.centered-immersive',
    name: 'Butterchurn Visualizer for Cider',
    description: 'Adds a visualizer to the app.',
    version: '0.0.1',
    author: 'booploops',
    repo: 'https://github.com/booploops/Cider-Centered-Lyrics',
    entry: {
        'plugin.js': {
            type: 'main',
        }
    }
}