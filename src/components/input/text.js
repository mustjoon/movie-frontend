import { Field } from "formik";

export default function TextField({ name, title, placeholder }) {
  return (
    <div
      className={`form-field px-4 py-3 bg-white border border-greyBorder text-sm  h-full`}
    >
      <label className="text-sm font-bold">{title}</label>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }

          meta,
        }) => (
          <div className="max-w-1/2">
            <input
              className="max-w-1/1"
              type="number"
              {...field}
              placeholder={placeholder}
            />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
      </Field>
    </div>
  );
}
