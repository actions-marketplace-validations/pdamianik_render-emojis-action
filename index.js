const core = require('@actions/core');

try {
    let json = core.getInput('json');
    console.log(json);
    json = JSON.parse(json);
    let table = "Emoji | Emoji text\n--- | ---";
    Object.keys(json).forEach(function(key) {
        table += `${key} | \`${key}\`\n`;
    });
    core.setOutput('out', table);
} catch (error) {
    core.setFailed(error.message);
}