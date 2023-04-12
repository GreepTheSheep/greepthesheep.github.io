import { fileURLToPath, URL } from 'node:url';
import { execSync } from 'child_process';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa'

import { defineConfig, createLogger } from 'vite';
import vue from '@vitejs/plugin-vue';
const viteLogger = createLogger();

const siteConfFile = './site.yml',
    siteConf = yaml.load(fs.readFileSync(siteConfFile, 'utf-8'));

viteLogger.info("Site configuration loaded and parsed: " + JSON.stringify(siteConf, null, 2), {timestamp: true});

const siteDataDir = './_data/';
let siteDataFileObj = {};

viteLogger.info("Checking files on " + siteDataDir, {timestamp: true});
fs.readdirSync(siteDataDir, 'utf-8').forEach(siteDataFilename=>{
    const isYamlFile = siteDataFilename.match(/\.y[a]*ml$/gi) !== null;
    if (!isYamlFile) return viteLogger.warn("File " + siteDataFilename + " is an incorrect file type", {timestamp: true});
    let siteDataFilePath = path.join(siteDataDir, siteDataFilename);
    let ymlData = yaml.load(fs.readFileSync(siteDataFilePath, 'utf8'));
    let splittedFilename = siteDataFilename.slice(0, siteDataFilename.lastIndexOf("."));
    siteDataFileObj[splittedFilename] = ymlData;
});

viteLogger.info("Data loaded and parsed: " + JSON.stringify(siteDataFileObj, null, 2), {timestamp: true});

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VitePWA({
            registerType: 'autoUpdate',
            devOptions: {
                enabled: process.env.NODE_ENV == "development"
            },
            manifest: {
                ...siteConf,
				short_name: siteConf.name,
				start_url: '.',
				display: 'standalone',
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    define: {
        'SITE_CONF': JSON.stringify(siteConf),
        'SITE_DATA': JSON.stringify(siteDataFileObj),
        'GIT_COMMIT_HASH': JSON.stringify(execSync('git rev-parse HEAD').toString().trim()),
        'BUILT_AT': JSON.stringify(Date.now()),
    },
    customLogger: viteLogger
})