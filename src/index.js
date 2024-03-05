const fs = require('fs');
const { PDFDocument, rgb } = require('pdf-lib');

async function generatePDF() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);

  page.drawText('Hello, World!', {
    x: 50,
    y: 350,
    size: 30,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

module.exports = { generatePDF };
