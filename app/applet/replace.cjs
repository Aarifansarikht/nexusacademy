const fs = require('fs');
const path = require('path');

function replaceInFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      replaceInFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace thick black borders with softer blue borders
      content = content.replace(/border-4 border-foreground/g, 'border-2 border-primary/30');
      content = content.replace(/border-2 border-foreground/g, 'border border-primary/30');
      content = content.replace(/border border-foreground/g, 'border border-primary/20');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

replaceInFiles('./app');
replaceInFiles('./components');
console.log('Replacements completed.');
