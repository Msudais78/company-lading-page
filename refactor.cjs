const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).map(f => path.join(componentsDir, f));
files.push(path.join(__dirname, 'src', 'App.jsx'));

const mappings = {
  'bg-black': 'bg-primary-bg',
  'text-white': 'text-primary-text',
  'text-black': 'text-primary-bg',
  'bg-white': 'bg-primary-text',
  'bg-zinc-950': 'bg-primary-card',
  'bg-zinc-900': 'bg-primary-card-hover',
  'text-zinc-400': 'text-primary-muted',
  'text-zinc-300': 'text-primary-muted',
  'text-zinc-500': 'text-primary-faint',
  'border-zinc-900': 'border-primary-border',
  'border-zinc-800': 'border-primary-border-muted',
  'border-zinc-700': 'border-primary-border-muted',
  'border-zinc-600': 'border-primary-border-hover',
  'border-white': 'border-primary-text',
  'border-black': 'border-primary-bg',
};

files.forEach(file => {
  if (!file.endsWith('.jsx')) return;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We sort mappings by length descending to prevent partial replacements (e.g. border-zinc-900 vs border-zinc-90)
  const sortedMappings = Object.entries(mappings).sort((a, b) => b[0].length - a[0].length);

  sortedMappings.forEach(([from, to]) => {
    // Replace exact word matches inside strings/classNames using a word boundary regex
    // We add negative lookahead to prevent matching things like bg-black/50, unless we want to map those too.
    // Wait, in Tailwind, `bg-black/80` is a class. If we replace `bg-black`, it becomes `bg-primary-bg/80`, which is valid in Tailwind v4!
    const regex = new RegExp(`(?<!-)\\b${from}\\b(?!-)`, 'g');
    content = content.replace(regex, to);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Refactored ${file}`);
  }
});
