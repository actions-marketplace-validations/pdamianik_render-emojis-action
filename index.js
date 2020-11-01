import { getInput, setOutput, setFailed } from '@actions/core';

try {
    let json = JSON.parse(getInput('json'));
    let table = "Emoji | Emoji text\n--- | ---";
    Object.keys(json).forEach(function(key) {
        table += `${key} | \`${key}\`\n`;
    });
    setOutput('out', table);
} catch (error) {
    setFailed(error.message);
}