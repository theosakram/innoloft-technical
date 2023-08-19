'use client';

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ProductEditPage = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return (
    <div>
      <h1>Product Edit</h1>
      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
};

export default ProductEditPage;
