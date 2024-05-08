import Exporter from './Exporter';
import Document from './Document';

class DocxExporter implements Exporter {
  export(document: Document): void {
    console.log(`Exporting ${document.name} as Docx...`);
  }
}

export default DocxExporter;
