const core = require('@actions/core');

try {
    let json = JSON.parse(core.getInput('json'));
    let table = "Emoji | Emoji text\n--- | ---";
    Object.keys(json).forEach(function(key) {
        table += `${key} | \`${key}\`\n`;
    });
    core.setOutput('out', table);
} catch (error) {
    core.setFailed(error.message);
}