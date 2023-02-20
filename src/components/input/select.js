import { useState } from 'react'
import { Field, useFormikContext } from 'formik'
import ArrowUp from '@/components/icons/arrow'

export default function Select({ name, title, options, multiple = false }) {
  const formik = useFormikContext()
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])

  const val = formik.values[name]

  let selectText = ''
  if (val) {
    selectText = options.find((opt) => opt.value === val).label
  }

  return (
    <div className={`p-4 bg-white border border-greyBorder  relative`}>
      <label className="font-bold">{title}</label>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors, setFieldValue, submitForm, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <div>
            <div
              onClick={() => setOpen(!open)}
              tabIndex="0"
              className="w-full h-8 cursor-pointer relative "
            >
              <span className="absolute right-0">
                <ArrowUp direction={open ? 'down' : 'up'} />
              </span>
              <div className="flex flex-wrap">{selectText}</div>
            </div>
            {open && (
              <div className="absolute bg-white w-full py-4 left-0 border z-10 h-64 overflow-auto">
                {options.length === 0 && (
                  <div className="text-center text-grey">No options</div>
                )}
                {options.map((option, index) => {
                  return (
                    <div
                      onClick={() => {
                        setFieldValue(name, option.value)
                        setOpen(false)
                      }}
                      className="cursor-pointer font-bold p-4 capitalize text-black hover:bg-slate-200 cursor-pointer"
                      key={index}
                    >
                      {option.label}
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </Field>
    </div>
  )
}
