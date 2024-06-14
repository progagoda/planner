import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        ...nxE2EPreset(__filename, {
            cypressDir: 'src',
            webServerCommands: { default: 'npx nx run task-manager:dev' },
            ciWebServerCommand: 'nx run task-manager:serve-static',
        }),
        baseUrl: 'http://localhost:3000',
    },
});
