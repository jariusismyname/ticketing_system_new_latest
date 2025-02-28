const fs = require('fs');
const path = require('path');

function replaceImports(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      replaceImports(fullPath); // Recursive para buong project hanapin
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');

      if (content.includes("react-router-dom")) {
        content = content.replace(/react-router\/dom/g, "react-router-dom");
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`✅ Fixed: ${fullPath}`);
      }
    }
  });
}

replaceImports('./');
console.log("🎯 All imports fixed!");
