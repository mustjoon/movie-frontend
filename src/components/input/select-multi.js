import { useState } from 'react'
import { Field, useFormikContext } from 'formik'
import ArrowUp from '@/components/icons/arrow'

export default function Select({ name, title, options, multiple = false }) {
  const formik = useFormikContext()
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState([])

  const toggleValue = (value) => {
    let newValues = [...values]
    if (values.includes(value)) {
      newValues = values.filter((v) => v !== value)
    } else {
      newValues = [...values, value]
    }
    setValues(newValues)
    formik.setFieldValue(name, newValues)
    setOpen(false)
  }

  const selectedOptions = values.map((val) =>
    options.find((opt) => opt.value === val)
  )

  const notSelectedOptions = options.filter(
    (opt) => !values.includes(opt.value)
  )

  return (
    <div
      className={`form-field px-4 py-3 bg-white border border-greyBorder  relative`}
    >
      <label className="font-bold">{title}</label>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }

          meta,
        }) => (
          <div>
            <div
              aria-label="Select"
              tabIndex="0"
              onClick={() => setOpen(!open)}
              className="w-full h-8 relative cursor-pointer "
            >
              <span className="absolute right-0 pr-2">
                <ArrowUp direction={open ? 'down' : 'up'} />
              </span>
            </div>
            {open && (
              <div className="absolute bg-white w-full py-4 left-0 border z-10 h-64 overflow-auto">
                {notSelectedOptions.length === 0 && (
                  <div className="text-center text-grey">No options</div>
                )}
                {notSelectedOptions.map((option, index) => {
                  return (
                    <div
                      onClick={() => toggleValue(option.value)}
                      className="cursor-pointer font-bold p-4 capitalize text-black hover:bg-slate-200 cursor-pointer"
                      key={index}
                    >
                      {option.label}
                    </div>
                  )
                })}
              </div>
            )}
            <div className="flex flex-wrap w-full min-h-14">
              {selectedOptions.map((option) => {
                return (
                  <div
                    key={option.value}
                    onClick={() => toggleValue(option.value)}
                    className="bg-black m-2 text-white px-4 py-2 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-150"
                  >
                    {option.label}
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </Field>
    </div>
  )
}
