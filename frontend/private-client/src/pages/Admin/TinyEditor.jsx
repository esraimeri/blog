import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";

function TinyEditor({ value, onChange }) {
  return (
    <Editor
      apiKey="ec7xdwe6a8wgii2bc1l0fp2nrbmrwduc94kkemwn6dtq9brt"
      value={value}
      onEditorChange={onChange}
      init={{
        plugins: [
          "anchor",
          "autolink",
          "charmap",
          "codesample",
          "emoticons",
          "image",
          "link",
          "lists",
          "media",
          "searchreplace",
          "table",
          "visualblocks",
          "wordcount",
        ],
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        exportpdf_converter_options: {
          format: "Letter",
          margin_top: "1in",
          margin_right: "1in",
          margin_bottom: "1in",
          margin_left: "1in",
        },
        exportword_converter_options: {
          document: { size: "Letter" },
        },
        importword_converter_options: {
          formatting: {
            styles: "inline",
            resets: "inline",
            defaults: "inline",
          },
        },
      }}
    />
  );
}

TinyEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TinyEditor;
