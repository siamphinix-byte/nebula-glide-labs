const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src/pages', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    content = content.replace(/rgba\(48,\s*169,\s*123,/g, 'rgba(187, 246, 0,');
    content = content.replace(/rgba\(48,169,123,/g, 'rgba(187,246,0,');
    
    // Also change dark hover text on white/50 buttons back to normal if it changed unexpectedly? 
    // text-[#131313]/50 was text-white/50
    content = content.replace(/text-\[#131313\]\/50/g, 'text-white/50');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated RGBA ${filePath}`);
    }
  }
});

