import Exporter from './Exporter';
import Document from './Document';

class PdfExporter implements Exporter {
  export(document: Document): void {
    console.log(`Exporting ${document.name} as PDF...`);
  }
}

export default PdfExporter;
