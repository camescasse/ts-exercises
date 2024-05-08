import Document from './Document';

interface Exporter {
  export(document: Document): void;
}

export default Exporter;
