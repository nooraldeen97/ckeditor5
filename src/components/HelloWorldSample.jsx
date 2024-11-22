import { createElement, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
    ClassicEditor,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    Undo,
    StyleEditing,
    ImageUpload,
    AutoImage,
    Image,
    ImageBlockEditing,
    ImageEditing,
    ImageBlock,
    GeneralHtmlSupport,
    Base64UploadAdapter,
    TableToolbar,
    FontColor,
    FontBackgroundColorEditing,
    FontBackgroundColor,
    Font,
    FontFamilyUI,
    FontSize,
    FontSizeEditing,
    FontSizeUI,
    CodeBlock,
    Strikethrough,
    Alignment,
    BlockQuote
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "./style.css";
export function HelloWorldSample({ sampleText, payload, Initial }) {
    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    toolbar: [
                        "undo",
                        "redo",
                        "|",
                        "heading",
                        "|",
                        "fontfamily",
                        "fontsize",
                        "fontColor",
                        "fontBackgroundColor",
                        "|",
                        "bold",
                        "italic",
                        "strikethrough",
                        "subscript",
                        "superscript",
                        "code",
                        "|",
                        "link",
                        "insertTable",
                        "mediaEmbed",
                        "uploadImage",
                        "blockQuote",
                        "codeBlock",
                        "|",
                        "bulletedList",
                        "numberedList",
                        "todoList",
                        "outdent",
                        "indent",
                        "alignment"
                    ],
                    plugins: [
                        Bold,
                        Essentials,
                        Heading,
                        Indent,
                        IndentBlock,
                        Italic,
                        Link,
                        List,
                        MediaEmbed,
                        Paragraph,
                        Table,
                        TableToolbar,
                        Undo,
                        StyleEditing,
                        ImageUpload,
                        AutoImage,
                        Image,
                        ImageBlockEditing,
                        ImageEditing,
                        ImageBlock,
                        GeneralHtmlSupport,
                        Base64UploadAdapter,
                        FontColor,
                        FontBackgroundColorEditing,
                        FontBackgroundColor,
                        Font,
                        FontFamilyUI,
                        FontSize,
                        FontSizeEditing,
                        FontSizeUI,
                        CodeBlock,
                        Strikethrough,
                        BlockQuote,
                        Alignment
                    ],
                    initialData: Initial ? Initial : ""
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    payload.setTextValue(data);
                }}
            />
        </div>
    );
}
