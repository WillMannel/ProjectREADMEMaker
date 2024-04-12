// app.js
function generateReadme() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const installation = document.getElementById('installation').value;
    const usage = document.getElementById('usage').value;
    const contributing = document.getElementById('contributing').value;
    const license = document.getElementById('license').value;

    let readme = `# ${title}\n\n`;
    readme += `## Description\n${description}\n\n`;
    readme += `## Installation\n\`\`\`\n${installation}\n\`\`\`\n\n`;
    readme += `## Usage\n${usage}\n\n`;
    readme += `## Contributing\n${contributing}\n\n`;
    readme += `## License\n${license}\n`;

    document.getElementById('preview').textContent = readme;
}
