// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import css from "./NoteForm.module.css";
// import { createNote, type CreateNotePayload } from "../../lib/api";
// import type { NoteTag } from "../../types/note";

// interface NoteFormProps {
//   onCancel: () => void;
// }

// const noteTags: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

// const schema = Yup.object().shape({
//   title: Yup.string()
//     .min(3, "Title must be at least 3 characters")
//     .max(50, "Title must be at most 50 characters")
//     .required("Enter title"),
//   content: Yup.string().max(500, "Content must be less than 500 characters"),
//   tag: Yup.string()
//     .oneOf(noteTags, "Select a valid tag")
//     .required("Select a tag"),
// });

// const NoteForm: React.FC<NoteFormProps> = ({ onCancel }) => {
//   const queryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: createNote,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["notes"] });
//       onCancel();
//     },
//   });
//   return (
//     <Formik
//       initialValues={{ title: "", content: "", tag: "Todo" as NoteTag }}
//       validationSchema={schema}
//       onSubmit={async (values, { resetForm }) => {
//         await mutation.mutateAsync(values as CreateNotePayload);
//         resetForm();
//       }}
//     >
//       {() => (
//         <Form className={css.form}>
//           <label className={css.formGroup}>
//             Title
//             <Field name="title" className={css.input} />
//             <ErrorMessage name="title" component="div" className={css.error} />
//           </label>

//           <label className={css.formGroup}>
//             Content
//             <Field as="textarea" name="content" className={css.textarea} />
//             <ErrorMessage
//               name="content"
//               component="div"
//               className={css.error}
//             />
//           </label>

//           <label className={css.formGroup}>
//             Tag
//             <Field as="select" name="tag" className={css.select}>
//               {noteTags.map((tag) => (
//                 <option
//                   key={tag}
//                   value={tag}
//                   className={css[`tag_${tag.toLowerCase()}`]}
//                 >
//                   {tag}
//                 </option>
//               ))}
//             </Field>
//             <ErrorMessage name="tag" component="div" className={css.error} />
//           </label>

//           <div className={css.actions}>
//             <button
//               type="button"
//               onClick={onCancel}
//               className={css.cancelButton}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={mutation.isPending}
//               className={css.submitButton}
//             >
//               Create
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default NoteForm;

"use client";
import { useRouter } from "next/navigation";
import { useNoteStore } from "@/lib/store/noteStore";
import { useState, useEffect } from "react";

export default function NoteForm() {
  const router = useRouter();
  const { draft, setDraft, clearDraft } = useNoteStore();

  const [form, setForm] = useState(draft);

  useEffect(() => {
    setForm(draft);
  }, [draft]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setDraft({ [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // створення нотатки через API
    await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    clearDraft();
    router.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Content"
      />
      <select name="tag" value={form.tag} onChange={handleChange}>
        <option value="Todo">Todo</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <div>
        <button type="submit">Save note</button>
        <button type="button" onClick={() => router.back()}>
          Cancel
        </button>
      </div>
    </form>
  );
}
