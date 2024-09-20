const fs = require('fs');
const path = require('path');

// Funktsioon kaustade loomiseks
const createDirectory = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Kaust loodud: ${dirPath}`);
  }
};

// Funktsioon failide loomiseks
const createFile = (filePath, content = '') => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Fail loodud: ${filePath}`);
  }
};

// Kaustade loomiseks
const directories = [
  'components/portfolio',
  'hooks',
  'app',
  'public/images',
  'services',
  'utils',
];

directories.forEach(createDirectory);

// Failide loomiseks
const files = [
  'components/portfolio/project-card.jsx',
  'components/portfolio/project-list.jsx',
  'hooks/useFetchProjects.js',
  'app/page.js',
  'public/images/logo.png',
  'public/images/project1.jpg',
  'public/images/project2.jpg',
  'services/projectService.js',
  'utils/formatDate.js',
  'utils/calculateDuration.js',
];

files.forEach((file) => createFile(file));

// Ajutise esilehe faili sisu
const indexContent = `
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leht on loomisel</title>
      </Head>
      <main>
        <h1>Leht on loomisel</h1>
      </main>
    </div>
  );
}
`;

createFile('app/page.js', indexContent);

console.log('Kaustad ja failid on loodud ning ajutine esilehe fail on lisatud.');