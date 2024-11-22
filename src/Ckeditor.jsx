import { createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Ckeditor.css";

export function Ckeditor({ sampleText, payload, Initial }) {
    return <HelloWorldSample sampleText={sampleText} payload={payload} Initial={Initial} />;
}
