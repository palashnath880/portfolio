"use client";

import React from "react";
import SectionHead from "./SectionHead";
import { Document, Page, PDFViewer, Text } from "@react-pdf/renderer";

export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-5">
        <SectionHead title="Resume" subtitle="A Snapshot of My Journey" />

        {/* render resume */}
        {/* <Document>
          <Page size="A4">
            <Text>Hello World</Text>
          </Page>
        </Document> */}
      </div>
    </section>
  );
}
