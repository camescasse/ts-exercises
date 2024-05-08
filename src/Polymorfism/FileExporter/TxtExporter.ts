import Exporter from './Exporter';
import Document from './Document';

class TxtExporter implements Exporter {
  export(document: Document) {
    console.log(`Exporting ${document.name} as Txt...`);
  }
}

export default TxtExporter;
