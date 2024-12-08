const json = [
  { h1: 'JSON To Markdown' },
  { blockquote: 'A JSON to Markdown converter.' },
  {
    img: [
      { title: 'Some image', source: 'https://example.com/some-image.png' },
      { title: 'Another image', source: 'https://example.com/some-image1.png' },
      {
        title: 'Yet another image',
        source: 'https://example.com/some-image2.png',
      },
    ],
  },
  { h2: 'Features' },
  {
    ul: [
      'Easy to use',
      'You can programmatically generate Markdown content',
      '...',
    ],
  },
  { h2: 'How to contribute' },
  { ol: ['Fork the project', 'Create your branch', 'Raise a pull request'] },
  { h2: 'Code blocks' },
  { p: 'Below you can see a code block example.' },
  {
    code: {
      language: 'js',
      content: ['function sum (a, b) {', '   return a + b', '}', 'sum(1, 2)'],
    },
  },
  { json: [{ h1: 'JSON To Markdown' }] },
];

const json2md = (json) => {
  let output = '';
  for (const line of json) {
    if (line?.h1) {
      output += `# ${line.h1}\n\n`;
    }
    if (line?.blockquote) {
      output += `> ${line.blockquote}\n\n`;
    }
    if (line?.img) {
      if (Array.isArray(line.img)) {
        for (const imgElement of line.img) {
          output += `![${imgElement?.title}](${imgElement?.source})\n\n`;
        }
      }
    }
    if (line?.h2) {
      output += `## ${line.h2}\n\n`;
    }
    if (line?.ul) {
      if (Array.isArray(line.ul)) {
        for (const ulElement of line.ul) {
          output += `- ${ulElement}\n`;
        }
        output += '\n';
      }
    }
    if (line?.ol) {
      if (Array.isArray(line.ol)) {
        let count = 1;
        for (const olElement of line.ol) {
          output += `${count}. ${olElement}\n`;
          count++;
        }
        output += '\n';
      }
    }
    if (line?.p) {
      output += `${line.p}\n\n`;
    }
    if (line?.code) {
      output += `\`\`\`${line.code.language}\n`;
      if (Array.isArray(line.code.content)) {
        for (const codeLine of line.code.content) {
          output += `${codeLine}\n`;
        }
        output += '```\n';
      }
    }
    if (line?.json) {
      output += json2md(line?.json);
    }
  }
  return output;
};

console.log(json2md(json));
