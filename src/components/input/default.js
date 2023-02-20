import { Field } from "formik";

export default function DefaultField({
  name,
  title,
  placeholder,
  type = "text",
  ...rest
}) {
  return (
    <div
      className={`form-field px-4 py-3 bg-white border border-greyBorder   h-full`}
    >
      <label className="font-bold">{title}</label>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <div className="w-full">
            <input
              className="w-full p-1"
              type={type}
              {...field}
              placeholder={placeholder}
              {...rest}
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
