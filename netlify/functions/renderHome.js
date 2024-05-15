// netlify/functions/renderHome.js
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

exports.handler = async (event, context) => {
  try {
    const templatePath = path.resolve(__dirname, '../../views/index.ejs');
    const html = ejs.render(fs.readFileSync(templatePath, 'utf8'), {});

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: html
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to render home page' })
    };
  }
};
