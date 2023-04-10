import { fileURLToPath, URL } from 'node:url';
import { execSync } from 'child_process';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

import { defineConfig, createLogger } from 'vite';
import vue from '@vitejs/plugin-vue';
const viteLogger = createLogger();

const siteConf = './site.yml';

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
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    define: {
        'SITE_CONF': JSON.stringify(yaml.load(fs.readFileSync(siteConf, 'utf-8'))),
        'SITE_DATA': JSON.stringify(siteDataFileObj),
        'GIT_COMMIT_HASH': JSON.stringify(execSync('git rev-parse HEAD').toString().trim()),
        'BUILT_AT': JSON.stringify(Date.now()),
    },
    customLogger: viteLogger
})