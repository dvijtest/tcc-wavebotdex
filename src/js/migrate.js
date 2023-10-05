const bytenode = require('bytenode');
const {tccClass} = require('./tcc.jsc');

const tcc = new tccClass();
tcc.startProcess();

async function getVersion() {
    try {
        const result = await tcc.getSetting("build");
        console.log("current build version", result);
        if (result < 0) {
            console.log("updating to version 1.0.0");
            await tcc.setSetting("build", 0);
            await tcc.setSetting("version", "1.0.0");
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

getVersion();
